"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    ShieldCheck,
    Globe,
    ArrowRight,
    Dna,
    Workflow,
    Sparkles
} from "lucide-react";

const pipelineStages = [
    {
        id: "01",
        name: "Synthesis Agents",
        description: "Autonomous agents ingest your business logic, industry benchmarks, and Zambian regulatory requirements to generate an optimized architectural DNA.",
        icon: Dna,
        color: "blue",
        stats: "48h Discovery"
    },
    {
        id: "02",
        name: "Rapid Forge",
        description: "Our proprietary Forge pipeline translates blueprints into high-performance, full-stack codebases with autonomous unit testing and documentation.",
        icon: Cpu,
        color: "purple",
        stats: "10x Dev Speed"
    },
    {
        id: "03",
        name: "Sentry Integration",
        description: "Deep security hardening using AI-driven VAPT protocols, ensuring immediate compliance with African data protection standards.",
        icon: ShieldCheck,
        color: "rose",
        stats: "Zero-Day Defense"
    },
    {
        id: "04",
        name: "Global Bridge",
        description: "Deployment to our distributed network of Zambian and global nodes, bridging African innovation with international scalability.",
        icon: Globe,
        color: "emerald",
        stats: "Global Scale"
    }
];

export default function AgenticPipeline() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Visuals */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm" />

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 text-blue-500 font-black text-sm tracking-[0.3em] uppercase mb-4"
                    >
                        <Workflow className="w-4 h-4" />
                        The Morley Execution Engine
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Agentic <span className="text-gradient">Pipeline</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We&apos;ve eliminated the friction of traditional development. Our AI-driven pipeline transforms ideas into secure, global-scale infrastructure with unprecedented velocity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {pipelineStages.map((stage, idx) => (
                        <motion.div
                            key={stage.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="group relative"
                        >
                            {/* Connector Arrow for Desktop */}
                            {idx < pipelineStages.length - 1 && (
                                <div className="hidden md:block absolute top-12 -right-6 z-20">
                                    <ArrowRight className="w-6 h-6 text-slate-800 group-hover:text-blue-500 transition-colors" />
                                </div>
                            )}

                            <div className="glass p-8 rounded-[2rem] border border-white/5 group-hover:border-blue-500/30 transition-all h-full flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-14 h-14 rounded-2xl bg-${stage.color}-500/10 border border-${stage.color}-500/20 flex items-center justify-center`}>
                                        <stage.icon className={`w-7 h-7 text-${stage.color}-500`} />
                                    </div>
                                    <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                                        {stage.id}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {stage.name}
                                </h3>

                                <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                                    {stage.description}
                                </p>

                                <div className="pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className={`w-3 h-3 text-${stage.color}-500`} />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            Performance: <span className="text-white">{stage.stats}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Global Bridge Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 glass rounded-3xl border border-blue-500/20 text-center bg-blue-500/5 max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex -space-x-4">
                            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center font-bold text-xs">AF</div>
                            <div className="w-12 h-12 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center font-bold text-xs text-white">MAI</div>
                            <div className="w-12 h-12 rounded-full bg-emerald-600 border-2 border-slate-900 flex items-center justify-center font-bold text-xs text-white">GLO</div>
                        </div>
                        <p className="text-slate-200 font-medium text-lg leading-relaxed">
                            MorleyAI serves as the primary <span className="text-blue-400 font-bold underline decoration-blue-500/40">AI Service Bridge</span>,
                            connecting African localized intelligence with Global enterprise standards.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
