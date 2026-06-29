import type { Metadata } from "next";
import { CapabilitiesNav } from "@/components/layout/CapabilitiesNav";
import { PageFooter } from "@/components/layout/PageFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { ResultBanner } from "@/components/ui/ResultBanner";
import { behindTheScenes } from "@/data/content";

export const metadata: Metadata = {
  title: "Behind the Scenes | Edaafa",
  description: "Admin, growth, and the foundation your store runs on.",
};

export default function BehindTheScenesPage() {
  const { foundation } = behindTheScenes;

  return (
    <div className="min-h-screen bg-edaafa-light">
      <SiteHeader />
      <CapabilitiesNav />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <PageIntro
          eyebrow={behindTheScenes.eyebrow}
          title={behindTheScenes.title}
          subtitle={behindTheScenes.subtitle}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {behindTheScenes.cards.map((card, index) => (
            <Reveal
              key={card.num}
              variant={index === 0 ? "left" : "right"}
              delay={index * 100}
            >
              <CapabilityCard {...card} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6" variant="up" delay={120}>
          <article className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-edaafa-orange">
              {foundation.num} {foundation.label}
            </p>
            <h3 className="mb-6 text-xl font-semibold text-edaafa-text">
              {foundation.title}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {foundation.columns.map((column, i) => (
                <ul key={i} className="space-y-3">
                  {column.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-edaafa-text/80"
                    >
                      <span className="mt-0.5 shrink-0 text-edaafa-orange">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal className="mt-10" variant="up" delay={180}>
          <ResultBanner>{behindTheScenes.result}</ResultBanner>
        </Reveal>
      </div>

      <PageFooter page={behindTheScenes.page} />
    </div>
  );
}
