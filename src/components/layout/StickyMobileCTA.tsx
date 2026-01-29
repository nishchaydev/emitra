'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 pb-6 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
                >
                    <div className="flex gap-3">
                        {/* Call Button - Secondary */}
                        <a
                            href="tel:+919876543210"
                            className="bg-slate-100 text-slate-700 h-12 w-12 rounded-xl flex items-center justify-center border border-slate-200"
                            aria-label="Call Us"
                        >
                            <Phone className="h-5 w-5" />
                        </a>

                        {/* Demo Button - Primary */}
                        <Link
                            href="/contact"
                            className="flex-1 w-full h-12 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 text-sm"
                            role="button"
                            aria-label="Request a Demo"
                        >
                            Request a Demo
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
