'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Lock, FileCheck } from 'lucide-react';

const practices = [
    {
        icon: Shield,
        title: 'Enterprise Security',
        subtitle: 'Best Practices',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        icon: Clock,
        title: '24/7',
        subtitle: 'Uptime Monitoring',
        color: 'bg-green-50 text-green-600',
    },
    {
        icon: Lock,
        title: 'Encrypted',
        subtitle: 'Data Storage',
        color: 'bg-purple-50 text-purple-600',
    },
    {
        icon: FileCheck,
        title: 'Compliance',
        subtitle: 'Roadmap Available',
        color: 'bg-teal-50 text-teal-600',
    },
];

export function TrustBadges() {
    return (
        <section className="py-16 bg-slate-50/50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm text-slate-500 mb-8 text-center">
                        Built with enterprise-grade security practices and infrastructure
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                        {practices.map((practice, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-default"
                            >
                                <div className={`h-10 w-10 rounded-lg ${practice.color} flex items-center justify-center`}>
                                    <practice.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">{practice.title}</p>
                                    <p className="text-xs text-slate-500">{practice.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
