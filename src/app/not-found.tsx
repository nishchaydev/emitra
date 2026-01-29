'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    const [mounted, setMounted] = useState(false);
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        setMounted(true);
        setParticles([...Array(20)].map((_, i) => ({
            id: i,
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            duration: Math.random() * 10 + 10,
        })));

        // Disable preloader effect
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

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 relative overflow-hidden font-sans">

            {/* Animated Background Mesh */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#020617] to-[#020617]"></div>
            </div>

            {/* Floating Particles/Stars */}
            {mounted && particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-white rounded-full opacity-20"
                    style={{
                        width: p.width,
                        height: p.height,
                        left: p.left,
                        top: p.top,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            <div className="relative z-10 text-center max-w-2xl w-full">
                {/* Glitch Effect 404 */}
                <div className="relative mb-8">
                    <motion.div
                        className="text-[150px] md:text-[220px] font-bold leading-none text-white opacity-10 absolute inset-0 select-none blur-sm"
                        animate={{ x: [-2, 2, -2] }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                    >
                        404
                    </motion.div>
                    <motion.h1
                        className="text-[150px] md:text-[220px] font-bold leading-none bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        404
                    </motion.h1>
                </div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Lost in the Digital Void?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-md mx-auto leading-relaxed">
                        The page you are looking for seems to have drifted away from our network.
                    </p>
                </motion.div>

                {/* Animated Astronaut/Graphic (represented by a floating icon for now) */}
                <motion.div
                    className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute inset-0 border border-blue-500/30 rounded-full border-dashed" />
                    <div className="absolute inset-[10%] border border-cyan-500/20 rounded-full" />
                </motion.div>


                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all border border-blue-400/20"
                        >
                            <Home className="h-5 w-5" />
                            Return to Base
                        </motion.button>
                    </Link>
                    <button
                        onClick={handleGoBack}
                        className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Go Back
                    </button>
                </motion.div>

                {/* Footer Links */}
                <motion.div
                    className="mt-16 flex justify-center gap-8 text-sm text-slate-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Support</Link>
                    <Link href="/sitemap.xml" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
                </motion.div>

            </div>
        </div>
    );
}


