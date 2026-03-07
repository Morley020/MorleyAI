"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Terminal, Binary, Activity, LayoutDashboard, Heart, Lock as LockIcon, Briefcase } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        slug: "lumikiza",
        title: "Lumikiza Zambia",
        category: "Enterprise Advisory Platform",
        description: "A high-impact digital ecosystem for Whitewood MS, connecting Zambian entrepreneurs with elite business advisors through intelligent matching and session orchestration.",
        tech: ["Next.js", "Matching Algorithm", "Zambian VPS"],
        impact: "SME Growth Accelerator",
        icon: Shield,
        color: "blue"
    },
    {
        slug: "cdf-dashboard",
        title: "CDF Dashboard",
        category: "Governance & Accountability",
        description: "A national accountability prototype utilizing Sankey diagrams and executive radar charts to track Constituency Development Fund allocation and performance across Zambia.",
        tech: ["Python", "Plotly", "Data Analysis"],
        impact: "Transparent Resource Tracking",
        icon: LayoutDashboard,
        color: "emerald"
    },
    {
        slug: "service-watch",
        title: "Zambia Service Watch",
        category: "Public Service Monitoring",
        description: "A multi-tenant system with backend bot simulators and real-time frontend monitoring to track public service delivery and accountability in Zambia.",
        tech: ["Python", "Docker", "Bot Simulation"],
        impact: "Automated Oversight",
        icon: Activity,
        color: "purple"
    },
    {
        slug: "mat-tracker",
        title: "UTH MAT Tracker",
        category: "Health-Tech Infrastructure",
        description: "A mission-critical prototype for UTH to track Medication-Assisted Treatment (MAT) resources and patient records of change with high precision.",
        tech: ["Python", "Resource Tracking", "Health-Act Ready"],
        impact: "Critical Care Logistics",
        icon: Heart,
        color: "rose"
    },
    {
        slug: "fraud-detection",
        title: "ML Fraud Detection",
        category: "Cybersecurity & Fintech",
        description: "An advanced machine learning suite using 2023 financial datasets to detect credit card fraud with high-precision predictive modeling.",
        tech: ["Python", "Scikit-Learn", "Predictive AI"],
        impact: "Financial Resilience",
        icon: LockIcon,
        color: "amber"
    },
    {
        slug: "latu-foundation",
        title: "Latu Foundation",
        category: "NGO Ecosystem",
        description: "A sophisticated platform developed for LatuFoundation to manage community impact projects and stakeholder engagement across Zambia.",
        tech: ["Next.js", "Platform Engineering", "Cloud Infrastructure"],
        impact: "Local Impact Scale",
        icon: Globe,
        color: "sky"
    },
    {
        slug: "ollie-osg",
        title: "Ollie's OSG",
        category: "Executive Strategy",
        description: "A premium, high-impact branding and digital strategy portal for Ollie Strategic Group, reflecting elite leadership and strategic consulting capabilities.",
        tech: ["Premium UX", "Digital Strategy", "Brand Engineering"],
        impact: "Elite Market Presence",
        icon: Briefcase,
        color: "indigo"
    },
    {
        slug: "aurastream",
        title: "AuraStream",
        category: "Autonomous AI Engineering",
        description: "An intelligent autonomous agent ecosystem that generates high-fidelity products, marketing content, and strategic intelligence logs in real-time.",
        tech: ["Python", "OpenAI API", "Agentic Logic"],
        impact: "Zero-Human Input Workflow",
        icon: Shield,
        color: "blue"
    },
    {
        slug: "hrc-web-app",
        title: "HRC Web App",
        category: "Enterprise NGO Infrastructure",
        description: "A mission-critical system for the Human Rights Commission, automating strategic information mapping and case tracking for national-level compliance.",
        tech: ["Next.js", "Python Backend", "PostgreSQL"],
        impact: "National-Scale Reporting",
        icon: Globe,
        color: "emerald"
    },
    {
        slug: "sentiment-intelligence",
        title: "Sentiment Intelligence",
        category: "Advanced Data Analytics",
        description: "A sophisticated NLP suite for analyzing public sentiment on Zambian services using SVM and Logistic Regression models with high-precision embeddings.",
        tech: ["Python", "Scikit-Learn", "NLP Library"],
        impact: "94% Accuracy Baseline",
        icon: Binary,
        color: "purple"
    },
    {
        slug: "finguard-siem",
        title: "FinGuard SIEM",
        category: "Cyber Resilience",
        description: "Real-time security event monitoring and fraud detection engine, protecting local Zambian financial data against mobile money malware and cybercrime.",
        tech: ["Python", "Network Analysis", "Anomaly AI"],
        impact: "100% Data Sovereignty",
        icon: Activity,
        color: "rose"
    }
];

export default function ProjectShowcase() {
    return (
        <section id="projects" className="py-24 px-6 relative bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-blue-500 font-black text-sm tracking-[0.3em] uppercase mb-4"
                        >
                            <Terminal className="w-4 h-4" />
                            Project Intelligence
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black text-white">
                            Engineering <span className="text-gradient">Projects</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-lg md:text-right max-w-sm">
                        Direct access to the elite engineering projects powering the next generation of Zambian enterprise.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative glass p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all overflow-hidden flex flex-col h-full bg-black/40"
                        >
                            {/* Terminal Header Decorator */}
                            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                <span className="text-[10px] font-mono text-slate-500 ml-4 font-bold uppercase tracking-widest">{project.title}.py - READ_ONLY</span>
                            </div>

                            <div className="flex items-center justify-between mb-8">
                                <div className={`w-14 h-14 rounded-2xl bg-${project.color}-500/10 border border-${project.color}-500/20 flex items-center justify-center`}>
                                    <project.icon className={`w-7 h-7 text-${project.color}-500`} />
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    {project.category}
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors font-mono">
                                {project.title}
                                <span className="animate-pulse ml-2 text-blue-500">_</span>
                            </h3>

                            <p className="text-slate-400 leading-relaxed mb-8 flex-grow text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] bg-black/60 border border-white/10 px-3 py-1.5 rounded-lg text-slate-300 font-mono">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Impact Result</p>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full bg-${project.color}-500 shadow-[0_0_8px] shadow-${project.color}-500/50`} />
                                        <p className={`text-sm font-bold text-${project.color}-400`}>{project.impact}</p>
                                    </div>
                                </div>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="px-6 py-2.5 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-bold text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all font-mono"
                                >
                                    EXECUTE
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
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
