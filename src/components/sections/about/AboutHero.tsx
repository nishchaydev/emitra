'use client';

import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Shield, Lightbulb, Clock, Globe } from 'lucide-react';
import Image from 'next/image';

const stats = [
    { value: '5+', label: 'Years of Excellence', icon: Clock },
    { value: '50+', label: 'Projects Delivered', icon: Target },
    { value: '10K+', label: 'Users Served', icon: Users },
    { value: '99%', label: 'Client Satisfaction', icon: TrendingUp },
];

export function AboutHero() {
    return (
        <section className="relative min-h-auto lg:min-h-[70vh] flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-50 pt-28 pb-16 lg:pt-32 lg:pb-32">
            {/* Constellation Background */}
            <div className="absolute inset-0 overflow-hidden text-slate-900/5">
                <svg className="absolute w-full h-full opacity-[0.4]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-[10%] left-[20%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
                    animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <motion.div
                    className="space-y-8 text-center lg:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mx-auto lg:mx-0">
                        Our Story
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl lg:text-6xl font-display font-bold leading-[1.1] text-slate-900">
                        Where technology meets <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            unwavering trust.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                        We build future-proof institutional systems designed to withstand complexity and scale with elegance. Our mission: empower institutions with technology that just works.
                    </p>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/60 backdrop-blur-md border border-slate-200/50 rounded-2xl p-5 hover:bg-white transition-all duration-300 hover:shadow-lg group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <stat.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual - The Prism */}
                <motion.div
                    className="relative flex justify-center perspective-1000 mt-12 lg:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-[400px] h-[500px]">
                        {/* Center Prism Card */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden z-20"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

                            <div className="h-full w-full bg-[#0F172A] rounded-[2.3rem] relative overflow-hidden flex flex-col items-center justify-between py-12 px-8">
                                {/* Top Glow */}
                                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[50%] bg-blue-500/20 blur-[100px]" />

                                {/* Logo / Icon */}
                                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                    <Globe className="h-10 w-10 text-white" />
                                </div>

                                <div className="text-center space-y-2 relative z-10">
                                    <h3 className="text-2xl font-bold text-white">Global Standards</h3>
                                    <p className="text-slate-400 text-sm">Engineered for reliability across borders and scales.</p>
                                </div>

                                {/* Animated Lines */}
                                <div className="w-full space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-500"
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: "linear" }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full pt-6 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-mono">
                                    <span>EST. 2020</span>
                                    <span>V 2.0.1</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Rear Elements */}
                        <motion.div
                            className="absolute top-10 -right-10 w-40 h-40 bg-white rounded-3xl shadow-xl z-10 p-4 border border-slate-100 flex items-center justify-center transform rotate-12"
                            animate={{ y: [0, 20, 0], rotate: [12, 6, 12] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-900">24/7</div>
                                <div className="text-xs text-slate-500 font-bold uppercase">Support</div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-20 -left-10 w-32 h-32 bg-blue-600 rounded-3xl shadow-xl shadow-blue-600/20 z-30 p-4 flex items-center justify-center transform -rotate-12"
                            animate={{ y: [0, -20, 0], rotate: [-12, -6, -12] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <Award className="h-12 w-12 text-white" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
