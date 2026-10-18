import { Link } from "react-router-dom";
import { beforeYouHirePage } from "../byhuContent";
import { site } from "../content";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionLink } from "../components/SectionLink";
import { ByhuProgress } from "../components/byhu/ByhuProgress";
import { ByhuIndex } from "../components/byhu/ByhuIndex";
import { HandoverReceipt } from "../components/byhu/HandoverReceipt";
import { FitCheck } from "../components/byhu/FitCheck";
import { ClauseFaq } from "../components/byhu/ClauseFaq";
import "../styles/byhu.css";

const c = beforeYouHirePage;

export function BeforeYouHirePage() {
  return (
    <div className="byhu-page">
      <Header />
      <ByhuProgress />

      <main>
        <section className="byhu-hero wrap">
          <h1>{c.hero.headline}</h1>
          <p className="byhu-hero-sub">{c.hero.sub}</p>
          <div className="byhu-hero-meta">
            <span>{c.hero.meta}</span>
            <a href="#fit">{c.hero.fitLink}</a>
          </div>
        </section>

        <div className="wrap byhu-doc">
          <ByhuIndex items={c.index} />

          <div className="byhu-clauses">
            <section className="byhu-clause" id={c.howWeWork.id}>
              <div className="byhu-ch">
                <span className="n">{c.howWeWork.number}</span>
                <h2>{c.howWeWork.title}</h2>
              </div>
              <p className="byhu-lede">{c.howWeWork.lede}</p>
              <div className="byhu-pairs">
                {c.howWeWork.pairs.map((pair) => (
                  <div key={pair.title}>
                    <h3>{pair.title}</h3>
                    <p>{pair.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CONFIRM: Clause 02 — accounts in client name before real work; NDA before sensitive share; agreement assigns all work to client. Internal: IP assignment with everyone who writes code must be signed first. */}
            <section className="byhu-clause" id={c.whatsYours.id}>
              <div className="byhu-ch">
                <span className="n">{c.whatsYours.number}</span>
                <h2>{c.whatsYours.title}</h2>
              </div>
              <p className="byhu-lede">{c.whatsYours.lede}</p>
              <div className="byhu-own">
                <div className="byhu-rules">
                  {c.whatsYours.rules.map((rule) => (
                    <div key={rule.title}>
                      <h3>{rule.title}</h3>
                      <p>{rule.body}</p>
                    </div>
                  ))}
                </div>
                <HandoverReceipt receipt={c.whatsYours.receipt} />
              </div>
            </section>

            {/* CONFIRM: Clause 03 — every change reviewed before live; tests on money/stock; checkout, failed payments, refunds checked by hand; separate test/live; backups and monitoring from first release; written handover. */}
            <section className="byhu-clause" id={c.howWeBuild.id}>
              <div className="byhu-ch">
                <span className="n">{c.howWeBuild.number}</span>
                <h2>{c.howWeBuild.title}</h2>
              </div>
              <p className="byhu-lede">{c.howWeBuild.lede}</p>
              <ul className="byhu-plain">
                {c.howWeBuild.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="byhu-lanes">
                {c.howWeBuild.lanes.map((lane) => (
                  <div className="byhu-lane" key={lane.title}>
                    <h3>{lane.title}</h3>
                    <div className="byhu-chips">
                      {lane.chips.map((chip) => (
                        <span className="byhu-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="byhu-aside">
                <b>{c.howWeBuild.asideLabel}</b> {c.howWeBuild.aside}
              </p>
            </section>

            {/* CONFIRM: Clause 04 — the six security practices as listed (NDA, least access, secrets out of code, test/live split, payment verify, access removed at end). */}
            <section className="byhu-clause" id={c.keepingSafe.id}>
              <div className="byhu-ch">
                <span className="n">{c.keepingSafe.number}</span>
                <h2>{c.keepingSafe.title}</h2>
              </div>
              <p className="byhu-lede">{c.keepingSafe.lede}</p>
              <ul className="byhu-plain">
                {c.keepingSafe.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="byhu-honest">
                <span className="x" aria-hidden>
                  ×
                </span>
                <p>
                  <b>{c.keepingSafe.honestBold}</b> {c.keepingSafe.honest}
                </p>
              </div>
            </section>

            {/* CONFIRM: Clause 05 — length of the "fixes on us" period. Page says "an agreed period"; decide the default before shipping. */}
            <section className="byhu-clause" id={c.afterLaunch.id}>
              <div className="byhu-ch">
                <span className="n">{c.afterLaunch.number}</span>
                <h2>{c.afterLaunch.title}</h2>
              </div>
              <p className="byhu-lede">{c.afterLaunch.lede}</p>
              <div className="byhu-track">
                {c.afterLaunch.stops.map((stop) => (
                  <div className="byhu-stop" key={stop.title}>
                    <i aria-hidden />
                    <h3>{stop.title}</h3>
                    <p>{stop.body}</p>
                  </div>
                ))}
              </div>
              <p className="byhu-forklabel">{c.afterLaunch.forkLabel}</p>
              <div className="byhu-fork">
                {c.afterLaunch.paths.map((path) => (
                  <div
                    className={`byhu-path${"alt" in path && path.alt ? " is-alt" : ""}`}
                    key={path.title}
                  >
                    <h3>{path.title}</h3>
                    <p>{path.body}</p>
                    {path.link ? (
                      <Link to={path.link.href}>{path.link.label}</Link>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="byhu-closer">{c.afterLaunch.closer}</p>
            </section>

            <section className="byhu-clause" id={c.fitCheck.id}>
              <FitCheck copy={c.fitCheck} />
            </section>

            <section className="byhu-clause" id={c.hireSomeoneElse.id}>
              <div className="byhu-ch">
                <span className="n">{c.hireSomeoneElse.number}</span>
                <h2>{c.hireSomeoneElse.title}</h2>
              </div>
              <p className="byhu-lede">{c.hireSomeoneElse.lede}</p>
              <div className="byhu-skip">
                {c.hireSomeoneElse.items.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CONFIRM: Clause 08 — "Reply within two working days." Change the number if needed. */}
            <section className="byhu-clause" id={c.yourSide.id}>
              <div className="byhu-ch">
                <span className="n">{c.yourSide.number}</span>
                <h2>{c.yourSide.title}</h2>
              </div>
              <p className="byhu-lede">{c.yourSide.lede}</p>
              <div className="byhu-agree">
                <div className="byhu-agree-row byhu-agree-head">
                  <div>{c.yourSide.weLabel}</div>
                  <div>{c.yourSide.youLabel}</div>
                </div>
                {c.yourSide.rows.map((row) => (
                  <div className="byhu-agree-row" key={row.we}>
                    <div>{row.we}</div>
                    <div>{row.you}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="byhu-clause" id={c.whatWeDont.id}>
              <div className="byhu-ch">
                <span className="n">{c.whatWeDont.number}</span>
                <h2>{c.whatWeDont.title}</h2>
              </div>
              <p className="byhu-lede">{c.whatWeDont.lede}</p>
              <ul className="byhu-nope">
                {c.whatWeDont.items.map((item) => (
                  <li key={item.what}>
                    {item.what}
                    <span>{item.who}</span>
                  </li>
                ))}
              </ul>
            </section>

            <ClauseFaq copy={c.questions} />
          </div>
        </div>

        <section className="byhu-cta wrap" id="cta">
          <h2>{c.cta.heading}</h2>
          <p>{c.cta.sub}</p>
          <div className="byhu-cta-row">
            <SectionLink href={c.cta.primaryHref} className="byhu-btn">
              {c.cta.primary}
            </SectionLink>
            <a
              className="byhu-link"
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
            >
              {c.cta.secondary}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
