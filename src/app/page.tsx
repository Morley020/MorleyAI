"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Server, ShieldCheck, LayoutDashboard, Binary, Activity, Lock as LockIcon } from "lucide-react";
import Link from "next/link";
import TechStackMarquee from "@/components/TechStackMarquee";
import PartnerNetwork from "@/components/PartnerNetwork";
import ProjectShowcase from "@/components/ProjectShowcase";
import SectorExpertise from "@/components/SectorExpertise";

/**
 * HomePage Structure
 * 
 * 1. Hero Section: High-impact introduction with "AI + Zambia" value prop.
 * 2. Partners: Logos of strategic infrastructure partners (Infratel, etc).
 * 3. Features: 3-column grid highlighting Speed, Local Hosting, and Compliance.
 * 4. Client Portal: Feature showcase for the Dashboard.
 * 5. Contact: Lead capture form.
 */
export default function Home() {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium mb-8"
          >
            <Bot className="w-4 h-4" />
            <span>Africanized AI Engineering & Global Intelligence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
          >
            Agentic Speed.<br />
            <span className="text-gradient">Continental</span> Bridge.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
          >
            MorleyAI serves as the primary <strong>AI Service Bridge</strong> between Africa and the Global market.
            We build high-velocity intelligence solutions that are locally compliant, secure, and ready for worldwide scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/services" className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all flex items-center gap-2 group">
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/compliance" className="px-8 py-4 rounded-xl glass border border-white/10 text-white font-bold hover:bg-white/5 transition-all">
              View Compliance
            </Link>
          </motion.div>
        </div>

        {/* Floating Icons Background */}
        <div className="absolute top-1/4 left-10 opacity-20 hidden lg:block animate-float">
          <Cpu className="w-16 h-16 text-blue-500" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-20 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
          <Server className="w-16 h-16 text-purple-500" />
        </div>
      </section>

      {/* Partner Logos Section */}
      <PartnerNetwork />

      {/* Sector Expertise Section */}
      <SectorExpertise />

      {/* Features Grid */}
      <section className="py-24 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The MorleyAI Advantage</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] glass hover:border-blue-500/30 transition-all border border-white/5">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <Binary className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Software Engineering</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Bespoke enterprise architecture built with AI velocity. We specialize in high-scale ERPs, Fintech, and custom organizational systems.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] glass hover:border-rose-500/30 transition-all border border-white/5">
              <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 border border-rose-500/20">
                <ShieldCheck className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Cyber Security</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Elite offensive and defensive operations. We ensure Act No. 3 compliance and 100% data sovereignty through local Zambian hosting.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] glass hover:border-emerald-500/30 transition-all border border-white/5">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <Activity className="text-emerald-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Monitoring & Evaluation</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Data-driven insight frameworks. We automate organizational reporting and impact analysis with advanced predictive ML agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <TechStackMarquee />

      {/* Selected Works Section */}
      <ProjectShowcase />

      {/* Client Portal Preview Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20">
              <LayoutDashboard className="w-4 h-4" />
              <span>Full Visibility & Control</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              The MorleyAI <br />
              <span className="text-gradient">Client Portal</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Every client gets exclusive access to our **Secure Intelligence Command Center**.
              Monitor your cyber-security status, view real-time log blocking, and access
              AI-driven predictive analytics for your business—all from one secure dashboard.
            </p>
            <div className="space-y-4">
              {[
                { title: "Real-time Threat Monitoring", desc: "See every malicious IP blocked in Zambia." },
                { title: "Predictive Sales Analytics", desc: "Forecast inventory needs with ML agents." },
                { title: "Automated Compliance Audits", desc: "Generate legal PDF reports in one click." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/20 group">
              Enter Portal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-8 border border-white/10 shadow-2xl relative z-10 overflow-hidden">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] font-mono text-slate-500">MORLEY-AI_COMMAND-CENTER_V2.1</span>
              </div>
              <div className="space-y-6 opacity-60 pointer-events-none select-none">
                {/* Mock Dashboard Preview */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/5 rounded-2xl border border-white/5 p-4">
                    <div className="w-full h-2 bg-blue-500/20 rounded-full mb-2" />
                    <div className="w-1/2 h-2 bg-blue-500/20 rounded-full" />
                  </div>
                  <div className="h-24 bg-white/5 rounded-2xl border border-white/5 p-4">
                    <div className="w-full h-8 bg-emerald-500/10 rounded-xl" />
                  </div>
                </div>
                <div className="h-32 bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col justify-end">
                  <div className="flex gap-2 items-end h-full">
                    {[40, 70, 45, 90, 65, 80].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-grow bg-blue-500/20 rounded-t-sm" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-blue-600 rounded-full shadow-2xl animate-pulse">
                  <LockIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto glass p-12 rounded-3xl border border-blue-500/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Launch Your Project</h2>
            <p className="text-slate-400 mt-2">Ready to transform your business with Zambian AI?</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Lead captured! We will contact you shortly."); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Chanda Musonda" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Your Vision</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors h-32" placeholder="Tell us about the software your business needs..." required />
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20">
              Send Lead
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
