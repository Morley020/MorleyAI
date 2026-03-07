"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

/**
 * WhatsApp Floating Button Component
 * 
 * Provides immediate connection for Zambian SMEs and Enterprise clients.
 * Matches competitor accessibility (CairoAI) but with a more premium, engineering aesthetic.
 */
export default function WhatsAppButton() {
    const phoneNumber = "254755545443";
    const message = "Hello MorleyAI, I'm interested in starting a Python Engineering project. I'd like to discuss the 5% Advantage pricing.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] group"
        >
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full scale-150 group-hover:bg-emerald-500/30 transition-all" />

            <div className="relative glass border border-emerald-500/30 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-xl group-hover:border-emerald-500/50 shadow-2xl shadow-emerald-500/10">
                <div className="bg-emerald-500 p-2 rounded-xl text-white shadow-lg shadow-emerald-500/20">
                    <MessageCircle className="w-6 h-6" />
                </div>

                <div className="pr-2">
                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-tighter mb-0.5">Direct Engineering Bridge</p>
                    <p className="text-sm font-bold text-white whitespace-nowrap">Message Lead Engineer</p>
                </div>
            </div>

            {/* Pulsing indicator */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse" />
        </motion.a>
    );
}
