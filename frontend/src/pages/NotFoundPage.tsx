import { Link } from "react-router-dom";
import { useEffect } from "react";
import { site } from "../content";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionLink } from "../components/SectionLink";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Page not found · idaafa";
  }, []);

  return (
    <>
      <Header />
      <main className="not-found-page">
        <div className="container not-found-inner">
          <p className="section-label">404</p>
          <h1>This one&apos;s missing.</h1>
          <p className="not-found-sub">
            The page you were after doesn&apos;t exist, or it moved. Neither is your fault.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              Back to the homepage
            </Link>
            <SectionLink href="/#contact" className="not-found-secondary">
              Or tell us what you were looking for
            </SectionLink>
          </div>
          <p className="not-found-note">
            If you followed a link from our site to get here, let us know at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we&apos;ll fix it.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
