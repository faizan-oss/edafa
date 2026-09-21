import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "frontend", "dist");
const target = path.join(root, "backend", "public");

if (!fs.existsSync(source)) {
  console.error(`Frontend build missing at ${source}. Run the frontend build first.`);
  process.exit(1);
}

fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true });
console.info(`Copied frontend/dist → backend/public`);
