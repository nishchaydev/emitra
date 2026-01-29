'use client';

import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Shield, Lightbulb } from 'lucide-react';

const stats = [
    { value: '5+', label: 'Years of Excellence', icon: Award },
    { value: '50+', label: 'Projects Delivered', icon: Target },
    { value: '10K+', label: 'Users Served', icon: Users },
    { value: '99%', label: 'Client Satisfaction', icon: TrendingUp },
];

export function AboutHero() {
    return (
        <section className="relative min-h-[60vh] flex overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        About eMitra Technologies
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl lg:text-5xl font-display font-bold leading-[1.1] text-slate-900">
                        Where technology meets{' '}
                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">trust.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        We build future-proof institutional systems designed to withstand complexity
                        and scale with elegance. Our mission: empower institutions with technology
                        that just works.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <stat.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                        <p className="text-xs text-slate-500">{stat.label}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual - Cycling Core Values Card */}
                <motion.div
                    className="relative flex justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Glow effect behind card */}
                    <motion.div
                        className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Floating card wrapper */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-8 shadow-2xl shadow-primary/20 text-white w-96 h-96 relative overflow-hidden flex flex-col items-center justify-center"
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Grid pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="grid grid-cols-6 grid-rows-6 h-full">
                                    {[...Array(36)].map((_, i) => (
                                        <div key={i} className="border border-white/20" />
                                    ))}
                                </div>
                            </div>


                            {/* Floating particles */}
                            <motion.div
                                className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full"
                                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute bottom-6 left-6 w-2 h-2 bg-blue-300 rounded-full"
                                animate={{ y: [0, -6, 0], opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            />

                            {/* Content Container */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Cycling Icons */}
                                <div className="h-20 w-20 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                    <div className="relative h-10 w-10">
                                        {[
                                            { icon: Target, delay: 0 },
                                            { icon: Shield, delay: 3 },
                                            { icon: Users, delay: 6 },
                                            { icon: Lightbulb, delay: 9 }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute inset-0 flex items-center justify-center"
                                                animate={{
                                                    opacity: [0, 1, 1, 0],
                                                    scale: [0.8, 1, 1, 0.8],
                                                    rotate: [0, 0, 0, 0]
                                                }}
                                                transition={{
                                                    duration: 12,
                                                    repeat: Infinity,
                                                    times: [
                                                        i * 0.25,          // Start fade in
                                                        i * 0.25 + 0.05,   // Fully visible
                                                        i * 0.25 + 0.2,    // Start fade out
                                                        i * 0.25 + 0.25    // Fully hidden
                                                    ],
                                                    delay: 0 // handled by times
                                                }}
                                            >
                                                <item.icon className="h-10 w-10 text-white" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Static Label */}
                                <p className="text-blue-200 text-sm font-medium mb-2 uppercase tracking-wider">Our Core Value</p>

                                {/* Cycling Text */}
                                <div className="h-20 relative w-full flex justify-center overflow-hidden">
                                    <div className="relative h-16 w-full max-w-[200px] flex items-center justify-center">
                                        {[
                                            { text: "Precision", delay: 0 },
                                            { text: "Reliability", delay: 3 },
                                            { text: "Partnership", delay: 6 },
                                            { text: "Innovation", delay: 9 }
                                        ].map((item, i) => (
                                            <motion.h3
                                                key={i}
                                                className="absolute inset-0 text-4xl font-bold flex items-center justify-center text-center"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{
                                                    y: [20, 0, 0, -20],
                                                    opacity: [0, 1, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 12,
                                                    times: [
                                                        0,      // Start Enter
                                                        0.05,   // End Enter
                                                        0.20,   // Start Exit
                                                        0.25    // End Exit
                                                    ],
                                                    repeat: Infinity,
                                                    delay: item.delay,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                {item.text}
                                            </motion.h3>
                                        ))}
                                    </div>

                                    {/* Gradients for smooth fade in/out */}
                                    <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#1e3a8a] to-transparent z-10 opacity-80" />
                                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#1e3a8a] to-transparent z-10 opacity-80" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
