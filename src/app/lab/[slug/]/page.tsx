"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Cpu, Database, Shield, Sparkles, Binary, Users, ArrowRight, Heart, LayoutDashboard, Globe, Lock as LockIcon, Briefcase, Activity } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ProjectMetric {
    label: string;
    value: string;
}

interface ProjectData {
    title: string;
    tagline: string;
    category: string;
    description: string;
    stack: string[];
    metrics: ProjectMetric[];
    icon: React.ElementType;
    color: string;
}

/**
 * Lab Project Deep Dive Page
 * 
 * Provides an elite technical walkthrough of each 'Intelligence File'.
 * Focuses on 'Agentic Performance' and 'Mission-Critical Architecture'.
 */
export default function ProjectDeepDive() {
    const { slug } = useParams();

    // In a real scenario, this would be fetched from a CMS or local JSON
    const projectData: Record<string, ProjectData> = {
        "lumikiza": {
            title: "Lumikiza Zambia",
            tagline: "Connecting Ambition with Expertise",
            category: "Enterprise Advisory Platform",
            description: "Lumikiza is Whitewood Management Services' flagship digital bridge. It serves as a dual-sided ecosystem where Zambian Founders find strategic mentorship and Advisors manage governance-level consulting—all powered by a high-performance MorleyAI backend.",
            stack: ["Next.js", "Intelligent Matching Algorithm", "Secure Portal Tech"],
            metrics: [
                { label: "Community", value: "Founders + Advisors" },
                { label: "Architecture", value: "Multi-Tenant Hub" },
                { label: "Compliance", value: "Data Sovereignty 100%" }
            ],
            icon: Shield,
            color: "blue"
        },
        "cdf-dashboard": {
            title: "CDF Dashboard",
            tagline: "Transparent National Accountability",
            category: "Governance & Accountability",
            description: "A Python-powered executive dashboard designed for the national tracking of Constituency Development Funds. It utilizes complex data visualization (Sankey, Radar, Funnel) to provide real-time accountability for public resource distribution.",
            stack: ["Python", "Plotly / Dash", "Automated Data Ingestion"],
            metrics: [
                { label: "Data Quality", value: "High-Precision" },
                { label: "Insight Speed", value: "Real-Time Visualization" },
                { label: "Scale", value: "National Tracking" }
            ],
            icon: LayoutDashboard,
            color: "emerald"
        },
        "service-watch": {
            title: "Zambia Service Watch",
            category: "Public Service Monitoring",
            tagline: "Automated Oversight for the Nation",
            description: "An advanced monitoring system designed to track public service delivery. Featuring a multi-tenant backend and autonomous bot simulators, it provides a comprehensive oversight mechanism for service accountability.",
            stack: ["Python Backend", "Dockerized Microservices", "Bot Simulation"],
            metrics: [
                { label: "Bot Precision", value: "99.2%" },
                { label: "Uptime", value: "99.9%" },
                { label: "Monitoring", value: "Multi-Tenant Ready" }
            ],
            icon: Activity,
            color: "purple"
        },
        "mat-tracker": {
            title: "UTH MAT Tracker",
            category: "Health-Tech Infrastructure",
            tagline: "Logistical Precision in Critical Care",
            description: "A sophisticated medical resource tracking system developed for the University Teaching Hospital (UTH). It specifically monitors Medication-Assisted Treatment (MAT) allocations and patient progress logs with mission-critical accuracy.",
            stack: ["Python Engine", "Resource Allocation Logic", "Secure Ledger"],
            metrics: [
                { label: "Log Accuracy", value: "Zero-Error Tolerance" },
                { label: "Impact", value: "Patient Outcome Focus" },
                { label: "Compliance", value: "Health Data Secure" }
            ],
            icon: Heart,
            color: "rose"
        },
        "fraud-detection": {
            title: "ML Fraud Detection",
            category: "Cybersecurity & Fintech",
            tagline: "Predictive Defense for Zambian Fintech",
            description: "An intelligent security engine that utilizes advanced machine learning models (SVM, Random Forest) to detect and flag fraudulent credit card transactions. Optimized with contemporary 2023 financial behavior datasets.",
            stack: ["Python", "Scikit-Learn / ML Models", "Strategic Analysis"],
            metrics: [
                { label: "Detection Rate", value: "High-Precision" },
                { label: "Analysis Depth", value: "Behavioral Analytics" },
                { label: "Security", value: "Proactive Defense" }
            ],
            icon: LockIcon,
            color: "amber"
        },
        "latu-foundation": {
            title: "Latu Foundation",
            category: "NGO Ecosystem",
            tagline: "Digital Infrastructure for Community Impact",
            description: "A modern platform engineered for LatuFoundation to manage national community involvement. It bridges the gap between social initiatives and technical management through a sleek, high-availability engagement portal.",
            stack: ["Next.js", "Cloud-Native Architecture", "Impact Analytics"],
            metrics: [
                { label: "Stakeholders", value: "National-Scale" },
                { label: "Data Insight", value: "High-Resolution Reporting" },
                { label: "Stability", value: "Mission-Critical Ready" }
            ],
            icon: Globe,
            color: "sky"
        },
        "ollie-osg": {
            title: "Ollie's OSG",
            category: "Executive Strategy",
            tagline: "The Digital Hub of Elite Leadership",
            description: "A premium branding and strategy portal for Ollie Strategic Group. It mirrors the elite profile of General Oliver Mubita, providing a sophisticated platform for strategic consulting and executive leadership coordination.",
            stack: ["High-End UX Design", "Branding Framework", "Secure Strategic File Access"],
            metrics: [
                { label: "Brand Presence", value: "Elite High-Impact" },
                { label: "User Experience", value: "Frictionless Flow" },
                { label: "Identity", value: "Executive Strategy Ready" }
            ],
            icon: Briefcase,
            color: "indigo"
        },
        "aurastream": {
            title: "AuraStream",
            tagline: "The Pulse of Autonomous Intelligence",
            category: "Autonomous AI Engineering",
            description: "AuraStream is a self-evolving agent ecosystem designed to automate the entire lifecycle of digital product generation. By leveraging high-precision LLM reasoning, it generates everything from database schemas to marketing copy with zero human intervention.",
            stack: ["Python", "OpenAI o1-Reasoning", "Zambian VPS Infrastructure"],
            metrics: [
                { label: "Data Integrity", value: "99.9%" },
                { label: "Agentic Speed", value: "2.4s / cycle" },
                { label: "Security Layer", value: "TLS-AES-256" }
            ],
            icon: Sparkles,
            color: "blue"
        },
        "hrc-web-app": {
            title: "HRC Web App",
            tagline: "Strategic Information for National Compliance",
            category: "Enterprise NGO Infrastructure",
            description: "Developed for the Human Rights Commission, this platform serves as the central nerve system for national human rights monitoring. It automates complex data reporting workflows, ensuring compliance and visibility across multiple NGO sectors.",
            stack: ["Next.js", "Python Backend", "PostgreSQL"],
            metrics: [
                { label: "Uptime", value: "99.99%" },
                { label: "Impact", value: "National-Scale" },
                { label: "Compliance", value: "Act No. 3 Ready" }
            ],
            icon: Shield,
            color: "emerald"
        }
    };

    const project = projectData[slug as string] || projectData["aurastream"]; // Fallback for demo

    return (
        <div className="pt-24 pb-20 px-6 min-h-screen bg-mesh">
            <div className="max-w-7xl mx-auto">
                <Link href="/#lab" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-sm group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Intelligence Lab
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black border border-blue-500/20 mb-8 inline-block uppercase tracking-[0.2em]">
                            <Terminal className="w-4 h-4 inline mr-2" />
                            Direct Engineering File: {slug?.toString().toUpperCase()}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            {project.title} <br />
                            <span className="text-gradient">{project.tagline}</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                            {project.description}
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            {project.metrics.map((m: ProjectMetric, i: number) => (
                                <div key={i} className="glass p-6 rounded-3xl border border-white/5 group hover:border-blue-500/30 transition-all">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{m.label}</p>
                                    <p className="text-3xl font-black text-white">{m.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="glass rounded-[3rem] p-12 border border-white/10 shadow-2xl relative z-10 overflow-hidden bg-black/40">
                            <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                </div>
                                <span className="text-[10px] font-mono text-slate-500">M-AI_PROJECT_ENGINEERING_V2.1</span>
                            </div>

                            <div className="space-y-8">
                                <div className="p-6 rounded-3xl bg-blue-600/5 border border-blue-500/20 flex items-center gap-6">
                                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                                        <Cpu className="text-blue-500 w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Zambian Optimized Neural Core</h4>
                                        <p className="text-xs text-slate-500">High-speed reasoning agent deployment on local Zambian infrastructure.</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-600/5 border border-emerald-500/20 flex items-center gap-6">
                                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                                        <Database className="text-emerald-500 w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Resilient Data Persistence</h4>
                                        <p className="text-xs text-slate-500">Distributed local storage with redundant encryption for 100% sovereignty.</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-purple-600/5 border border-purple-500/20 flex items-center gap-6">
                                    <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                                        <Binary className="text-purple-500 w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Python-Powered NLP Logic</h4>
                                        <p className="text-xs text-slate-500">Sophisticated language models optimized for Zambian market sentiment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mock Dashboard Preview Interaction */}
                        <div className="mt-16 pt-8 border-t border-white/5">
                            <h3 className="text-xl font-black text-white mb-6">Virtual Portal Preview</h3>
                            <Link
                                href="/lab/lumikiza/advisory-hub"
                                className="group relative block glass p-8 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5 overflow-hidden hover:border-emerald-500/40 transition-all text-center lg:text-left"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Users className="w-40 h-40 text-emerald-500" />
                                </div>
                                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                                    <div>
                                        <h4 className="text-2xl font-black text-emerald-400 mb-2">Explore the Advisory Hub</h4>
                                        <p className="text-slate-400 max-w-md">Experience the real-time matching ecosystem built for Whitewood Founders and Advisors.</p>
                                    </div>
                                    <div className="px-8 py-4 bg-emerald-600 rounded-2xl font-black text-white group-hover:bg-emerald-500 transition-all flex items-center gap-2">
                                        ENTER HUB MOCKUP <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
