'use client';

import { motion, Variants } from 'framer-motion';
import { GraduationCap, Dumbbell, Building2, ArrowRight, Check, Shield, Sparkles } from 'lucide-react';

const products = [
    {
        id: 'schoolmitra',
        title: 'SchoolMitra',
        subtitle: 'Reduce admin workload by 50% in 60 days',
        icon: GraduationCap,
        features: [
            'Attendance, fees, exams, engagement',
            'Centralized reporting dashboard',
            'Admissions & student records',
            'Parent app & AI chatbot'
        ],
        target: 'For schools scaling up',
        color: 'text-blue-600',
        iconBg: 'bg-blue-50',
        href: 'https://school.emitra.dev'
    },
    {
        id: 'gymmitra',
        title: 'GymMitra',
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
        href: 'https://gym.emitra.dev'
    },
    {
        id: 'flatmitra',
        title: 'FlatMitra',
        subtitle: 'Eliminate rent collection headaches',
        icon: Building2,
        features: [
            'Automated rent management',
            'Digital tenant & landlord portal',
            'Maintenance request system',
            'Room availability tracking'
        ],
        target: 'Modern student housing',
        color: 'text-blue-500',
        iconBg: 'bg-blue-50/50',
        href: 'https://flat.emitra.dev'
    },
    {
        id: 'medimitra',
        title: 'MediMitra',
        subtitle: 'Coming Soon',
        icon: Shield,
        features: [
            'Hospital management OS',
            'Patient record digitalization',
            'Pharmacy & lab integration',
            'Appointment scheduling'
        ],
        target: 'Institutional Healthcare',
        color: 'text-slate-400',
        iconBg: 'bg-slate-50',
        href: '#',
        disabled: true
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
        <section id="products" className="py-32 bg-white relative overflow-hidden">
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
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest"
                    >
                        <Sparkles className="h-3 w-3" />
                        Ecosystem Solutions
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                        Engineered for <span className="text-blue-600">Impact.</span>
                    </h2>
                    <p className="text-slate-500 text-xl font-medium leading-relaxed">
                        Discover specialized management systems designed to streamline complex
                        operations and drive measurable growth across your entire institution.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={item}
                            className="group relative flex flex-col h-full bg-white border border-slate-100 rounded-[32px] p-8 transition-all duration-500 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(0,102,255,0.08)] overflow-hidden"
                        >
                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className={`h-16 w-16 rounded-2xl ${product.iconBg} ${product.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                                    <product.icon className="h-8 w-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{product.title}</h3>
                                <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed line-clamp-2">{product.subtitle}</p>

                                <ul className="space-y-4 mb-10">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm group/feature">
                                            <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 group-hover/feature:bg-blue-100 transition-colors">
                                                <Check className="h-3 w-3 text-blue-600" />
                                            </div>
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-6">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                        {product.target}
                                    </p>

                                    {product.disabled ? (
                                        <div className="w-full py-4 px-6 bg-slate-50 text-slate-400 font-bold rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed">
                                            Coming Soon
                                        </div>
                                    ) : (
                                        <a href={product.href} className="block w-full">
                                            <div className="w-full py-4 px-6 bg-slate-900 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95">
                                                Launch System
                                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </div>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
