import { brand } from "@/data/content";
import { Logo } from "@/components/ui/Logo";

type PageFooterProps = {
  page?: string;
  variant?: "dark" | "light";
};

export function PageFooter({ page, variant = "light" }: PageFooterProps) {
  const isDark = variant === "dark";

  return (
    <footer
      className={`${isDark ? "text-white/50" : "border-t border-black/5 text-edaafa-muted"}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Logo variant={isDark ? "dark" : "light"} />
        <p className="font-mono text-sm text-edaafa-orange">{brand.footerTagline}</p>
      </div>
      {page && (
        <p className="pb-6 text-center font-mono text-xs uppercase tracking-[0.25em] text-edaafa-muted/70">
          Edaafa — Capabilities — {page}
        </p>
      )}
    </footer>
  );
}
