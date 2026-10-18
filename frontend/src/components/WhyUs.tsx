import { whyUs } from "../content";
import { VerdictGlyph } from "./VerdictGlyph";

function Equation({ line }: { line: string }) {
  let seenEquals = false;
  const parts = line.split(/(\+|=)/g);

  return parts.map((part, index) => {
    if (part === "=") {
      seenEquals = true;
      return (
        <span key={index} className="op">
          {part}
        </span>
      );
    }
    if (part === "+") {
      return (
        <span key={index} className="op">
          {part}
        </span>
      );
    }
    const trimmed = part.trim();
    if (!trimmed) {
      return <span key={index}>{part}</span>;
    }
    return (
      <span key={index} className={seenEquals ? "res" : "term"}>
        {trimmed}
      </span>
    );
  });
}

export function WhyUs() {
  return (
    <section className="sec why" id="why" aria-labelledby="why-heading">
      <div className="wrap">
        <div className="why-grid">
          <VerdictGlyph state="drop" />
          <div>
            <span className="tag">{whyUs.section}</span>
            <h2 id="why-heading">{whyUs.heading}</h2>
            <p>{whyUs.body}</p>
          </div>
        </div>
        <div className="eq" role="img" aria-label={whyUs.equationLabel}>
          <Equation line={whyUs.equation} />
        </div>
      </div>
    </section>
  );
}
