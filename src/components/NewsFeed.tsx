"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, ExternalLink, Clock, Newspaper } from "lucide-react";

interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: { name: string };
}

/**
 * NewsFeed Component
 * 
 * Live intelligence feed from NewsAPI focused on Cyber Security and AI.
 */
export default function NewsFeed() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const apiKey = "42b1c36e83c9494fac9bd38d2207297f";

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Fetching tactical tech news
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=cybersecurity+OR+"artificial+intelligence"+OR+"machine+learning"&language=en&sortBy=publishedAt&pageSize=6&apiKey=${apiKey}`
                );
                const data = await response.json();
                if (data.articles) {
                    setArticles(data.articles);
                }
            } catch (error) {
                console.error("Failed to fetch intelligence feed:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return (
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 bg-white/5 animate-pulse rounded-2xl border border-white/5" />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass group flex flex-col h-full rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/20 transition-all"
                >
                    <div className="relative h-48 overflow-hidden">
                        {article.urlToImage ? (
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                            />
                        ) : (
                            <div className="w-full h-full bg-blue-600/10 flex items-center justify-center">
                                <Newspaper className="w-12 h-12 text-blue-500/20" />
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <div className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase rounded-full flex items-center gap-1.5 border border-blue-400">
                                <Zap className="w-3 h-3" />
                                Breaking Intel
                            </div>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                            <span>{article.source.name}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-700" />
                            <Clock className="w-3 h-3" />
                            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
                            {article.title}
                        </h3>

                        <p className="text-sm text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                            {article.description}
                        </p>

                        <div className="mt-auto pt-4 border-t border-white/5">
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-black text-blue-400 hover:text-white transition-colors uppercase tracking-widest"
                            >
                                Decrypt Full Briefing
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
