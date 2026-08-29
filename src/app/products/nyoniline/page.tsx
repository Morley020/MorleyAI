"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Bot, Check, Code2, Database, LineChart, WifiOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const capabilityCards = [
  {
    icon: Bot,
    title: "AI-assisted flock care",
    description: "Disease diagnostics and an AI chat assistant help farmers move from uncertainty to a practical next step.",
  },
  {
    icon: LineChart,
    title: "Market intelligence",
    description: "Market prices and marketplace workflows connect day-to-day farm decisions to the value chain around them.",
  },
  {
    icon: Database,
    title: "One operating view",
    description: "Flock records, vaccinations, feed formulation, finances, and caretaker logs work together in one system.",
  },
  {
    icon: WifiOff,
    title: "Ready for the field",
    description: "Offline-first data capture and sync resilience keep the workflow useful when connectivity is inconsistent.",
  },
];

const buildSignals = [
  ["Product stage", "Active build"],
  ["Primary market", "Zambia"],
  ["Experience", "PWA / mobile-first"],
  ["Built by", "MorleyAI"],
];

export default function NyonilinePage() {
  return (
    <div className="min-h-screen bg-mesh px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <Link href="/#products" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to products
        </Link>

        <div className="mt-14 grid items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              <Image src="/nyoniline-mark.svg" alt="" width={18} height={18} className="rounded-md" /> Product file / 001
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-8xl">
              Nyoniline <br /><span className="text-gradient">in the field.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-slate-300">The operating system for Zambia&apos;s poultry economy.</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Nyoniline brings together the workflows that keep a poultry business moving: flock health, market intelligence, feed planning, agribusiness reporting, and resilient daily records. It is being built for the reality of the farmer, not an idealized connection.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://github.com/Morley020/nyoniline" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-2xl bg-emerald-300 px-5 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5">
                Follow the build <Code2 className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-3 rounded-2xl border border-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-white/30 hover:bg-white/5">
                Build with MorleyAI <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7 }} className="relative flex justify-center">
            <div className="absolute -inset-10 rounded-full bg-emerald-300/10 blur-[100px]" />
            <Image
              src="/nyoniline-dashboard-mock.svg"
              alt="The Nyoniline dashboard on a phone: today's mortality, feed, and weight stats, quick actions, a farming tip, and upcoming tasks."
              width={340}
              height={696}
              className="relative w-full max-w-[340px] h-auto drop-shadow-2xl"
              priority unoptimized
            />
          </motion.div>
        </div>

        <section className="mt-28">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">What is being engineered</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">A clearer day for the farmer.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilityCards.map(({ icon: Icon, title, description }, index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-emerald-300/20 hover:bg-emerald-300/[0.04]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-6 text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Build telemetry</p>
            <div className="mt-6 space-y-4">
              {buildSignals.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-5 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm text-slate-500">{label}</span>
                  <span className="text-right text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 to-transparent p-8 md:p-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Why it matters</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-black text-white md:text-5xl">Local intelligence should feel practical.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">The opportunity is not simply to digitize farming. It is to make better decisions easier to see, easier to trust, and easier to act on, even when the field is busy and connectivity is not guaranteed.</p>
            <div className="mt-8 space-y-3">
              {["Designed around Zambian poultry workflows", "Built to connect daily records with business decisions", "Extensible foundation for the wider agribusiness ecosystem"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-slate-200"><Check className="h-4 w-4 text-emerald-300" />{item}</div>)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
