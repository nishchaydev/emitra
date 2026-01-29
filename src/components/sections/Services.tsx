'use client';

import {
    GraduationCap,
    Zap,
    BarChart3,
    Puzzle,
    Headphones,
    Shield,
    ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: GraduationCap,
        title: 'School ERP',
        description: 'Comprehensive management for admissions, academics, and finances.',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        icon: Zap,
        title: 'Automation',
        description: 'Custom workflow engines to eliminate manual administrative work.',
        color: 'bg-amber-50 text-amber-600',
    },
    {
        icon: BarChart3,
        title: 'Analytics',
        description: 'Advanced data visualization for deep institutional insights.',
        color: 'bg-purple-50 text-purple-600',
    },
    {
        icon: Puzzle,
        title: 'Integrations',
        description: 'Seamless API connections with your existing tech stack.',
        color: 'bg-teal-50 text-teal-600',
    },
    {
        icon: Headphones,
        title: 'Dedicated Support',
        description: '24/7 technical assistance and managed maintenance.',
        color: 'bg-rose-50 text-rose-600',
    },
    {
        icon: Shield,
        title: 'Cybersecurity',
        description: 'Enterprise-grade protection for sensitive institutional data.',
        color: 'bg-emerald-50 text-emerald-600',
    },
];

export function Services() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        className="max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                            What We Offer
                        </span>
                        <h2 className="text-4xl font-display font-bold mb-4 text-slate-900">
                            A complete ecosystem of services.
                        </h2>
                        <p className="text-slate-600 text-lg">
                            From individual modules to full-scale digital transformation, we have the tools to
                            help you succeed.
                        </p>
                    </motion.div>
                    <motion.a
                        href="/contact"
                        className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all group"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Speak with an Expert
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${service.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
