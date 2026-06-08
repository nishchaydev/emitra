'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Mail, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-none p-6 w-[320px] shadow-2xl overflow-hidden"
                    >
                        {/* Decorative glow line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400" />

                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-display font-black text-white text-lg tracking-tight">Initiate Comm</h3>
                                <p className="text-xs text-slate-400 mt-1">Select a channel to proceed</p>
                            </div>
                            <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                ONLINE
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between p-3 bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                        <Calendar className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">Schedule Sync</p>
                                        <p className="text-[11px] text-slate-400 font-mono mt-0.5 tracking-tight">Book via platform</p>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors" />
                            </Link>

                            <a
                                href="mailto:contact@emitra.dev"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between p-3 bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">Direct Email</p>
                                        <p className="text-[11px] text-slate-400 font-mono mt-0.5 tracking-tight">contact@emitra.dev</p>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`h-14 w-14 rounded-none border shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen
                    ? 'bg-slate-900 text-white border-white/20 hover:bg-slate-800'
                    : 'bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-500 hover:shadow-indigo-500/25'
                    }`}
                aria-label="Toggle contact menu"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <MessageSquare className="h-6 w-6" />
                )}
            </motion.button>
        </div>
    );
}

