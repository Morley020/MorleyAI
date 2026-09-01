"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, Clock3, Code2, ExternalLink, FlaskConical, Globe, HeartPulse, LockKeyhole, Rocket, Sprout, Users, Building2 } from "lucide-react";
import Link from "next/link";

type PortfolioItem = {
  name: string;
  description: string;
  tech: string[];
  href?: string;
  external?: string;
};

type PortfolioGroup = {
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof Sprout;
  accent: "emerald" | "blue" | "amber" | "purple";
  items: PortfolioItem[];
};

const groups: PortfolioGroup[] = [
  {
    eyebrow: "MORLEYAI-OWNED / PRODUCT SYSTEMS",
    title: "Products",
    description: "Systems MorleyAI is building as repeatable products for long-term use and adoption.",
    icon: Sprout,
    accent: "emerald",
    items: [
      {
        name: "Nyoniline",
        description: "An AI-powered poultry operating system for Zambia with flock health, market intelligence, feed planning, and resilient field workflows.",
        tech: ["React", "AI Diagnostics", "Offline-First"],
        href: "/products/nyoniline",
      },
      {
        name: "Zambia Service Watch",
        description: "A MorleyAI product for monitoring public service delivery through structured reporting, multi-tenant workflows, and automated oversight.",
        tech: ["Python", "Monitoring", "Bot Simulation"],
        href: "/projects/service-watch",
      },
    ],
  },
  {
    eyebrow: "CLIENT-OWNED / DEVELOPED BY MORLEYAI",
    title: "Client products and websites",
    description: "Digital products and websites developed for organizations that own and operate the resulting systems.",
    icon: Users,
    accent: "blue",
    items: [
      {
        name: "Lumikiza",
        description: "A Whitewood Management Services product and website connecting Zambian founders with strategic advisors through matching and session workflows.",
        tech: ["Next.js", "Matching Logic", "Secure Portal"],
        href: "/projects/lumikiza",
        external: "https://www.whitewoodms.co.zm/",
      },
      {
        name: "Latu Foundation Website",
        description: "A client website engineered to support the foundation's public presence, community work, and stakeholder engagement.",
        tech: ["Next.js", "Cloud Infrastructure", "Impact UX"],
        href: "/projects/latu-foundation",
      },
      {
        name: "Ollie's OSG",
        description: "A premium digital strategy and leadership portal developed for Ollie Strategic Group.",
        tech: ["Premium UX", "Brand Engineering", "Strategy Portal"],
        href: "/projects/ollie-osg",
      },
    ],
  },
  {
    eyebrow: "DELIVERED BY ADINO CREATIONS",
    title: "Technical assistance & training",
    description: "Client engagements delivered by Adino Creations, now part of MorleyAI, since 2020.",
    icon: Building2,
    accent: "amber",
    items: [
      { name: "ZAMMSA", description: "Technical assistance and training for the Zambia Medicines and Medical Supplies Agency.", tech: ["Data Analytics", "Consulting"] },
      { name: "WWF", description: "Technical assistance and training engagement with WWF.", tech: ["Data Management", "Consulting"] },
      { name: "K·I", description: "Technical assistance and training engagement with K·I.", tech: ["Data Analytics", "Consulting"] },
      { name: "Zambia Sugar", description: "Technical assistance and training engagement with Zambia Sugar.", tech: ["Data Management", "Consulting"] },
      { name: "Office of the Auditor General", description: "Technical assistance and training for the Office of the Auditor General.", tech: ["M&E", "Consulting"] },
      { name: "BBC Media Action", description: "Technical assistance and training engagement with BBC Media Action.", tech: ["Data-Driven Content", "Consulting"] },
      { name: "ZNBS", description: "Technical assistance and training for the Zambia National Building Society.", tech: ["Data Analytics", "Consulting"] },
    ],
  },
  {
    eyebrow: "DEVELOPED / AWAITING CLIENT PAYMENT",
    title: "Pending deployment",
    description: "Completed development that is not yet deployed because the client payment or release step is still outstanding.",
    icon: Clock3,
    accent: "amber",
    items: [
      {
        name: "CPHP Website",
        description: "A developed client website awaiting payment before deployment. It is intentionally not presented as a live public system.",
        tech: ["Web Engineering", "Content Systems", "Deployment Ready"],
        href: "/projects/cphp-website",
      },
    ],
  },
  {
    eyebrow: "PROTOTYPES / RESEARCH SYSTEMS",
    title: "Prototype systems",
    description: "Exploratory systems and technical prototypes created to test workflows, models, and infrastructure patterns.",
    icon: FlaskConical,
    accent: "purple",
    items: [
      { name: "CDF Dashboard", description: "A data visualization prototype for tracking Constituency Development Fund allocation and performance.", tech: ["Python", "Plotly", "Data Analysis"], href: "/projects/cdf-dashboard" },
      { name: "FinGuard SIEM", description: "A cyber-resilience and security event monitoring prototype focused on financial-data protection.", tech: ["Python", "Network Analysis", "Anomaly AI"], href: "/projects/finguard-siem" },
      { name: "ML Fraud Detection", description: "A predictive modeling prototype for identifying suspicious financial transactions.", tech: ["Python", "Scikit-Learn", "Predictive AI"], href: "/projects/fraud-detection" },
      { name: "Human Rights Commission Web Application", description: "A strategic information and case-tracking prototype for national human rights monitoring workflows.", tech: ["Next.js", "Python Backend", "PostgreSQL"], href: "/projects/hrc-web-app" },
      { name: "Malaria Climate Data and Prediction Model", description: "A research prototype exploring climate-linked malaria risk signals and predictive modeling.", tech: ["Python", "Climate Data", "Prediction Models"] },
      { name: "UNICEF School Absentee Monitoring System", description: "A monitoring prototype for understanding school attendance patterns and intervention signals.", tech: ["Data Systems", "Monitoring", "Reporting"] },
      { name: "Ubuntu Bwesu Website", description: "A website prototype developed to support the organization's digital presence and public communication.", tech: ["Web Engineering", "UX Design", "Content Systems"] },
      { name: "Patient Management Systems", description: "Patient-management workflows implemented through DHIS2 Tracker programs for structured health-data operations.", tech: ["DHIS2 Tracker", "Health Data", "Program Design"] },
      { name: "AuraStream", description: "An autonomous AI engineering prototype for generating products, content, and strategic intelligence workflows.", tech: ["Python", "OpenAI API", "Agentic Logic"], href: "/projects/aurastream" },
      { name: "Sentiment Intelligence", description: "An NLP prototype for analyzing public sentiment on Zambian services using supervised learning models.", tech: ["Python", "NLP", "Scikit-Learn"], href: "/projects/sentiment-intelligence" },
    ],
  },
];

const accentStyles = {
  emerald: { icon: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20", line: "bg-emerald-400", label: "text-emerald-300" },
  blue: { icon: "bg-blue-500/10 text-blue-300 border-blue-500/20", line: "bg-blue-400", label: "text-blue-300" },
  amber: { icon: "bg-amber-500/10 text-amber-300 border-amber-500/20", line: "bg-amber-400", label: "text-amber-300" },
  purple: { icon: "bg-purple-500/10 text-purple-300 border-purple-500/20", line: "bg-purple-400", label: "text-purple-300" },
} as const;

function PortfolioCard({ item, accent }: { item: PortfolioItem; accent: PortfolioGroup["accent"] }) {
  const styles = accentStyles[accent];
  return (
    <div className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-black/25 p-6 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
      <div className={`mb-5 h-1 w-12 rounded-full ${styles.line}`} />
      <h4 className="text-xl font-black text-white">{item.name}</h4>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-400">{item.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tech.map((tech) => <span key={tech} className="rounded-lg border border-white/10 bg-black/30 px-2.5 py-1.5 font-mono text-[10px] text-slate-300">{tech}</span>)}
      </div>
      <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
        {item.href ? <Link href={item.href} className={`group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${styles.label}`}>View file <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" /></Link> : <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600"><Code2 className="h-3.5 w-3.5" /> Archive entry</span>}
        {item.external && <a href={item.external} target="_blank" rel="noreferrer" aria-label={`Visit ${item.name} website`} className="ml-auto text-slate-500 transition-colors hover:text-white"><ExternalLink className="h-4 w-4" /></a>}
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="projects" className="relative bg-white/[0.01] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-sm font-black uppercase tracking-[0.3em] text-blue-300"><Rocket className="h-4 w-4" /> Portfolio intelligence</div>
            <h2 className="text-4xl font-black text-white md:text-7xl">What we <span className="text-gradient">build.</span></h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-slate-400 lg:text-right">Products we are taking to market, client systems we have delivered, and prototypes that show how we think.</p>
        </div>

        <div className="space-y-16">
          {groups.map((group, groupIndex) => {
            const Icon = group.icon;
            const styles = accentStyles[group.accent];
            return (
              <motion.div key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: groupIndex * 0.05 }}>
                <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${styles.icon}`}><Icon className="h-6 w-6" /></div>
                    <div><p className={`font-mono text-[10px] font-bold tracking-[0.2em] ${styles.label}`}>{group.eyebrow}</p><h3 className="mt-2 text-3xl font-black text-white md:text-4xl">{group.title}</h3></div>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-slate-500 md:text-right">{group.description}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{group.items.map((item) => <PortfolioCard key={item.name} item={item} accent={group.accent} />)}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-blue-400/20 bg-blue-400/[0.06] p-8 md:flex-row md:items-center md:p-10">
          <div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Need a system of your own?</p><h3 className="mt-3 text-2xl font-black text-white md:text-3xl">Bring us the workflow. We will engineer the operating layer.</h3></div>
          <Link href="#contact" className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-blue-500">Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </div>
    </section>
  );
}
