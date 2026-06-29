import type { Metadata } from "next";
import { CapabilitiesNav } from "@/components/layout/CapabilitiesNav";
import { PageFooter } from "@/components/layout/PageFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { ResultBanner } from "@/components/ui/ResultBanner";
import { afterTheOrder } from "@/data/content";

export const metadata: Metadata = {
  title: "After the Order | Edaafa",
  description: "Fulfilment, accounts, and messaging after checkout.",
};

export default function AfterTheOrderPage() {
  return (
    <div className="min-h-screen bg-edaafa-lavender">
      <SiteHeader />
      <CapabilitiesNav />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <PageIntro
          eyebrow={afterTheOrder.eyebrow}
          title={afterTheOrder.title}
          subtitle={afterTheOrder.subtitle}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {afterTheOrder.cards.map((card, index) => (
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
          <ResultBanner>{afterTheOrder.result}</ResultBanner>
        </Reveal>
      </div>

      <PageFooter page={afterTheOrder.page} />
    </div>
  );
}
