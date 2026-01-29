'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function ProductShowcase() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    className="max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-4 block">
                        Platform Preview
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">
                        Complete visibility over <br />
                        <span className="text-primary">your entire network.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        From student attendance to financial audits, track every metric in real-time with
                        our unified dashboard.
                    </p>
                </motion.div>

                <motion.div
                    className="relative mx-auto mt-12 max-w-5xl"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-60"></div>

                    {/* Image Container */}
                    <motion.div
                        className="relative rounded-2xl border border-slate-200/80 bg-white shadow-2xl overflow-hidden aspect-[16/9]"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="https://res.cloudinary.com/dkits80xk/image/upload/v1769620712/1f1ba133-f5ff-4e52-ac77-1d8874601734.png"
                            alt="eMitra Dashboard Interface"
                            fill
                            className="object-cover object-top"
                            unoptimized
                        />

                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden lg:block">
                        <div className="h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>
                    </div>
                    <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
                        <div className="h-40 w-40 rounded-full bg-teal-500/10 blur-3xl"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
