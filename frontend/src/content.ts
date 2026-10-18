export const site = {
  name: "idaafa",
  tagline: "Adding what's missing.",
  email: "contact@idaafa.com",
  whatsapp: "https://wa.me/918337945472",
  year: "2026",
  headerCta: "Talk to us",
} as const;

export const navLinks = [
  { label: "Where you are", href: "/#doors" },
  { label: "Why us", href: "/#why" },
  { label: "Who we are", href: "/#who" },
] as const;

export const footerExplore = [
  { label: "Services", href: "/services" },
  { label: "Before you hire us", href: "/before-you-hire-us" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy", href: "/privacy" },
] as const;

export const hero = {
  eyebrow: "Product studio",
  headline: "Test the idea before you build it.",
  sub: "Most ideas fail because nobody actually needed them. We put a real prototype in front of real users, then tell you straight: build it, change it, or drop it.",
  primaryCta: "Tell us the idea",
  secondaryCta: "Already sure? Skip to the build",
  machineLabel: "Three possible answers",
  verdicts: [
    { key: "build", label: "Build it" },
    { key: "change", label: "Change it" },
    { key: "drop", label: "Drop it" },
  ],
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
  headline: ["Most studios sell certainty.", "We sell evidence, then build", "on top of it."],
  body: "idaafa exists for one moment: the one where you decide whether an idea deserves your next year. We make that decision an informed one, and if the answer is yes, we stay and build it with you.",
} as const;

export const doors = {
  section: "Where are you right now",
  heading: "Start with where you actually are.",
  closing:
    "Not sure which one you are? Say so. We'll point you at the right one, even when it's the cheaper one.",
  validate: {
    tag: "Not sure yet",
    title: "Validate first",
    line: "Six weeks to find out if the idea holds up, before you commit to building it.",
    points: [
      "A working prototype people can actually click through",
      "Real users we recruit and put in front of it",
      "Recorded sessions, so you see the reactions yourself",
      "A straight answer at the end: build it, change it, or drop it",
    ],
    footer: "Go ahead and build, and half the sprint fee comes off the bill.",
    footerEm: "half the sprint fee",
    cta: "Start with validation",
    href: "/services/validate-first",
  },
  build: {
    tag: "Already decided",
    title: "Build now",
    line: "You know where you're going. We build the real thing.",
    points: [
      "A full product, web or mobile, start to finish",
      "Built to go live, not a demo you throw away",
      "Made for how people actually use it",
      "Set up in your name. Yours from day one.",
    ],
    footer: "We've spent years on the hard parts. The stuff that touches money and stock.",
    footerEm: "money and stock",
    cta: "Start the build",
    href: "/services/build-now",
  },
  fix: {
    tag: "Already built, not working",
    title: "Fix what's broken",
    line: "Built it with AI, or someone went quiet, and now it's failing.",
    points: [
      "We find what's actually wrong, not just what's showing",
      "We check the parts that cost you money when they break",
      "A fixed price to fix it, before any work starts",
      "A straight answer: keep it, fix it, or rebuild it",
    ],
    footer: "If patching it costs more than starting again, we'll say so.",
    footerEm: "starting again",
    cta: "See how that works",
    href: "/services/fix-whats-broken",
  },
  keep: {
    tag: "Live and needs care",
    title: "Keep it running",
    line: "Monthly engineering after launch, from people who know your product.",
    points: [
      "Fixes when something goes wrong",
      "The next round of changes and features",
      "Kept up, watched and backed up",
      "Start when you need it, stop when you don't",
    ],
    footer: "If we built it, we already know it. If we didn't, we'll go through it first.",
    footerEm: "we'll go through it first",
    cta: "See how that works",
    href: "/services/keep-it-running",
  },
} as const;

export type DoorKey = "validate" | "build" | "fix" | "keep";

export const doorOrder: readonly DoorKey[] = ["validate", "build", "fix", "keep"] as const;

export const serviceImages = {
  validate: {
    avif: "/images/validate-first.avif",
    avif2x: "/images/validate-first@2x.avif",
    webp: "/images/validate-first.webp",
    webp2x: "/images/validate-first@2x.webp",
    alt: "A clickable prototype on a glass stand, connected to four user tiles, with a gold plus mark",
    width: 1200,
    height: 800,
  },
  build: {
    avif: "/images/build-now.avif",
    avif2x: "/images/build-now@2x.avif",
    webp: "/images/build-now.webp",
    webp2x: "/images/build-now@2x.webp",
    alt: "A product assembled from connected modules joined by gold seams",
    width: 1200,
    height: 800,
  },
  fix: {
    avif: "/images/fix-whats-broken.avif",
    avif2x: "/images/fix-whats-broken@2x.avif",
    webp: "/images/fix-whats-broken.webp",
    webp2x: "/images/fix-whats-broken@2x.webp",
    alt: "Two broken halves of a block rejoined with a gold seam",
    width: 1200,
    height: 800,
  },
  keep: {
    avif: "/images/keep-it-running.avif",
    avif2x: "/images/keep-it-running@2x.avif",
    webp: "/images/keep-it-running.webp",
    webp2x: "/images/keep-it-running@2x.webp",
    alt: "A server rack inside a glass case with an orbit of monitoring nodes",
    width: 1200,
    height: 800,
  },
} as const;

export type ServiceImage = (typeof serviceImages)[DoorKey];

export const whyUs = {
  section: "Why us",
  heading: "We'll tell you to drop it.",
  body: "Most studios only make money when they build something, so saying yes is always in their interest. We do it differently. The sprint pays for itself, which means we don't need your idea to be good. If the data says stop, we say stop. That is exactly why you can believe us when we say go.",
  equation: "real prototype + real users + honest data = an answer you can trust",
  equationLabel: "real prototype plus real users plus honest data equals an answer you can trust",
} as const;

export const whoWeAre = {
  section: "Who we are",
  heading: "A team that would rather be right than busy.",
  body: "We take on a few projects at a time. Validation done properly can't be rushed or churned out. We've spent years building real products, web and mobile, including online stores on the Indian stack: Razorpay, Shiprocket, UPI, GST, all the plumbing that just has to work. We bring the same care to working out whether something is worth building in the first place. No jargon, no theatre. A straight answer, and the proof behind it.",
  stack: [
    { name: "Web", label: "products" },
    { name: "Mobile", label: "products" },
    { name: "Razorpay", label: "payments" },
    { name: "Shiprocket", label: "shipping" },
    { name: "UPI", label: "payments" },
    { name: "GST", label: "invoicing" },
  ],
} as const;

export const beforeYouHire = {
  section: "Before you hire us",
  heading: "We're not for everyone.",
  intro:
    "Most studios only tell you what they can do. Here's where we're the wrong call. A team that tells you who it can't help is easier to trust on the rest.",
  skip: {
    title: "Skip us if",
    items: [
      "You want a rubber stamp, not an answer. If your mind's made up and you just want proof you're right, we're the wrong studio.",
      "You won't change or drop the idea no matter what the users say.",
      "You want the cheapest build going, not one built to last.",
      "You want the broken thing patched cheaply and you don't want to hear if it needs rebuilding.",
    ],
  },
  readCard: {
    title: "Read this before you write in.",
    lede: "The rest of it: what you'll own, how we build, and what happens after launch.",
    links: [
      { number: "02", label: "What's yours", href: "/before-you-hire-us#yours" },
      { number: "03", label: "How we build", href: "/before-you-hire-us#build" },
      { number: "04", label: "Keeping it safe", href: "/before-you-hire-us#safe" },
      { number: "05", label: "After launch", href: "/before-you-hire-us#after" },
    ],
    fit: {
      title: "Take the fit check",
      sub: "Five honest answers. A straight verdict.",
      href: "/before-you-hire-us#fit",
    },
  },
} as const;

export const whatHappensNext = {
  section: "What happens next",
  heading: "Half an idea is enough.",
  lede: "Write it the way you'd say it to a friend. A couple of rough lines is plenty. Here's exactly where your note goes after you press send.",
  stops: [
    {
      when: "Today",
      title: "You send a few lines.",
      text: "Rough is fine. You don't need to have it figured out.",
    },
    {
      when: "Within 2 working days",
      title: "We reply. Properly.",
      text: "A real reply from the people who'd do the work. Not an auto-sequence.",
    },
    {
      when: "30 minutes · free",
      title: "We talk it through.",
      text: "We ask questions, tell you honestly what we think, and which of our services fits. Sometimes that's none of them.",
    },
    {
      when: "After the call",
      title: "You decide.",
      text: "No chasing, no pressure. If it's not for you, that's the end of it, and you keep everything we told you.",
    },
  ],
  dontNeed: {
    label: "You don't need",
    items: ["A pitch deck", "A business plan", "A budget worked out", "Technical words"],
  },
  cta: "Tell us the idea",
} as const;

export const contact = {
  section: "Talk to us",
  heading: "Tell us the idea.",
  intro: "Want it tested, or ready to build? Start here. No pitch, no pressure.",
  whatsapp: "Or message us on WhatsApp",
  submit: "Send",
  promise: "First call is free, 30 minutes.",
  promiseStrong: "First call is free",
  pathLabel: "Where are you right now?",
  pathHelper: "Pick the one that fits.",
  pathError: "Pick the closest one. Not sure is fine.",
  consent: "Send this and you're fine with us using your details to reply. We won't share them.",
  messagePlaceholder: "A couple of lines is plenty to start.",
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
    { value: "validate", label: "I want to test the idea first" },
    { value: "build", label: "I'm ready to build" },
    { value: "fix", label: "Something I built is broken" },
    { value: "keep", label: "I need ongoing help with a live product" },
    { value: "not-sure", label: "Not sure yet" },
  ],
} as const;

export type PathChoice = (typeof contact.options)[number]["value"];

export const services = [
  {
    slug: "validate-first",
    path: "validate" as const,
    number: "01",
    tag: "Not sure yet",
    title: "Validate first",
    line: "Six weeks. A real prototype, real users, and an answer you can act on.",
    body: "Most ideas don't get tested. They get built, launched, and then explained away. We do it the other way round. We build something people can actually use, put it in front of people who'd actually buy it, and watch what happens. Then we tell you what we saw, including the parts you won't like.",
    groups: [
      {
        heading: "Week by week",
        items: [
          "Weeks 1 to 2. We pin down who this is for and the one thing that has to be true. We write down what counts as a yes and what counts as a no, before we see any results.",
          "Weeks 3 to 4. We build the prototype. Something real enough to click through and react to. Not slides.",
          "Week 5. We recruit real users who fit your customer, run the sessions, and record them.",
          "Week 6. You get the answer and the proof behind it.",
        ],
      },
      {
        heading: "What you walk away with",
        items: [
          "A working prototype people can click through",
          "Recorded sessions, so you see the reactions yourself",
          "What we set out to test and whether it held",
          "A straight answer: build it, change it, or drop it",
          "If it's build, what to build first and why",
        ],
      },
    ],
    footer: "Go ahead and build, and half the sprint fee comes off the bill.",
    cta: "Start with validation",
    featured: true,
  },
  {
    slug: "build-now",
    path: "build" as const,
    number: "02",
    tag: "Already decided",
    title: "Build now",
    line: "You already know. We build the real thing, and you own it.",
    body: "Some founders don't need convincing. You've seen the demand, or you've run this before, and what you need is someone who can build it properly and not disappear. Web or mobile, start to finish, built to go live and hold up once real people are using it.",
    groups: [
      {
        heading: "What we build",
        items: [
          "Full products, web or mobile, from nothing to live",
          "The unglamorous parts that decide whether it works: payments, accounts, orders, stock, the admin screen you run it from",
          "Online stores on the Indian stack: Razorpay, Shiprocket, UPI, GST, all the plumbing that just has to work",
        ],
      },
      {
        heading: "How it runs",
        items: [
          "We agree what's in, in writing. Before anything gets built we write down what we're building and what we're leaving out. You approve that list, or we argue about it first.",
          "You see it as it happens. You should never have to ask how it's going.",
          "You own it from day one. Code, hosting, every account, in your name from the start. Not handed over at the end, not held until the last invoice.",
        ],
      },
    ],
    footer: "We've spent years on the hard parts. The stuff that touches money and stock.",
    cta: "Start the build",
    featured: false,
  },
  {
    slug: "fix-whats-broken",
    path: "fix" as const,
    number: "03",
    tag: "Already built, not working",
    title: "Fix what's broken",
    line: "You built something and it stopped working. We tell you if it's worth saving.",
    body: "You got it most of the way with an AI builder, or a freelancer went quiet, or it worked fine until real people used it. Now payments are failing, or the data's wrong, or nobody can work out what the code is doing. You don't need a lecture about how it should have been built. You need someone to look at it and tell you where you actually stand.",
    groups: [
      {
        heading: "What we do",
        items: [
          "Go through what you've got and find what's actually wrong, not just what's showing",
          "Check the parts that cost you money when they break: payments, accounts, orders, data",
          "Tell you what's salvageable and what isn't",
          "Give you a fixed price to fix it, before any work starts",
        ],
      },
      {
        heading: "What you get at the end",
        items: [
          "A written verdict, in plain words: keep it, fix it, or rebuild it. Yours to keep either way, including if you take it to someone else.",
        ],
      },
    ],
    note: "Sometimes the honest answer is that patching it costs more than starting again, and we'll say so even though the smaller job is easier for us to sell. You get the true answer, not the profitable one.",
    cta: "Send us what's broken",
    featured: false,
  },
  {
    slug: "keep-it-running",
    path: "keep" as const,
    number: "04",
    tag: "Live and needs care",
    title: "Keep it running",
    line: "Monthly engineering, for after launch. Start when you need it, stop when you don't.",
    body: "Launch isn't the end of the work. Things break, customers ask for things, something needs changing every week, and none of it adds up to a full-time hire. This is for that. A set amount of engineering time each month from people who already know your product, without putting anyone on payroll.",
    groups: [
      {
        heading: "What it covers",
        items: [
          "Fixes when something goes wrong",
          "The next round of changes and features",
          "Keeping the thing up, watched, and backed up",
          "Someone who knows your product when you need an answer fast",
        ],
      },
      {
        heading: "How it works",
        items: [
          "Month to month. Pause it or stop it whenever you want.",
          "If we built it, we already know it. If we didn't, we'll go through it first and tell you what we find.",
        ],
      },
    ],
    note: "We hand over everything at launch, so you're free to walk. Some people want us to stay anyway. This is how, without either of us pretending a one-off invoice covers work that never really stops.",
    cta: "Ask about monthly support",
    featured: false,
  },
] as const;

export type Service = (typeof services)[number];

export const serviceHub = {
  label: "Services",
  heading: "Four ways in.",
  whichHeading: "Which one",
  whichBody: doors.closing,
  cta: "Talk to us",
} as const;

export const serviceShared = {
  owns: {
    question: "Who owns it after you build?",
    answer:
      "You own it from day one. Code, hosting, every account, in your name from the start. Not handed over at the end, not held until the last invoice.",
  },
  // CONFIRM: shared pricing answer used across all four FAQs
  cost: {
    question: "What does it cost?",
    answer:
      "We agree what's in, in writing, before anything gets built. No surprise invoices for work you didn't ask for.",
  },
} as const;

const sharedFaqItems = [
  { question: serviceShared.owns.question, answer: serviceShared.owns.answer },
  { question: serviceShared.cost.question, answer: serviceShared.cost.answer },
] as const;

export const serviceFaqs: Record<string, readonly { question: string; answer: string }[]> = {
  "validate-first": [
    {
      question: "What's included?",
      answer:
        "A working prototype people can click through, recorded sessions, what we set out to test and whether it held, and a straight answer: build it, change it, or drop it. If it's build, you also get what to build first and why.",
    },
    {
      question: "What assumptions do you test?",
      answer:
        "Who this is for, and the one thing that has to be true. We write down what counts as a yes and what counts as a no before we see any results.",
    },
    {
      question: "What if the answer is don't build it?",
      answer:
        "Then you saved the cost of building it, which is the point. You keep the prototype, the recordings and the findings.",
    },
    {
      question: "What if we build afterwards?",
      answer: "Go ahead and build, and half the sprint fee comes off the bill.",
    },
    ...sharedFaqItems,
  ],
  "build-now": [
    {
      question: "What do you build?",
      answer:
        "Full products, web or mobile, from nothing to live. That includes the parts that decide whether it works: payments, accounts, orders, stock, and the admin screen you run it from. Online stores can sit on the Indian stack: Razorpay, Shiprocket, UPI, GST.",
    },
    {
      question: "How do we see progress?",
      // CONFIRM: update rhythm during a build
      answer: "You see it as it happens. You should never have to ask how it's going.",
    },
    {
      question: "What happens after it goes live?",
      answer:
        "You can walk. If you want someone who already knows the product to keep changing it, that's Keep it running: monthly engineering you can start when you need it and stop when you don't.",
    },
    ...sharedFaqItems,
  ],
  "fix-whats-broken": [
    {
      question: "Who is this for?",
      answer:
        "You got it most of the way with an AI builder, or a freelancer went quiet, or it worked until real people used it. Payments are failing, the data's wrong, or nobody can work out what the code is doing.",
    },
    {
      question: "What do we get from the look?",
      // CONFIRM: whether the first look is free, fixed-fee, or quoted
      answer:
        "A written verdict, in plain words: keep it, fix it, or rebuild it. Yours to keep either way, including if you take it to someone else. If it needs fixing, you get a fixed price before any work starts.",
    },
    {
      question: "Will you just patch it?",
      answer:
        "No. Sometimes patching it costs more than starting again, and we'll say so even though the smaller job is easier for us to sell.",
    },
    {
      question: "Fix it or rebuild it?",
      answer:
        "That's the verdict. If it should be rebuilt, Build now is the next door. If it should stay live and be looked after, that's Keep it running.",
    },
    ...sharedFaqItems,
  ],
  "keep-it-running": [
    {
      question: "What's included?",
      // CONFIRM: hours/scope and price for monthly support
      answer:
        "Fixes when something goes wrong, the next round of changes and features, keeping it up, watched, and backed up, and someone who knows your product when you need an answer fast.",
    },
    {
      question: "Do you already know the product?",
      answer:
        "If we built it, we already know it. If we didn't, we'll go through it first and tell you what we find.",
    },
    {
      question: "What if something breaks while it's live?",
      // CONFIRM: response expectation when something breaks on a support plan
      answer:
        "That's part of the month. Fixes when something goes wrong, from someone who already knows the product.",
    },
    {
      question: "Can we stop?",
      answer: "Month to month. Pause it or stop it whenever you want.",
    },
    ...sharedFaqItems,
  ],
};

export const serviceNext: Record<string, readonly string[]> = {
  "validate-first": ["build-now", "fix-whats-broken", "keep-it-running"],
  "build-now": ["keep-it-running", "validate-first", "fix-whats-broken"],
  "fix-whats-broken": ["build-now", "keep-it-running", "validate-first"],
  "keep-it-running": ["build-now", "fix-whats-broken", "validate-first"],
};

export const privacy = {
  title: "Privacy",
  intro:
    "Short version: we collect what you send us through the contact form, we use it to reply to you, and we don't share it with anyone.",
  lastUpdated: "18 October 2026",
  sections: [
    {
      heading: "What we collect",
      body: "When you fill in the contact form we receive your name, email address, the message you write, and your company or product name if you add one. Our server also records the IP address and browser the message came from, which is how we keep spam out. We don't use tracking cookies. Our analytics counts visits without identifying anyone or following you around the internet.",
    },
    {
      heading: "Why we collect it",
      body: "To reply to you and to keep a record of the conversation. The IP address and browser details exist only to block automated spam.",
    },
    {
      heading: "Where it goes",
      body: "Your message is stored on our systems and sent to our email. We use a third-party email service to deliver it. We don't sell your details, trade them, or hand them to anyone for marketing.",
    },
    {
      heading: "How long we keep it",
      body: "As long as we need it to deal with your enquiry and any work that follows. Ask us to delete it and we will.",
    },
    {
      heading: "What you can ask for",
      body: "Email contact@idaafa.com and you can ask us what we hold about you, ask us to correct it, or ask us to delete it. No justification needed.",
    },
    {
      heading: "Changes",
      body: "If this page changes we'll update it here.",
    },
    {
      heading: "Questions",
      body: "contact@idaafa.com",
    },
  ],
} as const;

export { beforeYouHirePage } from "./byhuContent";
