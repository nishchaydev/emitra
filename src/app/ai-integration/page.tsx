'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Brain, Cpu, Sparkles } from 'lucide-react';

export default function AIIntegrationPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 bg-slate-50 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-24 w-24 bg-purple-100 rounded-3xl flex items-center justify-center text-purple-600 mx-auto mb-8"
                    >
                        <Brain className="h-12 w-12" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                        AI Integration
                    </h1>
                    <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
                        Power your institution with smart automation and predictive analytics. The future is arriving soon.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Brain, label: 'Smart Analytics' },
                            { icon: Cpu, label: 'Deep Learning' },
                            { icon: Sparkles, label: 'Predictive Insights' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                                <item.icon className="h-6 w-6 text-purple-600 mx-auto mb-3" />
                                <span className="font-bold text-slate-900">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
