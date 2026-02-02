'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { PricingSection } from '@/components/sections/PricingSection';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Bot, Globe, Smartphone, BarChart3, Clock, Lock } from 'lucide-react';
import Link from 'next/link';

export function SchoolMitraTemplate() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                                Education Solutions
                            </span>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                SchoolMitra
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10">
                                Complete School Management System for modern Indian institutions.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/contact">
                                    <div className="bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-2 transition-all cursor-pointer">
                                        Schedule Demo
                                        <ArrowRight className="h-5 w-5" />
                                    </div>
                                </Link>
                                <Link href="/pricing">
                                    <div className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all cursor-pointer">
                                        View Pricing
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Problem/Solution */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Managing a school shouldn't be chaos.
                            </h2>
                            <p className="text-lg text-slate-500 mb-6">
                                Spreadsheets, paper records, and disconnected software slow you down. You need a single source of truth.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-xs">✕</span>
                                    </div>
                                    <p className="text-slate-600">Lost fee receipts and revenue leakage</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-xs">✕</span>
                                    </div>
                                    <p className="text-slate-600">Endless phone calls from parents</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-xs">✕</span>
                                    </div>
                                    <p className="text-slate-600">Manual attendance tracking</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">The SchoolMitra Way</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1" />
                                    <p className="text-slate-700"><strong>Automated Fees:</strong> Digital receipts & reminders</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1" />
                                    <p className="text-slate-700"><strong>AI Chatbot:</strong> Answers parent queries 24/7</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1" />
                                    <p className="text-slate-700"><strong>Biometric Integration:</strong> Accurate attendance</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-green-500 mt-1" />
                                    <p className="text-slate-700"><strong>Mobile App:</strong> Everything on your phone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need</h2>
                            <p className="text-slate-500">Feature-packed to handle every aspect of school administration.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Bot, title: 'AI Parent Chatbot', desc: 'Auto-replies to "When is the exam?" and "Bus timing?" queries.' },
                                { icon: Smartphone, title: 'Mobile App', desc: 'Branded app for parents, teachers, and students.' },
                                { icon: BarChart3, title: 'Smart Analytics', desc: 'Track fee collection trends and academic performance.' },
                                { icon: Globe, title: 'Admissions Portal', desc: 'Online forms, document upload, and inquiry management.' },
                                { icon: Clock, title: 'Offline Mode', desc: 'Works even when the internet goes down. Syncs later.' },
                                { icon: Lock, title: 'Secure Data', desc: 'Role-based access control and encrypted database.' },
                            ].map((feat, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                                    <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                        <feat.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                                    <p className="text-slate-500 text-sm">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                {/* Pricing */}
                <PricingSection
                    title="SchoolMitra"
                    subtitle="Transparent Pricing"
                    color="blue"
                    tiers={[
                        {
                            name: "Starter",
                            price: "₹50,000",
                            period: "/year",
                            highlight: false,
                            description: "Up to 500 students",
                            features: [
                                "Student & staff management",
                                "Fee collection & receipts",
                                "Attendance tracking",
                                "Exam & result processing",
                                "Parent mobile app",
                                "SMS notifications (5,000/month)",
                                "Email support"
                            ],
                            cta: "Start Free Trial"
                        },
                        {
                            name: "Growth",
                            price: "₹1,00,000",
                            period: "/year",
                            highlight: true,
                            description: "501-1,000 students",
                            features: [
                                "Everything in Starter, plus:",
                                "Biometric attendance integration",
                                "AI chatbot for parent queries",
                                "Advanced reports & analytics",
                                "Multi-user roles & permissions",
                                "SMS notifications (15,000/month)",
                                "Phone + email support"
                            ],
                            cta: "Start Free Trial"
                        },
                        {
                            name: "Scale",
                            price: "₹2,00,000",
                            period: "/year",
                            highlight: false,
                            description: "1,001-2,000 students",
                            features: [
                                "Everything in Growth, plus:",
                                "Multi-campus support",
                                "API access for integrations",
                                "Custom reports builder",
                                "Priority support (4-hour SLA)",
                                "On-premise deployment option",
                                "Unlimited SMS notifications",
                                "Dedicated account manager"
                            ],
                            cta: "Start Free Trial"
                        }
                    ]}
                />

                <CTA />
            </main>
            <Footer />
        </>
    );
}
