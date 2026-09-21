import { site, navLinks } from "../content";

export function Header() {
  return (
    <header className="site-header">
      <a href="/" className="logo" aria-label={`${site.name} — home`}>
        {site.name}
        <span className="logo-plus">+</span>
      </a>

      <nav className="site-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="btn btn-primary btn-lg">
        Start a conversation
      </a>
    </header>
  );
}
