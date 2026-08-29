"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const accentStyles = {
  emerald: {
    badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    icon: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    glow: "bg-emerald-400/10",
    line: "bg-emerald-400",
    text: "text-emerald-300",
  },
  blue: {
    badge: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    icon: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    glow: "bg-blue-400/10",
    line: "bg-blue-400",
    text: "text-blue-300",
  },
} as const;

function ProductTelemetry({ product }: { product: (typeof products)[number] }) {
  const accent = accentStyles[product.accent];

  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl">
      <div className={`absolute -right-20 -top-24 h-64 w-64 rounded-full blur-3xl ${accent.glow}`} />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-slate-500">{product.name.toUpperCase()}_OS</span>
      </div>

      <div className="relative mt-7 grid grid-cols-[1fr_0.8fr] gap-4">
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <span>Operating signal</span>
              <span className={accent.text}>LIVE</span>
            </div>
            <div className="flex items-end gap-1.5">
              {[42, 68, 48, 82, 60, 94, 74, 100].map((height, index) => (
                <div key={index} className={`flex-1 rounded-t-sm ${accent.line} ${index % 3 === 0 ? "opacity-50" : "opacity-80"}`} style={{ height: `${height / 1.8}px` }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Coverage</p>
              <p className="mt-2 text-lg font-black text-white">ZMB / 01</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Mode</p>
              <p className="mt-2 text-lg font-black text-white">Resilient</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="font-mono text-[9px] uppercase tracking-widest text-slate-500">System modules</p>
          <div className="mt-4 space-y-3">
            {["Health", "Market", "Flock", "Feed"].map((module, index) => (
              <div key={module} className="flex items-center justify-between rounded-xl bg-black/30 px-3 py-2">
                <span className="text-xs font-semibold text-slate-300">{module}</span>
                <span className={`h-1.5 w-1.5 rounded-full ${index === 1 ? "bg-amber-400" : "bg-emerald-400"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const featured = products[0];
  const featuredAccent = accentStyles[featured.accent];
  const FeaturedIcon = featured.icon;

  return (
    <section id="products" className="relative overflow-hidden border-y border-white/5 bg-[#020617] px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[38rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 font-mono text-xs font-black uppercase tracking-[0.35em] text-emerald-300">
              <Image src="/nyoniline-mark.svg" alt="" width={18} height={18} className="rounded-md" />
              Products in the field
            </div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              From intelligence <span className="text-gradient">to impact.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400">
              Products are MorleyAI-owned systems we are taking from insight to adoption. For completed client and commissioned work, explore our executed project files.
            </p>
          </div>
          <Link href="/#projects" className="group inline-flex shrink-0 items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-white">
            View executed projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid overflow-hidden rounded-[2.5rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-400/[0.08] via-slate-900/80 to-slate-950 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="relative p-8 md:p-12 lg:p-14">
            <div className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-emerald-300 to-transparent" />
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.18em] ${featuredAccent.badge}`}>{featured.status}</span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Featured product / 001</span>
            </div>
            <div className="mt-10 flex items-start gap-5">
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border ${featuredAccent.icon}`}>
                {featured.slug === "nyoniline" ? <Image src="/nyoniline-mark.svg" alt="Nyoniline mark" width={40} height={40} className="rounded-xl" /> : <FeaturedIcon className="h-8 w-8" />}
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">{featured.eyebrow}</p>
                <h3 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">{featured.name}</h3>
              </div>
            </div>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-slate-300">{featured.tagline}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-slate-400">{featured.description}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {featured.capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={featured.href} className="group inline-flex items-center gap-3 rounded-2xl bg-emerald-300 px-5 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5">
                Explore Nyoniline <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              {featured.repoUrl && (
                <a href={featured.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-2xl border border-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-white/30 hover:bg-white/5">
                  <Code2 className="h-4 w-4" /> View build repo
                </a>
              )}
            </div>
          </div>
          <div className="flex items-center p-5 md:p-8 lg:p-10">
            <ProductTelemetry product={featured} />
          </div>
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-blue-300/20 bg-blue-300/[0.05] p-8 md:p-10">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">Executed project files</p>
            <h3 className="mt-4 text-3xl font-black text-white">Built for clients. Delivered in the real world.</h3>
            <p className="mt-4 leading-relaxed text-slate-400">Client products, delivered websites, pending deployments, and research prototypes are organized in the executed project portfolio, with ownership and delivery status made explicit.</p>
            <Link href="/#projects" className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-300">
              Browse project files <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 md:grid-cols-4 md:p-8">
            {featured.stack.slice(0, 4).map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Stack</p>
                <p className="mt-3 text-sm font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
