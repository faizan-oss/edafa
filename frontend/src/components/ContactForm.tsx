import { useEffect, useRef, useState } from "react";
import { contact, site, type PathChoice } from "../content";
import { Reveal } from "./Reveal";

type ContactFormProps = {
  selectedPath: PathChoice | null;
  onPathSelect: (path: PathChoice) => void;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  path: PathChoice;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          size?: "invisible" | "normal";
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? "";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function FieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {children}
      {required && <span className="form-dot" aria-hidden />}
    </label>
  );
}

export function ContactForm({ selectedPath, onPathSelect }: ContactFormProps) {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    path: "not-sure",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [bannerError, setBannerError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedPath) {
      setForm((current) => ({ ...current, path: selectedPath }));
    }
  }, [selectedPath]);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileRef.current || !window.turnstile) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      size: "invisible",
      callback: (token) => setTurnstileToken(token),
      "error-callback": () => setTurnstileToken(""),
    });
  }, []);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!form.name.trim()) {
      next.name = contact.errors.name;
    }
    if (!isValidEmail(form.email.trim())) {
      next.email = contact.errors.email;
    }
    if (form.message.trim().length < 20) {
      next.message = contact.errors.message;
    }
    return next;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBannerError("");

    const fieldErrors = validate();
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setBannerError(contact.errors.turnstile);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || undefined,
          path: form.path,
          message: form.message.trim(),
          website: form.website,
          turnstileToken,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        errors?: FieldErrors;
      };

      if (response.status === 400 && data.errors) {
        setErrors(data.errors);
        return;
      }

      if (response.status === 429) {
        setBannerError(contact.errors.rateLimit);
        return;
      }

      if (!response.ok) {
        setBannerError(data.message ?? contact.errors.server);
        return;
      }

      window.plausible?.("lead_submit");
      setSuccess(true);
    } catch {
      setBannerError(contact.errors.server);
    } finally {
      setSubmitting(false);
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    }
  }

  function handleWhatsAppClick() {
    window.plausible?.("whatsapp_click");
  }

  if (success) {
    return (
      <section id="contact" className="contact" aria-labelledby="contact-heading">
        <div className="container">
          <div className="form-success">{contact.success}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <Reveal>
          <div className="contact-copy">
            <p className="section-label">{contact.section}</p>
            <h2 id="contact-heading" className="section-heading contact-heading">
              {contact.heading}
            </h2>
            <p className="contact-intro">{contact.intro}</p>

            <a href={`mailto:${site.email}`} className="contact-email">
              {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-form-wrap">
            {bannerError && <div className="form-error-banner">{bannerError}</div>}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className={`form-field ${errors.name ? "has-error" : ""}`}>
                <FieldLabel htmlFor="name" required>
                  Your name
                </FieldLabel>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  autoComplete="name"
                />
                {errors.name && <p className="field-error">{errors.name}</p>}
              </div>

              <div className={`form-field ${errors.email ? "has-error" : ""}`}>
                <FieldLabel htmlFor="email" required>
                  Email
                </FieldLabel>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  autoComplete="email"
                />
                {errors.email && <p className="field-error">{errors.email}</p>}
              </div>

              <div className="form-field">
                <FieldLabel htmlFor="company">Company or product name (optional)</FieldLabel>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={(event) => setForm({ ...form, company: event.target.value })}
                />
              </div>

              <fieldset className="form-field form-path">
                <legend className="form-label">
                  Where are you right now?
                  <span className="form-dot" aria-hidden />
                </legend>
                <div className="path-pills" role="radiogroup" aria-label="Where are you right now?">
                  {contact.options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      role="radio"
                      aria-checked={form.path === option.value}
                      className={`path-pill ${form.path === option.value ? "is-active" : ""}`}
                      onClick={() => {
                        setForm({ ...form, path: option.value as PathChoice });
                        onPathSelect(option.value as PathChoice);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className={`form-field form-message ${errors.message ? "has-error" : ""}`}>
                <FieldLabel htmlFor="message" required>
                  Tell us about the idea
                </FieldLabel>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  maxLength={2000}
                  rows={4}
                  placeholder={contact.messagePlaceholder}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                />
                <p className="char-count">{form.message.length} / 2000</p>
                {errors.message && <p className="field-error">{errors.message}</p>}
              </div>

              <div className="honeypot" aria-hidden>
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(event) => setForm({ ...form, website: event.target.value })}
                />
              </div>

              <div ref={turnstileRef} />

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                  {contact.submit}
                </button>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-secondary btn-lg"
                  onClick={handleWhatsAppClick}
                >
                  {contact.whatsapp}
                </a>
              </div>

              <p className="form-consent">{contact.consent}</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
