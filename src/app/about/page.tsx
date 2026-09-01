"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Zap, Globe, Heart, Server, Target, Landmark, Lightbulb, Users, Award } from "lucide-react";

/**
 * About Page
 * 
 * Tells the story of MorleyAI's mission in Zambia.
 * Sections:
 * 1. Mission Hero: High-level purpose statement.
 * 2. Story: The "Why" - bridging global AI with local laws.
 * 3. Values: Core pillars (Sovereignty, Velocity, Security).
 * 4. Vision 2030: Long-term goals.
 */
export default function AboutPage() {
    const values = [
        {
            title: "Data Sovereignty",
            desc: "We believe Zambian data belongs on Zambian soil. We architecture our systems to ensure 100% local compliance.",
            icon: Landmark,
        },
        {
            title: "AI-First Velocity",
            desc: "By leveraging agentic AI, we build in weeks what others take months to deliver. Speed is our competitive edge.",
            icon: Zap,
        },
        {
            title: "Uncompromising Security",
            desc: "In an era of rising cyber threats, we build resilience into every line of code we write.",
            icon: Shield,
        },
        {
            title: "Zambian Prosperity",
            desc: "We are committed to building the digital infrastructure that will power the next decade of Zambian industry.",
            icon: Heart,
        }
    ];

    <h1>Leadership Team</h1>

    const board = [
        { name: "TBA", role: "Board Chairperson" },
        { name: "TBA", role: "Board Member" },
        { name: "TBA", role: "Board Member" },
   
    ];
     const Management Team = [
        { name: "Morley Mujansi", role: "Acting CEO" },
        { name: "Jeremiah Mwiinga", role: "Strategy Lead" },
        { name: "TBA", role: "Bussiness Development" },
        { name: "TBA", role: "Admin & Operations Manager" },
    
    ];

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Mission Hero */}
                <section className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="p-4 rounded-3xl bg-blue-500/10 border border-blue-500/20">
                            <Globe className="w-12 h-12 text-blue-500 animate-pulse" />
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-8 leading-tight"
                    >
                        Pioneering the <span className="text-gradient">Zambian</span> <br />AI Revolution.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        MorleyAI was founded on a simple realization: Zambian businesses deserve the world&apos;s most advanced AI technology without compromising their legal data sovereignty.
                    </motion.p>
                </section>

                {/* Our Story */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-white">Our Story</h2>
                        <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
                        <p className="text-lg text-slate-400 leading-relaxed">
                            For years, Zambian enterprises have been caught in a dilemma: adopt powerful global software hosted in foreign clouds—breaking local data protection laws—or settle for outdated local systems that can&apos;t keep up with the speed of AI.
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            <strong>MorleyAI</strong> was born to bridge this gap. We combine high-speed agentic development with Zambia-based infrastructure. We don&apos;t just build apps; we build the <strong>Secure Intelligence</strong> that allows Zambian businesses to compete on a global stage while remaining rooted at home.
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            MorleyAI has since merged with <strong>Adino Creations</strong>, a Lusaka-based data analytics and digital consulting firm. Together, we bring combined strength in data analytics, data management, digital health consulting, and monitoring &amp; evaluation, alongside MorleyAI&apos;s AI and software engineering core.
                        </p>
                    </motion.div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#E8A93B]/10 blur-[120px] rounded-full" />
                        <div className="glass aspect-square rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden">
                            <div className="grid grid-cols-2 gap-4 p-12">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
                                    <Server className="w-7 h-7 text-[#E8A93B] mb-2" />
                                    <span className="text-xl font-bold text-white">Local-First</span>
                                    <span className="text-xs text-slate-500">Infrastructure</span>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
                                    <Zap className="w-7 h-7 text-[#E8A93B] mb-2" />
                                    <span className="text-xl font-bold text-white">AI-Accelerated</span>
                                    <span className="text-xs text-slate-500">Delivery Cycle</span>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
                                    <Shield className="w-7 h-7 text-[#E8A93B] mb-2" />
                                    <span className="text-xl font-bold text-white">Act No. 2, 2021</span>
                                    <span className="text-xs text-slate-500">Cyber Security Compliant</span>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
                                    <Lightbulb className="w-7 h-7 text-[#E8A93B] mb-2" />
                                    <span className="text-xl font-bold text-white">AI-Native</span>
                                    <span className="text-xs text-slate-500">Engineering DNA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">The Values We Code By</h2>
                        <p className="text-slate-500">The pillars of the MorleyAI culture and engineering philosophy.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 glass rounded-3xl border border-white/5 group hover:border-blue-500/30 transition-all"
                            >
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <value.icon className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Leadership & Governance */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Leadership &amp; Governance</h2>
                        <p className="text-slate-500">The people steering MorleyAI&apos;s mission forward.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="p-8 glass rounded-3xl border border-white/5">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-6">Leadership</h3>
                            <div className="space-y-4">
                                {leadership.map((person) => (
                                    <div key={person.name} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <p className="font-bold text-white">{person.name}</p>
                                        <p className="text-sm text-slate-400">{person.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 glass rounded-3xl border border-white/5">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Award className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-6">Board of Directors</h3>
                            <div className="space-y-4">
                                {board.map((person) => (
                                    <div key={person.name} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <p className="font-bold text-white">{person.name}</p>
                                        <p className="text-sm text-slate-400">{person.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative p-12 md:p-24 glass rounded-[4rem] border border-blue-500/20 text-center overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center">
                        <Target className="w-16 h-16 text-blue-500 mb-8" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8">Our Vision for 2030</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mb-12">
                            To be the primary architect of Zambia&apos;s digital sovereign future, where every SME has the power of an AI-driven enterprise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/20 text-center">
                                Partner With Us
                            </Link>
                            <Link href="/services" className="px-8 py-4 glass border border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl transition-all text-center">
                                Our Methodology
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
