import { useEffect, useRef, useState } from "react";
import { contact, site } from "../content";
import { Reveal } from "./Reveal";

type PathChoice = "validate" | "build" | "not-sure";

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
            <p className="contact-label">
              <span className="contact-label-num">04 —</span> Say hello
            </p>
            <h2 id="contact-heading" className="section-heading contact-heading">
              {contact.heading.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <p className="contact-intro">{contact.intro}</p>

            <div className="contact-reach">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener"
                className="whatsapp-btn"
                onClick={handleWhatsAppClick}
              >
                <svg viewBox="0 0 24 24" aria-hidden width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M17.47 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.27-.02-.42.12-.56.12-.12.28-.32.41-.48.14-.16.18-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.21 1.25.18 1.72.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z"
                  />
                  <path
                    fill="currentColor"
                    d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 1.77.47 3.5 1.36 5.02L2 22l5.25-1.38c1.46.8 3.1 1.22 4.79 1.22h.01c5.46 0 9.89-4.42 9.89-9.88C21.94 6.42 17.5 2 12.04 2zm0 18.07h-.01c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.34c0-4.52 3.68-8.2 8.21-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.52-3.68 8.21-8.1 8.21z"
                  />
                </svg>
                {contact.whatsapp}
              </a>

              <a href={`mailto:${site.email}`} className="contact-email">
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-form-wrap">
            {bannerError && <div className="form-error-banner">{bannerError}</div>}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className={`form-field ${errors.name ? "has-error" : ""}`}>
                <FieldLabel htmlFor="name" required>
                  Name
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
                <FieldLabel htmlFor="company">Company / Product (optional)</FieldLabel>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={(event) => setForm({ ...form, company: event.target.value })}
                />
              </div>

              <fieldset className="form-field form-path">
                <legend className="form-label">
                  Which sounds like you?
                  <span className="form-dot" aria-hidden />
                </legend>
                <div className="path-pills" role="radiogroup" aria-label="Which sounds like you?">
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
                  {contact.submit} +
                </button>
              </div>

              <p className="form-consent">{contact.consent}</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
