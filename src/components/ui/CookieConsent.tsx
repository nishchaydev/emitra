'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X } from 'lucide-react';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            // Delay showing the banner
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-none p-6 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-2xl relative overflow-hidden">
                        {/* Decorative glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400" />
                        
                        <div className="flex items-start gap-5 flex-1">
                            <div className="h-12 w-12 bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                <Shield className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-display font-black text-white text-lg mb-1 tracking-tight">System Telemetry</h4>
                                <p className="text-sm text-slate-400 leading-relaxed pr-8">
                                    We employ essential telemetry and cookies to optimize platform performance and ensure security.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                            <button
                                onClick={handleDecline}
                                className="flex-1 md:flex-none px-6 py-3 text-sm font-bold text-slate-400 hover:text-white transition-colors border border-transparent hover:border-white/10 bg-transparent"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-8 py-3 bg-white text-slate-950 text-sm font-bold hover:bg-slate-200 transition-colors"
                            >
                                Acknowledge
                            </button>
                        </div>
                        <button
                            onClick={handleDecline}
                            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
