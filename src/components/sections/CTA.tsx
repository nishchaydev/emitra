'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-teal-500/5" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                        Let&apos;s build something smart together.
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Ready to transform your institutional workflows? Our team is here to help you architect
                        the future.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <motion.div
                                className="group w-full bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Talk to Us
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                        <motion.a
                            href="mailto:emitratechnologies@gmail.com"
                            className="w-full sm:w-auto group bg-white border border-slate-200 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Mail className="h-5 w-5 text-slate-500" />
                            Email Support
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
