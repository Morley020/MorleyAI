import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nyoniline | MorleyAI",
  description: "Nyoniline is MorleyAI's AI-powered poultry farming operating system for Zambia, designed for flock health, market intelligence, feed planning, and resilient field operations.",
  openGraph: {
    title: "Nyoniline | The operating system for Zambia's poultry economy",
    description: "A field-ready poultry intelligence product being built by MorleyAI.",
  },
};

export default function NyonilineLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
