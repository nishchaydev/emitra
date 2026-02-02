'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

export function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 left-8 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-72 mb-4"
                    >
                        <h3 className="font-bold text-lg text-slate-900 mb-4">Get in touch</h3>
                        <div className="space-y-3">
                            <Link
                                href="/contact"
                                className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                            >
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Calendar className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900 text-sm">Schedule Demo</p>
                                    <p className="text-xs text-slate-500">Book a free consultation</p>
                                </div>
                            </Link>
                            <a
                                href="tel:+918602175892"
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900 text-sm">Call Us</p>
                                    <p className="text-xs text-slate-500">+91 86021 75892</p>
                                </div>
                            </a>
                            <a
                                href="mailto:emitratechnologies@gmail.com"
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900 text-sm">Email Us</p>
                                    <p className="text-xs text-slate-500">emitratechnologies@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all ${isOpen
                    ? 'bg-slate-800 text-white'
                    : 'bg-accent text-white shadow-accent/30'
                    }`}
                aria-label="Contact options"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <MessageCircle className="h-6 w-6" />
                )}
            </motion.button>
        </div>
    );
}
