'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { PricingSection } from '@/components/sections/PricingSection';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Building2, Key, IndianRupee, FileText, UserCheck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ProductHero } from '@/components/sections/products/ProductHero';

export function FlatMitraTemplate() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                {/* Hero */}
                <ProductHero
                    title="FlatMitra"
                    subtitle="Modern Student Housing Management. Automate rent, manage tenants, and find peace of mind."
                    badge="Housing Solutions"
                    color="purple"
                    ctaPrimary={{ text: "Schedule Demo", href: "/contact" }}
                    ctaSecondary={{ text: "View Pricing", href: "/pricing" }}
                    visualIcon={Building2}
                />

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
                {/* Pricing */}
                <PricingSection
                    title="FlatMitra"
                    subtitle="Student Housing Management"
                    color="purple"
                    tiers={[
                        {
                            name: "Solo",
                            price: "₹15,000",
                            period: "/year",
                            highlight: false,
                            description: "1 property, up to 20 rooms",
                            features: [
                                "Room availability tracking",
                                "Tenant management portal",
                                "Automated rent collection",
                                "Maintenance request tracking",
                                "Basic reports",
                                "Email support"
                            ],
                            cta: "Start Free Trial"
                        },
                        {
                            name: "Multi",
                            price: "₹40,000",
                            period: "/year",
                            highlight: true,
                            description: "2-5 properties, up to 100 rooms",
                            features: [
                                "Everything in Solo, plus:",
                                "Multi-property dashboard",
                                "Tenant mobile app",
                                "Automated renewal reminders",
                                "Payment gateway integration",
                                "Advanced analytics",
                                "Phone + email support"
                            ],
                            cta: "Start Free Trial"
                        },
                        {
                            name: "Premium",
                            price: "₹75,000",
                            period: "/year",
                            highlight: false,
                            description: "6+ properties, unlimited rooms",
                            features: [
                                "Everything in Multi, plus:",
                                "White-label platform option",
                                "API access for integrations",
                                "Custom features",
                                "Priority support",
                                "Dedicated account manager"
                            ],
                            cta: "Start Free Trial"
                        },
                        {
                            name: "Enterprise",
                            price: "Custom",
                            period: "",
                            highlight: false,
                            description: "Large co-living & property firms",
                            features: [
                                "Everything in Premium, plus:",
                                "Custom mobile app development",
                                "ERP integration (SAP/Oracle)",
                                "Dedicated database instance",
                                "SLA with uptime guarantee",
                                "On-premise deployment option"
                            ],
                            cta: "Contact Sales"
                        }
                    ]}
                />

                <CTA />
            </main>
            <Footer />
        </>
    );
}
