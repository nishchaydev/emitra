'use client';

import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/50 via-gray-50 to-gray-50" />
                <motion.div
                    className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-blue-200/5 to-transparent rounded-full blur-3xl opacity-60"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        AI-Powered Management Systems
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-slate-900">
                        AI-Powered Management Systems for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            Indian Institutions
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        We build intelligent software that runs institutions—schools, gyms, housing, and beyond—so you can focus on growth, not paperwork.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link href="#products">
                            <motion.div
                                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Explore Products
                                <ArrowRight className="h-5 w-5" />
                            </motion.div>
                        </Link>
                        <Link href="/contact">
                            <motion.div
                                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Talk to Sales
                                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                            </motion.div>
                        </Link>
                    </div>

                    <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row gap-6 sm:gap-12">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-slate-900">Fast Deployment</p>
                                <p className="text-slate-500">Live in weeks, not months</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-slate-900">India Optimized</p>
                                <p className="text-slate-500">Local payments & support</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    className="relative lg:h-[600px] w-full flex items-center justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {/* Abstract clean UI representation */}
                    <div className="relative w-full max-w-[600px] aspect-[4/3] bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 lg:p-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white z-0" />

                        {/* Browser Bar */}
                        <div className="relative z-10 flex items-center gap-2 mb-4 px-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80" />
                            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                            <div className="w-3 h-3 rounded-full bg-green-400/80" />
                            <div className="ml-4 h-6 w-2/3 bg-slate-100 rounded-md" />
                        </div>

                        {/* Mock UI Content */}
                        <div className="relative z-10 grid grid-cols-12 gap-4 h-full pb-8">
                            {/* Sidebar */}
                            <div className="hidden sm:block col-span-3 h-full bg-slate-50 rounded-xl border border-slate-100/50 p-3 space-y-2">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="h-8 w-full bg-white rounded-lg shadow-sm" />
                                ))}
                            </div>
                            {/* Main Content */}
                            <div className="col-span-12 sm:col-span-9 h-full space-y-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-24 bg-blue-50/50 rounded-xl border border-blue-100/50 p-4">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 mb-2" />
                                        <div className="h-2 w-16 bg-blue-200/50 rounded" />
                                    </div>
                                    <div className="h-24 bg-indigo-50/50 rounded-xl border border-indigo-100/50 p-4">
                                        <div className="h-8 w-8 rounded-full bg-indigo-100 mb-2" />
                                        <div className="h-2 w-16 bg-indigo-200/50 rounded" />
                                    </div>
                                    <div className="h-24 bg-emerald-50/50 rounded-xl border border-emerald-100/50 p-4">
                                        <div className="h-8 w-8 rounded-full bg-emerald-100 mb-2" />
                                        <div className="h-2 w-16 bg-emerald-200/50 rounded" />
                                    </div>
                                </div>
                                <div className="h-48 bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                                    <div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
                                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                            <div key={i} className="w-full bg-slate-100 rounded-t-sm relative group overflow-hidden">
                                                <div className="absolute bottom-0 w-full bg-primary/80 transition-all duration-1000 ease-out" style={{ height: `${h}%` }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 1 - Parent App */}
                        <motion.div
                            className="absolute -right-4 bottom-10 w-48 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-20"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                                </div>
                                <div>
                                    <div className="w-20 h-2 bg-slate-200 rounded mb-1" />
                                    <div className="w-12 h-2 bg-slate-100 rounded" />
                                </div>
                            </div>
                            <div className="w-full h-16 bg-slate-50 rounded-lg p-2">
                                <div className="w-full h-full bg-slate-200/50 rounded-md" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

