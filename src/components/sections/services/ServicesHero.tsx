'use client';

import { motion } from 'framer-motion';
import { Wrench, Layers, Cpu, Settings, PenTool, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ServicesHero() {
    return (
        <section className="relative min-h-auto lg:min-h-[70vh] flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-50 pt-28 pb-16 lg:pt-32 lg:pb-32">
            {/* Engineering Background Pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] bg-repeat" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <motion.div
                    className="space-y-8 text-center lg:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase shadow-lg mx-auto lg:mx-0">
                        <Wrench className="w-3 h-3" />
                        Our Expertise
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900">
                        Tools to build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            tomorrow.
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                        From custom ERP development to AI-powered analytics, we provide end-to-end solutions that transform how institutions operate.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Link href="/contact">
                            <motion.div
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-600/20"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start a Project
                                <ArrowRight className="h-5 w-5" />
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>

                {/* Visual - Floating Tools Array */}
                <motion.div
                    className="relative h-[400px] lg:h-[600px] flex items-center justify-center perspective-1000 mt-12 lg:mt-0"
                    initial={{ opacity: 0, rotateY: 20 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Central Gear/Core */}
                    <motion.div
                        className="relative w-64 h-64 bg-slate-900 rounded-[3rem] shadow-2xl flex items-center justify-center z-20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                        <Settings className="h-32 w-32 text-slate-800" />

                        {/* Static Center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-inner">
                                <Cpu className="h-16 w-16 text-white animate-pulse" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Orbiting Elements */}
                    {[
                        { icon: Layers, color: 'bg-orange-500', delay: 0 },
                        { icon: PenTool, color: 'bg-green-500', delay: 2 },
                        { icon: Wrench, color: 'bg-purple-500', delay: 4 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={`absolute p-4 ${item.color} rounded-2xl shadow-xl z-30`}
                            animate={{
                                x: [Math.cos(i * 2) * 180, Math.cos(i * 2 + Math.PI) * 180, Math.cos(i * 2) * 180],
                                y: [Math.sin(i * 2) * 180, Math.sin(i * 2 + Math.PI) * 180, Math.sin(i * 2) * 180],
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear",
                                delay: item.delay
                            }}
                        >
                            <item.icon className="h-8 w-8 text-white" />
                        </motion.div>
                    ))}

                    {/* Floating Particles */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-500 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3 + Math.random(),
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
