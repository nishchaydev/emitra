'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-white">
            {/* Premium Atmospheric Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[80px] -z-10" />

            {/* High-tech border lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
                        <Sparkles className="h-3 w-3" />
                        Next Steps
                    </div>

                    <h2 className="text-4xl md:text-7xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                        Build the future <br />
                        <span className="text-blue-600">with eMitra.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Ready to automate your institutional workflows? Our expert team
                        is ready to architect your digital transformation.
                    </p>

                    <div className="flex flex-col sm:row items-center justify-center gap-6 pt-6">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <motion.div
                                className="group w-full bg-[#0066FF] text-white px-12 py-6 rounded-[24px] font-bold text-xl shadow-[0_20px_40px_-12px_rgba(0,102,255,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,102,255,0.4)] transition-all flex items-center justify-center gap-3 cursor-pointer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your Project
                                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>

                        <motion.a
                            href="mailto:emitratechnologies@gmail.com"
                            className="w-full sm:w-auto group bg-white border border-slate-200 px-12 py-6 rounded-[24px] font-bold text-xl hover:bg-slate-50 hover:border-blue-200 transition-all shadow-sm flex items-center justify-center gap-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            <span className="text-slate-600 group-hover:text-slate-900 transition-colors">Email Support</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Atmospheric Depth Noise Overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </section>
    );
}
