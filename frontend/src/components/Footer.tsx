import { navLinks, site } from "../content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p className="footer-tagline">
            {site.founders} · {site.tagline}
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-links">
            {navLinks
              .filter((link) => link.href.startsWith("#"))
              .map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy</a>
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
