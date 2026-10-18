/**
 * Renders edge-to-edge plus favicons at 96 and 192 using pure SVG → PNG via resvg if available,
 * otherwise writes SVG masters and copies existing PNGs with a note.
 */
import { writeFileSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "frontend", "public");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192">
  <rect width="192" height="192" fill="#1B0E21"/>
  <rect x="24" y="80" width="88" height="32" rx="6" fill="#F4EEF2"/>
  <rect x="80" y="24" width="32" height="144" rx="6" fill="#F4EEF2"/>
  <rect x="112" y="80" width="56" height="32" rx="6" fill="#E9A23C"/>
</svg>`;

writeFileSync(join(root, "favicon.svg"), svg);
writeFileSync(join(root, "icon-edge-192.svg"), svg);

const svg96 = svg.replace(/192/g, "96").replace(/x="24"/, 'x="12"').replace(/y="80"/, 'y="40"')
  .replace(/width="88"/, 'width="44"').replace(/height="32"/, 'height="16"')
  .replace(/x="80"/, 'x="40"').replace(/y="24"/, 'y="12"').replace(/width="32"/, 'width="16"')
  .replace(/height="144"/, 'height="72"').replace(/x="112"/, 'x="56"').replace(/width="56"/, 'width="28"')
  .replace(/rx="6"/g, 'rx="3"');

// Keep geometry proportional via viewBox scale instead of manual rewrite
const svg96Clean = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="96" height="96">
  <rect width="192" height="192" fill="#1B0E21"/>
  <rect x="24" y="80" width="88" height="32" rx="6" fill="#F4EEF2"/>
  <rect x="80" y="24" width="32" height="144" rx="6" fill="#F4EEF2"/>
  <rect x="112" y="80" width="56" height="32" rx="6" fill="#E9A23C"/>
</svg>`;
writeFileSync(join(root, "icon-edge-96.svg"), svg96Clean);

// Try npx @resvg/resvg-js one-liner via dynamic import after install
async function main() {
  try {
    const { Resvg } = await import("@resvg/resvg-js");
    for (const size of [96, 192]) {
      const resvg = new Resvg(svg, { fitTo: { mode: "width", value: size } });
      const png = resvg.render().asPng();
      writeFileSync(join(root, `icon-${size}.png`), png);
      console.info(`Wrote icon-${size}.png`);
    }
    // Also refresh apple-touch and maskable-ish 192
    copyFileSync(join(root, "icon-192.png"), join(root, "apple-touch-icon.png"));
  } catch {
    console.warn("@resvg/resvg-js not available; SVG masters written. Installing…");
    const install = spawnSync("npm", ["install", "-D", "@resvg/resvg-js", "--no-save"], {
      cwd: join(root, "..", ".."),
      shell: true,
      encoding: "utf8",
    });
    if (install.status !== 0) {
      console.error(install.stderr || install.stdout);
      // Fallback: keep existing PNGs; SVG is the primary favicon
      if (!existsSync(join(root, "icon-192.png"))) {
        console.error("No icon-192.png fallback");
        process.exit(1);
      }
      console.warn("Using existing PNG icons; browsers will prefer favicon.svg");
      return;
    }
    const { Resvg } = await import("@resvg/resvg-js");
    for (const size of [96, 192]) {
      const resvg = new Resvg(svg, { fitTo: { mode: "width", value: size } });
      writeFileSync(join(root, `icon-${size}.png`), resvg.render().asPng());
      console.info(`Wrote icon-${size}.png`);
    }
    copyFileSync(join(root, "icon-192.png"), join(root, "apple-touch-icon.png"));
  }
}

main();
