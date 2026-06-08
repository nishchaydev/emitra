'use client';

import { motion } from 'framer-motion';

const stats = [
    { label: 'Residents Managed', value: '10k+', color: 'text-indigo-600' },
    { label: 'Partner Institutions', value: '50+', color: 'text-teal-600' },
    { label: 'Cities Covered', value: '12+', color: 'text-amber-600' },
    { label: 'Digital Efficiency', value: '98%', color: 'text-rose-600' },
];

export function StatsBar() {
    return (
        <div className="py-12 border-y border-slate-100 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center md:text-left space-y-1"
                        >
                            <p className={`text-4xl md:text-5xl font-display font-black tracking-tighter ${stat.color}`}>
                                {stat.value}
                            </p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

