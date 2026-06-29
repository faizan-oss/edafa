export const brand = {
  name: "Edaafa",
  tagline: "Adding more to every idea.",
  arabic: "إضافة",
  footerTagline: "Adding more to every idea.",
} as const;

export const hero = {
  eyebrow: "What we build for your online store",
  equation:
    "storefront + payments + logistics + engagement + operations = one complete store",
  meta: { label: "Services overview", version: "V1 · 2026" },
} as const;

export const overview = {
  eyebrow: "What Edaafa does",
  headline: "We build the whole store, not just the pretty part.",
  highlight: "whole",
  paragraphs: [
    "A real online store is more than a homepage. It's the catalogue, the checkout, the payments, the logistics, and the dashboard you run it from.",
    "We build all of it—India-ready, with UPI, Cash on Delivery, GST-correct invoices, and WhatsApp updates your customers actually read.",
  ],
  pills: [
    "Works on every device",
    "India-ready payments",
    "Built to scale",
    "Yours to own",
  ],
  equation: {
    label: "The Edaafa equation",
    parts: [
      "Storefront",
      "Payments",
      "Logistics",
      "Engagement",
      "Operations",
    ],
    result: "a store that's complete",
  },
  index: {
    eyebrow: "Inside this document",
    columns: [
      {
        title: "The shopping experience",
        href: "/capabilities/shopping-experience",
        items: [
          { num: "01", label: "Storefront & catalogue", href: "/capabilities/shopping-experience" },
          { num: "02", label: "Checkout & payments", href: "/capabilities/shopping-experience" },
        ],
      },
      {
        title: "After the order",
        href: "/capabilities/after-the-order",
        items: [
          { num: "03", label: "Orders, shipping & returns", href: "/capabilities/after-the-order" },
          { num: "04", label: "Accounts & messaging", href: "/capabilities/after-the-order" },
        ],
      },
      {
        title: "Behind the scenes",
        href: "/capabilities/behind-the-scenes",
        items: [
          { num: "05", label: "Admin & operations", href: "/capabilities/behind-the-scenes" },
          { num: "06", label: "SEO & analytics", href: "/capabilities/behind-the-scenes" },
          { num: "07", label: "Foundation", href: "/capabilities/behind-the-scenes" },
        ],
      },
    ],
    footer:
      "This document covers what we deliver in a full e-commerce build. Each capability below is an addition that stacks into a finished, sellable store.",
  },
} as const;

export const shoppingExperience = {
  eyebrow: "01–02 The shopping experience",
  title: "What your customers see & do",
  subtitle:
    "From first browse to a paid order—designed to convert on any device.",
  cards: [
    {
      num: "01",
      label: "Storefront",
      title: "Catalogue & shopping",
      items: [
        "Product pages with size, colour & fit variants",
        "Size guides & fit help to cut returns",
        "Rich galleries—multiple angles, zoom & video",
        "Smart search with filters: size, colour, price, fabric",
        "Collections, lookbooks & “complete the look”",
        "Wishlist, recently viewed & related products",
        "Customer reviews with photos",
      ],
    },
    {
      num: "02",
      label: "Checkout",
      title: "Checkout & payments",
      items: [
        "Fast one-page checkout, smooth on every device",
        "Guest checkout—no forced sign-up",
        "Cash on Delivery with order confirmation",
        "UPI, cards, net-banking, wallets, EMI & pay-later",
        "Razorpay / preferred gateway integration",
        "Discount codes, auto offers & free-shipping rules",
        "Pincode serviceability check",
        "GST-compliant invoices & abandoned-cart recovery",
      ],
    },
  ],
  result:
    "A store a first-time visitor can browse, trust and buy from—on the first try, on any device.",
  resultHighlight: "browse, trust and buy from",
  page: "03 / 06",
} as const;

export const afterTheOrder = {
  eyebrow: "03–04 After the order",
  title: "Fulfilment, accounts & messaging",
  subtitle:
    "From paid order to delivered package—and every message in between.",
  cards: [
    {
      num: "03",
      label: "Fulfilment",
      title: "Orders, shipping & returns",
      items: [
        "Full lifecycle tracking: placed → packed → shipped → delivered",
        "Live order tracking for customers",
        "Shiprocket / courier integration with auto AWB",
        "Returns & size-exchange flows",
        "Refunds or store credit",
        "Return-to-origin (RTO) handling for COD",
      ],
    },
    {
      num: "04",
      label: "Engagement",
      title: "Accounts & messaging",
      items: [
        "OTP / phone login & customer accounts",
        "Saved addresses, order history & reorder",
        "Loyalty, rewards & referrals",
        "WhatsApp: order, delivery & back-in-stock updates",
        "SMS for time-sensitive alerts",
        "Email: receipts, newsletters & win-backs",
        "Review & feedback requests",
      ],
    },
  ],
  result:
    "Fewer “where is my order?” messages—and more reasons for customers to come back.",
  page: "04 / 06",
} as const;

export const behindTheScenes = {
  eyebrow: "05–07 Behind the scenes",
  title: "Your control room & the engine",
  subtitle:
    "The dashboard you run the business from—and the foundation it stands on.",
  cards: [
    {
      num: "05",
      label: "Operations",
      title: "Admin & operations",
      items: [
        "Variant-level inventory with low-stock alerts",
        "Bulk product upload & catalogue management",
        "Order dashboard & fulfilment",
        "Discounts & campaigns engine",
        "Banners, pages & content management",
        "Sales, best-seller & returns analytics",
        "Staff roles & permissions",
      ],
    },
    {
      num: "06",
      label: "Growth",
      title: "SEO & analytics",
      items: [
        "SEO-ready pages with product structured data",
        "Google Analytics 4 & Meta Pixel",
        "Conversion & event tracking for ad campaigns",
        "Reviews & UGC to build trust",
        "Performance tuned for paid-traffic landing",
      ],
    },
  ],
  foundation: {
    num: "07",
    label: "Foundation",
    title: "Speed, security & uptime",
    columns: [
      [
        "Responsive—great on phone, tablet & desktop",
        "Monitored uptime, alerts on downtime",
        "Privacy & policy pages, consent-aware",
      ],
      [
        "Reliable hosting, database & backups",
        "HTTPS / SSL & secure payment handling",
        "Image delivery via CDN",
      ],
    ],
  },
  result:
    "A business you can run from one screen—on a foundation that stays fast and stays up.",
  page: "05 / 06",
} as const;

export const howWeWork = {
  eyebrow: "How we work",
  title: "Six steps, from idea to a store that sells.",
  steps: [
    {
      num: "01",
      title: "Discovery",
      description:
        "We learn the brand, the catalogue and the goals, and agree exactly what the launch includes.",
    },
    {
      num: "02",
      title: "Design",
      description:
        "A responsive storefront shaped around your identity—how it looks, reads and flows on every screen.",
    },
    {
      num: "03",
      title: "Build",
      description:
        "Storefront, admin dashboard and every integration—payments, shipping, WhatsApp, email.",
    },
    {
      num: "04",
      title: "Quality check",
      description:
        "We test the parts that matter most—payments, inventory, returns and checkout edge cases—by hand.",
    },
    {
      num: "05",
      title: "Launch",
      description:
        "We take it live, with every account set up in your name—the store is yours from day one.",
    },
    {
      num: "06",
      title: "Support",
      description:
        "A clean handover, documentation and ongoing care so it keeps running as you grow.",
    },
  ],
  callout: {
    eyebrow: "How we build",
    title: "AI-accelerated. Human-verified.",
    description:
      "We use modern agentic tooling to build faster than a traditional shop—then a person reviews and tests everything that touches money and stock. Speed without the surprises.",
  },
} as const;

export const contact = {
  eyebrow: "Get in touch",
  title: "Let's build your store.",
  subtitle:
    "Tell us about your brand, catalogue, and launch goals. We'll get back to you within one business day.",
  email: "farazrahman.se@gmail.com",
  phone: "+91 (833) 794-5472",
} as const;

export const navLinks = [
  { href: "/capabilities", label: "Capabilities", shortLabel: "Capabilities" },
  { href: "/how-we-work", label: "How we work", shortLabel: "Process" },
  { href: "/contact", label: "Contact", shortLabel: "Contact" },
] as const;

export const capabilitySections = [
  {
    href: "/capabilities",
    label: "Overview",
    shortLabel: "Overview",
  },
  {
    href: "/capabilities/shopping-experience",
    label: "The shopping experience",
    shortLabel: "Shopping",
    eyebrow: "01–02",
    description: "Storefront, catalogue & checkout",
  },
  {
    href: "/capabilities/after-the-order",
    label: "After the order",
    shortLabel: "After order",
    eyebrow: "03–04",
    description: "Fulfilment, accounts & messaging",
  },
  {
    href: "/capabilities/behind-the-scenes",
    label: "Behind the scenes",
    shortLabel: "Behind scenes",
    eyebrow: "05–07",
    description: "Admin, growth & foundation",
  },
] as const;
