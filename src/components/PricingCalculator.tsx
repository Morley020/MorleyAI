"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, CheckCircle2, ArrowRight, Zap } from "lucide-react";

/**
 * PricingCalculator Component
 * 
 * An interactive tool to demonstrate the "5% Disruptor" pricing strategy.
 * Showcases MorleyAI's elite engineering at aggressive market-disrupting price points.
 */
interface PricingCalculatorProps {
    onSelect?: (service: string) => void;
}

export default function PricingCalculator({ onSelect }: PricingCalculatorProps) {
    const services = [
        {
            id: "web",
            name: "Web Design",
            morleyPrice: 5000,
            competitorPrice: 8500,
            features: ["Elite UI/UX", "SEO Infrastructure", "High-Speed Hosting"]
        },
        {
            id: "systems",
            name: "Business Systems",
            morleyPrice: 25000,
            competitorPrice: 35000,
            features: ["HR/Payroll Intel", "NGO Strategic Information", "Automated Audits"]
        },
        {
            id: "mobile",
            name: "Mobile Apps",
            morleyPrice: 40000,
            competitorPrice: 50000,
            features: ["iOS/Android Native", "Zambian Pay Integration", "Offline Resilience"]
        }
    ];

    const [selectedService, setSelectedService] = useState(services[0]);

    const savings = selectedService.competitorPrice - selectedService.morleyPrice;
    const savingsPercent = Math.round((savings / selectedService.competitorPrice) * 100);

    return (
        <div className="w-full max-w-4xl mx-auto mt-20">
            <div className="glass rounded-[3rem] p-8 md:p-12 border border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Calculator className="w-64 h-64 text-blue-500" />
                </div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                                <TrendingDown className="w-4 h-4" />
                                Economic Disruption Engine
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white">
                                Calculate Your <span className="text-gradient">Advantage</span>
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {services.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => {
                                        setSelectedService(s);
                                        onSelect?.(s.name);
                                    }}
                                    className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all border ${selectedService.id === s.id
                                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30"
                                        : "bg-white/5 border-white/10 text-slate-400 hover:border-blue-500/30 hover:text-white"
                                        }`}
                                >
                                    {s.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* LEFT: Comparison */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-end p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Standard Market Price</p>
                                        <p className="text-2xl font-black text-slate-400">K{selectedService.competitorPrice.toLocaleString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1 italic">Average Competitor</p>
                                    </div>
                                </div>

                                <motion.div
                                    key={selectedService.id}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex justify-between items-end p-8 rounded-3xl bg-blue-600 border border-blue-400 shadow-2xl shadow-blue-500/20"
                                >
                                    <div>
                                        <p className="text-[10px] font-black text-blue-200 uppercase tracking-[0.2em] mb-1">MorleyAI Disruptor Price</p>
                                        <p className="text-4xl font-black text-white">K{selectedService.morleyPrice.toLocaleString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="px-3 py-1 bg-white text-blue-600 rounded-full font-black text-[10px] uppercase mb-2 inline-block">5% Disruptor Clause</div>
                                        <p className="text-blue-100 text-xs font-bold">Resilient Engineering</p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="p-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                                    <Zap className="w-8 h-8 text-emerald-500 animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-emerald-400 font-black text-2xl">Save K{savings.toLocaleString()}</p>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Immediate Project Reinvestment Capital ({savingsPercent}% Disruption)</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Benefits */}
                        <div className="space-y-8">
                            <div className="glass p-8 rounded-[2.5rem] border border-white/5">
                                <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                    Engineering Guarantees
                                </h3>
                                <ul className="space-y-4">
                                    {selectedService.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                            <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                    <li className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        </div>
                                        100% Zambian Data Sovereignty
                                    </li>
                                </ul>
                            </div>

                            <a
                                href="#contact"
                                onClick={() => onSelect?.(selectedService.name)}
                                className="group flex items-center justify-between p-6 rounded-3xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all active:scale-[0.98]"
                            >
                                Secure My Advantage
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
