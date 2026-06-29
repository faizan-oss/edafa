"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormState("success");
      event.currentTarget.reset();
    } catch {
      setFormState("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-edaafa-text outline-none transition placeholder:text-edaafa-muted/60 focus:border-edaafa-orange focus:ring-2 focus:ring-edaafa-orange/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-edaafa-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-edaafa-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-edaafa-muted"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your store, catalogue, and launch goals."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="mt-6 w-full rounded-xl bg-edaafa-navy px-4 py-3 text-sm font-medium text-white transition hover:bg-edaafa-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {formState === "submitting" ? "Sending..." : "Send message"}
      </button>

      {formState === "success" && (
        <p className="mt-4 text-sm text-green-700">
          Message sent! We&apos;ll be in touch within one business day.
        </p>
      )}

      {formState === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
