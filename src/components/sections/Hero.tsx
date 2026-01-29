'use client';

import { ArrowRight, Zap } from 'lucide-react';
import { Globe } from '@/components/ui/Globe';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
    const words = ["Universities", "Governments", "Enterprises"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-teal-100/30 to-transparent rounded-full blur-3xl" />

                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(90deg, #1E3A8A 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-700">Enterprise-Grade Solutions</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.08] tracking-tight text-slate-900">
                        Smart systems for <br />
                        <span className="text-primary inline-block min-w-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -30, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="block"
                                >
                                    {words[index]}.
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-xl text-slate-600 max-w-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Unifying disconnected workflows with enterprise-grade automation and real-time
                        analytics designed for the modern era.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 pt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <button className="group bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                            Schedule a Demo
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                            Watch 2-Min Tour
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right: Hero Visual */}
                <motion.div
                    className="relative aspect-square lg:aspect-auto h-[500px] flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                >
                    {/* Glow Effect Behind Globe */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-teal-400/10 blur-3xl rounded-full scale-110" />

                    {/* Globe */}
                    <Globe />

                    {/* Floating Card */}
                    <motion.div
                        className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 p-5 lg:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100/80 max-w-[220px] lg:max-w-[240px]"
                        initial={{ opacity: 0, y: 20, x: -20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="flex gap-4 items-center">
                            <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                                <Zap className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Real-time Analytics</p>
                                <p className="text-xs text-slate-500">Live data tracking</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
