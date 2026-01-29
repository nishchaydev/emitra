'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Settings, Users, BarChart3, Shield } from 'lucide-react';

const erpFeatures = [
    { icon: Settings, text: 'Fully Customizable Modules' },
    { icon: Users, text: 'Multi-Campus Support' },
    { icon: BarChart3, text: 'Real-time Analytics' },
    { icon: Shield, text: 'Enterprise Security' },
];

export function Education() {
    return (
        <section className="py-24 overflow-hidden" id="education">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="bg-gradient-to-br from-primary via-primary to-blue-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl shadow-primary/20"
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

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Content */}
                        <motion.div
                            className="flex-1 space-y-8 z-10 text-center lg:text-left"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/10">
                                Education ERP
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
                                Built for education. <br />
                                Engineered for scale.
                            </h2>
                            <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Our Customizable Education ERP combines pedagogical needs with technological precision.
                                From K-12 to Higher Ed, we build systems that adapt to YOUR workflows—not the other way around.
                            </p>

                            {/* ERP Features Grid */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {erpFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        <feature.icon className="h-5 w-5 text-accent" />
                                        <span className="text-sm font-medium text-white">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Custom ERP Benefits */}
                            <ul className="space-y-3 pt-4">
                                {[
                                    'Student & Staff Management tailored to your institution',
                                    'Fee collection with custom payment plans',
                                    'Attendance, Exams, and Result processing',
                                    'Parent & Alumni portals included'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-blue-100">
                                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link href="/services">
                                    <motion.div
                                        className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Explore Services
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </Link>
                                <Link href="/contact">
                                    <motion.div
                                        className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Request Custom Demo
                                    </motion.div>
                                </Link>
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
                                        alt="Education ERP dashboard showing student metrics and analytics"
                                        fill
                                        className="object-contain"
                                        unoptimized
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
