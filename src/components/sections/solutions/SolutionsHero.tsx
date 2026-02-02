'use client';

import { motion } from 'framer-motion';
import { Building2, GraduationCap, Landmark, ArrowRight, CheckCircle, Globe2 } from 'lucide-react';
import Link from 'next/link';

const audiences = [
    { icon: GraduationCap, label: 'Education', desc: 'K-12 & Higher Ed', color: 'bg-orange-500' },
    { icon: Landmark, label: 'Government', desc: 'Municipal to Federal', color: 'bg-blue-500' },
    { icon: Building2, label: 'Enterprise', desc: 'SME to Corporate', color: 'bg-indigo-500' },
];

export function SolutionsHero() {
    return (
        <section className="relative min-h-auto lg:min-h-[85vh] flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-50 pt-28 pb-16 lg:pt-32 lg:pb-32">
            {/* Infinite Grid Background - Light Mode */}
            <div className="absolute inset-0 preserve-3d perspective-2000 overflow-hidden bg-slate-50">
                <motion.div
                    className="absolute inset-[-50%] w-[200%] h-[200%] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)] opacity-40"
                    animate={{ y: [0, 64] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <motion.div
                    className="space-y-8 text-center lg:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-200 bg-blue-50 text-blue-600 text-xs font-mono mx-auto lg:mx-0">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        SYSTEM_ONLINE
                    </div>

                    <div>
                        <h1 className="text-4xl lg:text-7xl font-display font-bold leading-[1] text-slate-900 tracking-tighter">
                            Built for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                                Infinite Scale.
                            </span>
                        </h1>
                        <p className="mt-6 text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                            Whether you manage a single campus or a nationwide network, our infrastructure adapts to your needs instantly.
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <ul className="space-y-4 inline-block text-left">
                        {[
                            'Unified Data Ecosystem',
                            'Real-time Analytics Engine',
                            'Automated Compliance',
                        ].map((benefit, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center gap-4 text-slate-700 group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                            >
                                <div className="h-6 w-6 rounded bg-blue-50 flex items-center justify-center border border-blue-200 group-hover:bg-blue-100 transition-colors">
                                    <CheckCircle className="h-3.5 w-3.5 text-blue-600" />
                                </div>
                                <span className="font-medium">{benefit}</span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Link href="/contact">
                            <motion.div
                                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 border border-slate-200 transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Architecture Overview
                                <ArrowRight className="h-5 w-5" />
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>

                {/* Visual - Isometric Platform (Light Mode) */}
                <motion.div
                    className="relative h-[400px] lg:h-[600px] flex items-center justify-center perspective-1000 mt-12 lg:mt-0"
                    initial={{ opacity: 0, rotateX: 20 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Glowing Platform */}
                    <div className="absolute w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]" />

                    {/* Central Hub */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div
                            className="relative w-40 h-40 bg-white border border-blue-100 rounded-2xl flex items-center justify-center shadow-2xl z-20 backdrop-blur-xl"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Globe2 className="h-20 w-20 text-blue-600" strokeWidth={1} />

                            {/* Connecting Lines */}
                            {[0, 120, 240].map((deg, i) => (
                                <div
                                    key={i}
                                    className="absolute w-[200px] h-[2px] bg-gradient-to-r from-blue-300/50 to-transparent top-1/2 left-1/2 -z-10 origin-left"
                                    style={{ transform: `rotate(${deg}deg)` }}
                                >
                                    <motion.div
                                        className="h-2 w-2 bg-blue-500 rounded-full absolute top-1/2 -translate-y-1/2"
                                        animate={{ left: ['0%', '100%'], opacity: [1, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                                    />
                                </div>
                            ))}
                        </motion.div>

                        {/* Orbiting Satellites (Audiences) */}
                        {audiences.map((aud, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-64 p-4 bg-white/90 border border-slate-200 backdrop-blur-md rounded-xl shadow-lg flex items-center gap-4 z-30"
                                style={{
                                    top: i === 0 ? '10%' : i === 1 ? '70%' : '40%',
                                    left: i === 0 ? '50%' : i === 1 ? '10%' : '70%',
                                    translateX: '-50%'
                                }}
                                animate={{
                                    y: [0, i % 2 === 0 ? 15 : -15, 0],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className={`h-12 w-12 rounded-lg ${aud.color} flex items-center justify-center text-white shadow-md`}>
                                    <aud.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-slate-900 font-bold">{aud.label}</div>
                                    <div className="text-slate-500 text-xs">{aud.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
