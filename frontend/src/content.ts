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
  { label: "Privacy", href: "/privacy" },
] as const;

export const hero = {
  eyebrow: "Product studio",
  headline: "Test the idea before you build it.",
  sub: "Most ideas fail because nobody actually needed them. We put a real prototype in front of real users, then tell you straight: build it, change it, or drop it.",
  primaryCta: "Tell us the idea",
  secondaryCta: "Already sure? Skip to the build",
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

export const doors = {
  section: "+ Where are you right now",
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
    cta: "Start with validation",
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
    cta: "Start the build",
  },
  fix: {
    tag: "Already built, not working",
    title: "Fix what's broken",
    line: "Built it with AI, or someone went quiet, and now it's failing. We go through it and tell you straight: keep it, fix it, or rebuild it.",
    link: "See how that works",
  },
  keep: {
    tag: "Live and needs care",
    title: "Keep it running",
    line: "Monthly engineering after launch, from people who know your product. Start when you need it, stop when you don't.",
    link: "See how that works",
  },
} as const;

export const whyUs = {
  section: "+ Why us",
  heading: "We'll tell you to kill it.",
  body: "Most studios only make money when they build something, so saying yes is always in their interest. We do it differently. The sprint pays for itself, which means we don't need your idea to be good. If the data says stop, we say stop. That is exactly why you can believe us when we say go.",
  equation: "real prototype + real users + honest data = an answer you can trust",
} as const;

export const whoWeAre = {
  section: "+ Who we are",
  heading: "A team that would rather be right than busy.",
  body: "We take on a few projects at a time. Validation done properly can't be rushed or churned out. We've spent years building real products, web and mobile, including online stores on the Indian stack: Razorpay, Shiprocket, UPI, GST, all the plumbing that just has to work. We bring the same care to working out whether something is worth building in the first place. No jargon, no theatre. A straight answer, and the proof behind it.",
} as const;

export const beforeYouHire = {
  section: "+ Before you hire us",
  heading: "We're not for everyone.",
  intro:
    "Most studios only tell you what they can do. Here's where we're the wrong call. A team that tells you who it can't help is easier to trust on the rest.",
  forYou: {
    title: "This is for you if",
    items: [
      "You'd rather hear the truth than hear yes.",
      "You've got an idea and you're willing to test it before you bet months on it.",
      "You're ready to build, and you want it done properly and owned by you.",
      "You've got something broken and you want to know where you actually stand.",
      "You'll act on what you're shown, even when it stings.",
    ],
  },
  skip: {
    title: "Skip us if",
    items: [
      "You want a rubber stamp, not an answer. If your mind's made up and you just want proof you're right, we're the wrong studio.",
      "You won't change or drop the idea no matter what the users say.",
      "You want the cheapest build going, not one built to last.",
      "You want the broken thing patched cheaply and you don't want to hear if it needs rebuilding.",
    ],
  },
} as const;

export const contact = {
  section: "+ Talk to us",
  heading: "Tell us the idea.",
  intro: "Want it tested, or ready to build? Start here. No pitch, no pressure.",
  whatsapp: "Or message us on WhatsApp",
  submit: "Send",
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
    path: "validate",
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
    note: "What if the answer is don't build it? Then you saved the cost of building it, which is the point. You keep the prototype, the recordings and the findings.",
    footer: "Go ahead and build, and half the sprint fee comes off the bill.",
    cta: "Start with validation",
    featured: true,
  },
  {
    slug: "build-now",
    path: "build",
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
    path: "fix",
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
    path: "keep",
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
