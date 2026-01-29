'use client';

import { ArrowRight, Zap, Play } from 'lucide-react';
import { Globe } from '@/components/ui/Globe';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Floating particle component
function Particle({ delay, duration, x, y }: { delay: number; duration: number; x: string; y: string }) {
    return (
        <motion.div
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{ left: x, top: y }}
            animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
}

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
                <motion.div
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.5, 0.4] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-teal-100/30 to-transparent rounded-full blur-3xl"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.4, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(90deg, #1E3A8A 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Floating Particles */}
                <Particle delay={0} duration={4} x="10%" y="20%" />
                <Particle delay={1} duration={5} x="20%" y="60%" />
                <Particle delay={2} duration={4.5} x="80%" y="30%" />
                <Particle delay={0.5} duration={5.5} x="70%" y="70%" />
                <Particle delay={1.5} duration={4} x="50%" y="10%" />
                <Particle delay={2.5} duration={5} x="90%" y="50%" />
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
                        whileHover={{ scale: 1.02 }}
                    >
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-700">Enterprise-Grade Solutions</span>
                    </motion.div>

                    {/* Headline with Gradient */}
                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.08] tracking-tight">
                        <span className="text-slate-900">Smart systems for</span> <br />
                        <span className="inline-block min-w-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -30, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="block bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent"
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
                        <motion.button
                            className="group bg-gradient-to-r from-primary to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Schedule a Demo
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button
                            className="group bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center gap-2"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Play className="h-5 w-5 text-primary" />
                            Watch 2-Min Tour
                        </motion.button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        className="pt-6 flex items-center gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <div className="flex -space-x-3">
                            {['AS', 'RV', 'PP', 'NG'].map((initials, i) => (
                                <div
                                    key={i}
                                    className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-white flex items-center justify-center text-xs font-bold text-primary"
                                >
                                    {initials}
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-900">Trusted by 50+ institutions</p>
                            <p className="text-xs text-slate-500">Join leading organizations worldwide</p>
                        </div>
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
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-teal-400/10 blur-3xl rounded-full scale-110"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Globe */}
                    <Globe />

                    {/* Floating Card */}
                    <motion.div
                        className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 p-5 lg:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100/80 max-w-[220px] lg:max-w-[240px]"
                        initial={{ opacity: 0, y: 20, x: -20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="flex gap-4 items-center">
                            <div className="h-10 w-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                                <Zap className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Real-time Analytics</p>
                                <p className="text-xs text-slate-500">Live data tracking</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Second Floating Card - Top Right */}
                    <motion.div
                        className="absolute -top-4 -right-4 lg:-top-6 lg:right-0 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100/80"
                        initial={{ opacity: 0, y: -20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="text-green-600 text-sm">✓</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-900">99.9% Uptime</p>
                                <p className="text-[10px] text-slate-500">SLA Guaranteed</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

