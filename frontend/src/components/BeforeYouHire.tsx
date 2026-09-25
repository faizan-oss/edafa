import { beforeYouHire } from "../content";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

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
            <TiltCard as="article" className="before-col" maxTilt={6}>
              <h3>{beforeYouHire.forYou.title}</h3>
              <ul>
                {beforeYouHire.forYou.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
          <Reveal delay={80}>
            <TiltCard as="article" className="before-col is-skip" maxTilt={6}>
              <h3>{beforeYouHire.skip.title}</h3>
              <ul>
                {beforeYouHire.skip.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
