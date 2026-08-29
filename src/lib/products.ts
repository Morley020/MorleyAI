import { Activity, Bot, Globe, Sprout, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProductStatus = "IN ACTIVE BUILD" | "LIVE ECOSYSTEM";

export interface Product {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  category: string;
  status: ProductStatus;
  icon: LucideIcon;
  accent: "emerald" | "blue";
  capabilities: string[];
  stack: string[];
  impact: string;
  repoUrl?: string;
  href: string;
}

export const products: Product[] = [
  {
    slug: "nyoniline",
    name: "Nyoniline",
    eyebrow: "FIELD OPERATIONS / POULTRY INTELLIGENCE",
    tagline: "The operating system for Zambia's poultry economy.",
    description:
      "An AI-powered poultry farming platform that brings flock health, market intelligence, feed planning, and agribusiness workflows into one resilient field tool.",
    category: "AgriTech / AI Operations",
    status: "IN ACTIVE BUILD",
    icon: Sprout,
    accent: "emerald",
    capabilities: [
      "AI-assisted disease diagnostics",
      "Broiler and layer flock management",
      "Real-time market prices and marketplace workflows",
      "Offline-first logs with resilient sync",
    ],
    stack: ["React", "TypeScript", "AI Diagnostics", "PWA", "Offline-First"],
    impact: "Operational clarity from coop to market",
    repoUrl: "https://github.com/Morley020/nyoniline",
    href: "/products/nyoniline",
  },
  {
    slug: "lumikiza",
    name: "Lumikiza Zambia",
    eyebrow: "ADVISORY / ENTERPRISE ECOSYSTEM",
    tagline: "Connecting ambition with expertise.",
    description:
      "A dual-sided digital advisory ecosystem helping Zambian founders find strategic support while advisors manage sessions, governance, and relationships.",
    category: "Enterprise Advisory Platform",
    status: "LIVE ECOSYSTEM",
    icon: Users,
    accent: "blue",
    capabilities: [
      "Founder and advisor experiences",
      "Intelligent matching workflows",
      "Session orchestration and governance",
      "Secure, locally aligned infrastructure",
    ],
    stack: ["Next.js", "Matching Logic", "Secure Portal", "Zambian VPS"],
    impact: "A stronger bridge between capital and capability",
    href: "/projects/lumikiza",
  },
];

export const nyonilineProduct = products[0];

export const productSignals = [
  { label: "Signal", value: "AI-assisted care", icon: Bot },
  { label: "Resilience", value: "Offline-first", icon: Activity },
  { label: "Reach", value: "Built for Zambia", icon: Globe },
];
