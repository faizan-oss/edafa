import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function PageIntro({ eyebrow, title, subtitle }: PageIntroProps) {
  return (
    <>
      <Reveal variant="fade">
        <SectionLabel>{eyebrow}</SectionLabel>
      </Reveal>

      <Reveal variant="up" delay={80}>
        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold tracking-tight text-edaafa-text sm:text-5xl">
          {title}
        </h1>
      </Reveal>

      {subtitle && (
        <Reveal variant="up" delay={140}>
          <p className="mt-4 max-w-xl text-base text-edaafa-muted">{subtitle}</p>
        </Reveal>
      )}
    </>
  );
}
