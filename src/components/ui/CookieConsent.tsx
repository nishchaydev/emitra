'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

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
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="flex items-start gap-4 flex-1">
                            <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                                <Cookie className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">We value your privacy</h4>
                                <p className="text-sm text-slate-600">
                                    We use cookies to enhance your browsing experience and analyze our traffic.
                                    By clicking &quot;Accept&quot;, you consent to our use of cookies.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <button
                                onClick={handleDecline}
                                className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-colors"
                            >
                                Accept All
                            </button>
                        </div>
                        <button
                            onClick={handleDecline}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
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
