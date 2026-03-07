"use client";

import { motion } from "framer-motion";
import { BookOpen, User, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

/**
 * ThoughtLeadership Component
 * 
 * Showcases original articles and strategic insights by Morley Mujansi.
 * Establishes authority in the Zambian AI & Engineering space.
 */
export default function ThoughtLeadership() {
    const insights = [
        {
            title: "Sovereign Intelligence: Why Zambia Needs Locally-Hosted AI",
            excerpt: "As data becomes the new gold, local infrastructure isn't just a technical preference—it's a requirement for national security and economic resilience.",
            category: "Strategic Infrastructure",
            readTime: "8 min read",
            date: "March 5, 2026"
        },
        {
            title: "Beyond the API: Engineering Custom Python Agents for Zambian Mining",
            excerpt: "Generic LLMs fail when they meet local industrial complexity. How we built autonomous agents that understand mining workflows in the Copperbelt.",
            category: "Industrial AI",
            readTime: "12 min read",
            date: "Feb 28, 2026"
        },
        {
            title: "Data Protection Act No. 3: A Checklist for Tech Founders",
            excerpt: "Navigating Zambia's 2021 Data Protection implementation doesn't have to be a blocker. A developer's guide to compliant architecture.",
            category: "Compliance",
            readTime: "6 min read",
            date: "Feb 15, 2026"
        }
    ];

    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {insights.map((insight, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass p-8 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <BookOpen className="w-24 h-24 text-blue-500" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase rounded-full">
                                    {insight.category}
                                </span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{insight.readTime}</span>
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                                {insight.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                {insight.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border border-blue-400">
                                        <User className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white uppercase tracking-tighter">Morley Mujansi</p>
                                        <p className="text-[10px] text-slate-500 uppercase">{insight.date}</p>
                                    </div>
                                </div>
                                <button className="p-3 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all group/btn">
                                    <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="glass p-12 rounded-[3.5rem] border border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
                <div className="max-w-3xl relative z-10">
                    <h2 className="text-3xl font-black text-white mb-4">Request a Strategic Briefing</h2>
                    <p className="text-slate-400 mb-8 max-w-xl">
                        Interested in having Morley Mujansi speak at your event or advise your board on AI integration and cybersecurity sovereignty?
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-blue-600 hover:text-white transition-all"
                    >
                        <MessageSquare className="w-4 h-4" />
                        Initiate Strategic Dialogue
                    </Link>
                </div>
                <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-10 hidden lg:block">
                    <User className="w-96 h-96 text-blue-400" />
                </div>
            </div>
        </div>
    );
}
