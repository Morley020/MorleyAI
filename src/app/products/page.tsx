import { ArrowUpRight, Check, Leaf } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata = {
  title: "Products | MorleyAI",
  description: "Explore the AI products and digital operating systems being built by MorleyAI for Africa.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-mesh px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            <Leaf className="h-4 w-4" /> MorleyAI products
          </div>
          <h1 className="mt-8 text-5xl font-black leading-[0.94] tracking-tight text-white md:text-8xl">Useful intelligence, <span className="text-gradient">shipped.</span></h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">Products are MorleyAI-owned systems that we are developing for repeatable use and long-term adoption. Client-owned products and completed commissioned work are documented separately in our executed project portfolio.</p>
        </div>

        <div className="mt-20 space-y-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isFeatured = index === 0;
            return (
              <article key={product.slug} className={`grid gap-8 rounded-[2.5rem] border p-8 md:p-12 lg:grid-cols-[0.85fr_1.15fr] ${isFeatured ? "border-emerald-300/20 bg-gradient-to-br from-emerald-300/[0.09] to-transparent" : "border-white/10 bg-white/[0.03]"}`}>
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Product / {String(index + 1).padStart(3, "0")}</span>
                    <span className={`rounded-full border px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.14em] ${isFeatured ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-300" : "border-blue-300/20 bg-blue-300/10 text-blue-300"}`}>{product.status}</span>
                  </div>
                  <div className="mt-10 flex items-start gap-5">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${isFeatured ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-300" : "border-blue-300/20 bg-blue-300/10 text-blue-300"}`}><Icon className="h-7 w-7" /></div>
                    <div>
                      <p className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${isFeatured ? "text-emerald-300" : "text-blue-300"}`}>{product.eyebrow}</p>
                      <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">{product.name}</h2>
                    </div>
                  </div>
                  <p className="mt-7 text-2xl font-bold leading-snug text-slate-200">{product.tagline}</p>
                  <p className="mt-5 leading-relaxed text-slate-400">{product.description}</p>
                  <Link href={product.href} className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5">
                    Open product file <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
                <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-black/20 p-7 md:p-9">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Core capability set</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {product.capabilities.map((capability) => <div key={capability} className="flex gap-3 text-sm leading-relaxed text-slate-300"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${isFeatured ? "text-emerald-300" : "text-blue-300"}`} />{capability}</div>)}
                    </div>
                  </div>
                  <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                    <div><p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Category</p><p className="mt-2 text-sm font-bold text-white">{product.category}</p></div>
                    <div><p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Impact</p><p className="mt-2 text-sm font-bold text-white">{product.impact}</p></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Next MorleyAI product / your problem</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black text-white md:text-5xl">Have a system that should exist?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-400">Bring us the workflow, the constraint, or the opportunity. We will help you turn it into a product people can depend on.</p>
          <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-blue-500">Start a build <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  );
}
