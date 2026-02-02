'use client';

import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { DashboardMockup } from '../ui/DashboardMockup';
import { RippleButton } from '../ui/RippleButton';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="gradient-bg absolute inset-0 z-0" />
                <motion.div
                    className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-blue-200/5 to-transparent rounded-full blur-3xl opacity-60"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-48 lg:pb-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

                    <h1 className="text-4xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-slate-900">
                        We help schools and institutions run operations flawlessly — <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            so leadership can focus on growth, not admin.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        Intelligent management systems that eliminate chaos and streamline workflows for modern Indian institutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link href="#products" className="group">
                            <RippleButton
                                as="div"
                                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto hover:-translate-y-0.5 active:scale-95 duration-200"
                            >
                                Explore Products
                                <ArrowRight className="h-5 w-5" />
                            </RippleButton>
                        </Link>
                        <Link href="/contact" className="group">
                            <RippleButton
                                as="div"
                                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto hover:-translate-y-0.5 active:scale-95 duration-200"
                            >
                                Talk to Sales
                                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                            </RippleButton>
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
                    {/* 3D Dashboard Mockup */}
                    <DashboardMockup />
                </motion.div>
            </div>
        </section>
    );
}

