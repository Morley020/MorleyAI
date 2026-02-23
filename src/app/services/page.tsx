"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Code2,
    ShieldCheck,
    BarChart3,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import SecurityEcosystem from "@/components/SecurityEcosystem";
import AgenticPipeline from "@/components/AgenticPipeline";

const services = [
    {
        title: "Defensive Cyber Ops",
        description: "Beyond simple firewalls. We implement AI-driven Defensive Operations (SecOps) and real-time adversary detection.",
        icon: ShieldCheck,
        features: ["Managed Threat Hunting", "24/7 AI-Agent Monitoring", "Local Log Sovereignty", "Quantum-Resistant Encryption"],
        color: "blue"
    },
    {
        title: "Predictive Intelligence",
        description: "Transforming big data into strategic foresight. We build ML pipelines for sales, inventory, and market trend forecasting.",
        icon: BarChart3,
        features: ["Prophet Model Integration", "Automated KPI Generation", "Interactive Intelligence Dashboards", "Big Data Pipeline Ops"],
        color: "purple"
    },
    {
        title: "Elite Enterprise Systems",
        description: "Mission-critical software engineered with AI velocity. From ERPs to Fintech platforms, built on Zambian ground.",
        icon: Code2,
        features: ["High-Velocity Prototyping", "Scalable Microservices", "Zambian Compliance Ledger", "Tier-III Local Hosting"],
        color: "green"
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen space-y-32">
            {/* Services List */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-black mb-6"
                        >
                            The <span className="text-gradient">Strategic</span> Bridge
                        </motion.h1>
                        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
                            MorleyAI is the technical conduit between African digital sovereignty and Global AI innovation.
                            We build high-velocity intelligence that scales across borders while remaining rooted in local compliance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group glass p-8 md:p-12 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col md:flex-row gap-12 items-start"
                            >
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 bg-${service.color}-500/10`}>
                                    <service.icon className={`w-10 h-10 text-${service.color}-500`} />
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-slate-400 text-lg mb-8 max-w-2xl">{service.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-slate-300">
                                                <CheckCircle2 className={`w-5 h-5 text-${service.color}-500`} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full md:w-auto self-stretch flex items-center justify-center">
                                    <Link href="/#contact" className="w-full md:w-auto px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-center">
                                        Inquire <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Security Ecosystem Section */}
            <SecurityEcosystem />

            {/* Agentic Pipeline Module */}
            <AgenticPipeline />

            {/* Audit CTA */}
            <section className="px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[4rem] border border-blue-500/20 text-center relative overflow-hidden"
                >
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
                    <h3 className="text-3xl md:text-5xl font-black mb-6">Ready to see the <span className="text-gradient">resilience</span>?</h3>
                    <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
                        Stop guessing your data safety. Get a professional Security & Data audit for your systems today.
                    </p>
                    <Link href="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/30 group">
                        Start Free Audit Report
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
