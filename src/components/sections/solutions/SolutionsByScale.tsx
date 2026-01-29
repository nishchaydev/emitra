'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Landmark, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const solutions = [
    {
        icon: GraduationCap,
        title: 'Education',
        subtitle: 'K-12 to Universities',
        description: 'Comprehensive management systems for schools, colleges, and universities. Handle admissions, academics, finance, and operations in one unified platform.',
        features: ['Student Lifecycle Management', 'Academic Planning', 'Fee & Finance', 'Parent Portal'],
        gradient: 'from-primary to-blue-700',
    },
    {
        icon: Landmark,
        title: 'Government',
        subtitle: 'Federal to Municipal',
        description: 'Secure, compliant systems for government agencies. Streamline citizen services, internal operations, and cross-department coordination.',
        features: ['Citizen Services Portal', 'Document Management', 'Workflow Automation', 'Audit Compliance'],
        gradient: 'from-blue-700 to-blue-800',
    },
    {
        icon: Building2,
        title: 'Enterprise',
        subtitle: 'SMBs to Corporates',
        description: 'Tailored ERP solutions for businesses of all sizes. Unify HR, operations, and analytics into a single source of truth.',
        features: ['HR & Payroll', 'Operations Dashboard', 'Analytics & BI', 'Custom Modules'],
        gradient: 'from-blue-600 to-primary',
    },
];

export function SolutionsByScale() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                        Industry Solutions
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-4 mb-4">
                        Purpose-Built for Your Industry
                    </h2>
                    <p className="text-lg text-slate-600">
                        We understand that every industry has unique challenges. Our solutions are crafted with deep domain expertise.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Header */}
                            <div className={`bg-gradient-to-br ${solution.gradient} p-6 text-white`}>
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 bg-white/10 rounded-xl flex items-center justify-center">
                                        <solution.icon className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{solution.title}</h3>
                                        <p className="text-blue-100 text-sm">{solution.subtitle}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-slate-600 mb-6 leading-relaxed">{solution.description}</p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {solution.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                            <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link href="/contact">
                                    <div className="w-full py-3 border border-slate-200 rounded-xl text-slate-700 font-semibold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all flex items-center justify-center gap-2 cursor-pointer">
                                        Learn More
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-slate-600 mb-4">
                        Don&apos;t see your industry? We build custom solutions too.
                    </p>
                    <Link href="/contact">
                        <div className="text-primary font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all cursor-pointer">
                            Talk to Our Team
                            <ArrowRight className="h-5 w-5" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
