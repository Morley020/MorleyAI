"use client";

import { useState } from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, UploadCloud, Calculator, Download, FileJson } from "lucide-react";

const mockSalesData = [
    { name: "Jan", sales: 4000, forecast: 4000 },
    { name: "Feb", sales: 3000, forecast: 3200 },
    { name: "Mar", sales: 2000, forecast: 2400 },
    { name: "Apr", sales: 2780, forecast: 3100 },
    { name: "May", sales: 1890, forecast: 3500 },
    { name: "Jun", sales: 2390, forecast: 4200 },
    { name: "Jul", sales: 3490, forecast: 4800 },
];

export default function AnalyticsForecast() {
    const [isUploading, setIsUploading] = useState(false);

    const handleUpload = () => {
        setIsUploading(true);
        setTimeout(() => setIsUploading(false), 2000);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white uppercase tracking-wider text-sm">Predictive Insights</h3>
                        <p className="text-lg font-black text-blue-500">PROPHET ENGINE v2.1</p>
                    </div>
                </div>
                <button
                    onClick={handleUpload}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-sm font-semibold"
                >
                    <UploadCloud className={`w-4 h-4 ${isUploading ? 'animate-bounce' : ''}`} />
                    {isUploading ? "Analysing CSV..." : "Upload Sales Data"}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart Card */}
                <div className="lg:col-span-2 glass rounded-2xl p-6 border border-white/5 h-[350px]">
                    <h4 className="text-sm font-bold text-slate-400 mb-6 flex items-center gap-2">
                        <Calculator className="w-4 h-4" />
                        3-Month Revenue Forecast (ZMW)
                    </h4>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={mockSalesData}>
                                <defs>
                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
                                    itemStyle={{ color: "#fff" }}
                                />
                                <Area type="monotone" dataKey="sales" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSales)" />
                                <Area type="monotone" strokeDasharray="5 5" dataKey="forecast" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorForecast)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Insights Panel */}
                <div className="space-y-4">
                    <div className="p-6 glass rounded-2xl border border-white/5 bg-blue-500/5">
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Recommendation</p>
                        <h5 className="font-bold text-white mb-2 italic">&quot;Stock up on Inventory X in April&quot;</h5>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Based on historical trends and current velocity, we predict a 42% surge in demand for electronics next month.
                        </p>
                    </div>

                    <div className="p-6 glass rounded-2xl border border-white/5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-bold text-slate-400">Monthly Reports</span>
                            <Download className="w-4 h-4 text-slate-500" />
                        </div>
                        <div className="space-y-2">
                            {['sales_q1_summary.json', 'inventory_forecast.xlsx'].map(file => (
                                <div key={file} className="flex items-center gap-2 text-xs text-slate-400 p-2 hover:bg-white/5 rounded cursor-pointer">
                                    <FileJson className="w-3 h-3 text-blue-500" />
                                    {file}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
