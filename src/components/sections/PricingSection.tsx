'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
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
    color: 'blue' | 'emerald' | 'purple';
    tiers: Tier[];
    className?: string;
}

export function PricingSection({ title, subtitle, color, tiers, className = "bg-white" }: PricingSectionProps) {
    const getColorClasses = (c: string, highlight: boolean) => {
        const colors: any = {
            blue: {
                badge: "bg-blue-100 text-blue-700",
                button: "bg-blue-600 hover:bg-blue-700",
                buttonOutline: "border-blue-200 text-blue-600 hover:bg-blue-50",
                check: "text-blue-500",
                border: "border-blue-200",
                highlightBorder: "border-blue-500 ring-4 ring-blue-500/10"
            },
            emerald: {
                badge: "bg-emerald-100 text-emerald-700",
                button: "bg-emerald-600 hover:bg-emerald-700",
                buttonOutline: "border-emerald-200 text-emerald-600 hover:bg-emerald-50",
                check: "text-emerald-500",
                border: "border-emerald-200",
                highlightBorder: "border-emerald-500 ring-4 ring-emerald-500/10"
            },
            purple: {
                badge: "bg-purple-100 text-purple-700",
                button: "bg-purple-600 hover:bg-purple-700",
                buttonOutline: "border-purple-200 text-purple-600 hover:bg-purple-50",
                check: "text-purple-500",
                border: "border-purple-200",
                highlightBorder: "border-purple-500 ring-4 ring-purple-500/10"
            }
        };
        return colors[c] || colors.blue;
    };

    return (
        <section className={`py-20 ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-4 ${getColorClasses(color, false).badge}`}>
                        {title}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{subtitle}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {tiers.map((tier, i) => {
                        const style = getColorClasses(color, tier.highlight);
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-6 rounded-2xl bg-white border h-full flex flex-col ${tier.highlight ? style.highlightBorder + ' shadow-xl z-10 scale-105 md:scale-105' : 'border-slate-200 shadow-sm hover:border-slate-300 transition-colors'}`}
                            >
                                {tier.highlight && (
                                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide ${style.button}`}>
                                        Most Popular
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                                    <div className="mt-4 mb-2">
                                        <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                                        <span className="text-slate-500 text-sm">{tier.period}</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-6">{tier.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {tier.features.map((feat, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                            <Check className={`h-4 w-4 shrink-0 mt-0.5 ${style.check}`} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="w-full">
                                    <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${tier.highlight ? 'text-white ' + style.button : 'bg-white border ' + style.buttonOutline}`}>
                                        {tier.cta}
                                    </button>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
