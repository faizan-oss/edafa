export const site = {
  name: "idaafa",
  tagline: "adding more to every idea.",
  founders: "Founded by Faraz & Faizan",
  email: "contact@idaafa.com",
  whatsapp: "https://wa.me/918337945472",
  year: "2026",
} as const;

export const navLinks = [
  { label: "Two paths", href: "#paths" },
  { label: "Why us", href: "#why" },
  { label: "Who we are", href: "#who" },
  { label: "Privacy", href: "/privacy" },
] as const;

export const hero = {
  eyebrow: "A product studio for founders",
  headline: ["Know if people", "actually want it", "— before you build it."],
  sub: "We won't tell you your idea is brilliant. We'll find out if it's true — with real signal, in weeks — then build the thing properly if it is.",
  founderLine: "Founded by Faraz & Faizan · adding more to every idea.",
  primaryCta: "Validate first",
  secondaryCta: "Build now",
} as const;

export const marqueeItems = [
  "adding more to every idea",
  "honest decision confidence",
  "validate before you build",
  "founded by Faraz & Faizan",
  "no fake proof",
] as const;

export const shortVersion = {
  label: "The short version",
  headline: ["Most studios sell certainty.", "We sell evidence — then build", "on top of it."],
  body: "idaafa exists for one moment: the one where you decide whether an idea deserves your next year. We make that decision an informed one — and if the answer is yes, we stay and build it with you.",
} as const;

export const twoPaths = {
  section: "01 — Two paths in",
  heading: ["Which one sounds", "like you?"],
  intro:
    "Some founders need proof before they commit. Others already know, and just need it built right. Both are reasonable. Pick yours — the form below remembers.",
  validate: {
    number: "01",
    tag: "~6-week sprint",
    title: "Validate first",
    tagline: "Not certain yet? Good — certainty is the deliverable.",
    body: "We put your idea in front of real people, measure what they do (not what they say), and hand you a straight answer: build it, change it, or drop it.",
    equations: [
      "your idea + six weeks = an honest answer",
      "real users + real signal = evidence, not opinion",
      "evidence + craft = decision confidence",
    ],
    cta: "Start with validation →",
  },
  build: {
    number: "02",
    tag: "End-to-end",
    title: "Build now",
    tagline: "Already know? Then let's not waste the conviction.",
    body: "We take it from first sketch to shipped product — and we'll still tell you honestly when a decision needs a second look.",
    points: [
      "Strategy, design, and engineering under one roof — nothing lost in handoff.",
      "A working product, shipped in chapters you can react to.",
      "You talk to the people building it. Because that's who we are.",
    ],
    cta: "Start the build →",
  },
} as const;

export const whyUs = {
  section: "02 — Why us",
  heading: ["No fake proof.", "No vanity", "metrics."],
  intro:
    "You won't find a wall of logos here, or testimonials we wrote ourselves. This is what we offer instead — and you can hold us to every line.",
  items: [
    {
      title: "We say no when the answer is no.",
      body: "A validation sprint that ends in “don't build it” is a good outcome — it just saved you a year. We'll never soften that to win the next invoice.",
    },
    {
      title: "Small team, senior hands.",
      body: "You work directly with the founders. The person who scopes your sprint is the person who builds it.",
    },
    {
      title: "We stand behind everything we ship.",
      body: "Design, code, and the honest memo that comes with it — our name is on all three.",
    },
  ],
} as const;

export const whoWeAre = {
  section: "03 — Who we are",
  heading: ["Two founders.", "One obsession", "with addition."],
  body: "“Idaafa” means addition. We started this studio to do one thing well: add more to every idea — more evidence, more craft, more honesty about what's actually worth building.",
  founderLine: "Founded by Faraz & Faizan · adding more to every idea.",
  detail:
    "Between us: products shipped, mistakes made, and a standing rule — we'd rather lose a project than let someone build the wrong thing. When you write to us, one of us reads it. When we reply, it's one of us typing.",
  arabic: "إضافة — نُضيف إلى كل فكرة",
} as const;

export const contact = {
  section: "04 — Say hello",
  heading: ["Tell us what", "you're circling."],
  intro:
    "A few honest lines are enough. One of us — Faraz or Faizan — reads every note and replies within 2 business days. Prefer talking?",
  whatsapp: "WhatsApp us",
  submit: "Send it over",
  consent:
    "By sending this, you agree we'll use your details to reply to your enquiry. We won't share them.",
  success: "Got it. We'll come back to you within two working days.",
  errors: {
    name: "We need a name to reply to.",
    email: "That email doesn't look right. Mind checking it?",
    message: "Give us a bit more to go on.",
    turnstile:
      "We couldn't tell you're human. Refresh and try again, or email contact@idaafa.com.",
    rateLimit:
      "That's a lot of tries in a row. Give it a minute, or email us at contact@idaafa.com.",
    server:
      "Something broke on our end. Email us at contact@idaafa.com and we'll pick it up.",
  },
  options: [
    { value: "validate", label: "Validate first" },
    { value: "build", label: "Build now" },
    { value: "not-sure", label: "Not sure yet" },
  ],
} as const;

export const privacy = {
  title: "Privacy",
  sections: [
    {
      heading: "What we collect",
      body: "When you use the contact form we collect your name, email, optional company or product name, your message, and which option you picked. We also store your IP address and browser details to prevent spam.",
    },
    {
      heading: "Why we collect it",
      body: "We use this information to reply to your enquiry and to prevent abuse of the form.",
    },
    {
      heading: "Where it's stored",
      body: "Your submission is stored in our database. We use Resend to send email notifications and auto-replies.",
    },
    {
      heading: "Sharing",
      body: "We don't sell or share your data with third parties.",
    },
    {
      heading: "Deletion",
      body: "Email contact@idaafa.com to request deletion of your data.",
    },
  ],
} as const;
