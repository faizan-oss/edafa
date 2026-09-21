import { useEffect, useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { ShortVersion } from "../components/ShortVersion";
import { TwoPaths } from "../components/TwoPaths";
import { WhoWeAre } from "../components/WhoWeAre";
import { WhyUs } from "../components/WhyUs";

type PathChoice = "validate" | "build" | "not-sure";

export function HomePage() {
  const [selectedPath, setSelectedPath] = useState<PathChoice | null>(null);

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
          onPathSelect={(path) => {
            setSelectedPath(path);
            document.getElementById("paths")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Marquee />
        <ShortVersion />
        <TwoPaths activePath={selectedPath} onPathSelect={setSelectedPath} />
        <WhyUs />
        <WhoWeAre />
        <ContactForm selectedPath={selectedPath} onPathSelect={setSelectedPath} />
      </main>
      <Footer />
    </>
  );
}
