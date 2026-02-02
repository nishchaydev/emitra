'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Building2, Key, IndianRupee, FileText, UserCheck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function FlatMitraTemplate() {
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
                            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                                Housing Solutions
                            </span>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                FlatMitra
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10">
                                Modern Student Housing Management. Automate rent, manage tenants, and find peace of mind.
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
                                Managing student housing is chaos.
                            </h2>
                            <p className="text-lg text-slate-500 mb-6">
                                Chasing rent, managing complaints, and verifying tenants shouldn't take all your time.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-xs">✕</span>
                                    </div>
                                    <p className="text-slate-600">Late rent payments & awkward reminders</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-xs">✕</span>
                                    </div>
                                    <p className="text-slate-600">Unknown tenants & security risks</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-xs">✕</span>
                                    </div>
                                    <p className="text-slate-600">Lost keys & maintenance headaches</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-purple-50/50 p-8 rounded-2xl border border-purple-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">The FlatMitra Solution</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-purple-500 mt-1" />
                                    <p className="text-slate-700"><strong>Auto-Rent:</strong> Automated calculation & collection</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-purple-500 mt-1" />
                                    <p className="text-slate-700"><strong>Verification:</strong> Digital KYC & student verification</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-purple-500 mt-1" />
                                    <p className="text-slate-700"><strong>Maintenance:</strong> In-app complaint tracking</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-purple-500 mt-1" />
                                    <p className="text-slate-700"><strong>Inventory:</strong> Room availability dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">PG & Hostel Management Simplified</h2>
                            <p className="text-slate-500">Designed for PG owners, hostel wardens, and property managers.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Building2, title: 'Room Management', desc: 'Visual dashboard of occupied and vacant rooms/beds.' },
                                { icon: IndianRupee, title: 'Rent Collection', desc: 'UPI integration and automated payment reminders.' },
                                { icon: UserCheck, title: 'Tenant KYC', desc: 'Digital storage of Aadhaar, Student ID, and police verification.' },
                                { icon: FileText, title: 'Digital Agreements', desc: 'Create and sign rental agreements digitally.' },
                                { icon: Key, title: 'Visitor Management', desc: 'Track visitors and ensure safety of residents.' },
                                { icon: ShieldCheck, title: 'Complaint Box', desc: 'Residents can raise issues (plumbing, wifi) via app.' },
                            ].map((feat, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                                    <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Flexible Pricing</h2>
                            <p className="text-slate-500">Pay as you grow. No setup fees.</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900">Property License</h3>
                                <div className="mt-4 mb-6">
                                    <span className="text-4xl font-bold text-slate-900">₹15k - 75k</span>
                                    <span className="text-slate-500">/year</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-6">Based on property size / number of beds</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2 text-sm text-slate-600"><Check className="h-4 w-4 text-purple-500" /> Full Dashboard Access</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600"><Check className="h-4 w-4 text-purple-500" /> Tenant App Included</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600"><Check className="h-4 w-4 text-purple-500" /> Automated Reminders</li>
                                </ul>
                                <button className="w-full py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold rounded-xl transition-colors">
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
