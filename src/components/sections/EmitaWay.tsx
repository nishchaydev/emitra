'use client';

import {
    CheckCircle,
    Network,
    Settings,
    Database,
    RefreshCw,
    TrendingUp,
    ShieldCheck,
    Cloud,
    Code,
    GitBranch,
} from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
    {
        title: 'See Everything in One Place',
        description: 'Student records, finances, attendance—unified so you never dig through scattered spreadsheets.',
    },
    {
        title: 'Predict Problems Early',
        description: 'AI-powered alerts flag at-risk students and budget issues weeks before they become crises.',
    },
    {
        title: 'Never Worry About Downtime',
        description: '99.99% uptime guarantee. Your data is always accessible when you need it.',
    },
];

const iconGrid = [
    { icon: Network, delay: 0 },
    { icon: Settings, delay: 0.1 },
    { icon: Database, delay: 0.2 },
    { icon: RefreshCw, delay: 0.3 },
    { icon: TrendingUp, delay: 0.4, featured: true },
    { icon: ShieldCheck, delay: 0.5 },
    { icon: Cloud, delay: 0.6 },
    { icon: Code, delay: 0.7 },
    { icon: GitBranch, delay: 0.8 },
];

export function EmitaWay() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Visual Grid */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="aspect-square bg-gradient-to-br from-primary to-blue-800 rounded-3xl overflow-hidden relative shadow-2xl shadow-primary/20">
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                        {/* Grid of icons */}
                        <div className="absolute inset-0 flex items-center justify-center p-10 lg:p-12">
                            <div className="grid grid-cols-3 gap-4 lg:gap-6 w-full h-full">
                                {iconGrid.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: item.delay, duration: 0.4 }}
                                        whileHover={{ scale: 1.1 }}
                                        className={`${item.featured
                                            ? 'bg-accent shadow-lg shadow-accent/30'
                                            : 'border-2 border-white/20 hover:border-white/40'
                                            } rounded-xl flex items-center justify-center transition-all duration-300`}
                                    >
                                        <item.icon className={`h-6 w-6 lg:h-8 lg:w-8 ${item.featured ? 'text-white' : 'text-white/60'}`} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                        Our Philosophy
                    </span>
                    <h2 className="text-4xl font-display font-bold text-slate-900">The eMitra Way</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Our approach is built on the philosophy that technology should meet trust. We don&apos;t
                        just provide software; we engineer foundations for growth.
                    </p>

                    <ul className="space-y-5 pt-4">
                        {pillars.map((pillar, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                            >
                                <div className="h-7 w-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">{pillar.title}</p>
                                    <p className="text-slate-500 mt-1">{pillar.description}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
