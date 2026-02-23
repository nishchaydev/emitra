'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Settings, Users, BarChart3, Shield, Sparkles } from 'lucide-react';

const erpFeatures = [
    { icon: Settings, text: 'Customizable Modules' },
    { icon: Users, text: 'Multi-Campus Support' },
    { icon: BarChart3, text: 'Real-time Analytics' },
    { icon: Shield, text: 'Enterprise Security' },
];

export function Education() {
    return (
        <section className="py-32 relative overflow-hidden bg-white" id="education">
            {/* Atmospheric Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" />

            {/* High-tech grid accent */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-white border border-slate-100 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,102,255,0.08)]">
                    {/* Inner glowing accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Content */}
                        <motion.div
                            className="flex-1 space-y-8 text-center lg:text-left"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest"
                            >
                                <Sparkles className="h-3 w-3" />
                                Education ERP
                            </motion.div>

                            <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 leading-tight tracking-tight">
                                Built for learning. <br />
                                <span className="text-blue-600">Engineered for scale.</span>
                            </h2>

                            <p className="text-slate-500 text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                Our industry-leading ERP platform combines pedagogical needs with deep technological precision.
                                We build systems that adapt to YOUR institution&apos;s unique DNA.
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {erpFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 bg-slate-50/50 rounded-2xl px-5 py-4 border border-slate-100/50 group hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                                    >
                                        <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                            <feature.icon className="h-5 w-5" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            <ul className="space-y-4 pt-4">
                                {[
                                    'Customized student & staff management modules',
                                    'Automated fee collection & revenue planning',
                                    'Unified examination & result processing OS',
                                    'White-labeled Parent & Alumni engagement portals'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-600 group">
                                        <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                                            <CheckCircle className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <span className="font-medium text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link href="/services">
                                    <motion.div
                                        className="bg-[#0F172A] text-white px-10 py-5 rounded-[20px] font-bold text-lg shadow-[0_20px_40px_-15px_rgba(15,23,42,0.3)] hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Explore Solutions
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </Link>
                                <Link href="/contact">
                                    <motion.div
                                        className="bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-[20px] font-bold text-lg hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Request Custom Demo
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Interactive Visual Element */}
                        <motion.div
                            className="flex-1 relative z-10 flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative group">
                                {/* Glowing halo behind image */}
                                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative bg-white/40 backdrop-blur-xl p-12 lg:p-16 rounded-[48px] border border-white/50 shadow-2xl overflow-hidden">
                                    {/* Background visual cues */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                                    <motion.div
                                        className="relative w-64 h-64 lg:w-[400px] lg:h-[400px]"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Image
                                            src="https://res.cloudinary.com/dkits80xk/image/upload/v1769612213/5b4b7f9b-d51e-4287-9206-a70d69f51a94.png"
                                            alt="Education ERP dashboard visualization"
                                            fill
                                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,102,255,0.15)]"
                                            unoptimized
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
