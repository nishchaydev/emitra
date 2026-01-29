'use client';

import { Unlink, Clock, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
    {
        icon: Unlink,
        title: 'Disconnected systems',
        description: 'Information silos that prevent a holistic view of institutional health and performance.',
        color: 'bg-red-50 text-red-600 border-red-100',
    },
    {
        icon: Clock,
        title: 'Manual workflows',
        description: 'Administrative burden from repetitive tasks that should be handled by intelligent automation.',
        color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
        icon: EyeOff,
        title: 'Limited visibility',
        description: 'Difficulty in making data-driven decisions without real-time reporting and analytics dashboards.',
        color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
];

export function Problems() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50" id="solutions">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                        The Challenge
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                        Complexity slows institutions down.
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Legacy infrastructures create bottlenecks that hinder growth and student success. We
                        identify and solve these pain points.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                            className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <motion.div
                                className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 ${problem.color} border`}
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <problem.icon className="h-7 w-7" />
                            </motion.div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{problem.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
