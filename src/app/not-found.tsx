'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Disable preloader effect immediately
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('disablePreloader', 'true');
            const preloader = document.getElementById('preloader-root');
            if (preloader) preloader.style.display = 'none';
        }
    }, []);

    const handleGoBack = () => {
        if (typeof window !== 'undefined' && window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans">
            
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-20 mix-blend-screen rotate-90 scale-[1.8]"
                >
                    <source src="https://res.cloudinary.com/dkits80xk/video/upload/v1778683152/hero-animation_gep3ir.mp4" type="video/mp4" />
                </video>
                {/* Gradient Masks */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
            </div>

            {/* Junction-style Grid Overlay */}
            <div className="absolute inset-0 bg-dot-grid opacity-[0.2] pointer-events-none z-[1]" />

            {/* Massive Background 404 Text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-[2]">
                <motion.h1 
                    className="text-[clamp(12rem,30vw,40rem)] font-display font-black tracking-tighter text-white/[0.03] leading-none select-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    404<span className="text-indigo-400/[0.03]">.</span>
                </motion.h1>
            </div>

            <div className="relative z-10 text-center max-w-2xl w-full flex flex-col items-center pt-20">
                
                {/* Custom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Error 404</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-tight">
                        System Anomaly.
                    </h2>
                    <p className="text-lg text-slate-400 max-w-md mx-auto leading-relaxed">
                        The requested sector cannot be located in our current architecture. It may have been deprecated, moved, or never existed.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <Link href="/" className="w-full sm:w-auto">
                        <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                            <Home className="h-5 w-5" />
                            Return to Base
                        </button>
                    </Link>
                    <button
                        onClick={handleGoBack}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Go Back
                    </button>
                </motion.div>

                {/* Footer Links */}
                <motion.div
                    className="mt-20 flex justify-center gap-8 text-sm text-slate-500 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
                    <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                </motion.div>
            </div>

            {/* Subtle glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-96 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent blur-[100px] pointer-events-none opacity-50 z-0" />
        </div>
    );
}
