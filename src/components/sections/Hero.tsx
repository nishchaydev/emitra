import { ArrowRight, Layers, Zap } from 'lucide-react';
import { Globe } from '@/components/ui/Globe';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
    const words = ["Universities", "Governments", "Enterprises"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden circuit-bg pt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    {/* Badge */}
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                        Enterprise-Grade Solutions
                    </div>

                    {/* Headline */}


                    // In Render
                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900">
                        Smart systems for <br />
                        <span className="text-primary inline-block min-w-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="block"
                                >
                                    {words[index]}.
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        Unifying disconnected workflows with enterprise-grade automation and real-time
                        analytics designed for the modern era.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
                            Schedule a Demo <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                            Watch 2-Min Tour
                        </button>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="relative aspect-square lg:aspect-auto h-[500px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
                    <Globe />

                    {/* Floating Card */}
                    <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                        <div className="flex gap-4 items-center">
                            <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                                <Zap className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">Real-time Analytics</p>
                                <p className="text-xs text-slate-500">Live data tracking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
