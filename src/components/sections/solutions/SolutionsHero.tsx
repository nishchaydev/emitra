'use client';

import { motion } from 'framer-motion';
import { Building2, GraduationCap, Landmark, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const audiences = [
    { icon: GraduationCap, label: 'Education', desc: 'K-12 to Universities' },
    { icon: Landmark, label: 'Government', desc: 'Federal to Municipal' },
    { icon: Building2, label: 'Enterprise', desc: 'SMBs to Corporates' },
];

export function SolutionsHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        Enterprise Solutions
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl lg:text-5xl font-display font-bold leading-[1.1] text-slate-900">
                        One platform,{' '}
                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            endless possibilities.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        Whether you&apos;re managing a university, running a government department,
                        or scaling an enterprise—we have solutions designed for your unique challenges.
                    </p>

                    {/* Key Benefits */}
                    <ul className="space-y-3">
                        {[
                            'Unified ecosystem for all departments',
                            'Real-time analytics and reporting',
                            'Seamless third-party integrations',
                            'Scalable from 100 to 100,000+ users'
                        ].map((benefit, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center gap-3 text-slate-600"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                            >
                                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                                {benefit}
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <Link href="/contact">
                        <motion.div
                            className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center gap-2 shadow-lg shadow-primary/20 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            role="button"
                        >
                            Get Started
                            <ArrowRight className="h-5 w-5" />
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Visual - Audience Cards with Floating Animation */}
                <motion.div
                    className="relative flex flex-col gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Glow effect */}
                    <motion.div
                        className="absolute -top-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-6 relative z-10"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, -5, 0]
                            }}
                            transition={{
                                opacity: { delay: 0.4 + index * 0.15 },
                                x: { delay: 0.4 + index * 0.15 },
                                y: {
                                    duration: 3 + index * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.3
                                }
                            }}
                            whileHover={{ x: 10, scale: 1.02 }}
                        >
                            <motion.div
                                className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white flex-shrink-0"
                                whileHover={{ rotate: 5 }}
                            >
                                <audience.icon className="h-8 w-8" />
                            </motion.div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900">{audience.label}</h3>
                                <p className="text-slate-500">{audience.desc}</p>
                            </div>
                            <ArrowRight className="h-6 w-6 text-slate-300" />
                        </motion.div>
                    ))}

                    {/* Bottom Tag */}
                    <motion.div
                        className="text-center mt-4"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <p className="text-sm text-slate-500">
                            Scroll down to explore solutions by industry
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
