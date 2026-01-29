'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Education() {
    return (
        <section className="py-24 overflow-hidden" id="education">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="bg-gradient-to-br from-primary via-primary to-blue-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl shadow-primary/20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 circuit-bg pointer-events-none"></div>

                    {/* Decorative gradient orbs */}
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

                    {/* Content */}
                    <motion.div
                        className="flex-1 space-y-8 z-10 text-center lg:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/10">
                            Education Variant
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
                            Built for education. <br />
                            Engineered for scale.
                        </h2>
                        <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Our Education Variant combines pedagogical needs with technological precision. From
                            K-12 to Higher Ed, we bridge the gap between teaching and management.
                        </p>
                        <div className="pt-4">
                            <motion.button
                                className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Explore Education Variant
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Book Image - With white background card */}
                    <motion.div
                        className="flex-1 relative z-10 flex items-center justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <motion.div
                            className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                                <Image
                                    src="https://res.cloudinary.com/dkits80xk/image/upload/v1769612213/5b4b7f9b-d51e-4287-9206-a70d69f51a94.png"
                                    alt="Education"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
