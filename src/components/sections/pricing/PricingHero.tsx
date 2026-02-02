'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown } from 'lucide-react';

export function PricingHero() {
    return (
        <section className="relative min-h-auto lg:min-h-[60vh] flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-50 pt-28 pb-16 lg:pt-32 lg:pb-32">
            {/* Abstract Background - Rising Bars (Light Mode) */}
            <div className="absolute inset-0 overflow-hidden flex items-end justify-between px-20 opacity-60 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-16 bg-gradient-to-t from-blue-100 to-transparent rounded-t-xl border-t border-blue-200/20"
                        initial={{ height: '0%' }}
                        animate={{ height: [`${20 + Math.random() * 40}%`, `${30 + Math.random() * 60}%`, `${20 + Math.random() * 40}%`] }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/grid-me.png')] opacity-[0.03] pointer-events-none" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold tracking-widest uppercase shadow-sm">
                        <Crown className="w-4 h-4 text-yellow-500" />
                        Transparent Pricing
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900">
                        Simple plans for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            every scale.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Choose the perfect plan for your institution. No hidden fees, no surprises.
                        Just powerful tools to help you grow.
                    </p>

                    {/* Feature Tickers */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        {[
                            { label: '30-Day Free Trial', icon: Zap },
                            { label: 'No Credit Card Req.', icon: Shield },
                            { label: 'Cancel Anytime', icon: Check },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 text-sm font-medium shadow-sm"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                            >
                                <item.icon className="w-4 h-4 text-blue-600" />
                                {item.label}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
