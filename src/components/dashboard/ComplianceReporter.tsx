"use client";

import { useState } from "react";
import { FileCheck, FileDown, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";

export default function ComplianceReporter() {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            alert("Compliance Audit Report (PDF) has been generated and is ready for download.");
        }, 3000);
    };

    const checks = [
        { name: "Part IV: Parts of Data Localisation", status: "Compliant" },
        { name: "Section 48: Critical Data Sovereignty", status: "Active" },
        { name: "Cyber Crimes Act 2025: Log Retention", status: "Monitoring" },
        { name: "ZRA Data Privacy Standards", status: "Compliant" },
    ];

    return (
        <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Scale className="w-48 h-48 text-blue-500" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-grow space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                            <FileCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-white">Compliance Reporter</h4>
                            <p className="text-slate-400">Audit-ready documentation for Zambian Regulators.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {checks.map((check) => (
                            <div key={check.name} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    <span className="text-sm font-medium text-slate-300">{check.name}</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase py-1 px-2 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
                                    {check.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="shrink-0 w-full md:w-64 flex flex-col items-center justify-center space-y-4 p-8 bg-blue-500/5 rounded-3xl border border-blue-500/20">
                    <ShieldCheck className="w-12 h-12 text-blue-500 mb-2" />
                    <p className="text-center text-xs text-slate-500 mb-4 px-4">
                        Meets all requirements of the **Cyber Security Act No. 3 of 2025**.
                    </p>
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                    >
                        <FileDown className="w-5 h-5" />
                        {isGenerating ? "Generating Audit..." : "Export Audit PDF"}
                    </button>
                </div>
            </div>
        </div>
    );
}
