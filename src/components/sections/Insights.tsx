'use client';

import { ArrowRight, FileText, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const insights = [
    {
        category: 'Whitepaper',
        title: 'The Future of the Digital Campus: 2026 Outlook',
        description: 'How AI and IoT are reshaping the physical and digital infrastructure of modern universities.',
        icon: FileText,
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        category: 'Case Study',
        title: 'Scaling Infrastructure for Smart Cities',
        description: 'Lessons learned from deploying unified management systems across 50+ municipal departments.',
        icon: TrendingUp,
        bgColor: 'bg-teal-50',
        iconColor: 'text-teal-600',
    },
    {
        category: 'Research',
        title: 'Student Retention & Predictive Analytics',
        description: 'Using data models to identify at-risk students 6 months before intervention is typically needed.',
        icon: Users,
        bgColor: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
    }
];

export function Insights() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                            Resources
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">
                            Strategic Insights
                        </h2>
                        <p className="text-slate-600 max-w-2xl text-lg">
                            Our thinking on the issues that matter most to institutional leaders.
                        </p>
                    </div>
                    <motion.button
                        className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all group"
                        whileHover={{ x: 5 }}
                    >
                        View All Resources
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {insights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <motion.div
                                className="relative aspect-[4/3] rounded-2xl mb-6 overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={`absolute inset-0 ${item.bgColor} flex items-center justify-center`}>
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <item.icon className={`h-16 w-16 ${item.iconColor} opacity-30`} />
                                    </motion.div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider text-slate-800 shadow-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </motion.div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                                {item.description}
                            </p>
                            <span className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read Report <ArrowRight className="h-4 w-4" />
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
