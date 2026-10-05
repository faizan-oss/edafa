import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navLinks, site } from "../content";
import { SectionLink } from "./SectionLink";

const menuLinks = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "Services", href: "/services" },
  { number: "03", label: "Before you hire us", href: "/#before" },
] as const;

function isMenuActive(href: string, pathname: string, hash: string) {
  if (href === "/services") {
    return pathname.startsWith("/services");
  }

  if (href === "/#before") {
    return pathname === "/" && hash === "#before";
  }

  return pathname === "/" && hash !== "#before";
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
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

        <SectionLink href="/#contact" className="btn btn-primary btn-lg header-cta">
          {site.headerCta}
        </SectionLink>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-toggle-mark" aria-hidden>
            <span className="menu-line" />
            <span className="menu-line is-accent" />
          </span>
        </button>
      </header>

      {open ? (
        <div id="mobile-menu" className="menu-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            ×
          </button>

          <nav aria-label="Mobile">
            <ol className="menu-list">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <SectionLink
                    href={link.href}
                    className={isMenuActive(link.href, pathname, hash) ? "is-active" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="menu-index">{link.number}</span>
                    <span className="menu-label">{link.label}</span>
                  </SectionLink>
                </li>
              ))}
            </ol>
          </nav>

          <div className="menu-contact">
            <p className="menu-contact-label">Get in touch</p>
            <a className="menu-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="menu-whatsapp" href={site.whatsapp} target="_blank" rel="noopener">
              WhatsApp
            </a>
            <SectionLink href="/#contact" className="btn btn-primary btn-lg" onClick={() => setOpen(false)}>
              Tell us the idea
            </SectionLink>
          </div>
        </div>
      ) : null}
    </>
  );
}
