'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { RippleButton } from '@/components/ui/RippleButton';

interface ProductHeroProps {
    title: string;
    subtitle: string;
    badge: string;
    color: 'blue' | 'emerald' | 'purple';
    ctaPrimary: { text: string; href: string };
    ctaSecondary: { text: string; href: string };
    visualIcon: React.ElementType;
}

const colorMap = {
    blue: {
        bg: 'bg-blue-50',
        badgeBg: 'bg-blue-50',
        badgeText: 'text-blue-600',
        badgeBorder: 'border-blue-100',
        accentText: 'text-blue-600',
        gradient: 'from-blue-600 to-indigo-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        iconBg: 'bg-blue-100',
        blob: 'bg-blue-200/40'
    },
    emerald: {
        bg: 'bg-emerald-50',
        badgeBg: 'bg-emerald-50',
        badgeText: 'text-emerald-600',
        badgeBorder: 'border-emerald-100',
        accentText: 'text-emerald-600',
        gradient: 'from-emerald-600 to-teal-600',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        iconBg: 'bg-emerald-100',
        blob: 'bg-emerald-200/40'
    },
    purple: {
        bg: 'bg-purple-50',
        badgeBg: 'bg-purple-50',
        badgeText: 'text-purple-600',
        badgeBorder: 'border-purple-100',
        accentText: 'text-purple-600',
        gradient: 'from-purple-600 to-pink-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        iconBg: 'bg-purple-100',
        blob: 'bg-purple-200/40'
    }
};

export function ProductHero({ title, subtitle, badge, color, ctaPrimary, ctaSecondary, visualIcon: Icon }: ProductHeroProps) {
    const theme = colorMap[color];

    return (
        <section className={`relative min-h-auto lg:min-h-[85vh] flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-50`}>
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-[-20%] left-[-10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] rounded-full blur-[80px] lg:blur-[120px] mix-blend-multiply animate-blob ${theme.blob}`} />
                <div className={`absolute bottom-[-20%] right-[-10%] w-[250px] lg:w-[500px] h-[250px] lg:h-[500px] rounded-full blur-[80px] lg:blur-[120px] mix-blend-multiply animate-blob animation-delay-2000 ${theme.blob}`} />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 lg:pt-32 lg:pb-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} text-xs font-bold tracking-widest uppercase shadow-sm mx-auto lg:mx-0`}>
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        {badge}
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900">
                        {title}
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                        <Link href={ctaPrimary.href} className="group w-full sm:w-auto">
                            <RippleButton
                                as="div"
                                className={`${theme.button} text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer w-full hover:-translate-y-1 active:scale-95 duration-300`}
                            >
                                {ctaPrimary.text}
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </RippleButton>
                        </Link>
                        <Link href={ctaSecondary.href} className="group w-full sm:w-auto">
                            <RippleButton
                                as="div"
                                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-5 rounded-2xl font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer w-full hover:-translate-y-1 active:scale-95 duration-300"
                            >
                                {ctaSecondary.text}
                            </RippleButton>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Visual - Abstract Cube/Icon */}
                <motion.div
                    className="relative h-[300px] lg:h-[500px] flex items-center justify-center perspective-1000 mt-8 lg:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                        {/* Orbiting Elements */}
                        <motion.div
                            className={`absolute inset-0 rounded-full border border-slate-200 border-dashed opacity-50`}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className={`absolute inset-10 rounded-full border border-slate-200 border-dashed opacity-50`}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Central Card */}
                        <motion.div
                            className="absolute inset-0 m-auto w-64 h-64 bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl flex items-center justify-center"
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className={`h-32 w-32 ${theme.iconBg} rounded-2xl flex items-center justify-center mb-0 shadow-inner`}>
                                <Icon className={`h-16 w-16 ${theme.accentText}`} strokeWidth={1.5} />
                            </div>
                        </motion.div>

                        {/* Floating Satellites */}
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-100 z-10"
                                style={{
                                    top: i === 1 ? '10%' : i === 2 ? '80%' : '40%',
                                    left: i === 1 ? '80%' : i === 2 ? '20%' : '0%',
                                }}
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                            >
                                <div className={`w-3 h-3 rounded-full ${theme.button}`} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
