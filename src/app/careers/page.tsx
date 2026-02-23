"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Clock,
    ArrowRight,
    Brain,
    Shield,
    Rocket,
    Scale,
    LineChart,
    Server
} from "lucide-react";

const vacancies = [
    {
        title: "AI Agent Architect",
        department: "Engineering",
        location: "Zambia (Hybrid)",
        type: "Full-time",
        icon: Brain,
        description: "Design and implement autonomous AI agents using LangChain and Next.js. You'll be building the brain of our SME software suites.",
        requirements: ["Deep understanding of LLM orchestration", "Advanced TypeScript/Python", "Experience with Vector Databases"]
    },
    {
        title: "Cybersecurity Compliance lead",
        department: "Security",
        location: "Zambia (On-site)",
        type: "Full-time",
        icon: Shield,
        description: "Lead our SME protection initiative. Monitor real-time threats and ensure all client builds meet the Cyber Security Act No. 3 of 2025.",
        requirements: ["CISSP or CISM certification", "Expert knowledge of Zambian Cyber Law", "Incident response experience"]
    },
    {
        title: "Data Intelligence Scientist",
        department: "Analytics",
        location: "Remote/Zambia",
        type: "Full-time",
        icon: LineChart,
        description: "Develop predictive Machine Learning models (Prophet/XGBoost) to help Zambian SMEs forecast inventory and sales trends.",
        requirements: ["Strong background in Time-Series analysis", "SQL & Python mastery", "Experience with retail data sets"]
    },
    {
        title: "Cloud Infrastructure Engineer",
        department: "Operations",
        location: "Zambia (On-site)",
        type: "Full-time",
        icon: Server,
        description: "Manage our local Zambian server fleet. Optimize VPS performance on Infratel/Netone national infrastructure.",
        requirements: ["Kubernetes & Docker expertise", "Local networking (Zambia hub)", "High-availability system design"]
    },
    {
        title: "B2B Technical Sales Lead",
        department: "Growth",
        location: "Zambia",
        type: "Full-time",
        icon: Rocket,
        description: "Drive the 'Secure Intelligence' pivot. Pitching business resilience to Law firms, Micro-finance, and Retail leaders.",
        requirements: ["Proven track record in SaaS sales", "Strategic relationship management", "Deep understanding of the Zambian market"]
    },
    {
        title: "Legal Tech Consultant",
        department: "Compliance",
        location: "Zambia",
        type: "Contract",
        icon: Scale,
        description: "Map technical architectures to the Zambia Data Protection Act. Helping clients bridge the gap between code and law.",
        requirements: ["Legal background (LLB/AHC)", "Knowledge of ICT regulations", "Technical literacy"]
    }
];

/**
 * Careers Page
 * 
 * Lists currently open positions at MorleyAI.
 * Features:
 * - Dynamic job grid from `vacancies` array.
 * - Filters for "Shield" (Security) vs "Telescope" (Analytics) roles.
 * - Call to action for Zambian tech leaders.
 */
export default function CareersPage() {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20 mb-6"
                    >
                        <Rocket className="w-4 h-4" />
                        <span>Join the AI Revolution in Zambia</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        Build the <span className="text-gradient">Shield</span> & <span className="text-gradient">Telescope</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-3xl mx-auto"
                    >
                        We are looking for pioneers to drive the **Secure Intelligence** suite. From coding agentic AI to monitoring Zambia&apos;s data borders, your work at MorleyAI will redefine Zambian industry.
                    </motion.p>
                </div>

                {/* Vacancies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {vacancies.map((job, index) => (
                        <motion.div
                            key={job.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-4 rounded-2xl bg-white/5 text-blue-500 group-hover:bg-blue-600/10 transition-colors`}>
                                    <job.icon className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1 rounded-full">
                                    {job.department}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{job.title}</h3>

                            <div className="flex flex-col gap-2 text-xs text-slate-500 mb-6">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    {job.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3" />
                                    {job.type}
                                </div>
                            </div>

                            <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-grow">
                                {job.description}
                            </p>

                            <div className="space-y-2 mb-8 border-t border-white/5 pt-6">
                                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Key Requirements</p>
                                {job.requirements.map((req) => (
                                    <div key={req} className="flex items-center gap-2 text-[11px] text-slate-300">
                                        <div className="w-1 h-1 bg-blue-500 rounded-full shrink-0" />
                                        {req}
                                    </div>
                                ))}
                            </div>

                            <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
                                Join the Team
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Dynamic Values Section */}
                <section className="p-12 md:p-24 glass rounded-[4rem] border border-white/5 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-black mb-8">Why MorleyAI?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                            <div>
                                <h4 className="text-blue-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                                    <Shield className="w-4 h-4" /> The Shield
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We are building the first proactive cybersecurity layer for Zambian SMEs. You won&apos;t just solve problems; you&apos;ll protect livelihoods.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-purple-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                                    <LineChart className="w-4 h-4" /> The Telescope
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Through predictive analytics, we give businesses the eyes to see their future profits. It&apos;s high-impact, high-reward work.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
