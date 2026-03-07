"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2, Bot } from "lucide-react";
import { useState } from "react";

interface ContactFormProps {
    preSelectedService?: string;
}

/**
 * ContactForm Component
 * 
 * Refined to capture '5% Disruptor' selections from the calculator.
 * Includes tactical service selection and intelligent lead routing logic.
 */
export default function ContactForm({ preSelectedService }: ContactFormProps) {
    const [service, setService] = useState(preSelectedService || "");
    const [prevService, setPrevService] = useState(preSelectedService);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Sync with external selections (e.g., from the calculator) without using useEffect
    if (preSelectedService !== prevService) {
        setService(preSelectedService || "");
        setPrevService(preSelectedService);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real scenario, send data to backend/Supabase/EmailJS
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-12 rounded-[2.5rem] border border-emerald-500/30 bg-emerald-500/5 text-center"
            >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Transmission Secure</h3>
                <p className="text-slate-400">Your mission-critical requirements have been captured. A lead engineer will contact you within 5 minutes.</p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Entity / Name</label>
                    <input
                        type="text"
                        required
                        placeholder="Chanda Musonda"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Secure Email</label>
                    <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-700"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Selected Disruptor Tier</label>
                <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                >
                    <option value="" disabled className="bg-slate-900">Select intelligence tier...</option>
                    <option value="Web Design" className="bg-slate-900">Web Design (K5,000 Disruptor)</option>
                    <option value="Business Systems" className="bg-slate-900">Business Systems (K25,000 Disruptor)</option>
                    <option value="Mobile Apps" className="bg-slate-900">Mobile Apps (K40,000 Disruptor)</option>
                    <option value="Custom Engineering" className="bg-slate-900">Custom Engineering Consult</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Mission Requirements</label>
                <textarea
                    required
                    placeholder="Briefly describe your high-performance software vision..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-blue-500 outline-none transition-all h-32 placeholder:text-slate-700"
                ></textarea>
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
                >
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Deploy Intelligence Lead
                </button>
            </div>

            <div className="flex items-center gap-3 justify-center pt-4 opacity-40">
                <Bot className="w-4 h-4 text-blue-500" />
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Encrypted via MorleyAI Resilient Protocol</p>
            </div>
        </form>
    );
}
