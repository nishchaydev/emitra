'use client';

import { motion } from 'framer-motion';
import { Rocket, Target, Users, Zap } from 'lucide-react';

export function OurStory() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                            The eMitra Journey
                        </h2>
                        <p className="text-xl text-slate-500">
                            From a small engineering team to a leading provider of digital transformation solutions for institutions across India.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-32 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[28px] lg:left-1/2 top-4 bottom-4 w-[2px] bg-blue-100 lg:-translate-x-1/2 z-0 hidden md:block" />

                    {[
                        {
                            year: '2020',
                            title: 'The Foundation',
                            desc: 'Recognizing the massive technology gap in educational institutions and fitness centers, we started writing the first lines of code for what would become our core ERP engine.',
                            icon: Rocket,
                            align: 'left'
                        },
                        {
                            year: '2021',
                            title: 'First Major Deployment',
                            desc: 'We successfully deployed our first integrated suite to a network of schools, proving that enterprise-grade software doesn\'t have to be prohibitively complex or expensive.',
                            icon: Target,
                            align: 'right'
                        },
                        {
                            year: '2023',
                            title: 'Scaling Operations',
                            desc: 'Expanded our services to include dedicated mobile apps, biometric integrations, and automated WhatsApp communication channels, serving thousands of daily active users.',
                            icon: Users,
                            align: 'left'
                        },
                        {
                            year: '2026 & Beyond',
                            title: 'AI & Next-Gen Tech',
                            desc: 'Today, we are pioneering the use of predictive AI models and advanced cloud infrastructure to bring unprecedented efficiency to institutional management.',
                            icon: Zap,
                            align: 'right'
                        }
                    ].map((milestone, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${milestone.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Content */}
                            <div className={`md:w-1/2 ${milestone.align === 'right' ? 'md:pl-12 lg:pl-20' : 'md:pr-12 lg:pr-20'}`}>
                                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
                                    <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-widest mb-6">
                                        {milestone.year}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{milestone.title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {milestone.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Center Icon */}
                            <div className="absolute left-[28px] md:static w-14 h-14 bg-[#0066FF] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 shrink-0 md:-translate-x-0 hidden md:flex border-4 border-white">
                                <milestone.icon className="w-6 h-6" />
                            </div>

                            <div className="md:w-1/2 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
