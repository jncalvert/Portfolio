/**
 * All site copy in one place.
 *
 * POSITIONING (the spine everything hangs off):
 *   Noah is a product designer who ships design systems as real code, with a
 *   brand designer's eye for craft. The design-systems work is the headline;
 *   product ownership proves range; brand/visual work is the supporting act,
 *   never the thesis.
 *
 * Anything marked `// TODO` is scaffolding. Real numbers, names, and
 * NDA-cleared detail get filled in as case studies come together.
 */

export const PROFILE = {
  name: "Noah Calvert",
  role: "Product Designer",
  location: "Lexington, Kentucky",
  email: "design@noahcalvert.com",
  // Hero tagline. `taglineMuted` renders after it in a greyed span.
  tagline: "I design and ship the systems behind web and mobile products.",
  taglineMuted: "Built with a brand designer's eye for craft.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/noah-calvert-358871259/" },
    { label: "Behance", href: "https://www.behance.net/noahcalvert1" },
  ],
  github: "https://github.com/jncalvert",
};

export const HERO = {
  // Staggered line reveal on load.
  headline: ["Designing", "Digital", "Systems"],
  featured: { title: "Selected work", note: "4 case studies" },
};

/**
 * The four disciplines, ordered as a spine:
 *   Product Design, Design Systems, Brand Identity, Design Engineering
 * `id` stays fixed (ux / website / brand / webdev) so the card visuals map.
 */
export const DISCIPLINES = [
  {
    id: "ux",
    title: "Product Design",
    blurb:
      "Research-led UX for web and mobile apps. User flows, IA, and interaction patterns that make dense, complex tools feel obvious.",
    points: ["User research", "Flows & IA", "Prototyping", "Usability testing"],
  },
  {
    id: "website",
    title: "Design Systems",
    blurb:
      "Multi-brand systems built to scale. Tokens, components, and documentation in Figma, handed to engineering as versioned code.",
    points: ["Design tokens", "Component libraries", "Figma to code", "Governance"],
  },
  {
    id: "brand",
    title: "Brand Identity",
    blurb:
      "The visual foundation a product stands on. Logo, type, color, and guidelines that hold up from app UI to marketing.",
    points: ["Logo & wordmark", "Visual identity", "Guidelines", "Brand assets"],
  },
  {
    id: "webdev",
    title: "Design Engineering",
    blurb:
      "The bridge to engineering. I prototype in code and ship the design system as one package every app builds from.",
    points: ["Coded prototypes", "Design tokens", "Component APIs", "Motion"],
  },
];

export interface CaseStudy {
  slug: string;
  name: string;
  year: string;
  status: string; // "Shipped" | "In progress" | "Ongoing" | "Design complete"
  discipline: string; // short category line for the card
  summary: string; // one line, card-facing
  tags: string[];
  // --- Detail-view scaffolding (not rendered yet) ------------------------
  role?: string;
  context?: string; // company, timeframe, stack
  problem?: string;
  contributions?: string[];
  outcome?: string; // TODO where confidential: fill with cleared metrics
  confidential?: boolean; // gates how much detail can go public
  href: string | null;
}

/**
 * Four case studies, chosen to span the whole story with minimal overlap:
 *   1. design system: systems thinking, eng collaboration, scale
 *   2. customer portal: 0 to 1 web product ownership
 *   3. payments app: 0 to 1 mobile, trust-heavy domain
 *   4. startup brand + site: brand-to-code range, self-direction
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "design-system",
    name: "Tri-Brand Design System",
    year: "2025 to present",
    status: "Ongoing",
    discipline: "Design systems, web + mobile",
    summary: "One system, three brands, shipped to engineering as code.",
    tags: ["Design systems", "Figma", "React", "npm"],
    role: "Lead UX Designer, system owner",
    context: "Sky Systemz, 2025 to present, Figma / React / npm",
    problem:
      "Three product brands were drifting apart: inconsistent UI, duplicated design work, slow hand-off between design and engineering.",
    contributions: [
      "Defined the token architecture (color, type, spacing, motion) with theming across all three brands",
      "Designed and documented the Figma component library",
      "Partnered with engineering to publish the system as an npm package consumed by multiple apps",
      "Set the contribution and versioning process that keeps design and code in sync",
    ],
    outcome: "TODO: adoption across apps, consistency gains, hand-off speed.",
    confidential: true,
    href: null,
  },
  {
    slug: "customer-portal",
    name: "Customer Portal",
    year: "2025",
    status: "Shipped",
    discipline: "Product design, web app, 0 to 1",
    summary: "A customer portal designed end to end, research to launch.",
    tags: ["Product design", "UX research", "Web app"],
    role: "Lead UX Designer, sole designer",
    context: "Sky Systemz, 2025",
    problem:
      "TODO: what customers couldn't do before, and the support / retention cost of that gap.",
    contributions: [
      "Ran discovery and mapped the core jobs and flows",
      "Designed the IA, wireframes, and full high-fidelity UI",
      "Built new components back into the shared design system",
      "Worked alongside engineering through build and launch",
    ],
    outcome: "TODO: adoption, support-ticket reduction, task-success rate.",
    confidential: true,
    href: null,
  },
  {
    slug: "mobile-app",
    name: "Mobile App",
    year: "2024 to 2025",
    status: "Design complete",
    discipline: "Product design, mobile, 0 to 1",
    summary: "A consumer mobile app designed end to end, zero to prototype.",
    tags: ["Mobile", "Product design", "0 to 1"],
    role: "Lead UX Designer, sole designer",
    context: "Sky Systemz, 2024 to 2025",
    problem: "TODO: the user and business case for the app.",
    contributions: [
      "Designed the end-to-end flows: onboarding, verification, send / receive, history",
      "Established the mobile pattern set and navigation model",
      "Designed for trust: states, confirmations, and error / edge cases",
      "Prototyped for testing and engineering hand-off",
    ],
    outcome: "TODO: validation results, launch status, early metrics.",
    confidential: true,
    href: null,
  },
  {
    slug: "startup-brand-site",
    name: "Startup Brand + Site",
    year: "2025",
    status: "Shipped",
    discipline: "Brand identity, website, Figma to code",
    summary: "Brand identity and marketing site for a startup, Figma to code.",
    tags: ["Brand identity", "Web design", "React"],
    role: "Independent, brand and build",
    context: "Freelance, 2025, Figma / React",
    problem:
      "TODO: the startup's positioning problem and why identity and site had to come together.",
    contributions: [
      "Built the identity: logo, type, color, usage rules",
      "Designed the full marketing site in Figma",
      "Coded and deployed it as a custom React front-end",
    ],
    outcome: "TODO: launch, plus any traction or founder feedback you can share.",
    confidential: false,
    href: null,
  },
];

/**
 * Visual & brand work. TODO: swap in the real projects and their thumbnails.
 */
export const GALLERY = [
  {
    name: "Waverunners",
    blurb: "Full rebrand for the Waterford Waverunners: two logos, assets, and guidelines.",
    tags: ["Brand", "Logo"],
  },
  {
    name: "Rustic Vibes",
    blurb: "End-to-end brand concepting and design for an antique shop.",
    tags: ["Brand", "Logo"],
  },
  {
    name: "Lexington Saints",
    blurb: "End-to-end identity for the Lexington Saints rugby team.",
    tags: ["Brand", "Logo"],
  },
  {
    name: "Harbor & Co.",
    blurb: "Refined identity system for a boutique coffee roaster: wordmark, packaging, palette.",
    tags: ["Brand", "Identity"],
  },
  {
    name: "Northpine",
    blurb: "Logo suite and visual language for an outdoor apparel startup, built to scale.",
    tags: ["Brand", "Logo"],
  },
];

export interface Role {
  title: string;
  company: string;
  period: string;
  tags: string[];
  blurb: string;
}

export const EXPERIENCE: Role[] = [
  {
    title: "Lead UX Designer",
    company: "Sky Systemz, Kentucky, USA",
    period: "Dec 2023 to Present",
    tags: ["Product design", "Design systems", "Brand"],
    blurb:
      "Joined as a website designer and grew into design leadership (Website Designer, then Digital Content Designer, then Lead UX Designer). Now own product and visual design across web and mobile: the tri-brand design system and its npm package, a customer portal built from zero, a payments mobile app, and the brand language. End to end, working directly with product and engineering.",
  },
  {
    title: "Graphic Designer",
    company: "theBulletin.io, Illinois, USA",
    period: "Aug 2023 to May 2024",
    tags: ["Graphic design"],
    blurb: "Editorial and brand graphics across a fast-moving content operation.",
  },
  {
    title: "Head Swim Coach",
    company: "Waterford Waverunners, Kentucky, USA",
    period: "Feb 2022 to Jul 2025",
    tags: ["Leadership"],
    blurb:
      "Led a competitive youth swim program. The first place I practised communication, feedback, and running a team. Also handled the club's rebrand.",
  },
];

export const TOOLS = [
  "Figma",
  "React",
  "TypeScript",
  "Motion",
  "Webflow",
  "Illustrator",
  "After Effects",
];
