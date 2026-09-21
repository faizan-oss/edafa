import { whoWeAre } from "../content";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

function FounderLine({ text }: { text: string }) {
  const parts = text.split("&");
  if (parts.length < 2) {
    return <>{text}</>;
  }

  return (
    <>
      {parts[0]}
      <span className="who-amp">&</span>
      {parts.slice(1).join("&")}
    </>
  );
}

export function WhoWeAre() {
  return (
    <section id="who" className="who-we-are" aria-labelledby="who-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">{whoWeAre.section}</p>
        </Reveal>

        <div className="who-grid">
          <Reveal>
            <div className="who-copy">
              <h2 id="who-heading" className="section-heading who-heading">
                {whoWeAre.heading.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
              <p className="who-body">{whoWeAre.body}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <TiltCard as="aside" className="who-card" maxTilt={7}>
              <p className="who-founder">
                <FounderLine text={whoWeAre.founderLine} />
              </p>
              <p className="who-detail">{whoWeAre.detail}</p>
              <p className="who-arabic">{whoWeAre.arabic}</p>
              <span className="who-mark" aria-hidden>
                +
              </span>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
