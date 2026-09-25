import { whoWeAre } from "../content";
import { Reveal } from "./Reveal";

export function WhoWeAre() {
  return (
    <section id="who" className="who-we-are" aria-labelledby="who-heading">
      <div className="container who-copy">
        <Reveal>
          <p className="section-label">{whoWeAre.section}</p>
          <h2 id="who-heading" className="section-heading who-heading">
            {whoWeAre.heading}
          </h2>
          <p className="who-body">{whoWeAre.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
