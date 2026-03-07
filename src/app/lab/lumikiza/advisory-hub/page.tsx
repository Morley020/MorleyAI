"use client";

import {
    Users,
    Calendar,
    Briefcase,
    TrendingUp,
    ChevronRight,
    Search,
    ArrowLeft,
    CheckCircle2,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";

/**
 * Lumikiza Advisory Hub Mockup
 * 
 * A high-fidelity demonstration of the Lumikiza Advisor-Founder ecosystem.
 * Features:
 * - Smart Mentor Matching UI
 * - Advisory Session Scheduling
 * - Impact Metrics & Growth Tracking
 */
export default function AdvisoryHubMockup() {
    const advisors = [
        { name: "Sarah Phiri", role: "Financial Governance", expertise: ["Capital Raising", "Audit"], status: "Available" },
        { name: "John Musonda", role: "Operational Scale", expertise: ["Supply Chain", "SOPs"], status: "Away" },
        { name: "Mutale Kapila", role: "Strategic Marketing", expertise: ["Brand Identity", "Go-to-Market"], status: "Available" }
    ];

    const upcomingSessions = [
        { founder: "ZED-Retail Ltd", topic: "Inventory Automation", time: "Tomorrow, 10:00 AM", type: "Virtual" },
        { founder: "AgroPulse Hub", topic: "Export Compliance", time: "Monday, 2:00 PM", type: "In-Person" }
    ];

    return (
        <div className="pt-24 pb-20 px-6 min-h-screen bg-mesh">
            <div className="max-w-7xl mx-auto">
                <Link href="/lab/lumikiza" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Project File
                </Link>

                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black border border-emerald-500/20 mb-4 uppercase tracking-[0.2em]">
                            <Briefcase className="w-3 h-3" />
                            Live System Mockup
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">
                            Lumikiza <span className="text-gradient">Advisory Hub</span>
                        </h1>
                        <p className="text-slate-400 mt-4 max-w-xl">
                            The intelligent command center connecting Zambian industrial ambition with tactical business expertise.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="glass px-6 py-4 rounded-3xl border border-white/5 flex flex-col items-center">
                            <span className="text-2xl font-black text-white">124</span>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Founders</span>
                        </div>
                        <div className="glass px-6 py-4 rounded-3xl border border-white/5 flex flex-col items-center">
                            <span className="text-2xl font-black text-white">48</span>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Elite Advisors</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar: Filters & Active Sessions */}
                    <div className="space-y-8">
                        <section className="glass p-6 rounded-[2.5rem] border border-white/10">
                            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                                <Search className="w-4 h-4 text-blue-500" />
                                Smart Search
                            </h3>
                            <div className="space-y-4">
                                <div className="relative">
                                    <input type="text" placeholder="Find expertise..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all" />
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {["Governance", "Legal", "Capital", "Scale", "Tech"].map(tag => (
                                        <button key={tag} className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all text-slate-400 hover:text-white uppercase tracking-tighter">{tag}</button>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="glass p-6 rounded-[2.5rem] border border-white/10">
                            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-emerald-500" />
                                My Schedule
                            </h3>
                            <div className="space-y-4">
                                {upcomingSessions.map((session, i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all cursor-pointer">
                                        <p className="text-xs font-black text-emerald-400 mb-1">{session.founder}</p>
                                        <p className="text-sm font-bold text-white mb-2">{session.topic}</p>
                                        <div className="flex justify-between items-center text-[10px] text-slate-500">
                                            <span>{session.time}</span>
                                            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">{session.type}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Main Content: Advisor Matching */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="glass p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <TrendingUp className="w-32 h-32 text-blue-500" />
                            </div>

                            <div className="relative z-10 mb-8">
                                <h3 className="text-xl font-black text-white mb-2">Recommended for You</h3>
                                <p className="text-slate-500 text-sm">Based on your business growth stage (Scaling).</p>
                            </div>

                            <div className="space-y-4">
                                {advisors.map((advisor, i) => (
                                    <div key={i} className="group relative glass border border-white/5 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-500/30 transition-all bg-black/20">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center relative">
                                                <Users className="w-8 h-8 text-blue-500" />
                                                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${advisor.status === 'Available' ? 'bg-emerald-500' : 'bg-slate-500'}`} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black text-white">{advisor.name}</h4>
                                                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">{advisor.role}</p>
                                                <div className="flex gap-2 mt-2">
                                                    {advisor.expertise.map(e => (
                                                        <span key={e} className="text-[9px] bg-white/5 px-2 py-1 rounded text-slate-500">{e}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-lg shadow-blue-500/20 group-hover:scale-105 active:scale-95">
                                            Connect <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Impact Result Mock */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass p-8 rounded-[2.5rem] border border-blue-500/20 bg-blue-500/5">
                                <ShieldCheck className="w-8 h-8 text-blue-500 mb-4" />
                                <h4 className="text-lg font-black text-white mb-2">Governance Verified</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    All advisors undergo a rigorous MorleyAI engineering check to ensure strategic information security.
                                </p>
                            </div>
                            <div className="glass p-8 rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5">
                                <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-4" />
                                <h4 className="text-lg font-black text-white mb-2">Growth Milestone</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Automated tracking of business milestones post-advisory sessions to ensure measurable ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
        </div>
    );
}
