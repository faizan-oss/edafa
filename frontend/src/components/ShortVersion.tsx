import { shortVersion } from "../content";
import { Reveal } from "./Reveal";

export function ShortVersion() {
  return (
    <section className="short-version" aria-labelledby="short-version-heading">
      <div className="container">
        <Reveal>
          <p className="short-version-label">{shortVersion.label}</p>
          <h2 id="short-version-heading" className="section-heading short-version-heading">
            Most studios sell certainty.
            <br />
            We sell <em>evidence</em> — then build
            <br />
            on top of it.
          </h2>
          <p className="short-version-body">{shortVersion.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
