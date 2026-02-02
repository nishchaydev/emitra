'use client';

import { Server, ShieldCheck, Clock, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

function StatCard({ stat, index }: { stat: typeof stats[0], index: number }) {
    const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
    const decimals = stat.value.includes('.') ? 1 : 0;
    const suffix = stat.value.includes('%') ? '%' : '';

    return (
        <motion.div
            className="flex flex-col items-center text-center space-y-3 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <motion.div
                className="h-14 w-14 bg-gradient-to-br from-blue-50 to-blue-100 text-primary rounded-2xl flex items-center justify-center mb-2 shadow-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <stat.icon className="h-7 w-7" />
            </motion.div>
            <h3 className="text-5xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors">
                {stat.animated ? (
                    <CountUp
                        end={numericValue}
                        duration={2.5}
                        decimals={decimals}
                        suffix={suffix}
                        enableScrollSpy
                        scrollSpyOnce
                    />
                ) : (
                    stat.value
                )}
            </h3>
            <p className="font-bold text-slate-700 text-lg">{stat.label}</p>
            <p className="text-sm text-slate-500 max-w-[220px] leading-relaxed">{stat.description}</p>
        </motion.div>
    );
}

const stats = [
    {
        icon: Clock,
        value: '20+',
        label: 'Hours Saved',
        description: 'Hours saved per staff member, every single week.',
        animated: true,
    },
    {
        icon: Server,
        value: '40%',
        label: 'Faster Collection',
        description: 'Reduction in fee collection cycles and delays.',
        animated: true,
    },
    {
        icon: ShieldCheck,
        value: '100%',
        label: 'Compliant',
        description: 'Fully compliant digital records and audit trails.',
        animated: true,
    },
    {
        icon: Headphones,
        value: '24/7',
        label: 'Support',
        description: 'Real humans ready to help you solve problems.',
        animated: false,
    },
];

export function Statistics() {
    return (
        <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                        Real Impact
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                        Built for results, not just features.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
