import type { Metadata } from "next";
import { CapabilitiesNav } from "@/components/layout/CapabilitiesNav";
import { PageFooter } from "@/components/layout/PageFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { ResultBanner } from "@/components/ui/ResultBanner";
import { shoppingExperience } from "@/data/content";

export const metadata: Metadata = {
  title: "Shopping Experience | Edaafa",
  description: "What your customers see and do—from first browse to paid order.",
};

export default function ShoppingExperiencePage() {
  const { result, resultHighlight } = shoppingExperience;
  const resultParts = result.split(resultHighlight);

  return (
    <div className="min-h-screen bg-edaafa-lavender">
      <SiteHeader />
      <CapabilitiesNav />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <PageIntro
          eyebrow={shoppingExperience.eyebrow}
          title={shoppingExperience.title}
          subtitle={shoppingExperience.subtitle}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {shoppingExperience.cards.map((card, index) => (
            <Reveal
              key={card.num}
              variant={index === 0 ? "left" : "right"}
              delay={index * 100}
            >
              <CapabilityCard {...card} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10" variant="up" delay={120}>
          <ResultBanner>
            {resultParts[0]}
            <span className="font-semibold text-edaafa-text">{resultHighlight}</span>
            {resultParts[1]}
          </ResultBanner>
        </Reveal>
      </div>

      <PageFooter page={shoppingExperience.page} />
    </div>
  );
}
