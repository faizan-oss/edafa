import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { Reveal } from "@/components/ui/Reveal";
import { brand, hero } from "@/data/content";

export default function HomePage() {
  return (
    <div
      className="flex min-h-screen flex-col text-white"
      style={{
        backgroundColor: "#121019",
        backgroundImage:
          "radial-gradient(circle at 85% 15%, rgba(232, 163, 77, 0.22) 0%, rgba(232, 163, 77, 0.06) 35%, transparent 65%)",
      }}
    >
      <SiteHeader variant="dark" />

      <div className="flex flex-1 flex-col justify-end px-4 pb-8 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal immediate variant="fade" delay={0}>
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/50 sm:mb-6 sm:text-xs sm:tracking-[0.25em]">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal immediate variant="fade" delay={120}>
            <BrandWordmark />
          </Reveal>

          <Reveal immediate variant="fade" delay={240}>
            <p className="mt-6 max-w-lg text-lg text-white/80 sm:text-xl">
              {brand.tagline.split("every idea.")[0]}
              <span className="font-semibold text-white">every idea.</span>
            </p>
          </Reveal>

          <Reveal immediate variant="fade" delay={360}>
            <p className="mt-3 font-mono text-sm text-edaafa-gold">
              edaafa · {brand.arabic}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal immediate variant="up" delay={480}>
            <p className="max-w-2xl font-mono text-xs leading-relaxed text-white/60 sm:text-sm">
              storefront{" "}
              <span className="text-edaafa-orange">+</span> payments{" "}
              <span className="text-edaafa-orange">+</span> logistics{" "}
              <span className="text-edaafa-orange">+</span> engagement{" "}
              <span className="text-edaafa-orange">+</span> operations{" "}
              <span className="text-edaafa-orange">=</span>{" "}
              <span className="font-semibold text-white">one complete store</span>
            </p>
          </Reveal>

          <Reveal immediate variant="fade" delay={560}>
            <div className="text-right">
              <Link
                href="/capabilities"
                className="text-xs font-medium uppercase tracking-[0.2em] text-edaafa-gold transition hover:text-white"
              >
                {hero.meta.label}
              </Link>
              <p className="mt-1 font-mono text-xs text-white/40">{hero.meta.version}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
