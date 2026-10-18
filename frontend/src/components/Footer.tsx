import { Link } from "react-router-dom";
import { footerExplore, site } from "../content";
import { SectionLink } from "./SectionLink";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <span className="sig">
              <img
                src="/brand/idaafa-logo-on-dark.svg"
                alt={site.name}
                width={110}
                height={36}
                decoding="async"
              />
            </span>
            <p>{site.tagline}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {footerExplore.map((link) => (
                <li key={link.label}>
                  {link.href.includes("#") ? (
                    <SectionLink href={link.href}>{link.label}</SectionLink>
                  ) : (
                    <Link to={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Reach us</h4>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener"
                  onClick={() => window.plausible?.("whatsapp_click")}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copy">
          idaafa.com · © {site.year}
        </p>
      </div>
    </footer>
  );
}
