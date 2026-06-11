'use client';

import { motion } from 'framer-motion';
import { Bot, MapPin, Zap, Database, Sparkles } from 'lucide-react';

const reasons = [
    {
        icon: Bot,
        title: 'AI-First Intelligence',
        description: 'Deeply integrated AI systems - from predictive analytics to automated engagement. We don\'t just build software; we build intelligent partners.',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        icon: MapPin,
        title: 'Localized for India',
        description: 'Engineered specifically for the Indian landscape. Seamless gateway integrations, regional compliance, and multi-language support from day one.',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50'
    },
    {
        icon: Zap,
        title: 'Rapid Deployment',
        description: 'Our proprietary stack allows for deployment in weeks, not months. Accelerate your digital transformation without the legacy wait times.',
        color: 'text-blue-500',
        bg: 'bg-blue-50/50'
    },
    {
        icon: Database,
        title: 'Absolute Data Ownership',
        description: 'Full transparency and control over your data. With flexible deployment options including secure local hosting, you remain in total command.',
        color: 'text-slate-600',
        bg: 'bg-slate-50'
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* High-tech Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-indigo-50/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest"
                    >
                        <Sparkles className="h-3 w-3" />
                        The eMitra Advantage
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                        Why the world <span className="text-blue-600">chooses us.</span>
                    </h2>
                    <p className="text-slate-500 text-xl font-medium leading-relaxed">
                        We bridge the gap between complex institutional needs and elegant,
                        automated solutions. Simple to use, powerful to run.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-white rounded-[32px] p-8 border border-slate-100 transition-all duration-500 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(0,102,255,0.05)]"
                        >
                            <div className={`h-14 w-14 rounded-2xl ${reason.bg} ${reason.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                                <reason.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

