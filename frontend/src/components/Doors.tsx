import { Link } from "react-router-dom";
import { doors, type PathChoice } from "../content";
import { Reveal } from "./Reveal";

type DoorsProps = {
  activePath: PathChoice | null;
};

export function Doors({ activePath }: DoorsProps) {
  return (
    <section id="doors" className="doors" aria-labelledby="doors-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">{doors.section}</p>
          <h2 id="doors-heading" className="section-heading">
            {doors.heading}
          </h2>
        </Reveal>

        <div className="door-cards">
          <Reveal delay={80}>
            <Link
              to="/services/validate-first"
              className={`door-card ${activePath === "validate" ? "is-active" : ""}`}
            >
              <span className="door-tag">{doors.validate.tag}</span>
              <h3>{doors.validate.title}</h3>
              <p className="door-line">{doors.validate.line}</p>
              <ul>
                {doors.validate.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="door-footer">{doors.validate.footer}</p>
              <span className="path-cta">{doors.validate.cta}</span>
            </Link>
          </Reveal>

          <Reveal delay={140}>
            <Link
              id="build-door"
              to="/services/build-now"
              className={`door-card ${activePath === "build" ? "is-active" : ""}`}
            >
              <span className="door-tag">{doors.build.tag}</span>
              <h3>{doors.build.title}</h3>
              <p className="door-line">{doors.build.line}</p>
              <ul>
                {doors.build.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="door-footer">{doors.build.footer}</p>
              <span className="path-cta">{doors.build.cta}</span>
            </Link>
          </Reveal>
        </div>

        <div className="door-shorts">
          <Reveal delay={80}>
            <Link to="/services/fix-whats-broken" className="door-short">
              <span className="door-tag">{doors.fix.tag}</span>
              <h3>{doors.fix.title}</h3>
              <p>{doors.fix.line}</p>
              <span className="path-cta">{doors.fix.link}</span>
            </Link>
          </Reveal>
          <Reveal delay={160}>
            <Link to="/services/keep-it-running" className="door-short">
              <span className="door-tag">{doors.keep.tag}</span>
              <h3>{doors.keep.title}</h3>
              <p>{doors.keep.line}</p>
              <span className="path-cta">{doors.keep.link}</span>
            </Link>
          </Reveal>
        </div>

        <p className="doors-closing">{doors.closing}</p>
      </div>
    </section>
  );
}
