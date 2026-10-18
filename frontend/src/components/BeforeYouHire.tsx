import { Link } from "react-router-dom";
import { beforeYouHire } from "../content";
import { VerdictGlyph } from "./VerdictGlyph";

export function BeforeYouHire() {
  return (
    <section className="sec byhu" id="before" aria-labelledby="before-heading">
      <div className="wrap byhu-grid">
        <div>
          <span className="tag">{beforeYouHire.section}</span>
          <h2 id="before-heading">{beforeYouHire.heading}</h2>
          <p className="intro">{beforeYouHire.intro}</p>
          <p className="skiplabel">{beforeYouHire.skip.title}</p>
          <ul className="skiplist">
            {beforeYouHire.skip.items.map((item) => (
              <li key={item}>
                <VerdictGlyph as="i" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="readcard">
          <h3>{beforeYouHire.readCard.title}</h3>
          <p className="lede">{beforeYouHire.readCard.lede}</p>
          <ol>
            {beforeYouHire.readCard.links.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>
                  <span className="n">{link.number}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ol>
          <Link
            className="fitcta"
            to={beforeYouHire.readCard.fit.href}
            onClick={() => window.plausible?.("fit_check_click")}
          >
            <VerdictGlyph as="i" />
            <div>
              <b>{beforeYouHire.readCard.fit.title}</b>
              <span>{beforeYouHire.readCard.fit.sub}</span>
            </div>
          </Link>
        </aside>
      </div>
    </section>
  );
}
