import { Activity, Bot, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProductStatus = "IN ACTIVE BUILD" | "IN DEVELOPMENT";

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

/**
 * Products are MorleyAI-owned or MorleyAI-led product bets.
 * Completed client and commissioned work belongs in ProjectShowcase instead.
 */
export const products: Product[] = [
  {
    slug: "nyoniline",
    name: "Nyoniline",
    eyebrow: "MORLEYAI PRODUCT / POULTRY INTELLIGENCE",
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
    slug: "service-watch",
    name: "Zambia Service Watch",
    eyebrow: "MORLEYAI PRODUCT / PUBLIC SERVICE INTELLIGENCE",
    tagline: "A clearer signal for public service delivery.",
    description:
      "A MorleyAI monitoring product for structured reporting, multi-tenant oversight, and automated signals across public service workflows in Zambia.",
    category: "Public Service Monitoring",
    status: "IN DEVELOPMENT",
    icon: Activity,
    accent: "blue",
    capabilities: [
      "Structured service-delivery reporting",
      "Multi-tenant monitoring workflows",
      "Automated oversight signals",
      "Executive visibility across service areas",
    ],
    stack: ["Python", "Monitoring", "Bot Simulation", "Multi-Tenant"],
    impact: "More visible public service performance",
    href: "/projects/service-watch",
  },
];

export const nyonilineProduct = products[0];

export const productSignals = [
  { label: "Signal", value: "AI-assisted care", icon: Bot },
  { label: "Resilience", value: "Offline-first", icon: Sprout },
  { label: "Reach", value: "Built for Zambia", icon: Sprout },
];
