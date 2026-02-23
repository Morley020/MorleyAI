"use client";

import { motion } from "framer-motion";
import { Shield, Radio, Server, Globe2 } from "lucide-react";

const partners = [
    {
        category: "Data Centers & Cloud",
        icon: Server,
        color: "emerald",
        items: [
            { name: "INFRATEL", role: "National Data Center & Gov Cloud" },
            { name: "Paratus", role: "Carrier-Neutral Vanguard Data Center" },
            { name: "Africa Data Centres", role: "ISO-Certified Colocation" },
        ],
    },
    {
        category: "Fiber & Core Backbone",
        icon: Globe2,
        color: "blue",
        items: [
            { name: "Liquid Intelligent Tech", role: "Pan-African Fiber Footprint" },
            { name: "ZESCO & CEC", role: "National Fiber Backbone Infrastructure" },
            { name: "Zamnet", role: "Legacy Hosting & ISP Authority" },
        ],
    },
    {
        category: "Connectivity & 5G",
        icon: Radio,
        color: "purple",
        items: [
            { name: "MTN Zambia", role: "Enterprise 5G & Private Cloud" },
            { name: "Airtel Zambia", role: "Mobile Infrastructure & Fintech" },
            { name: "Zamtel", role: "Rural Connectivity & State Mobile" },
        ],
    },
    {
        category: "Regulators & Governance",
        icon: Shield,
        color: "rose",
        items: [
            { name: "ZICTA", role: "Telecom & Cyber Security Regulator" },
            { name: "Zambia Cyber Agency", role: "National Threat Oversight" },
            { name: "SMART Zambia", role: "Digital e-Government Institute" },
        ],
    },
];

export default function PartnerNetwork() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-black/50">
            <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black mb-6"
                    >
                        Our Trusted <span className="text-gradient">Infrastructure</span> Network
                    </motion.h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        MorleyAI operates on the bedrock of Zambia&apos;s most secure and reliable infrastructure providers.
                        We leverage local data centers and national fiber backbones to ensure 100% data sovereignty.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partners.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-6 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-${group.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <group.icon className={`w-6 h-6 text-${group.color}-500`} />
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-6 border-b border-white/5 pb-2">
                                {group.category}
                            </h3>
                            <div className="space-y-6">
                                {group.items.map((partner) => (
                                    <div key={partner.name} className="space-y-1">
                                        <p className="font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {partner.name}
                                        </p>
                                        <p className="text-[10px] text-slate-500 leading-tight uppercase tracking-tighter">
                                            {partner.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dynamic Logo Marquee at bottom */}
                <div className="mt-20 pt-10 border-t border-white/5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex gap-16 items-center whitespace-nowrap"
                    >
                        {[...partners, ...partners].flatMap(g => g.items).map((p, i) => (
                            <span key={i} className="text-2xl font-black text-slate-700 hover:text-white transition-colors cursor-default select-none tracking-tighter uppercase">
                                {p.name}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
