'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Settings, ShieldCheck, Layers, Check } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Settings,
        text: 'Custom workflow automation'
    },
    {
        icon: Layers,
        text: 'Legacy system modernization'
    },
    {
        icon: ShieldCheck,
        text: 'Government tender solutions'
    },
    {
        icon: Code,
        text: 'White-label platforms'
    }
];

export function CustomSolutions() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:max-w-2xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-800 text-blue-300 text-sm font-medium mb-6">
                        Enterprise Services
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Need Something Custom?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl">
                        Custom software for institutions that need workflows optimized — education first, then adjacent sectors.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {[
                            "Custom workflow automation",
                            "Legacy system modernization",
                            "Government tender solutions",
                            "White-label platforms",
                            "Industry-specific solutions"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
                                    <Check className="h-4 w-4" />
                                </div>
                                <span className="font-medium text-slate-200">{item}</span>
                            </div>
                        ))}
                    </div>

                    <Link href="/contact">
                        <div className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-2 group cursor-pointer w-fit">
                            Discuss Your Project
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>

                {/* Visual Representation */}
                <div className="lg:w-1/3 w-full">
                    <div className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 p-8 flex flex-col justify-center items-center text-center backdrop-blur-sm">
                        <Code className="h-16 w-16 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-2">Build with eMitra</h3>
                        <p className="text-slate-400 mb-6">
                            Scalable architecture, industry-grade security, and AI-native development.
                        </p>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-500 w-1/3"
                                animate={{ x: ['0%', '200%', '0%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
