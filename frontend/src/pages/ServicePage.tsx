import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <Header />
      <main className="service-page">
        <div className="container">
          <Link to="/#doors" className="back-link">
            ← All services
          </Link>

          {service ? (
            <article>
              <p className="section-label">+ Service {service.number}</p>
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

              <Link to={`/?path=${service.path}#contact`} className="btn btn-primary btn-lg">
                {service.cta}
              </Link>
            </article>
          ) : (
            <>
              <h1>That service isn't here.</h1>
              <p className="service-page-body">
                The four ways in are on the services section of the home page.
              </p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
