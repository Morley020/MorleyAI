import { Bot, Sprout } from "lucide-react";
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
];

export const nyonilineProduct = products[0];

export const productSignals = [
  { label: "Signal", value: "AI-assisted care", icon: Bot },
  { label: "Resilience", value: "Offline-first", icon: Sprout },
  { label: "Reach", value: "Built for Zambia", icon: Sprout },
];
