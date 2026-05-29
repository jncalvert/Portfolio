/** All site copy in one place — pulled from the live noahcalvert.com. */

export const PROFILE = {
  name: "Noah Calvert",
  role: "Product & Brand Designer",
  location: "Kentucky, USA",
  email: "design@noahcalvert.com",
  tagline:
    "Designing clear, scalable, system-driven product interfaces for web and mobile apps, web apps, and websites.",
  // Words that rotate in the hero display line.
  rotating: ["Masterpieces", "Interfaces", "Brands", "Products", "Systems"],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/noah-calvert-358871259/" },
    { label: "Behance", href: "https://www.behance.net/noahcalvert1" },
  ],
};

export const STATS = [
  { value: "5+", label: "Years designing" },
  { value: "20+", label: "Projects shipped" },
  { value: "4", label: "Disciplines" },
  { value: "100%", label: "Systems-driven" },
];

export const SKILLS = [
  {
    id: "ux",
    title: "UI/UX Design",
    blurb:
      "Research-led product design — flows, wireframes, and interaction systems that make complex tools feel obvious.",
    points: ["User flows", "Wireframing", "Prototyping", "Design systems"],
  },
  {
    id: "website",
    title: "Website",
    blurb:
      "High-performance marketing sites engineered for speed, conversion, and search visibility.",
    points: ["Landing pages", "Responsive design", "Conversion", "SEO-ready"],
  },
  {
    id: "brand",
    title: "Brand Identity",
    blurb:
      "Premium brand identity for strong market positioning, authority, and recognition — logo to guidelines.",
    points: ["Logo design", "Visual identity", "Guidelines", "Brand assets"],
  },
  {
    id: "webdev",
    title: "Web Dev",
    blurb:
      "Hand-built, animated front-ends. From Webflow to custom React — design that ships and performs.",
    points: ["Webflow", "React", "Animation", "HTML / CSS"],
  },
];

export type ProjectStatus = "Complete" | "In progress";

export interface Project {
  name: string;
  year: string;
  status: ProjectStatus;
  summary: string;
  tags: string[];
  highlights: string[];
  href: string | null;
}

export const PROJECTS: Project[] = [
  {
    name: "Crometix",
    year: "2026",
    status: "In progress",
    summary:
      "A revenue infrastructure platform built to turn traffic into conversion.",
    tags: ["UI/UX", "Brand identity", "Web design", "Web development"],
    highlights: ["Infrastructure-first positioning", "Audit-to-close funnel"],
    href: null,
  },
  {
    name: "Sellrly",
    year: "2025",
    status: "Complete",
    summary:
      "A scalable brand and website built to convert creators into customers.",
    tags: ["UI/UX", "Web design", "Brand identity"],
    highlights: ["Clearer value messaging", "Scalable page structure"],
    href: "#",
  },
  {
    name: "CKTL",
    year: "2025",
    status: "Complete",
    summary:
      "Designing a clear, functional website for a tack and leather shop.",
    tags: ["UI/UX", "Web design"],
    highlights: ["Responsive redesign", "Clear information hierarchy"],
    href: "#",
  },
  {
    name: "Outfitd",
    year: "2026",
    status: "In progress",
    summary:
      "End-to-end brand identity and mobile app prototyping for an AI-powered fashion product.",
    tags: ["UI/UX", "Mobile app", "Brand identity"],
    highlights: ["AI-driven styling", "App prototyping"],
    href: null,
  },
];

export const OTHER_WORK = [
  {
    name: "Waverunners",
    blurb:
      "A full rebrand for the Waterford Waverunners — 2 logos, brand assets, and guidelines.",
    tags: ["Brand", "Logo"],
  },
  {
    name: "Rustic Vibes",
    blurb: "End-to-end brand concepting and design for an antique shop.",
    tags: ["Brand", "Logo"],
  },
  {
    name: "Lexington Saints",
    blurb:
      "End-to-end brand concepting and design for the Lexington Saints rugby team.",
    tags: ["Brand", "Logo"],
  },
  {
    name: "Harbor & Co.",
    blurb:
      "A refined identity system for a boutique coffee roaster — wordmark, packaging, and palette.",
    tags: ["Brand", "Identity"],
  },
  {
    name: "Northpine",
    blurb:
      "Logo suite and visual language for an outdoor apparel startup, built to scale across products.",
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
    period: "Jan 2025 – Present",
    tags: ["UI/UX", "Web Design", "Brand"],
    blurb:
      "Leading product and visual design across web and mobile — building the design system, marketing site, and brand language end to end.",
  },
  {
    title: "Digital Content Designer",
    company: "Sky Systemz, Kentucky, USA",
    period: "May 2024 – Jan 2025",
    tags: ["Graphic Design", "Web Design"],
    blurb:
      "Produced digital content and web design across campaigns, growing the visual language of the product.",
  },
  {
    title: "Website Designer",
    company: "Sky Systemz, Kentucky, USA",
    period: "Dec 2023 – May 2024",
    tags: ["Graphic Design", "Web Design"],
    blurb:
      "Designed and shipped responsive marketing pages and web assets.",
  },
  {
    title: "Graphic Designer",
    company: "theBulletin.io, Illinois, USA",
    period: "Aug 2023 – May 2024",
    tags: ["Graphic Design"],
    blurb:
      "Created editorial and brand graphics across a fast-moving content operation.",
  },
  {
    title: "Head Swim Coach",
    company: "Waterford Waverunners, Kentucky, USA",
    period: "Feb 2022 – Jul 2025",
    tags: ["Leadership"],
    blurb:
      "Led and coached a competitive swim program — leadership, communication, and team building.",
  },
];

export const TOOLS = [
  "Figma",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "Webflow",
  "React",
  "HTML5",
  "CSS3",
];
