import { hero } from "../content";
import { Reveal } from "./Reveal";

type HeroProps = {
  onPathSelect: (path: "validate" | "build") => void;
};

export function Hero({ onPathSelect }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <Reveal>
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="display-heading">
            Know if people
            <br />
            actually want it
            <br />
            — before you <span className="hero-accent">build it.</span>
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <p className="hero-founder">{hero.founderLine}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => onPathSelect("validate")}>
              {hero.primaryCta}
            </button>
            <button type="button" className="btn btn-secondary btn-lg" onClick={() => onPathSelect("build")}>
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
