'use client';

import { motion } from 'framer-motion';
import { Database, Cog, BarChart3, Puzzle, Headphones, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Database,
        title: 'Custom ERP',
        description: 'Comprehensive management for admissions, academics, finance, and operations.',
    },
    {
        icon: Cog,
        title: 'Automation',
        description: 'Eliminate manual tasks with intelligent workflow automation.',
    },
    {
        icon: BarChart3,
        title: 'Analytics',
        description: 'Real-time dashboards with predictive insights and reporting.',
    },
    {
        icon: Puzzle,
        title: 'Integrations',
        description: 'Connect with payment gateways, biometrics, and third-party tools.',
    },
    {
        icon: Headphones,
        title: 'Support',
        description: '24/7 expert assistance and dedicated success management.',
    },
    {
        icon: Shield,
        title: 'Security',
        description: 'Enterprise-grade encryption and compliance frameworks.',
    },
];

export function ServicesGrid() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-xl">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                            What We Offer
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold mt-4 mb-4 text-slate-900">
                            Complete Ecosystem of Services
                        </h2>
                        <p className="text-slate-600">
                            Everything you need to digitize and streamline your institution&apos;s operations.
                        </p>
                    </div>
                    <Link href="/services" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        View All Services <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:border-primary/20 transition-all group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-12 w-12 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center text-white mb-4">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
