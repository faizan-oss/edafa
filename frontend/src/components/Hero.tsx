import { hero } from "../content";
import { Reveal } from "./Reveal";

type HeroProps = {
  onTellUs: () => void;
  onSkipToBuild: () => void;
};

export function Hero({ onTellUs, onSkipToBuild }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <Reveal>
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="display-heading">
            {hero.headline}
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={onTellUs}>
              {hero.primaryCta}
            </button>
            <button type="button" className="btn btn-secondary btn-lg" onClick={onSkipToBuild}>
              {hero.secondaryCta}
            </button>
          </div>
        </Reveal>
      </div>

      <div className="hero-scroll" aria-hidden>
        <span>Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
