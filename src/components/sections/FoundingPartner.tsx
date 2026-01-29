'use client';

import { Rocket, HeadphonesIcon, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const benefits = [
    {
        icon: Rocket,
        title: 'Early Adopter Pricing',
        description: 'Lock in special founding partner rates before public launch.',
    },
    {
        icon: HeadphonesIcon,
        title: 'Priority Support',
        description: 'Dedicated success manager and priority issue resolution.',
    },
    {
        icon: Users,
        title: 'Shape Our Roadmap',
        description: 'Direct input on product features and development priorities.',
    },
    {
        icon: Zap,
        title: 'First Access',
        description: 'Be first to experience new features and capabilities.',
    },
];

export function FoundingPartner() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                        <Rocket className="h-4 w-4" />
                        Limited Availability
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">
                        Become a Founding Partner
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Join our exclusive early access program and help shape the future of institutional management.
                        Limited spots available for organizations ready to transform their operations.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <benefit.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h3>
                            <p className="text-slate-600 text-sm">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Institution?
                        </h3>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                            Schedule a personalized demo and discover how eMitra can streamline your operations.
                        </p>
                        <Link href="/contact">
                            <motion.div
                                className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Apply for Early Access
                            </motion.div>
                        </Link>
                        <p className="text-blue-200 text-sm mt-4">
                            Limited to 10 founding partners • No commitment required
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
