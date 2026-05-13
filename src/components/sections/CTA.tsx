'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-slate-950 text-white">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110"
                >
                    <source src="https://res.cloudinary.com/dkits80xk/video/upload/v1778683152/hero-animation_gep3ir.mp4" type="video/mp4" />
                </video>
                {/* Gradient Masks */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-950" />
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        <Sparkles className="h-3 w-3" />
                        Next Steps
                    </div>

                    <h2 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter leading-[0.9]">
                        Build the future <br />
                        <span className="text-indigo-400">with eMitra.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed text-balance">
                        Ready to automate your institutional workflows? Our expert team
                        is ready to architect your digital transformation.
                    </p>

                    <div className="flex flex-col sm:row items-center justify-center gap-6 pt-6">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <motion.div
                                className="group w-full bg-indigo-600 text-white px-12 py-6 rounded-[24px] font-bold text-xl shadow-[0_20px_40px_-12px_rgba(79,70,229,0.3)] hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Your Project
                                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>

                        <motion.a
                            href="mailto:contact@emitra.dev"
                            className="w-full sm:w-auto group bg-white/5 border border-white/10 px-12 py-6 rounded-[24px] font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Mail className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                            <span className="text-slate-300 group-hover:text-white transition-colors">Email Support</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
