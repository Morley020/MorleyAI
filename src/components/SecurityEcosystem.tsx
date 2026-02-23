"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck, Target, Terminal, GraduationCap, Shield
} from "lucide-react";

const protocols = [
    {
        title: "Elite VAPT Protocols",
        desc: "Rigorous Vulnerability Assessment and Penetration Testing. We don't just scan; we simulate sophisticated adversary tactics across your entire digital surface.",
        features: ["Web & API Penetration", "Internal Network Audits", "Mobile App Hardening", "Social Engineering Tests"],
        icon: Terminal,
        color: "blue"
    },
    {
        title: "Strategic Compliance Layer",
        desc: "Direct alignment with Zambian Law. We map your technical architecture to the Data Protection Act No. 3 and the Cyber Security Act No. 2 of 2021.",
        features: ["Act No. 3 Audit PDF", "Local Hosting Verification", "Privacy Impact Assessments", "Global GDPR/ISO Alignment"],
        icon: Shield,
        color: "purple"
    },
    {
        title: "Adversary Emulation",
        desc: "Proactive Red-Teaming to test your team's response speed. We identify the gaps in your human and technical defenses before real threats do.",
        features: ["Red Team Simulations", "Incident Response Playbooks", "Threat Hunting Agents", "Breach Impact Analysis"],
        icon: Target,
        color: "rose"
    },
    {
        title: "Encrypted Intelligence Ops",
        desc: "Secure end-to-end encrypted communication for all high-stakes red-teaming and defense operations. We ensure intelligence is 100% private and protected.",
        features: ["PGP-Encrypted Direct Comms", "Zero-Knowledge Data Vaults", "Sensitive Asset Protection", "Secure Briefing Channels"],
        icon: GraduationCap,
        color: "emerald"
    }
];

export default function SecurityEcosystem() {
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20 mb-6"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Advanced Defensive Intelligence</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        The Elite <span className="text-gradient">Security</span> Ecosystem
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        MorleyAI provides a world-class security layer tailored for the African enterprise.
                        We transition you from passive protection to **Active Resilience**.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {protocols.map((protocol, idx) => (
                        <motion.div
                            key={protocol.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/30 transition-all"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className={`w-16 h-16 rounded-2xl bg-${protocol.color}-500/10 flex items-center justify-center shrink-0 border border-${protocol.color}-500/20 group-hover:scale-110 transition-transform`}>
                                    <protocol.icon className={`w-8 h-8 text-${protocol.color}-500`} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{protocol.title}</h3>
                                    <p className="text-slate-400 leading-relaxed mb-8">
                                        {protocol.desc}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {protocol.features.map(feature => (
                                            <div key={feature} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-tighter">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-${protocol.color}-500`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
