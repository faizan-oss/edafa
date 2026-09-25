import { Link } from "react-router-dom";
import { doors, type PathChoice } from "../content";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

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
            <TiltCard
              as="article"
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
              <Link to="/services/validate-first" className="path-cta">
                {doors.validate.cta}
              </Link>
            </TiltCard>
          </Reveal>

          <Reveal delay={140}>
            <div id="build-door">
              <TiltCard
                as="article"
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
              <Link to="/services/build-now" className="path-cta">
                {doors.build.cta}
              </Link>
              </TiltCard>
            </div>
          </Reveal>
        </div>

        <div className="door-shorts">
          <TiltCard as="article" className="door-short" maxTilt={6}>
            <span className="door-tag">{doors.fix.tag}</span>
            <h3>{doors.fix.title}</h3>
            <p>{doors.fix.line}</p>
            <Link to="/services/fix-whats-broken">{doors.fix.link}</Link>
          </TiltCard>
          <TiltCard as="article" className="door-short" maxTilt={6}>
            <span className="door-tag">{doors.keep.tag}</span>
            <h3>{doors.keep.title}</h3>
            <p>{doors.keep.line}</p>
            <Link to="/services/keep-it-running">{doors.keep.link}</Link>
          </TiltCard>
        </div>

        <p className="doors-closing">{doors.closing}</p>
      </div>
    </section>
  );
}
