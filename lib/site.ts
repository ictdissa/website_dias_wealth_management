import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  FileText,
  GraduationCap,
  Landmark,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const siteConfig = {
  name: "Dias Wealth Management",
  shortName: "Dias Wealth",
  description:
    "Dias Wealth Management provides private wealth planning, protection advisory, retirement strategy, and long-term guidance for individuals, families, and business owners.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "hello@diaswealth.com",
  phone: "+65 6234 8820",
  address: "Raffles Place, Singapore",
};

export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const heroStats = [
  { value: "24h", label: "initial response target" },
  { value: "1:1", label: "adviser-led relationship" },
  { value: "Long-term", label: "planning horizon" },
];

export const homePillars: FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: "Advice built on trust",
    description:
      "We focus on clear communication, suitability, and long-term relationships rather than product-led selling.",
  },
  {
    icon: LineChart,
    title: "Planning with structure",
    description:
      "Each recommendation is framed around goals, risk, time horizon, and practical next steps.",
  },
  {
    icon: Users,
    title: "Personal and responsive",
    description:
      "Clients work with a team that values responsiveness, clarity, and steady support over time.",
  },
];

export const serviceCategories = [
  {
    icon: ShieldCheck,
    title: "Protection Planning",
    description:
      "Advice for individuals, families, and business owners who want to strengthen financial resilience and protect what matters most.",
    bullets: ["Personal risk review", "Family protection planning", "Business continuity considerations"],
  },
  {
    icon: LineChart,
    title: "Savings & Investment Guidance",
    description:
      "Structured support around savings priorities, portfolio direction, and long-term investment decision-making.",
    bullets: ["Goal-based planning", "Risk-aware allocation discussions", "Regular review conversations"],
  },
  {
    icon: Landmark,
    title: "Retirement & Legacy Planning",
    description:
      "Planning for income sustainability, retirement transitions, and the orderly transfer of wealth across generations.",
    bullets: ["Retirement readiness", "Income planning", "Legacy and succession priorities"],
  },
  {
    icon: FileText,
    title: "Corporate & Executive Advisory",
    description:
      "Guidance for founders, professionals, and leadership teams balancing personal planning with business responsibilities.",
    bullets: ["Key person considerations", "Executive protection needs", "Integrated personal and business planning"],
  },
] as const;

export const aboutPrinciples: FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: "Clarity before complexity",
    description: "We believe financial advice should help clients understand their decisions with confidence.",
  },
  {
    icon: Users,
    title: "Relationships over transactions",
    description: "We aim to build long-term partnerships grounded in trust, consistency, and good judgment.",
  },
  {
    icon: Sparkles,
    title: "Professional, calm, and practical",
    description: "Our approach combines disciplined planning with communication that is straightforward and human.",
  },
];

export const aboutTimeline = [
  {
    step: "01",
    title: "Understand your priorities",
    description: "We begin by listening carefully to your goals, obligations, concerns, and time horizon.",
  },
  {
    step: "02",
    title: "Shape a suitable strategy",
    description: "We structure recommendations around protection, growth, liquidity, and long-term alignment.",
  },
  {
    step: "03",
    title: "Review and evolve",
    description: "As life and business circumstances change, your plan should be reviewed and refined with them.",
  },
];

export const careerTracks = [
  {
    icon: GraduationCap,
    title: "Internship Programme",
    description:
      "For students and early-career candidates seeking exposure to advisory work, client support, marketing, and operations.",
    bullets: ["Mentored learning", "Practical project work", "Exposure to multiple functions"],
  },
  {
    icon: Landmark,
    title: "Advisory & Planning",
    description:
      "For candidates interested in relationship management, planning conversations, and long-term client support.",
    bullets: ["Client communication", "Needs analysis", "Professional development"],
  },
  {
    icon: Briefcase,
    title: "Operations & Business Support",
    description:
      "For organised, analytical profiles supporting execution quality, reporting, documentation, and internal workflow discipline.",
    bullets: ["Operational excellence", "Process improvement", "Cross-team collaboration"],
  },
] as const;

export const internshipAreas: FeatureItem[] = [
  {
    icon: Sparkles,
    title: "Marketing & Brand Support",
    description: "Assist with content, campaigns, event support, and digital communication across public touchpoints.",
  },
  {
    icon: LineChart,
    title: "Research & Market Support",
    description: "Help prepare summaries, organise data, and support internal research and reporting workflows.",
  },
  {
    icon: Users,
    title: "Client Experience",
    description: "Support meeting preparation, follow-up coordination, and the overall quality of client-facing materials.",
  },
  {
    icon: FileText,
    title: "Operations & Documentation",
    description: "Improve consistency across records, internal process documents, and administrative workflows.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery meeting",
    description: "An initial conversation helps us understand your objectives, family context, and planning priorities.",
  },
  {
    step: "02",
    title: "Recommendation and review",
    description: "We present a suitable direction clearly, discuss trade-offs, and answer questions in plain language.",
  },
  {
    step: "03",
    title: "Implementation and ongoing care",
    description: "Once a plan is in place, we stay involved through regular reviews and responsive follow-through.",
  },
];

export const careerProcessSteps = [
  {
    step: "01",
    title: "Application review",
    description: "We review your background, motivation, and any relevant coursework, projects, or work samples.",
  },
  {
    step: "02",
    title: "Introductory conversation",
    description: "A short discussion helps us understand your interests, communication style, and role alignment.",
  },
  {
    step: "03",
    title: "Practical assessment",
    description: "Where relevant, candidates complete a short exercise tied to the responsibilities of the role.",
  },
  {
    step: "04",
    title: "Final fit and offer",
    description: "Selected applicants are matched to the team and work stream where they can contribute best.",
  },
];

export const faqs = [
  {
    question: "Who should apply?",
    answer:
      "Students, recent graduates, and early-career professionals interested in wealth management, planning, marketing, client support, operations, or related analytical work.",
  },
  {
    question: "Do applicants need prior finance experience?",
    answer:
      "Not necessarily. Curiosity, communication, initiative, and the ability to learn quickly are all highly valued.",
  },
  {
    question: "What makes a strong application?",
    answer:
      "A concise CV, evidence of initiative, relevant projects or coursework, and a clear explanation of why the role is a good fit.",
  },
  {
    question: "What kind of environment can candidates expect?",
    answer:
      "A professional, team-oriented setting where attention to detail, integrity, and responsiveness matter.",
  },
];

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const trustBullets = [
  "Private, advice-led client conversations",
  "Clear service structure across protection, planning, and long-term wealth decisions",
  "Responsive communication with a calm, professional tone",
  "A disciplined process built around suitability and follow-through",
];

export const serviceHighlights = [
  {
    title: "Private consultation",
    description: "A confidential first conversation for clients who want to discuss their priorities in more detail.",
  },
  {
    title: "Planning review",
    description: "A structured review of existing arrangements, goals, and areas that may need attention.",
  },
  {
    title: "Business and family priorities",
    description: "Support for clients balancing personal wealth decisions with family responsibilities or business considerations.",
  },
];

export const footerNote =
  "Dias Wealth Management supports individuals, families, and business owners with clear, long-term thinking across protection, planning, and wealth decisions.";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Singapore",
    streetAddress: siteConfig.address,
  },
};

export const homeIntroCards = [
  {
    title: "Personalised planning",
    description: "Advice shaped around your goals, stage of life, and responsibilities rather than a one-size-fits-all path.",
  },
  {
    title: "Long-term perspective",
    description: "We help clients think beyond immediate decisions and plan with greater confidence over time.",
  },
  {
    title: "Clear communication",
    description: "Complex financial topics are explained with structure, transparency, and practical next steps.",
  },
];

export const contactReasons = [
  "Arrange a private consultation",
  "Review your protection or retirement priorities",
  "Discuss business owner or executive planning needs",
  "Ask about partnerships, referrals, or careers",
];

export const contactCards = [
  {
    icon: Building2,
    title: "Office",
    description: "Raffles Place, Singapore — client meetings are available by appointment.",
  },
  {
    icon: FileText,
    title: "Response time",
    description: "Most enquiries receive an initial response within one business day.",
  },
  {
    icon: CheckCircle2,
    title: "Confidential handling",
    description: "We keep enquiries focused, relevant, and handled with care from the first conversation.",
  },
];
