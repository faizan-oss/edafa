import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { serviceFaqs, serviceNext, services } from "../content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const faqs = slug ? serviceFaqs[slug] : undefined;
  const others = (slug ? serviceNext[slug] : [])
    .map((nextSlug) => services.find((item) => item.slug === nextSlug))
    .filter((item) => item !== undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} · idaafa`;
    }
  }, [service]);

  return (
    <>
      <Header />
      <main className="service-page">
        <div className="container">
          <Link to="/services" className="back-link">
            ← All services
          </Link>

          {service ? (
            <article>
              <p className="section-label">Service {service.number}</p>
              <h1>{service.title}</h1>
              <p className="service-page-line">{service.line}</p>
              <p className="service-page-body">{service.body}</p>

              {service.groups.map((group) => (
                <section key={group.heading} className="service-group">
                  <h2>{group.heading}</h2>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}

              {"note" in service && service.note ? (
                <p className="service-note">{service.note}</p>
              ) : null}
              {"footer" in service && service.footer ? (
                <p className="service-footer-line">{service.footer}</p>
              ) : null}

              {faqs ? (
                <section className="service-faq" aria-labelledby="faq-heading">
                  <h2 id="faq-heading">Questions</h2>
                  <div className="faq-list">
                    {faqs.map((item) => (
                      <details key={item.question} className="faq-item">
                        <summary>{item.question}</summary>
                        <p>{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              {others.length > 0 ? (
                <section className="service-others" aria-labelledby="others-heading">
                  <h2 id="others-heading">Not this one?</h2>
                  <div className="hub-grid">
                    {others.map((other) => (
                      <Link key={other.slug} to={`/services/${other.slug}`} className="hub-card">
                        <span className="door-tag">{other.number}</span>
                        <h3>{other.title}</h3>
                        <p>{other.line}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}

              <Link to={`/?path=${service.path}#contact`} className="btn btn-primary btn-lg">
                {service.cta}
              </Link>
            </article>
          ) : (
            <>
              <h1>That service isn&apos;t here.</h1>
              <p className="service-page-body">The four ways in are on the services page.</p>
              <Link to="/services" className="btn btn-primary btn-lg">
                All services
              </Link>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
