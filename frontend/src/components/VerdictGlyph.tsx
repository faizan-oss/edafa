import type { CSSProperties } from "react";

export type GlyphState = "build" | "change" | "drop" | "none";

type VerdictGlyphProps = {
  state?: GlyphState | "";
  className?: string;
  size?: string | number;
  as?: "div" | "span" | "i";
};

/**
 * Shared plus glyph. CSS var `--g` sets size.
 * States: build (plus), change (22.5°), drop (45° cross), none (idle hairline).
 * Rotation respects prefers-reduced-motion via landing.css.
 */
export function VerdictGlyph({
  state = "build",
  className = "",
  size,
  as: Tag = "div",
}: VerdictGlyphProps) {
  let dataV: "change" | "drop" | "none" | undefined;
  if (state === "change" || state === "drop" || state === "none") {
    dataV = state;
  }

  const style =
    size !== undefined
      ? ({
          "--g": typeof size === "number" ? `${size}px` : size,
        } as CSSProperties)
      : undefined;

  return (
    <Tag
      className={["glyph", className].filter(Boolean).join(" ")}
      data-v={dataV}
      aria-hidden="true"
      style={style}
    />
  );
}
