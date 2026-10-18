import { useEffect } from "react";
import { Link } from "react-router-dom";
import { privacy } from "../content";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy · idaafa";
  }, []);

  return (
    <>
      <Header />
      <main className="privacy-page">
        <div className="container">
          <Link to="/" className="back-link">
            ← Back home
          </Link>
          <h1>{privacy.title}</h1>
          <p className="privacy-intro">{privacy.intro}</p>
          <p className="privacy-updated">Last updated {privacy.lastUpdated}</p>
          {privacy.sections.map((section) => (
            <section key={section.heading} className="privacy-section">
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
