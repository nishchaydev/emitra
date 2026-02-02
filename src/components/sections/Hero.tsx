'use client';

import { ArrowRight, Play, CheckCircle2, Star, Shield, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { RippleButton } from '../ui/RippleButton';

export function Hero() {
    return (
        <section className="relative min-h-auto lg:min-h-[85vh] flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-50 pt-28 pb-16 lg:pt-32 lg:pb-32">
            {/* Dynamic Aurora Background - Light Mode */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-blue-200/40 rounded-full blur-[80px] lg:blur-[120px] mix-blend-multiply animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[250px] lg:w-[500px] h-[250px] lg:h-[500px] bg-purple-200/40 rounded-full blur-[80px] lg:blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-indigo-200/40 rounded-full blur-[80px] lg:blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8 lg:space-y-10 text-center lg:text-left"
                >
                    {/* Spotlight Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 text-sm font-medium shadow-sm mx-auto lg:mx-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span>AI-Powered Management</span>
                    </motion.div>

                    <div className="relative">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-slate-900">
                            Run your institution on <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                Autopilot.
                            </span>
                        </h1>
                    </div>

                    <p className="text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        Eliminate chaos with intelligent systems that streamline operations, finance, and academics.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <Link href="#products" className="group w-full sm:w-auto">
                            <RippleButton
                                as="div"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 lg:py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-3 cursor-pointer w-full hover:-translate-y-1 active:scale-95 duration-300"
                            >
                                Try for Free
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </RippleButton>
                        </Link>
                        <Link href="/contact" className="group w-full sm:w-auto">
                            <RippleButton
                                as="div"
                                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 lg:py-5 rounded-2xl font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer w-full hover:-translate-y-1 active:scale-95 duration-300"
                            >
                                Book Demo
                            </RippleButton>
                        </Link>
                    </div>

                    <div className="pt-8 border-t border-slate-200 flex flex-wrap justify-center lg:justify-start gap-x-8 lg:gap-x-12 gap-y-4">
                        {[
                            { label: "Setup in 24 Hours", icon: Zap },
                            { label: "Secure & Reliable", icon: Shield },
                            { label: "99.9% Uptime", icon: TrendingUp },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 group">
                                <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
                                    <item.icon className="h-4 w-4" />
                                </div>
                                <span className="text-slate-600 text-sm font-medium group-hover:text-slate-900 transition-colors">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Visual - Glass Stack (Light Mode) */}
                <motion.div
                    className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center perspective-1000 mt-8 lg:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-full blur-[60px] lg:blur-[80px]" />

                    {/* Floating Glass Cards */}
                    <div className="relative w-full max-w-[350px] lg:max-w-[500px] aspect-square">
                        {/* Back Card - Analytics */}
                        <motion.div
                            className="absolute top-0 right-0 w-3/4 aspect-[4/3] bg-white/80 border border-white/50 rounded-2xl p-4 lg:p-6 backdrop-blur-xl shadow-xl z-10"
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [6, 4, 6],
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                    <TrendingUp className="h-4 w-4 text-purple-600" />
                                </div>
                                <div className="h-2 w-24 bg-slate-200 rounded-full" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-16 lg:h-20 w-full bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-50" />
                                <div className="flex gap-2">
                                    <div className="h-6 lg:h-8 w-1/3 bg-slate-100 rounded-lg" />
                                    <div className="h-6 lg:h-8 w-2/3 bg-slate-100 rounded-lg" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Middle Card - Users */}
                        <motion.div
                            className="absolute bottom-12 left-4 w-3/4 aspect-[4/3] bg-white/90 border border-white/60 rounded-2xl p-4 lg:p-6 backdrop-blur-xl shadow-xl z-20"
                            animate={{
                                y: [10, -10, 10],
                                rotate: [-3, -6, -3],
                            }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Star className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div className="h-2 w-20 bg-slate-200 rounded-full" />
                                </div>
                                <div className="h-2 w-8 bg-green-500 rounded-full" />
                            </div>
                            <div className="space-y-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                                        <div className="h-6 w-6 rounded-full bg-slate-200" />
                                        <div className="h-2 w-32 bg-slate-200 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Front Card - Interactive Element */}
                        <motion.div
                            className="absolute bottom-[-10%] right-[10%] w-2/3 aspect-video bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-4 lg:p-6 shadow-2xl shadow-blue-500/20 z-30 flex flex-col justify-between"
                            animate={{
                                y: [-5, 5, -5],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <div>
                                <div className="flex items-center justify-between text-white/80 mb-1">
                                    <span className="text-[10px] lg:text-xs font-medium">Revenue Growth</span>
                                    <TrendingUp className="h-3 w-3 lg:h-4 lg:w-4" />
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-white">+127%</div>
                            </div>
                            <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-white/90"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "75%" }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>

                        {/* Decor Elements - Hide on mobile if too busy */}
                        <motion.div
                            className="absolute -top-10 left-20 text-4xl lg:text-6xl hidden sm:block"
                            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            ✨
                        </motion.div>
                        <motion.div
                            className="absolute bottom-20 -right-10 text-2xl lg:text-4xl hidden sm:block"
                            animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                        >
                            🚀
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
