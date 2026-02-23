"use client";

import {
    Code, Smartphone, Terminal, Power, Network, CodeXml, Globe,
    BrainCircuit, Cpu, Bot, ShieldCheck, Activity, Layers, ScanLine, Radar
} from "lucide-react";
import { motion } from "framer-motion";

const row1 = [
    { name: "JavaScript", icon: Code, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
    { name: "React Native", icon: Smartphone, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { name: "Python", icon: Terminal, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Spring Boot", icon: Power, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
    { name: "Kafka", icon: Network, color: "text-slate-300", bg: "bg-slate-300/10", border: "border-slate-300/20" },
    { name: "C#", icon: CodeXml, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Android SDK", icon: Smartphone, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
    { name: "Next.js", icon: Globe, color: "text-white", bg: "bg-white/10", border: "border-white/20" },
];

const row2 = [
    { name: "TensorFlow", icon: BrainCircuit, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { name: "PyTorch", icon: Cpu, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
    { name: "OpenAI", icon: Bot, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Kali Linux", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Splunk", icon: Activity, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { name: "Ansible", icon: Layers, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Wireshark", icon: ScanLine, color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Metasploit", icon: Radar, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
];

export default function TechStackMarquee() {
    return (
        <section className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
            <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                    Technologies Stack We Utilize
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    From cutting-edge AI models to bulletproof cybersecurity and modern software frameworks,
                    we leverage the best tools to build resilient enterprise systems.
                </p>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
                {/* Row 1 - Moves Left */}
                <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex w-max gap-6 pr-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    >
                        {[...row1, ...row1].map((tech, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-3 px-6 py-4 glass rounded-2xl border ${tech.border} min-w-[200px] justify-center transition-all hover:scale-105 hover:bg-white/5 cursor-default`}
                            >
                                <div className={`p-2 rounded-lg ${tech.bg}`}>
                                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                                </div>
                                <span className="font-bold text-slate-200 tracking-wide">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Center Illustration (Optional) - This mimics the central graphic from the prompt */}
                <div className="flex justify-center my-8 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full" />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 p-8 glass rounded-[2.5rem] border border-blue-500/30 flex items-center justify-center gap-8 text-center"
                    >
                        <div>
                            <BrainCircuit className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <p className="font-black text-white text-xl">AI Integration</p>
                        </div>
                        <div className="h-20 w-px bg-white/10" />
                        <div>
                            <Code className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                            <p className="font-black text-white text-xl">Software Dev</p>
                        </div>
                        <div className="h-20 w-px bg-white/10" />
                        <div>
                            <ShieldCheck className="w-12 h-12 text-rose-400 mx-auto mb-4" />
                            <p className="font-black text-white text-xl">Cyber Security</p>
                        </div>
                    </motion.div>
                </div>

                {/* Row 2 - Moves Right */}
                <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex w-max gap-6 pr-6"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                    >
                        {[...row2, ...row2].map((tech, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-3 px-6 py-4 glass rounded-2xl border ${tech.border} min-w-[200px] justify-center transition-all hover:scale-105 hover:bg-white/5 cursor-default`}
                            >
                                <div className={`p-2 rounded-lg ${tech.bg}`}>
                                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                                </div>
                                <span className="font-bold text-slate-200 tracking-wide">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
