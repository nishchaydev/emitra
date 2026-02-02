'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Dumbbell, Building2, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const products = [
    {
        id: 'schoolmitra',
        title: 'SchoolMitra',
        subtitle: 'Complete School Management System',
        icon: GraduationCap,
        features: [
            'Admissions & student records',
            'Fee management & receipts',
            'Attendance & exam management',
            'Parent app & AI chatbot'
        ],
        target: 'For schools with 200-2000 students',
        color: 'bg-blue-50 text-blue-600',
        borderColor: 'border-blue-100',
        href: '/schoolmitra'
    },
    {
        id: 'gymmitra',
        title: 'GymMitra',
        subtitle: 'Intelligent Gym Management',
        icon: Dumbbell,
        features: [
            'Member management & billing',
            'Attendance tracking',
            'PT scheduling & workout plans',
            'Automated renewals & reminders'
        ],
        target: 'For gyms with 100-1000 members',
        color: 'bg-emerald-50 text-emerald-600',
        borderColor: 'border-emerald-100',
        href: '/gymmitra'
    },
    {
        id: 'flatmitra',
        title: 'FlatMitra',
        subtitle: 'Student Housing Management',
        icon: Building2,
        features: [
            'Room availability tracking',
            'Tenant & landlord portal',
            'Automated rent collection',
            'Maintenance request management'
        ],
        target: 'For PGs and student accommodations',
        color: 'bg-purple-50 text-purple-600',
        borderColor: 'border-purple-100',
        href: '/flatmitra'
    }
];

export function Products() {
    return (
        <section id="products" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        Our Solutions
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Specialized management systems for institutions. Built to solve real problems, not just check boxes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={`flex flex-col h-full bg-white rounded-2xl border ${product.borderColor} p-8 hover:shadow-xl transition-all shadow-sm`}
                        >
                            <div className={`h-14 w-14 rounded-xl ${product.color} flex items-center justify-center mb-6`}>
                                <product.icon className="h-7 w-7" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.title}</h3>
                            <p className="text-slate-500 font-medium mb-6">{product.subtitle}</p>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <Check className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                    {product.target}
                                </p>
                                <Link href={product.href}>
                                    <button className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group">
                                        Learn More
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
