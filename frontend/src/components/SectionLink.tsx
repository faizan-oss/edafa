import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function scrollToSection(id: string) {
  const node = document.getElementById(id);
  if (!node) {
    return false;
  }

  node.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let frame = 0;
    let attempts = 0;

    const tryScroll = () => {
      if (scrollToSection(id) || attempts > 8) {
        return;
      }

      attempts += 1;
      frame = window.requestAnimationFrame(tryScroll);
    };

    frame = window.requestAnimationFrame(tryScroll);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

export function SectionLink({
  href,
  className,
  children,
  ...rest
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "to">) {
  const location = useLocation();
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return (
      <Link to={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  const hash = href.slice(hashIndex + 1);

  return (
    <Link
      to={{ pathname: "/", hash }}
      className={className}
      {...rest}
      onClick={() => {
        if (location.pathname === "/" && location.hash === `#${hash}`) {
          scrollToSection(hash);
        }
      }}
    >
      {children}
    </Link>
  );
}
