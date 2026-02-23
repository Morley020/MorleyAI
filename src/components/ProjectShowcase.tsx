"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Shield, Database, Globe, Layers } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Lumikiza Zambia",
        category: "Digital Sovereignty Platform",
        description: "Zambia's premier infrastructure bridge for secure, locally-compliant cloud operations and agency deployment.",
        tech: ["Next.js", "AI Agents", "Local VPS"],
        impact: "100% Data Sovereignty",
        icon: Shield,
        color: "blue"
    },
    {
        title: "eCHIS v2.0",
        category: "National Health Intelligence",
        description: "A joint partnership initiative digitizing community health data capture and monitoring systems across the nation.",
        tech: ["PostgreSQL", "React", "Node.js"],
        impact: "65% Faster Reporting",
        icon: Database,
        color: "purple"
    },
    {
        title: "Service Watch",
        category: "Citizen Intelligence Hub",
        description: "Real-time service monitoring platform empowering citizens through automated data collection and status tracking.",
        tech: ["WhatsApp API", "Analytics", "Real-time DB"],
        impact: "25k+ Active Users",
        icon: Globe,
        color: "emerald"
    }
];

export default function ProjectShowcase() {
    return (
        <section className="py-24 px-6 relative bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-blue-500 font-black text-sm tracking-[0.3em] uppercase mb-4"
                        >
                            <Layers className="w-4 h-4" />
                            Bespoke Intelligence
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black text-white">
                            Selected <span className="text-gradient">Impact</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-lg md:text-right max-w-sm">
                        Proven engineering excellence delivering high-stakes solutions for the African and Global enterprise.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="group relative glass p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all overflow-hidden flex flex-col h-full"
                        >
                            {/* Animated Background Glow */}
                            <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-${project.color}-500/10 blur-[80px] rounded-full group-hover:bg-${project.color}-500/20 transition-all duration-700`} />

                            <div className="flex items-center justify-between mb-10">
                                <div className={`w-14 h-14 rounded-2xl bg-${project.color}-500/10 border border-${project.color}-500/20 flex items-center justify-center`}>
                                    <project.icon className={`w-7 h-7 text-${project.color}-500`} />
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    {project.category}
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] bg-black/40 border border-white/5 px-2 py-1 rounded text-slate-500">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Impact Result</p>
                                    <p className={`text-sm font-bold text-${project.color}-400`}>{project.impact}</p>
                                </div>
                                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <Link href="/about" className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-bold text-sm tracking-widest uppercase">
                        View All Intelligence Files
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
