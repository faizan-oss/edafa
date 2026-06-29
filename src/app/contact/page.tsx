import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageFooter } from "@/components/layout/PageFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact | Edaafa",
  description: "Get in touch with the Edaafa team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-edaafa-light">
      <SiteHeader />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        <Reveal className="flex-1" variant="left">
          <SectionLabel>{contact.eyebrow}</SectionLabel>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-edaafa-text sm:text-5xl">
            {contact.title}
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-edaafa-text/70">
            {contact.subtitle}
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-edaafa-muted">
                Email
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="text-edaafa-text transition hover:text-edaafa-orange"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-edaafa-muted">
                Phone
              </p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-edaafa-text transition hover:text-edaafa-orange"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="flex-1" variant="right" delay={100}>
          <ContactForm />
        </Reveal>
      </div>

      <PageFooter />
    </div>
  );
}
