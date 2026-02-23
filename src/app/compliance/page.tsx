"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, CheckCircle, Info } from "lucide-react";

/**
 * Compliance Page
 * 
 * Explains MorleyAI's adherence to the Zambia Data Protection Act No. 3 of 2021.
 * Highlights:
 * - Data Sovereignty (Local VPS hosting)
 * - Consent Management
 * - Data Subject Rights
 */
export default function CompliancePage() {
    const requirements = [
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
    ];

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-bold border border-green-500/20 mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Fully Compliant with Zambian Law</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Zambia Data Protection Act</h1>
                    <p className="text-slate-400 text-lg">
                        Act No. 3 of 2021 – Legal software development and hosting for the Zambian market.
                    </p>
                </motion.div>

                <section className="space-y-12">
                    {/* Policy Overview */}
                    <div className="glass p-8 md:p-12 rounded-3xl border border-white/5">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Scale className="text-blue-500" />
                            Our Compliance Commitment
                        </h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            At MorleyAI, we recognize that data security is not just a technical requirement but a legal mandate in Zambia.
                            Subtle nuances in the <strong>Data Protection Act No. 3 of 2021</strong> mean that most cloud-based AI solutions
                            (hosted in the US or Europe) actually put Zambian businesses at risk of heavy fines.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                <CheckCircle className="text-green-500 mb-4" />
                                <h4 className="font-bold mb-2">Local VPS Hosting</h4>
                                <p className="text-sm text-slate-500">Every application we build is deployed to Zambia-based servers (Infratel/Netone).</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                <CheckCircle className="text-green-500 mb-4" />
                                <h4 className="font-bold mb-2">Encryption at Rest</h4>
                                <p className="text-sm text-slate-500">AES-256 encryption compliant with Bank of Zambia and Data Protection standards.</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Clauses */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-2 px-4">
                            <Info className="text-blue-500 w-5 h-5" />
                            Key Regulatory Mappings
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {requirements.map((req) => (
                                <div key={req.title} className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white">{req.title}</h4>
                                        <span className="text-xs font-mono px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">{req.tag}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm">{req.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal Notice */}
                    <div className="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/20 flex gap-4">
                        <FileText className="text-blue-500 shrink-0 w-8 h-8" />
                        <div>
                            <h4 className="font-bold text-white mb-2">Expert Consultation</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Need to understand how the Act affects your specific industry (e.g., Law, Finance, or Health)?
                                Our team provides technical-legal mapping to ensure your transition to AI is zero-risk.
                            </p>
                        </div>
                    </div>

                    {/* Secure Communication Addendum */}
                    <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-blue-500/10 text-center">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Secure Intelligence Channel</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
                            For highly sensitive project disclosures and Vulnerability Reporting, we maintain an end-to-end
                            encrypted communication vault. High-stakes technical data is never transmitted over standard
                            clearview channels.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
