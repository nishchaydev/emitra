'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { RippleButton } from '../ui/RippleButton';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* --- Background Effects --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Soft Atmospheric Gradients */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50/20 via-white to-transparent opacity-60" />

                {/* Light Trails SVG Container */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-60 lg:opacity-100"
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="15" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <linearGradient id="trailGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0066FF" stopOpacity="0" />
                            <stop offset="50%" stopColor="#0066FF" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* Dynamic Curved Trails - Fewer on mobile */}
                    {[...Array(6)].map((_, i) => (
                        <motion.path
                            key={i}
                            d={`M ${-200 + i * 50} 1200 Q ${300 + i * 20} 500 ${1200 + i * 50} ${-200}`}
                            stroke="url(#trailGradient)"
                            strokeWidth={2 + i}
                            strokeLinecap="round"
                            className={i > 3 ? "hidden lg:block" : "block"}
                            opacity={0.15 + i * 0.05}
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 0.4, 0.4, 0],
                                pathOffset: [0, 0, 1, 1],
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.8,
                            }}
                        />
                    ))}

                    {/* Silver Core Trails */}
                    {[...Array(3)].map((_, i) => (
                        <motion.path
                            key={`silver-${i}`}
                            d={`M ${-100 + i * 100} 1100 Q ${400 + i * 30} 400 ${1100 + i * 100} ${-100}`}
                            stroke="#E2E8F0"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            className={i > 1 ? "hidden lg:block" : "block"}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 0.8, 0.8, 0],
                                pathOffset: [0, 0, 1, 1],
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 1.5,
                            }}
                        />
                    ))}
                </svg>

                {/* Subtle Lens Flare Arcs */}
                <div className="absolute top-1/4 left-1/4 w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] border border-blue-100/20 rounded-full blur-sm opacity-30" />
                <div className="absolute bottom-1/3 right-1/4 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] border border-blue-50/10 rounded-full blur-md opacity-20" />
            </div>

            {/* --- Hero Content --- */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <div className="flex flex-col items-center">
                    {/* Translucent Glass Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 mb-6 lg:mb-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
                    >
                        <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 text-blue-600" />
                        <span className="text-[10px] lg:text-sm font-semibold tracking-wide text-slate-600 uppercase">
                            Empowering Your Growth
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl lg:text-8xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] lg:leading-[1.05] mb-6 lg:mb-8"
                    >
                        Your Digital <br className="hidden md:block" />
                        Friend For Life
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg lg:text-2xl text-slate-500 max-w-2xl mx-auto mb-8 lg:mb-12 font-medium leading-relaxed"
                    >
                        Seamless management solutions that grow with your institution.
                        Simplified, secure, and smart.
                    </motion.p>

                    {/* Rounded Solid Electric Blue Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <Link href="#products">
                            <RippleButton
                                as="div"
                                className="bg-[#0066FF] hover:bg-[#0055DD] text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-base lg:text-lg shadow-[0_20px_40px_-15px_rgba(0,102,255,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,102,255,0.4)] transition-all duration-300 active:scale-95 flex items-center gap-2 lg:gap-3 cursor-pointer"
                            >
                                Explore Our Products
                                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                            </RippleButton>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Fine-grain noise atmosphere (CSS based) */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </section>
    );
}
