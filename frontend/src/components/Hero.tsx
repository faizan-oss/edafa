import { useEffect, useState } from "react";
import { hero } from "../content";
import { VerdictGlyph, type GlyphState } from "./VerdictGlyph";

type HeroProps = {
  onTellUs: () => void;
  onSkipToBuild: () => void;
};

type ActiveVerdict = GlyphState | "all";

export function Hero({ onTellUs, onSkipToBuild }: HeroProps) {
  const [active, setActive] = useState<ActiveVerdict>("all");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive("all");
      return;
    }

    const timers = [
      window.setTimeout(() => setActive("build"), 500),
      window.setTimeout(() => setActive("change"), 1500),
      window.setTimeout(() => setActive("drop"), 2500),
      window.setTimeout(() => setActive("all"), 3600),
    ];

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, []);

  const heroGlyph: GlyphState | "" =
    active === "all" || active === "build" ? "build" : active;

  return (
    <section className="wrap hero" aria-labelledby="hero-heading">
      <div>
        <span className="tag">{hero.eyebrow}</span>
        <h1 id="hero-heading">{hero.headline}</h1>
        <p className="sub">{hero.sub}</p>
        <div className="ctas">
          <button type="button" className="btn" onClick={onTellUs}>
            {hero.primaryCta}
          </button>
          <button type="button" className="btn ghost" onClick={onSkipToBuild}>
            {hero.secondaryCta}
          </button>
        </div>
        <div className="scrollcue" aria-hidden>
          <i />
          Scroll
        </div>
      </div>

      <div
        className="machine"
        aria-label={hero.machineLabel}
        onMouseLeave={() => setActive("all")}
      >
        <VerdictGlyph state={heroGlyph} />
        <ul className="verdicts">
          {hero.verdicts.map((verdict) => {
            const on = active === "all" || active === verdict.key;
            return (
              <li key={verdict.key}>
                <button
                  type="button"
                  className={on ? "on" : undefined}
                  data-v={verdict.key}
                  onMouseEnter={() => setActive(verdict.key)}
                  onFocus={() => setActive(verdict.key)}
                  onClick={() => setActive(verdict.key)}
                >
                  {verdict.label}
                  <VerdictGlyph as="i" state={verdict.key} className="mini" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
