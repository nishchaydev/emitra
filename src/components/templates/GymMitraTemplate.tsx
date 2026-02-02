'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { PricingSection } from '@/components/sections/PricingSection';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Dumbbell, Smartphone, Calendar, CreditCard, Activity, Users } from 'lucide-react';
import Link from 'next/link';

export function GymMitraTemplate() {
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
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                                Fitness Solutions
                            </span>
                            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                                GymMitra
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10">
                                Intelligent Gym Management. Focus on your members, not the paperwork.
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
                                Stop chasing payments. Start growing.
                            </h2>
                            <p className="text-lg text-slate-500 mb-6">
                                Running a gym is hard enough without worrying about expired memberships and lost revenue.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-xs">✕</span>
                                    </div>
                                    <p className="text-slate-600">Manual renewal calls & texts</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-xs">✕</span>
                                    </div>
                                    <p className="text-slate-600">Scheduling conflicts for PTs</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-red-600 font-bold text-xs">✕</span>
                                    </div>
                                    <p className="text-slate-600">No way to track trainer performance</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">The GymMitra Advantage</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-emerald-500 mt-1" />
                                    <p className="text-slate-700"><strong>Auto-Renewals:</strong> Automated billing & reminders</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-emerald-500 mt-1" />
                                    <p className="text-slate-700"><strong>Member App:</strong> Workouts, diet plans, and progress</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-emerald-500 mt-1" />
                                    <p className="text-slate-700"><strong>Smart Access:</strong> Biometric/QR entry integration</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-emerald-500 mt-1" />
                                    <p className="text-slate-700"><strong>PT Management:</strong> Commission tracking & scheduling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Gym Owners</h2>
                            <p className="text-slate-500">Every feature designed to increase revenue and retention.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Smartphone, title: 'Member App', desc: 'Let members book slots, view workouts, and renew memberships.' },
                                { icon: CreditCard, title: 'Billing & Invoicing', desc: 'GST-compliant invoicing and expense tracking.' },
                                { icon: Activity, title: 'Workout Tracking', desc: 'Digital workout logs and progress charts for members.' },
                                { icon: Calendar, title: 'Class Scheduling', desc: 'Manage Zumba, Yoga, and Group classes effortlessly.' },
                                { icon: Users, title: 'Lead Management', desc: 'Track inquiries and follow-ups to convert more members.' },
                                { icon: Dumbbell, title: 'Diet Plans', desc: 'Create and assign diet plans directly in the app.' },
                            ].map((feat, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                                    <div className="h-12 w-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
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
                    title="GymMitra"
                    subtitle="Intelligent Gym Management"
                    color="emerald"
                    tiers={[
                        {
                            name: "Basic",
                            price: "₹25,000",
                            period: "/year",
                            highlight: false,
                            description: "Up to 200 members",
                            features: [
                                "Member management",
                                "Billing & invoicing",
                                "Attendance tracking",
                                "Automated renewal reminders",
                                "SMS notifications (2,000/month)",
                                "Email support"
                            ],
                            cta: "Start Free Trial"
                        },
                        {
                            name: "Pro",
                            price: "₹50,000",
                            period: "/year",
                            highlight: true,
                            description: "201-500 members",
                            features: [
                                "Everything in Basic, plus:",
                                "Member mobile app",
                                "Workout plans & scheduling",
                                "PT Management",
                                "Inventory management",
                                "Nutrition tracking",
                                "SMS notifications (5,000/month)",
                                "Phone + email support"
                            ],
                            cta: "Start Free Trial"
                        },
                        {
                            name: "Elite",
                            price: "₹1,00,000",
                            period: "/year",
                            highlight: false,
                            description: "501-1,000 members",
                            features: [
                                "Everything in Pro, plus:",
                                "Multi-branch support",
                                "Advanced analytics & insights",
                                "Custom integrations",
                                "Priority support",
                                "White-label mobile app option",
                                "Unlimited SMS notifications"
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
