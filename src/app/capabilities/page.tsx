import type { Metadata } from "next";
import Link from "next/link";
import { PageFooter } from "@/components/layout/PageFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CapabilitiesNav } from "@/components/layout/CapabilitiesNav";
import { FeaturePill } from "@/components/ui/FeaturePill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { capabilitySections, overview } from "@/data/content";

export const metadata: Metadata = {
  title: "Capabilities | Edaafa",
  description: "What we deliver in a full e-commerce build.",
};

const columnVariants = ["left", "up", "right"] as const;

export default function CapabilitiesPage() {
  const headlineParts = overview.headline.split(overview.highlight);
  const detailSections = capabilitySections.filter((s) => s.href !== "/capabilities");

  return (
    <div className="min-h-screen bg-edaafa-light">
      <SiteHeader />
      <CapabilitiesNav />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <Reveal variant="fade">
          <SectionLabel>{overview.eyebrow}</SectionLabel>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-edaafa-text sm:text-5xl">
            {headlineParts[0]}
            <span className="text-edaafa-orange">{overview.highlight}</span>
            {headlineParts[1]}
          </h1>
        </Reveal>

        <Reveal variant="up" delay={140}>
          <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-edaafa-text/70">
            {overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-8 flex flex-wrap gap-3">
            {overview.pills.map((pill) => (
              <FeaturePill key={pill}>{pill}</FeaturePill>
            ))}
          </div>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <div
            className="mt-12 rounded-2xl p-8 sm:p-10"
            style={{
              backgroundColor: "#1c1926",
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-edaafa-orange">
              {overview.equation.label}
            </p>
            <p className="mt-4 text-2xl font-medium leading-snug text-white sm:text-3xl">
              {overview.equation.parts.join(" + ")} ={" "}
              <span className="font-semibold text-edaafa-orange">
                {overview.equation.result}
              </span>
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {detailSections.map((section, index) => (
            <Reveal
              key={section.href}
              variant={columnVariants[index] ?? "up"}
              delay={index * 100}
            >
              <Link
                href={section.href}
                className="group block rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:border-edaafa-orange/30 hover:shadow-md"
              >
                {"eyebrow" in section && (
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-edaafa-orange">
                    {section.eyebrow}
                  </p>
                )}
                <h2 className="mt-2 text-lg font-semibold text-edaafa-text group-hover:text-edaafa-orange">
                  {section.label}
                </h2>
                {"description" in section && (
                  <p className="mt-2 text-sm text-edaafa-muted">{section.description}</p>
                )}
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-edaafa-orange">
                  View section →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" variant="up">
          <SectionLabel>{overview.index.eyebrow}</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-10 sm:grid-cols-3">
          {overview.index.columns.map((column, index) => (
            <Reveal
              key={column.title}
              variant={columnVariants[index] ?? "up"}
              delay={index * 100}
            >
              <div>
                <div className="mb-4 h-px w-full bg-edaafa-orange/40" />
                <h2 className="mb-5 text-sm font-semibold text-edaafa-text">
                  <Link
                    href={column.href}
                    className="transition hover:text-edaafa-orange"
                  >
                    {column.title}
                  </Link>
                </h2>
                <ul className="space-y-3">
                  {column.items.map((item) => (
                    <li key={item.num}>
                      <Link
                        href={item.href}
                        className="group flex gap-3 text-sm text-edaafa-text/70 transition hover:text-edaafa-text"
                      >
                        <span className="font-mono text-edaafa-orange">{item.num}</span>
                        <span className="group-hover:underline">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-black/10 pt-8" variant="fade">
          <p className="max-w-2xl text-sm leading-relaxed text-edaafa-muted">
            This document covers{" "}
            <span className="font-semibold text-edaafa-text">what we deliver</span>{" "}
            in a full e-commerce build. Each capability below is an addition that
            stacks into a finished, sellable store.
          </p>
        </Reveal>
      </div>

      <PageFooter />
    </div>
  );
}
