import { Link } from "react-router-dom";
import { navLinks, site } from "../content";
import { SectionLink } from "./SectionLink";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p className="footer-tagline">{site.tagline}</p>
        </div>

        <div>
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-links">
            {navLinks
              .filter((link) => link.href !== "/privacy")
              .map((link) => (
                <li key={link.label}>
                  <SectionLink href={link.href}>{link.label}</SectionLink>
                </li>
              ))}
            <li>
              <SectionLink href="/#contact">Contact</SectionLink>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Reach us</h4>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        idaafa.com · © {site.year}
      </div>
    </footer>
  );
}
