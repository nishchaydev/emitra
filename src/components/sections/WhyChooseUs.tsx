'use client';

import { motion } from 'framer-motion';
import { Bot, MapPin, Zap, Database } from 'lucide-react';

const reasons = [
    {
        icon: Bot,
        title: 'AI-First, Not Bolted On',
        description: 'Every product has built-in AI — chatbots, smart analytics, predictive insights. Not just software, intelligent systems.',
        color: 'bg-blue-50 text-blue-600'
    },
    {
        icon: MapPin,
        title: 'Built for India',
        description: 'Indian payment gateways, local compliance, regional language support. We understand your market.',
        color: 'bg-orange-50 text-orange-600'
    },
    {
        icon: Zap,
        title: 'Fast to Deploy',
        description: 'Pre-built products mean you go live in weeks, not months. No lengthy custom development.',
        color: 'bg-purple-50 text-purple-600'
    },
    {
        icon: Database,
        title: 'Your Data, Your Control',
        description: 'On-premise deployment available. Full data ownership. No vendor lock-in.',
        color: 'bg-green-50 text-green-600'
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 translate-x-32" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        Why Choose eMitra?
                    </h2>
                    <p className="text-slate-500 text-lg">
                        We don't just build software. We build systems that solve the unique challenges of Indian institutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all"
                        >
                            <div className={`h-12 w-12 rounded-xl ${reason.color} flex items-center justify-center mb-6`}>
                                <reason.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
