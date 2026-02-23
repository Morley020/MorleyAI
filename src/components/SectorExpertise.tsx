"use client";

import { motion } from "framer-motion";
import {
    Users,
    Building2,
    Heart,
    ShieldCheck,
    Briefcase
} from "lucide-react";

const sectors = [
    {
        name: "NGO & Development",
        description: "Specialized M&E frameworks and data collection tools for tracking social impact and donor reporting.",
        icon: Heart,
        color: "rose"
    },
    {
        name: "Government & Public Sector",
        description: "Digitalizing municipal workflows and securing national data borders according to Act No. 3 of 2021.",
        icon: Building2,
        color: "blue"
    },
    {
        name: "Financial Institutions",
        description: "High-security banking infrastructure, payment gateways, and real-time fraud monitoring systems.",
        icon: ShieldCheck,
        color: "emerald"
    },
    {
        name: "Commerce & SMEs",
        description: "Integrated ERPs, custom POS systems, and predictive inventory analytics for business growth.",
        icon: Briefcase,
        color: "purple"
    }
];

export default function SectorExpertise() {
    return (
        <section className="py-24 px-6 relative bg-black/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20 mb-6"
                    >
                        <Users className="w-4 h-4" />
                        <span>Trusted Across Sectors</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                        Industries We <span className="text-gradient">Empower</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        MorleyAI delivers mission-critical technical solutions tailored to the unique complexities of
                        diverse organizational landscapes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectors.map((sector, idx) => (
                        <motion.div
                            key={sector.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group text-center"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-${sector.color}-500/10 flex items-center justify-center mx-auto mb-6 border border-${sector.color}-500/20 group-hover:scale-110 transition-transform`}>
                                <sector.icon className={`w-7 h-7 text-${sector.color}-500`} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">{sector.name}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {sector.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
