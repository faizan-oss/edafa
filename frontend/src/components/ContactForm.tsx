import { useEffect, useRef, useState } from "react";
import { contact, site, type PathChoice } from "../content";
import { VerdictGlyph } from "./VerdictGlyph";

type ContactFormProps = {
  selectedPath: PathChoice | null;
  onPathSelect: (path: PathChoice) => void;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  path: PathChoice | null;
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

export function ContactForm({ selectedPath, onPathSelect }: ContactFormProps) {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    path: null,
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
    if (!form.path) {
      next.path = contact.pathError;
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
    if (Object.keys(fieldErrors).length > 0 || !form.path) {
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
      <section id="contact" className="sec contact" aria-labelledby="contact-heading">
        <div className="wrap">
          <div className="form-success">{contact.success}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="sec contact" aria-labelledby="contact-heading">
      <div className="wrap contact-grid">
        <div>
          <span className="tag">{contact.section}</span>
          <h2 id="contact-heading">{contact.heading}</h2>
          <p className="lead">{contact.intro}</p>
          <div className="reach">
            <a href={`mailto:${site.email}`}>
              {site.email}
              <span>email</span>
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              onClick={handleWhatsAppClick}
            >
              {contact.whatsapp}
              <span>chat</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {bannerError ? <div className="form-error-banner">{bannerError}</div> : null}

          <div className={`field ${errors.name ? "has-error" : ""}`}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              autoComplete="name"
            />
            {errors.name ? <p className="field-error">{errors.name}</p> : null}
          </div>

          <div className={`field ${errors.email ? "has-error" : ""}`}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              autoComplete="email"
            />
            {errors.email ? <p className="field-error">{errors.email}</p> : null}
          </div>

          <div className="field">
            <label htmlFor="company">
              Company or product name <span className="opt">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={(event) => setForm({ ...form, company: event.target.value })}
            />
          </div>

          <div className={`field ${errors.path ? "has-error" : ""}`}>
            <span className="lbl" id="wl">
              {contact.pathLabel}
            </span>
            <p className="path-helper">{contact.pathHelper}</p>
            <div className="rows" role="radiogroup" aria-labelledby="wl">
              {contact.options.map((option) => (
                <label
                  key={option.value}
                  className={`row${form.path === option.value ? " on" : ""}`}
                >
                  <input
                    type="radio"
                    name="path"
                    value={option.value}
                    checked={form.path === option.value}
                    onChange={() => {
                      setForm({ ...form, path: option.value });
                      onPathSelect(option.value);
                    }}
                  />
                  <span className="dot" />
                  {option.label}
                </label>
              ))}
            </div>
            {errors.path ? <p className="field-error">{errors.path}</p> : null}
          </div>

          <div className={`field ${errors.message ? "has-error" : ""}`}>
            <label htmlFor="message">Tell us about the idea</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              maxLength={2000}
              placeholder={contact.messagePlaceholder}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
            />
            <span className="count">
              {form.message.length} / 2000
            </span>
            {errors.message ? <p className="field-error">{errors.message}</p> : null}
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

          <p className="consent">{contact.consent}</p>

          <div className="formfoot">
            <button type="submit" className="btn" disabled={submitting}>
              {contact.submit}
            </button>
            <span className="form-promise">
              <VerdictGlyph as="i" />
              <span>
                <b>{contact.promiseStrong}</b>
                {contact.promise.slice(contact.promiseStrong.length)}
              </span>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
