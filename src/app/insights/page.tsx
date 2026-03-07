"use client";

import { motion } from "framer-motion";
import { Newspaper, BookOpen, Fingerprint } from "lucide-react";
import NewsFeed from "@/components/NewsFeed";
import ThoughtLeadership from "@/components/ThoughtLeadership";

/**
 * Insights Page
 * 
 * The central intelligence hub of MorleyAI.
 * Combines live market breaking news with strategic thought leadership.
 */
export default function InsightsPage() {
    return (
        <div className="pt-24 pb-20 px-6 min-h-screen bg-mesh relative overflow-hidden">
            {/* Tactical background elements */}
            <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-40 left-[-5%] w-[400px] h-[400px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Hero Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black border border-blue-500/20 mb-8 inline-block uppercase tracking-[0.3em]"
                    >
                        <Fingerprint className="w-4 h-4" />
                        Intelligence Command Center
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9]"
                    >
                        Strategic <br />
                        <span className="text-gradient">Insights.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl leading-relaxed"
                    >
                        The intersection of elite Python engineering, cybersecurity protocols, and autonomous AI strategy in the Zambian market.
                    </motion.p>
                </div>

                {/* Section 1: Thought Leadership */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/20">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Thought Leadership</h2>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest tracking-tighter">Original briefs by Morley Mujansi</p>
                        </div>
                    </div>

                    <ThoughtLeadership />
                </section>

                {/* Section 2: Live Intelligence Feed */}
                <section className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/20">
                                <Newspaper className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Market Intelligence</h2>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest tracking-tighter">Real-time AI & Cybersecurity Monitoring</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Live Signals Active</span>
                        </div>
                    </div>

                    <NewsFeed />
                </section>

                {/* Footer Insight Grid */}
                <div className="mt-40 pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12 opacity-50">
                    <div className="space-y-4">
                        <div className="w-12 h-1 bg-blue-500" />
                        <h4 className="font-bold text-white text-sm uppercase">Resilience-First</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Our insights focus on building systems that survive and evolve within infrastructure-constrained environments.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-1 bg-emerald-500" />
                        <h4 className="font-bold text-white text-sm uppercase">Data Sovereignty</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Analyzing the shift towards local data hosting and its competitive advantage for Zambian business.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-1 bg-purple-500" />
                        <h4 className="font-bold text-white text-sm uppercase">Agentic Future</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Charting the transition from traditional software to autonomous AI agent ecosystems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
