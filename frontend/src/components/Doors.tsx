import { Link } from "react-router-dom";
import { doors, serviceImages, type PathChoice } from "../content";
import { Reveal } from "./Reveal";
import { ServiceStack } from "./ServiceStack";

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

        <ServiceStack>
          <div className="service-stack-item">
            <Link
              to="/services/validate-first"
              className={`door-card service-row ${activePath === "validate" ? "is-active" : ""}`}
            >
              <div className="service-card-copy">
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
              </div>
              <img
                className="service-card-image"
                src={serviceImages.validate.src}
                alt={serviceImages.validate.alt}
                width={serviceImages.validate.width}
                height={serviceImages.validate.height}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          <div className="service-stack-item">
            <Link
              id="build-door"
              to="/services/build-now"
              className={`door-card service-row ${activePath === "build" ? "is-active" : ""}`}
            >
              <div className="service-card-copy">
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
              </div>
              <img
                className="service-card-image"
                src={serviceImages.build.src}
                alt={serviceImages.build.alt}
                width={serviceImages.build.width}
                height={serviceImages.build.height}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          <div className="service-stack-item">
            <Link to="/services/fix-whats-broken" className="door-short service-row">
              <div className="service-card-copy">
                <span className="door-tag">{doors.fix.tag}</span>
                <h3>{doors.fix.title}</h3>
                <p>{doors.fix.line}</p>
                <span className="path-cta">{doors.fix.link}</span>
              </div>
              <img
                className="service-card-image"
                src={serviceImages.fix.src}
                alt={serviceImages.fix.alt}
                width={serviceImages.fix.width}
                height={serviceImages.fix.height}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          <div className="service-stack-item">
            <Link to="/services/keep-it-running" className="door-short service-row">
              <div className="service-card-copy">
                <span className="door-tag">{doors.keep.tag}</span>
                <h3>{doors.keep.title}</h3>
                <p>{doors.keep.line}</p>
                <span className="path-cta">{doors.keep.link}</span>
              </div>
              <img
                className="service-card-image"
                src={serviceImages.keep.src}
                alt={serviceImages.keep.alt}
                width={serviceImages.keep.width}
                height={serviceImages.keep.height}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
        </ServiceStack>

        <p className="doors-closing">{doors.closing}</p>
      </div>
    </section>
  );
}
