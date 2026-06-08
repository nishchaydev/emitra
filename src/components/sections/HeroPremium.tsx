'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

// Floating particle canvas for premium ambient effect
function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.scale(dpr, dpr);
        };
        resize();
        window.addEventListener('resize', resize);

        // Particles
        const particles: Array<{
            x: number; y: number;
            vx: number; vy: number;
            size: number; opacity: number;
            hue: number;
        }> = [];

        const count = 60;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2.5 + 0.5,
                opacity: Math.random() * 0.4 + 0.1,
                hue: 230 + Math.random() * 30, // indigo range
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.08;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.opacity})`;
                ctx.fill();
            });

            animationId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.7 }}
        />
    );
}

// Animated geometric visual replacing the static 3D image
function DynamicVisual() {
    return (
        <div className="relative w-full aspect-square max-w-[520px] mx-auto">
            {/* Central glowing orb */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[15%] rounded-full bg-gradient-to-br from-indigo-400/20 via-indigo-500/10 to-transparent blur-2xl"
            />

            {/* Orbiting rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[10%] rounded-full border border-indigo-200/30"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[20%] rounded-full border border-slate-200/40 border-dashed"
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[5%] rounded-full border border-indigo-100/20"
            />

            {/* Orbiting dots */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[10%]"
            >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_12px_4px_rgba(99,102,241,0.4)]" />
            </motion.div>
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[20%]"
            >
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_3px_rgba(45,212,191,0.4)]" />
            </motion.div>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[5%]"
            >
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_3px_rgba(251,191,36,0.3)]" />
            </motion.div>

            {/* Center icon/text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-center"
                >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.5)] flex items-center justify-center">
                        <span className="text-white text-3xl font-black">e</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">Building the future</p>
                </motion.div>
            </div>

            {/* Floating glass cards */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[12%] right-[5%] glass-card p-3 rounded-xl max-w-[140px]"
            >
                <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-0.5">Studio</p>
                <p className="text-xs font-bold text-slate-800">In-House Ventures</p>
            </motion.div>

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-[15%] left-[2%] glass-card p-3 rounded-xl max-w-[140px]"
            >
                <p className="text-[9px] font-black text-teal-600 uppercase tracking-widest mb-0.5">Agency</p>
                <p className="text-xs font-bold text-slate-800">Custom Engineering</p>
            </motion.div>

            <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute bottom-[30%] right-[0%] glass-card p-3 rounded-xl max-w-[140px]"
            >
                <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-0.5">Community</p>
                <p className="text-xs font-bold text-slate-800">Student Labs</p>
            </motion.div>
        </div>
    );
}

export function HeroPremium() {
    return (
        <section className="relative lg:min-h-screen flex items-center pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-white">
            {/* Particle Field */}
            <ParticleField />

            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_40%,transparent_100%)]" />

            {/* Soft ambient glow spots */}
            <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-indigo-400/[0.06] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 right-[10%] w-[300px] h-[300px] bg-teal-400/[0.04] rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="relative min-h-[500px] lg:min-h-[600px] flex items-center">
                    {/* Animated visual â€” absolute positioned, right side, behind text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:flex absolute -right-12 xl:right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none w-[500px] xl:w-[600px]"
                    >
                        <DynamicVisual />
                    </motion.div>

                    {/* Text layer â€” on top, left-aligned */}
                    <div className="relative z-20 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                        >
                            <Sparkles className="h-3 w-3" />
                            Product Studio â€¢ Indore, India
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tighter text-slate-900 leading-[0.95] mb-6"
                        >
                            We <span className="text-indigo-600">build</span> software.<br />
                            We <span className="text-indigo-600">back</span> founders.<br />
                            We <span className="text-indigo-600">shape</span> careers.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-lg"
                        >
                            <span className="font-bold text-slate-900 block mb-2">We don't just speak. We build it ourselves.</span>
                            eMitra Technologies (eMitra Tech) is a product studio, custom development firm, and student innovation community based in Indore, India.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-start gap-4"
                        >
                            <Link
                                href="/products"
                                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-base hover:bg-indigo-700 transition-all shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)] flex items-center justify-center gap-3 group"
                            >
                                Explore Products <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-base hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                            >
                                Work With Us <ChevronRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Glow */}
            <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[120%] h-96 bg-gradient-to-r from-indigo-500/5 via-indigo-500/10 to-indigo-500/5 blur-[120px] pointer-events-none opacity-50" />
        </section>
    );
}

