"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Mail, KeyRound } from "lucide-react";
import { useState, useTransition } from "react";
import { login } from "@/lib/auth.actions";

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            setError(null);
            const res = await login(formData);
            if (res?.error) {
                setError(res.error);
            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <div className="mb-10 text-center">
                        <h1 className="text-2xl font-black text-white mb-2 flex items-center justify-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-blue-500" />
                            Secure Portal
                        </h1>
                        <p className="text-sm text-slate-400">Authorized clients only.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-500 text-sm font-medium flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 shrink-0" />
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Client Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="client@morley.ai.co.zm"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Access Token</label>
                            <div className="relative">
                                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="••••••••••"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isPending ? "Authenticating..." : "Establish Secure Connection"}
                            {!isPending && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-xs text-slate-500">
                        Protected by Zambian Data Privacy Act No. 3 of 2021
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
