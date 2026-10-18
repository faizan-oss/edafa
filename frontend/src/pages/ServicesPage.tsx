import { Link } from "react-router-dom";
import { doors, serviceHub, serviceImages, services } from "../content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ServicePicture } from "../components/ServicePicture";
import { ServiceStack } from "../components/ServiceStack";

const doorCopy = {
  validate: doors.validate,
  build: doors.build,
  fix: doors.fix,
  keep: doors.keep,
} as const;

export function ServicesPage() {
  return (
    <>
      <Header />
      <main className="service-page services-hub">
        <div className="container">
          <p className="section-label">{serviceHub.label}</p>
          <h1>{serviceHub.heading}</h1>

          <ServiceStack>
            {services.map((service) => {
              const door = doorCopy[service.path];
              const image = serviceImages[service.path];
              return (
                <div key={service.slug} className="service-stack-item">
                  <Link to={`/services/${service.slug}`} className="hub-card service-row">
                    <div className="service-card-copy">
                      <span className="door-tag">
                        {service.number} {door.tag}
                      </span>
                      <h2>{service.title}</h2>
                      <p>{door.line}</p>
                      <span className="path-cta">See how that works</span>
                    </div>
                    <div className="service-card-image">
                      <ServicePicture
                        image={image}
                        sizes="(max-width: 767px) 92vw, 420px"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </ServiceStack>

          <section className="hub-which" aria-labelledby="which-heading">
            <h2 id="which-heading">{serviceHub.whichHeading}</h2>
            <p>{serviceHub.whichBody}</p>
            <Link to="/?path=not-sure#contact" className="btn btn-primary btn-lg">
              {serviceHub.cta}
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
