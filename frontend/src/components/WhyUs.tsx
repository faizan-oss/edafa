import { whyUs } from "../content";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function WhyUs() {
  return (
    <section id="why" className="why-us" aria-labelledby="why-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">{whyUs.section}</p>
          <h2 id="why-heading" className="section-heading">
            {whyUs.heading.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="why-us-intro">{whyUs.intro}</p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="why-list">
            {whyUs.items.map((item) => (
              <TiltCard key={item.title} as="li" className="why-item" maxTilt={6}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </TiltCard>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
