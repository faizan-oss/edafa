import { site, navLinks } from "../content";
import { SectionLink } from "./SectionLink";

export function Header() {
  return (
    <header className="site-header">
      <SectionLink href="/" className="logo" aria-label={`${site.name} — home`}>
        <span className="logo-plus">+</span>
        {site.name}
      </SectionLink>

      <nav className="site-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <SectionLink key={link.label} href={link.href}>
            {link.label}
          </SectionLink>
        ))}
      </nav>

      <SectionLink href="/#contact" className="btn btn-primary btn-lg">
        {site.headerCta}
      </SectionLink>
    </header>
  );
}
