'use client';

import { motion } from 'framer-motion';
import { Layers, Shield, Cpu, Zap, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const pillars = [
    {
        icon: Layers,
        title: 'Institutional SaaS',
        description: 'Building the operating systems for modern educational and residential institutions.',
        link: '/products',
        color: 'indigo'
    },
    {
        icon: Cpu,
        title: 'Enterprise Logic',
        description: 'Bespoke software architecture designed to handle massive complexity with elegant simplicity.',
        link: '/services',
        color: 'teal'
    },
    {
        icon: Zap,
        title: 'Rapid Innovation',
        description: 'From concept to production-ready ecosystem in record time without compromising quality.',
        link: '/launchpad',
        color: 'amber'
    },
    {
        icon: Shield,
        title: 'Data Sovereignty',
        description: 'Ensuring absolute privacy and control over institutional data through local-first engineering.',
        link: '/services',
        color: 'rose'
    }
];

export function StudioPillars() {
    return (
        <section className="py-16 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                    <div className="max-w-2xl">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter text-slate-900 leading-[0.9] mb-6 md:mb-8"
                        >
                            Four Pillars of <span className="text-indigo-600">Digital</span> Mastery.
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg"
                        >
                            We don't just build apps; we engineer the essential frameworks that power institutions and drive technical advancement.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-2xl md:rounded-[32px] overflow-hidden">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white p-5 md:p-10 hover:bg-slate-50 transition-colors duration-500"
                        >
                            <div className="mb-6 md:mb-12">
                                <pillar.icon className="h-6 w-6 md:h-8 md:w-8 text-slate-900 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            
                            <h3 className="text-lg md:text-2xl font-display font-black tracking-tight text-slate-900 mb-2 md:mb-4">
                                {pillar.title}
                            </h3>
                            <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed mb-6 md:mb-10">
                                {pillar.description}
                            </p>
                            
                            <Link 
                                href={pillar.link}
                                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-indigo-600 transition-colors"
                            >
                                Explore Pillar <ArrowUpRight className="h-3 w-3" />
                            </Link>

                            {/* Hover Accent */}
                            <div className={`absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all duration-500 group-hover:w-full`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
