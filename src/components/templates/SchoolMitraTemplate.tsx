'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
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
                                    <button className="bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-2 transition-all">
                                        Schedule Demo
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </Link>
                                <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all">
                                    View Pricing
                                </button>
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
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
                            <p className="text-slate-500">No hidden fees. Pay based on your institution size.</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900">Standard License</h3>
                                <div className="mt-4 mb-6">
                                    <span className="text-4xl font-bold text-slate-900">₹50k - 2L</span>
                                    <span className="text-slate-500">/year</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-6">Based on student count (200 - 2000 students)</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2 text-sm text-slate-600"><Check className="h-4 w-4 text-green-500" /> Core ERP Features</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600"><Check className="h-4 w-4 text-green-500" /> Mobile App for Parents</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600"><Check className="h-4 w-4 text-green-500" /> Email & SMS Support</li>
                                </ul>
                                <button className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-colors">
                                    Get Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </>
    );
}
