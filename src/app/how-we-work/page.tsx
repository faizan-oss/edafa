import type { Metadata } from "next";
import { PageFooter } from "@/components/layout/PageFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { howWeWork } from "@/data/content";

export const metadata: Metadata = {
  title: "How We Work | Edaafa",
  description: "Six steps from idea to a store that sells.",
};

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-edaafa-light">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <Reveal variant="fade">
          <SectionLabel>{howWeWork.eyebrow}</SectionLabel>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-edaafa-text sm:text-5xl">
            {howWeWork.title}
          </h1>
        </Reveal>

        <div className="mt-14 divide-y divide-black/10">
          {howWeWork.steps.map((step, index) => (
            <Reveal key={step.num} variant="up" delay={(index % 4) * 60}>
              <div className="grid gap-4 py-8 sm:grid-cols-[80px_1fr] sm:gap-8">
                <p className="font-display text-4xl font-bold text-edaafa-orange">
                  {step.num}
                </p>
                <div>
                  <h2 className="text-xl font-semibold text-edaafa-text">{step.title}</h2>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-edaafa-text/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12" variant="up">
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              backgroundColor: "#1c1926",
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-edaafa-orange">
              {howWeWork.callout.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              {howWeWork.callout.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              {howWeWork.callout.description}
            </p>
          </div>
        </Reveal>
      </div>

      <PageFooter />
    </div>
  );
}
