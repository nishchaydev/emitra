'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center px-6">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-teal-100/30 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center max-w-2xl">
                {/* 404 Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="mb-8"
                >
                    <span className="text-[180px] md:text-[220px] font-display font-bold leading-none bg-gradient-to-br from-primary via-blue-600 to-accent bg-clip-text text-transparent">
                        404
                    </span>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-4 mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                        Page not found
                    </h1>
                    <p className="text-lg text-slate-600 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                        >
                            <Home className="h-5 w-5" />
                            Back to Home
                        </motion.button>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Go Back
                    </button>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-16 pt-8 border-t border-slate-200"
                >
                    <p className="text-sm text-slate-500 mb-4">Or try these popular pages:</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/solutions" className="text-primary font-medium hover:underline">
                            Solutions
                        </Link>
                        <span className="text-slate-300">•</span>
                        <Link href="/about" className="text-primary font-medium hover:underline">
                            About Us
                        </Link>
                        <span className="text-slate-300">•</span>
                        <Link href="/contact" className="text-primary font-medium hover:underline">
                            Contact
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
