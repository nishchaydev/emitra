'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

const contactTypes = [
    {
        icon: Mail,
        title: 'General Inquiries',
        description: 'For demos, pricing, or partnership discussions.',
        email: 'emitratechnologies@gmail.com',
        gradient: 'from-primary to-blue-700',
    },
    {
        icon: Phone,
        title: 'Sales Team',
        description: 'Speak directly with our enterprise sales team.',
        email: 'emitratechnologies@gmail.com',
        gradient: 'from-blue-600 to-blue-800',
    },
    {
        icon: MessageSquare,
        title: 'Technical Support',
        description: 'Existing clients seeking assistance.',
        email: 'emitratechnologies@gmail.com',
        gradient: 'from-blue-700 to-primary',
    },
];

export function ContactTypes() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                        Other Ways to Reach Us
                    </h2>
                    <p className="text-slate-600">
                        Choose the best channel for your inquiry
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={`h-14 w-14 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center text-white mb-6`}>
                                <type.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                            <p className="text-slate-600 text-sm mb-6">{type.description}</p>
                            <a
                                href={`mailto:${type.email}`}
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                            >
                                {type.email}
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
