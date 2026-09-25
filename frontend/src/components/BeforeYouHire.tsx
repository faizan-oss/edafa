import { beforeYouHire } from "../content";
import { Reveal } from "./Reveal";

export function BeforeYouHire() {
  return (
    <section id="before" className="before" aria-labelledby="before-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">{beforeYouHire.section}</p>
          <h2 id="before-heading" className="section-heading">
            {beforeYouHire.heading}
          </h2>
          <p className="before-intro">{beforeYouHire.intro}</p>
        </Reveal>

        <div className="before-grid">
          <Reveal>
            <article className="before-col">
              <h3>{beforeYouHire.forYou.title}</h3>
              <ul>
                {beforeYouHire.forYou.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="before-col is-skip">
              <h3>{beforeYouHire.skip.title}</h3>
              <ul>
                {beforeYouHire.skip.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
