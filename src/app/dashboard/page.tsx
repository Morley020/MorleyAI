"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Shield, BarChart3, Settings2, Bell, LogOut } from "lucide-react";
import { logout } from "@/lib/auth.actions";
import CyberMonitor from "@/components/dashboard/CyberMonitor";
import AnalyticsForecast from "@/components/dashboard/AnalyticsForecast";
import ComplianceReporter from "@/components/dashboard/ComplianceReporter";

export default function DashboardPage() {
    return (
        <div className="pt-24 pb-12 px-6 min-h-screen bg-mesh">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-blue-500 font-bold text-sm tracking-widest uppercase mb-2">
                            <LayoutDashboard className="w-4 h-4" />
                            MorleyAI Command Center
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white">
                            Secure <span className="text-gradient">Intelligence</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                            <Bell className="w-5 h-5 text-slate-300" />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#030712]" />
                        </button>
                        <div className="flex items-center gap-3 glass border border-white/10 px-4 py-2 rounded-2xl">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">MK</div>
                            <div className="hidden sm:block">
                                <p className="text-xs font-bold text-white">Morley Kapila</p>
                                <p className="text-[10px] text-slate-500">Administrator</p>
                            </div>
                        </div>
                        <button onClick={() => logout()} className="relative w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center hover:bg-rose-500/20 hover:text-rose-500 hover:border-rose-500/50 transition-all text-slate-300 group">
                            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </header>

                {/* Top Modules Grid */}
                <div className="space-y-12">
                    {/* Module 1: Cyber Security */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold w-fit border border-blue-500/20">
                            <Shield className="w-3 h-3" />
                            CYBERSECURITY COMMAND
                        </div>
                        <CyberMonitor />
                    </motion.section>

                    {/* Module 2: Analytics */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold w-fit border border-purple-500/20">
                            <BarChart3 className="w-3 h-3" />
                            ADVANCED ANALYTICS
                        </div>
                        <AnalyticsForecast />
                    </motion.section>

                    {/* Module 3: Compliance Reporter */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold w-fit border border-emerald-500/20">
                            <Settings2 className="w-3 h-3" />
                            REGULATORY COMPLIANCE
                        </div>
                        <ComplianceReporter />
                    </motion.section>
                </div>
            </div>
        </div>
    );
}
