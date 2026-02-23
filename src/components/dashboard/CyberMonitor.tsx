"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ShieldAlert, Activity, Globe } from "lucide-react";

export default function CyberMonitor() {
    const [threats, setThreats] = useState<{ id: string; ip: string; location: string; time: string; type: string }[]>([]);
    const [isSecure, setIsSecure] = useState(true);

    // Simulate real-time threat detection
    useEffect(() => {
        const interval = setInterval(() => {
            const newThreat = {
                id: Math.random().toString(36).substr(2, 9),
                ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
                location: ["Beijing", "Moscow", "Frankfurt", "Silicon Valley"][Math.floor(Math.random() * 4)],
                time: new Date().toLocaleTimeString(),
                type: Math.random() > 0.5 ? "Brute Force Attempt" : "SQL Injection Probe"
            };

            setThreats(prev => [newThreat, ...prev].slice(0, 5));
            setIsSecure(false);
            setTimeout(() => setIsSecure(true), 2000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSecure ? 'bg-emerald-500/20 text-emerald-500' : 'bg-rose-500/20 text-rose-500 animate-pulse'}`}>
                        {isSecure ? <ShieldCheck className="w-6 h-6" /> : <ShieldAlert className="w-6 h-6" />}
                    </div>
                    <div>
                        <h3 className="font-bold text-white uppercase tracking-wider text-sm">System Status</h3>
                        <p className={`text-lg font-black ${isSecure ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {isSecure ? "ACTIVE & SECURE" : "THREAT BLOCKED"}
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-xs text-slate-500 uppercase">Local Host</p>
                    <p className="text-sm font-mono text-blue-500">Zambia-VZ1-Node</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Threat Map Placeholder */}
                <div className="glass rounded-2xl p-6 border border-white/5 relative overflow-hidden h-64 flex flex-col items-center justify-center">
                    <Globe className="w-32 h-32 text-blue-500/10 absolute animate-pulse" />
                    <div className="relative z-10 text-center">
                        <div className="flex justify-center gap-4 mb-4">
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                    className="w-3 h-3 bg-blue-500 rounded-full"
                                />
                            ))}
                        </div>
                        <p className="text-slate-400 font-medium">Real-time Threat Mapping</p>
                        <p className="text-xs text-slate-600">Monitoring 142 Active Endpoints</p>
                    </div>
                    {/* Mock Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                        <line x1="10%" y1="10%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="1" />
                        <line x1="90%" y1="20%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="1" />
                        <line x1="30%" y1="80%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="1" />
                    </svg>
                </div>

                {/* Live Logs */}
                <div className="glass rounded-2xl border border-white/5 flex flex-col">
                    <div className="p-4 border-b border-white/5 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Security Logs</span>
                    </div>
                    <div className="p-4 flex-grow font-mono text-xs overflow-hidden">
                        <AnimatePresence initial={false}>
                            {threats.map((threat) => (
                                <motion.div
                                    key={threat.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mb-2 p-2 bg-white/5 rounded flex items-center justify-between gap-4"
                                >
                                    <span className="text-rose-500 font-bold">BLOCK</span>
                                    <span className="text-slate-500">{threat.time}</span>
                                    <span className="text-blue-400 flex-grow">{threat.ip}</span>
                                    <span className="text-slate-400 truncate max-w-[80px]">{threat.location}</span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {threats.length === 0 && (
                            <div className="h-full flex items-center justify-center text-slate-600 italic">
                                Scanning for anomalies...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
