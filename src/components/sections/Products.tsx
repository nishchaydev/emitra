'use client';

import { motion, Variants } from 'framer-motion';
import { Dumbbell, Building2, ArrowRight, Check, Sparkles } from 'lucide-react';

const products = [
    {
        id: 'gymmitra',
        title: 'Gym Mitra',
        subtitle: 'Increase member retention by 30%',
        icon: Dumbbell,
        features: [
            'Billing & automated renewals',
            'PT scheduling & workout plans',
            'Real-time attendance tracking',
            'Member engagement suite'
        ],
        target: 'For growth-focused gyms',
        color: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
        href: 'https://gym.emitra.dev',
    },
    {
        id: 'societymitra',
        title: 'Flat Mitra',
        subtitle: 'Smart ERP for Indian Flat Managers & Housing Societies',
        icon: Building2,
        features: [
            'Automated rent & maintenance billing',
            'Digital tenant & landlord portal',
            'Maintenance request tracking',
            'Society accounting & reports'
        ],
        target: 'For modern housing societies',
        color: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
        href: 'https://flat.emitra.dev'
    }
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export function Products() {
    return (
        <section id="products" className="py-16 md:py-32 bg-white relative overflow-hidden">
            {/* High-tech Background Accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200/50 to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200/50 to-transparent" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest"
                    >
                        <Sparkles className="h-3 w-3" />
                        Ecosystem Solutions
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
                        Explore Our <span className="text-indigo-600">Products.</span>
                    </h2>
                    <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed">
                        SaaS built for Indian SMBs and institutions â€” solving real operational pain points with premium software.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 md:max-w-4xl mx-auto gap-6 md:gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={item}
                            className="group relative flex flex-col h-full bg-white border border-slate-100 rounded-2xl md:rounded-[32px] p-6 md:p-8 transition-all duration-500 hover:border-indigo-200 hover:shadow-[0_20px_50px_rgba(79,70,229,0.08)] overflow-hidden"
                        >
                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className={`h-16 w-16 rounded-2xl ${product.iconBg} ${product.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                                    <product.icon className="h-8 w-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{product.title}</h3>
                                <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed line-clamp-2">{product.subtitle}</p>

                                <ul className="space-y-4 mb-10">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm group/feature">
                                            <div className="h-5 w-5 rounded-full bg-indigo-50 flex items-center justify-center mt-0.5 group-hover/feature:bg-indigo-100 transition-colors">
                                                <Check className="h-3 w-3 text-indigo-600" />
                                            </div>
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-6">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                        {product.target}
                                    </p>

                                        <a href={product.href} className="block w-full">
                                            <div className="w-full py-4 px-6 bg-slate-900 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95">
                                                Launch System
                                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </div>
                                        </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <a href="/products" className="inline-flex items-center gap-3 text-indigo-600 font-bold hover:text-indigo-700 transition-colors group">
                        View All Products & Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}

