'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Tier {
    name: string;
    price: string;
    period: string;
    highlight: boolean;
    description: string;
    features: string[];
    cta: string;
}

interface PricingSectionProps {
    title: string;
    subtitle: string;
    color: 'blue' | 'indigo' | 'slate' | 'emerald' | 'purple';
    tiers: Tier[];
    className?: string;
}

export function PricingSection({ title, subtitle, color, tiers, className = "bg-white" }: PricingSectionProps) {
    const getColorClasses = (c: string) => {
        const colors: any = {
            blue: {
                badge: "bg-blue-50 text-blue-600 border-blue-100",
                button: "bg-[#0066FF] hover:bg-blue-700 shadow-blue-500/20",
                buttonOutline: "border-slate-200 text-slate-900 hover:border-blue-200 hover:bg-blue-50",
                check: "text-blue-500",
                border: "border-slate-100",
                highlightBorder: "border-blue-500 ring-4 ring-blue-500/5",
                iconBg: "bg-blue-50"
            },
            indigo: {
                badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
                button: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20",
                buttonOutline: "border-slate-200 text-slate-900 hover:border-indigo-200 hover:bg-indigo-50",
                check: "text-indigo-500",
                border: "border-slate-100",
                highlightBorder: "border-indigo-500 ring-4 ring-indigo-500/5",
                iconBg: "bg-indigo-50"
            },
            slate: {
                badge: "bg-slate-50 text-slate-600 border-slate-200",
                button: "bg-slate-900 hover:bg-slate-800 shadow-slate-900/20",
                buttonOutline: "border-slate-200 text-slate-900 hover:bg-slate-50",
                check: "text-slate-500",
                border: "border-slate-100",
                highlightBorder: "border-slate-900 ring-4 ring-slate-900/5",
                iconBg: "bg-slate-100"
            },
            emerald: {
                badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
                button: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20",
                buttonOutline: "border-slate-200 text-slate-900 hover:border-emerald-200 hover:bg-emerald-50",
                check: "text-emerald-500",
                border: "border-slate-100",
                highlightBorder: "border-emerald-500 ring-4 ring-emerald-500/5",
                iconBg: "bg-emerald-50"
            },
            purple: {
                badge: "bg-blue-50 text-blue-600 border-blue-100",
                button: "bg-[#0066FF] hover:bg-blue-700 shadow-blue-500/20",
                buttonOutline: "border-slate-200 text-slate-900 hover:border-blue-200 hover:bg-blue-50",
                check: "text-blue-500",
                border: "border-slate-100",
                highlightBorder: "border-blue-500 ring-4 ring-blue-500/5",
                iconBg: "bg-blue-50"
            }
        };
        return colors[c] || colors.blue;
    };

    const style = getColorClasses(color);

    return (
        <section className={`py-32 relative overflow-hidden ${className}`}>
            {/* Atmospheric Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 ${style.badge}`}
                    >
                        <Sparkles className="h-3 w-3" />
                        {title}
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                        {subtitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {tiers.map((tier, i) => {
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative p-8 rounded-[32px] bg-white border h-full flex flex-col transition-all duration-500 group ${tier.highlight
                                    ? style.highlightBorder + ' shadow-[0_40px_100px_-20px_rgba(0,102,255,0.12)] z-10 scale-105'
                                    : 'border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]'
                                    }`}
                            >
                                {tier.highlight && (
                                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-widest ${style.button}`}>
                                        Recommended
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-4 group-hover:text-blue-600 transition-colors uppercase text-xs tracking-[0.2em]">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl font-black text-slate-900 tracking-tight">{tier.price}</span>
                                        <span className="text-slate-500 text-sm font-bold">{tier.period}</span>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{tier.description}</p>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {tier.features.map((feat, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-slate-600 group/feat">
                                            <div className={`h-5 w-5 rounded-full ${style.iconBg} flex items-center justify-center shrink-0 mt-0.5 group-hover/feat:scale-110 transition-transform`}>
                                                <Check className={`h-3 w-3 ${style.check}`} />
                                            </div>
                                            <span className="font-medium">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="w-full">
                                    <button className={`w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 group/btn ${tier.highlight
                                        ? 'text-white ' + style.button + ' hover:scale-[1.02] active:scale-[0.98]'
                                        : 'bg-white border ' + style.buttonOutline + ' active:scale-[0.98]'
                                        }`}>
                                        {tier.cta}
                                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            {/* Atmospheric Depth Noise Overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </section>
    );
}

