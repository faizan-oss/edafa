export const beforeYouHirePage = {
  hero: {
    headline: "Read this before you write in.",
    sub: "Most studio sites only tell you what they can do. This page covers the rest: what you'll own, how we build, what happens after launch, and when you'd be better off hiring someone else.",
    meta: "About five minutes to read.",
    fitLink: "Or take the fit check",
  },
  index: [
    { id: "work", number: "01", label: "How we work" },
    { id: "yours", number: "02", label: "What's yours" },
    { id: "build", number: "03", label: "How we build" },
    { id: "safe", number: "04", label: "Keeping it safe" },
    { id: "after", number: "05", label: "After launch" },
    { id: "fit", number: "06", label: "Fit check" },
    { id: "else", number: "07", label: "Hire someone else if" },
    { id: "you", number: "08", label: "Your side of it" },
    { id: "dont", number: "09", label: "What we don't do" },
    { id: "qs", number: "10", label: "Questions" },
  ],
  howWeWork: {
    number: "01",
    id: "work",
    title: "How we work",
    lede: "Six things we do on every project, whatever its size.",
    pairs: [
      {
        title: "We tell you what we actually think.",
        body: "Not the version that keeps the project alive. If the idea looks weak, you'll hear it early, while it's still cheap to change.",
      },
      {
        title: "We'd rather lose the work than take the wrong work.",
        body: "If a freelancer, a template, or nobody at all would serve you better, we'll say so.",
      },
      {
        title: "We write down what we're building before we build it.",
        body: "What's in, what's out, what happens if it changes. Nothing gets built off a conversation nobody wrote down.",
      },
      {
        title: "You own everything from day one.",
        body: "Not on the final invoice. Clause 02 has the full list.",
      },
      {
        title: "We take on a few projects at a time.",
        body: "A small number done properly beats a long list done badly. It's also why we sometimes can't start straight away.",
      },
      {
        title: "We say when we get it wrong.",
        body: "Estimates slip. You'll hear it from us first, with what we're doing about it, not from a missed deadline.",
      },
    ],
  },
  whatsYours: {
    number: "02",
    id: "yours",
    title: "What's yours",
    lede: "The worst thing a studio can do is hold your product hostage. So everything sits in your name from the start, and you can remove our access whenever you like.",
    rules: [
      {
        title: "From day one, not the last payment.",
        body: "Accounts are opened in your name before real work starts. A finished milestone is already yours.",
      },
      {
        title: "Ownership in writing.",
        body: "We sign your NDA before you share anything sensitive, and the agreement assigns all the work to you. Nothing left to an email.",
      },
      {
        title: "You can lock us out any time.",
        body: "If it ever stops working between us, you remove our access and carry on.",
      },
      {
        title: "A handover the next developer can use.",
        body: "Docs and a walkthrough, so anyone can pick it up without calling us.",
      },
    ],
    receipt: {
      title: "Handover list",
      brand: "idaafa",
      items: [
        { label: "Code repository", mark: "YOURS" },
        { label: "Hosting and cloud", mark: "YOURS" },
        { label: "Domain and DNS", mark: "YOURS" },
        { label: "Payment gateway", mark: "YOURS" },
        { label: "Database and backups", mark: "YOURS" },
        { label: "Email, SMS, WhatsApp", mark: "YOURS" },
        { label: "App store accounts", mark: "YOURS" },
        { label: "Analytics and alerts", mark: "YOURS" },
        { label: "Every password and key", mark: "CHANGED" },
      ],
      footnote: "Walked through on the first call. Anything that doesn't apply gets struck off.",
      stamp: "DAY ONE",
    },
  },
  howWeBuild: {
    number: "03",
    id: "build",
    title: "How we build",
    lede: "When time is short, we build less. What we do build still meets the same bar.",
    items: [
      "Someone reviews every change before it goes live",
      "Tests on anything that touches money or stock",
      "Checkout, failed payments and refunds checked by hand",
      "Separate test and live environments",
      "Backups and monitoring from the first release",
      "A written handover at the end",
    ],
    lanes: [
      {
        title: "AI helps us draft",
        chips: ["Setup code", "First drafts", "Test cases", "Documentation"],
      },
      {
        title: "A person always",
        chips: ["Reads every change", "Checks payment and login logic", "Decides what ships"],
      },
    ],
    asideLabel: "Why we're strict about this:",
    aside:
      "fixing AI-built products that broke is one of our services. We see what skipping these steps costs.",
  },
  keepingSafe: {
    number: "04",
    id: "safe",
    title: "Keeping it safe",
    lede: "How we handle your code, data and accounts. Specific enough that you can check it.",
    items: [
      "NDA signed before you share anything sensitive",
      "We only get access to what the work needs",
      "Passwords and keys kept out of the code",
      "Test and live systems kept separate",
      "Payment notifications verified against the gateway",
      "Our access removed when the project ends",
    ],
    honestBold: "We don't hold security certifications",
    honest:
      "like SOC 2 or ISO 27001, and we won't suggest we do. If your procurement needs one, we'll tell you on the first call.",
  },
  afterLaunch: {
    number: "05",
    id: "after",
    title: "After launch",
    lede: "Launch is where real users start finding things. Here's what happens next.",
    stops: [
      { title: "Launch", body: "It goes live in your accounts." },
      { title: "Handover", body: "Docs, a walkthrough, and every password changed." },
      { title: "Fixes on us", body: "Anything that's our mistake, fixed for an agreed period." },
    ],
    forkLabel: "Then it's your call.",
    paths: [
      {
        title: "Go independent",
        body: "Take everything and run it yourself or with your own team. No exit fee.",
        link: null,
      },
      {
        title: "Keep us on",
        body: "Monthly engineering from people who already know the product. Stop whenever you want.",
        link: { label: "See Keep it running", href: "/services/keep-it-running" },
        alt: true,
      },
    ],
    closer: "Either way, it's yours.",
  },
  fitCheck: {
    number: "06",
    id: "fit",
    title: "Fit check",
    lede: "Five honest answers. You'll get a straight verdict, the same way we'd give you one.",
    questions: [
      "You'd rather hear the truth than hear yes.",
      "If real users push back, you're open to reworking it.",
      "You want to own everything, from the code to the accounts.",
      "One person on your side makes the final call.",
      "You care more about it lasting than about it being cheapest.",
    ],
    yes: "Yes",
    no: "Not really",
    verdict: {
      none: {
        heading: "Answer the five.",
        body: "Your verdict shows up here as you go.",
      },
      progress: {
        body: "Your verdict lands once you've answered all five.",
      },
      yes: {
        heading: "We'll probably get on.",
        body: "Sounds like the kind of work we do best. Tell us what you're working on.",
        action: "Tell us the idea",
        href: "/#contact",
      },
      maybe: {
        heading: "Worth a conversation.",
        body: "A couple of these could rub. Read clause 07, then decide.",
        action: "Read clause 07 first",
        href: "#else",
      },
      no: {
        heading: "We're probably the wrong studio.",
        body: "That's fine, and better found now than in week two.",
        action: "See what we'd point you to",
        href: "#dont",
      },
    },
  },
  hireSomeoneElse: {
    number: "07",
    id: "else",
    title: "Hire someone else if",
    lede: "Not a negotiating position. If one of these is you, we'll turn the work down, and it's better for both of us that you know now.",
    items: [
      {
        title: "You want a rubber stamp.",
        body: "If your mind's made up and you want research that proves you right, you'll get the real result instead.",
      },
      {
        title: "You won't change the idea, whatever users say.",
        body: "Then skip validation and tell us to build. It's cheaper than testing something you'll ignore.",
      },
      {
        title: "You want it patched cheaply, no questions.",
        body: "If the honest answer is \"start again\", we'll say it, even though the small job is easier to sell.",
      },
      {
        title: "Price is the only thing you're comparing.",
        body: "Someone will always be cheaper. We don't compete on that.",
      },
      {
        title: "You need it live next week.",
        body: "Real user testing takes the time it takes. We'd rather say no than miss a date.",
      },
      {
        title: "You need certified compliance.",
        body: "No SOC 2, HIPAA or ISO here. If it's a hard requirement, a larger firm is the safer choice.",
      },
      {
        title: "You want a 24/7 desk and an account manager.",
        body: "No overnight rota, no account layer. You talk to the people doing the work.",
      },
      {
        title: "You want someone else's code taken over, unseen.",
        body: "We'll always go through it first and tell you if it's worth continuing.",
      },
    ],
  },
  yourSide: {
    number: "08",
    id: "you",
    title: "Your side of it",
    lede: "Projects go wrong for client reasons as often as studio reasons. This is the deal, both ways.",
    weLabel: "We",
    youLabel: "You",
    rows: [
      {
        we: "Write down what's in before we build.",
        you: "Give us one person who makes the final call.",
      },
      {
        we: "Keep you updated without being asked.",
        you: "Reply within two working days.",
      },
      {
        we: "Tell you what's possible in your budget.",
        you: "Tell us what the budget really is.",
      },
      {
        we: "Give you the result, good or bad.",
        you: "Be willing to hear it.",
      },
    ],
  },
  whatWeDont: {
    number: "09",
    id: "dont",
    title: "What we don't do",
    lede: "Not a judgement on any of it. Just not what we're good at, so we'll point you elsewhere.",
    items: [
      { what: "Logos, brand identity and naming", who: "A brand studio" },
      { what: "Marketing, ads and content", who: "A marketing team" },
      { what: "Staffing, extra hands on your team", who: "A staffing agency" },
      { what: "Shipping first, asking if anyone wants it later", who: "Not anyone, ideally" },
    ],
  },
  questions: {
    number: "10",
    id: "qs",
    title: "Questions",
    items: [
      {
        question: "Will you sign our NDA?",
        answer:
          "Yes, before you share anything sensitive. We'll sign yours, or send ours if you don't have one.",
      },
      {
        question: "When do I actually own the code?",
        answer:
          "From the first day. Accounts are opened in your name before real work starts, and the agreement assigns everything we make to you.",
      },
      {
        question: "What if you stopped working tomorrow?",
        answer:
          "You'd still have the code, every account and the documentation. Nothing sits with us that you'd need back.",
      },
      {
        question: "Do you use AI to write code?",
        answer:
          "Yes, to draft faster. A person reads and approves every change before it ships, and payment and login logic always gets checked line by line.",
      },
      {
        question: "Can our data stay in our own infrastructure?",
        answer: "Yes. Everything is hosted in accounts you own, in the region you choose.",
      },
      {
        question: "Are you certified?",
        answer:
          "No. We hold no formal security or compliance certifications and won't imply otherwise. Clause 04 lists what we actually do.",
      },
    ],
  },
  cta: {
    heading: "Still here?",
    sub: "Then we'll probably get on. Tell us what you're working on.",
    primary: "Tell us the idea",
    primaryHref: "/#contact",
    secondary: "Or message us on WhatsApp",
  },
} as const;

export type FitVerdictState = "none" | "progress" | "yes" | "maybe" | "no";
