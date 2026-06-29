import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/data/content";

type SiteHeaderProps = {
  variant?: "dark" | "light";
};

export function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const isDark = variant === "dark";
  const linkClass = isDark
    ? "whitespace-nowrap text-[0.625rem] font-medium uppercase tracking-[0.1em] text-edaafa-gold transition hover:text-white sm:text-xs sm:tracking-[0.15em] md:tracking-[0.2em]"
    : "whitespace-nowrap text-[0.625rem] font-medium uppercase tracking-[0.1em] text-edaafa-muted transition hover:text-edaafa-text sm:text-xs sm:tracking-[0.15em] md:tracking-[0.2em]";

  return (
    <header
      className={`relative z-10 ${isDark ? "text-white" : "border-b border-black/5 bg-edaafa-light/80 backdrop-blur-sm"}`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <Logo variant={variant} className="min-w-0 shrink" />

        <nav className="flex shrink-0 items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8" aria-label="Main">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              <span className="sm:hidden">{link.shortLabel}</span>
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
