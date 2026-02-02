'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export function ContactHero() {
    return (
        <section className="relative min-h-auto lg:min-h-[65vh] flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-50 pt-28 pb-16 lg:pt-32 lg:pb-32">
            {/* Global Map Background - Light Mode */}
            <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-40 blur-[1px]" />

                {/* Pulsating Beacons */}
                {[
                    { top: '30%', left: '25%' }, // NA
                    { top: '45%', left: '48%' }, // EU
                    { top: '55%', left: '70%' }, // Asia
                    { top: '70%', left: '80%' }, // AU
                ].map((pos, i) => (
                    <div key={i} className="absolute w-4 h-4" style={pos}>
                        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                        <div className="relative w-3 h-3 bg-blue-600 rounded-full border-2 border-white" />
                    </div>
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <motion.div
                    className="space-y-8 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold tracking-widest uppercase shadow-sm mx-auto lg:mx-0">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        We're Online
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900">
                        Let's start a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            conversation.
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                        <div className="flex items-center gap-3 text-slate-600">
                            <div className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                <Mail className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase text-left">Email us</p>
                                <p className="font-medium text-slate-900">emitratechnologies@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <div className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                <Phone className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase text-left">Call us</p>
                                <p className="font-medium text-slate-900">+91 86021 75892 / +91 62618 54014</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Visual - Floating Contact Card (Light Mode) */}
                <motion.div
                    className="relative flex justify-center perspective-1000 mt-12 lg:mt-0"
                    initial={{ opacity: 0, rotateY: -10 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="relative w-[400px] h-[500px] bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Abstract Header */}
                        <div className="space-y-4">
                            <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <MessageSquare className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">How can we help?</h3>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-slate-100 rounded-full" />
                                <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                            </div>
                        </div>

                        {/* Interactive Elements Sim */}
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-slate-200 animate-pulse" />
                                <div className="space-y-2 flex-1">
                                    <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                                    <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                    AI
                                </div>
                                <div className="space-y-2 flex-1">
                                    <div className="h-2 w-3/4 bg-blue-200 rounded-full" />
                                    <div className="h-2 w-1/2 bg-blue-200 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Send Button Sim */}
                        <div className="h-12 w-full bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg hover:bg-blue-700 transition-colors">
                            Send Message
                        </div>
                    </motion.div>

                    {/* Decor Elements */}
                    <motion.div
                        className="absolute -top-6 -right-6 h-24 w-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl rotate-12 blur-xl opacity-30 -z-10"
                        animate={{ scale: [1, 1.2, 1], rotate: [12, 24, 12] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
