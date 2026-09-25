import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BeforeYouHire } from "../components/BeforeYouHire";
import { ContactForm } from "../components/ContactForm";
import { Doors } from "../components/Doors";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { WhoWeAre } from "../components/WhoWeAre";
import { WhyUs } from "../components/WhyUs";
import { contact, type PathChoice } from "../content";

const pathValues = new Set<string>(contact.options.map((option) => option.value));

export function HomePage() {
  const [params] = useSearchParams();
  const [selectedPath, setSelectedPath] = useState<PathChoice | null>(null);

  useEffect(() => {
    const path = params.get("path");
    if (path && pathValues.has(path)) {
      setSelectedPath(path as PathChoice);
    }
  }, [params]);

  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    if (!domain) {
      return;
    }

    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = domain;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero
          onTellUs={() => {
            setSelectedPath("validate");
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          onSkipToBuild={() => {
            setSelectedPath("build");
            document.getElementById("build-door")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Doors activePath={selectedPath} />
        <WhyUs />
        <WhoWeAre />
        <BeforeYouHire />
        <ContactForm selectedPath={selectedPath} onPathSelect={setSelectedPath} />
      </main>
      <Footer />
    </>
  );
}
