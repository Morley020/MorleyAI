"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    Binary,
    Activity
} from "lucide-react";
import SecurityEcosystem from "@/components/SecurityEcosystem";
import AgenticPipeline from "@/components/AgenticPipeline";

const services = [
    {
        title: "Software Engineering",
        description: "Bespoke enterprise architecture engineered with AI-agentic velocity. From high-scale ERPs to specialized Fintech platforms, we build the engines of African industry.",
        icon: Binary,
        features: ["Scalable Microservices", "Agent-Assisted Coding", "Legacy System Integration", "Cloud-Native Infrastructure"],
        color: "blue"
    },
    {
        title: "Cyber Security",
        description: "Elite defensive operations that go beyond simple firewalls. We provide offensive security testing, real-time threat hunting, and 100% Zambian data sovereignty.",
        icon: ShieldCheck,
        features: ["VAPT & Red Teaming", "Zambia Act No. 3 Compliance", "AI-Driven Sentry Logs", "Data Sovereignty Vaults"],
        color: "rose"
    },
    {
        title: "Monitoring & Evaluation",
        description: "Transforming organizational data into actionable intelligence. We build custom M&E frameworks that track impact, optimize resources, and drive evidence-based decisions.",
        icon: Activity,
        features: ["Real-time KPI Dashboards", "Field Data Collection", "Impact Analysis ML", "Organizational Reporting"],
        color: "emerald"
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

            {/* Legal & Compliance Section */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="glass p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <ShieldCheck className="w-64 h-64 text-blue-500" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20 mb-8">
                                <span>Zambia Data Protection Act No. 3 of 2021</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-12">Regulatory <span className="text-gradient">Precision</span>.</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Data Sovereignty",
                                        desc: "Section 48 requires that all personal data categorized as critical by the Minister must be stored on a server located in Zambia.",
                                        tag: "Section 48"
                                    },
                                    {
                                        title: "Consent Management",
                                        desc: "Mandatory mechanisms for obtaining and documenting informed consent before processing personal data.",
                                        tag: "Part III"
                                    },
                                    {
                                        title: "Data Subject Rights",
                                        desc: "Granting Zambian citizens the right to access, rectify, and erase their personal data stored by systems.",
                                        tag: "Part IV"
                                    }
                                ].map((req) => (
                                    <div key={req.title} className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="font-bold text-white text-xl">{req.title}</h4>
                                            <span className="text-[10px] font-mono px-2 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 uppercase">{req.tag}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed">{req.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
