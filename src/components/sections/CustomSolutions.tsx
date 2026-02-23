'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Settings, ShieldCheck, Layers, Check, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function CustomSolutions() {
    return (
        <section className="py-32 bg-[#0F172A] text-white relative overflow-hidden">
            {/* High-tech Background Grid/Accents */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                    <div className="lg:max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest"
                        >
                            <Sparkles className="h-3 w-3" />
                            Elite Engineering
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-tight">
                            Beyond off-the-shelf.<br />
                            <span className="text-blue-500">Pure precision.</span>
                        </h2>

                        <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-xl font-medium">
                            Whether it's custom institutional workflows or government-scale platforms,
                            we build high-performance systems tailored to your exact operational parameters.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-14">
                            {[
                                { text: "Workflow Automation", icon: Settings },
                                { text: "Government Tenders", icon: ShieldCheck },
                                { text: "Modernizing Legacy", icon: Layers },
                                { text: "White-label Platforms", icon: Code }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <span className="font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/contact" className="inline-block">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#0066FF] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_20px_40px_-12px_rgba(0,102,255,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,102,255,0.5)] transition-all flex items-center gap-3 cursor-pointer"
                            >
                                Start Consultation
                                <ArrowRight className="h-5 w-5" />
                            </motion.div>
                        </Link>
                    </div>

                    {/* Pro Visual Module */}
                    <div className="lg:w-2/5 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-[48px] border border-white/5 p-12 flex flex-col justify-center items-center text-center backdrop-blur-xl shadow-2xl overflow-hidden group"
                        >
                            {/* Animated scanner line */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 z-20"
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="relative mb-10">
                                <Code className="h-24 w-24 text-blue-500 relative z-10" />
                                <motion.div
                                    className="absolute inset-0 bg-blue-500 blur-3xl opacity-20"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </div>

                            <h3 className="text-3xl font-black mb-4 tracking-tight">The eMitra Core</h3>
                            <p className="text-slate-400 text-lg mb-10 font-medium">
                                High-availability architecture with AI-native execution and zero-latency workflows.
                            </p>

                            <div className="w-full bg-slate-800 rounded-full h-2 mb-4 overflow-hidden p-0.5 border border-white/5">
                                <motion.div
                                    className="h-full bg-blue-500 rounded-full"
                                    initial={{ width: "30%" }}
                                    animate={{ width: ["30%", "95%", "60%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                            <div className="flex justify-between w-full text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">
                                <span>Optimization</span>
                                <span>100% Secure</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
