import { twoPaths } from "../content";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

type TwoPathsProps = {
  activePath: "validate" | "build" | "not-sure" | null;
  onPathSelect: (path: "validate" | "build") => void;
};

function renderEquation(line: string) {
  const parts = line.split(/(\+|=)/g);
  return parts.map((part, index) => {
    if (part === "+" || part === "=") {
      return (
        <span key={index} className={part === "=" ? "equals" : "plus"}>
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function TwoPaths({ activePath, onPathSelect }: TwoPathsProps) {
  return (
    <section id="paths" className="two-paths" aria-labelledby="paths-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">{twoPaths.section}</p>
          <h2 id="paths-heading" className="section-heading">
            {twoPaths.heading.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="two-paths-intro">{twoPaths.intro}</p>
        </Reveal>

        <div className="path-cards">
          <Reveal delay={80}>
            <TiltCard
              as="article"
              className={`path-card ${activePath === "validate" ? "is-active" : ""}`}
              onClick={() => onPathSelect("validate")}
            >
              <div className="path-card-header">
                <span className="path-card-number">{twoPaths.validate.number}</span>
                <span className="path-card-tag">{twoPaths.validate.tag}</span>
              </div>
              <h3 className="path-card-title">{twoPaths.validate.title}</h3>
              <p className="path-card-tagline">{twoPaths.validate.tagline}</p>
              <p className="path-card-body">{twoPaths.validate.body}</p>
              <div className="path-card-details">
                {twoPaths.validate.equations.map((equation) => (
                  <p key={equation} className="path-equation">
                    {renderEquation(equation)}
                  </p>
                ))}
                <button
                  type="button"
                  className="path-cta"
                  onClick={(event) => {
                    event.stopPropagation();
                    onPathSelect("validate");
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {twoPaths.validate.cta}
                </button>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={160}>
            <TiltCard
              as="article"
              className={`path-card ${activePath === "build" ? "is-active" : ""}`}
              onClick={() => onPathSelect("build")}
            >
              <div className="path-card-header">
                <span className="path-card-number">{twoPaths.build.number}</span>
                <span className="path-card-tag">{twoPaths.build.tag}</span>
              </div>
              <h3 className="path-card-title">{twoPaths.build.title}</h3>
              <p className="path-card-tagline">{twoPaths.build.tagline}</p>
              <p className="path-card-body">{twoPaths.build.body}</p>
              <div className="path-card-details">
                <ul className="path-points">
                  {twoPaths.build.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="path-cta"
                  onClick={(event) => {
                    event.stopPropagation();
                    onPathSelect("build");
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {twoPaths.build.cta}
                </button>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
