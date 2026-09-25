import { whyUs } from "../content";
import { Reveal } from "./Reveal";

function Equation({ line }: { line: string }) {
  let seenEquals = false;
  const parts = line.split(/(\+|=)/g);
  return parts.map((part, index) => {
    if (part === "=") {
      seenEquals = true;
      return (
        <span key={index} className="equals">
          {part}
        </span>
      );
    }
    if (part === "+") {
      return (
        <span key={index} className="plus">
          {part}
        </span>
      );
    }
    return (
      <span key={index} className={seenEquals && part.trim() ? "result" : undefined}>
        {part}
      </span>
    );
  });
}

export function WhyUs() {
  return (
    <section id="why" className="why-us" aria-labelledby="why-heading">
      <div className="container why-copy">
        <Reveal>
          <p className="section-label">{whyUs.section}</p>
          <h2 id="why-heading" className="section-heading">
            {whyUs.heading}
          </h2>
          <p className="why-us-intro">{whyUs.body}</p>
          <p className="why-equation">{<Equation line={whyUs.equation} />}</p>
        </Reveal>
      </div>
    </section>
  );
}
