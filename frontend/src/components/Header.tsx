import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../content";
import { SectionLink } from "./SectionLink";

const menuLinks = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "Services", href: "/services" },
  { number: "03", label: "Before you hire us", href: "/before-you-hire-us" },
] as const;

function isMenuActive(href: string, pathname: string) {
  if (href === "/services") {
    return pathname.startsWith("/services");
  }

  if (href === "/before-you-hire-us") {
    return pathname === "/before-you-hire-us";
  }

  return pathname === "/";
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <SectionLink href="/" className="logo" aria-label={`${site.name}, home`}>
            <img
              src="/brand/idaafa-logo-on-dark.svg"
              alt=""
              width={120}
              height={39}
              decoding="async"
            />
          </SectionLink>

          <SectionLink href="/#contact" className="btn header-cta">
            {site.headerCta}
          </SectionLink>

          <button
            ref={toggleRef}
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
        </div>
      </header>

      {open ? (
        <div id="mobile-menu" className="menu-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="menu-close" aria-label="Close menu" onClick={closeMenu}>
            ×
          </button>

          <nav aria-label="Menu">
            <ol className="menu-list">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <SectionLink
                    href={link.href}
                    className={isMenuActive(link.href, pathname) ? "is-active" : undefined}
                    onClick={closeMenu}
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
            <a
              className="menu-whatsapp"
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              onClick={() => window.plausible?.("whatsapp_click")}
            >
              WhatsApp
            </a>
            <SectionLink href="/#contact" className="btn" onClick={closeMenu}>
              Tell us the idea
            </SectionLink>
          </div>
        </div>
      ) : null}
    </>
  );
}
