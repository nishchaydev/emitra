'use client';

import { ArrowRight, Zap, Play, Clock } from 'lucide-react';
import { Globe } from '@/components/ui/Globe';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    const [showMockup, setShowMockup] = useState(false);
    const [imageLoadError, setImageLoadError] = useState(false);

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

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
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
                        <Link href="/contact">
                            <motion.div
                                className="group bg-gradient-to-r from-primary to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2 cursor-pointer"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Schedule a Demo
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                        <motion.button
                            onClick={() => setShowMockup(true)}
                            className="group bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center gap-2"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Play className="h-5 w-5 text-primary" />
                            See the Dashboard
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
                            <p className="text-sm font-medium text-slate-900">Trusted by leading institutions</p>
                            <p className="text-xs text-slate-500">Join organizations transforming operations</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right: Hero Visual */}
                <motion.div
                    className="relative aspect-square lg:aspect-auto h-[600px] flex items-center justify-center"
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

                    {/* Floating Card - Analytics */}
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

                    {/* Floating Card - Uptime */}
                    <motion.div
                        className="absolute -top-4 -right-4 lg:-top-6 lg:right-0 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100/80"
                        initial={{ opacity: 0, y: -20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                <Clock className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-900">24/7 Available</p>
                                <p className="text-[10px] text-slate-500">Always online</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Dashboard Mockup Modal */}
            <AnimatePresence>
                {showMockup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
                        onClick={() => setShowMockup(false)}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                                <div>
                                    <h3 id="modal-title" className="font-bold text-slate-900">Dashboard Preview</h3>
                                    <p className="text-xs text-slate-500">Conceptual UI — final implementation may vary</p>
                                </div>
                                <button
                                    onClick={() => setShowMockup(false)}
                                    className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
                                    aria-label="Close modal"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="relative w-full h-[500px] bg-slate-100 flex items-center justify-center">
                                {!imageLoadError ? (
                                    <Image
                                        src="/dashboard-mockup.png"
                                        alt="eMitra Dashboard - Conceptual UI showing analytics and management tools"
                                        fill
                                        className="object-contain"
                                        onError={() => setImageLoadError(true)}
                                    />
                                ) : (
                                    <div className="text-center p-8">
                                        <p className="text-slate-400">Preview currently unavailable</p>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
                                <p className="text-sm text-slate-600">
                                    <span className="font-medium">Illustrative / conceptual UI</span> — final implementation may vary
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
