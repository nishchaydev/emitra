'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { PricingSection } from '@/components/sections/PricingSection';
import { ArrowRight, Check, Dumbbell, Smartphone, Calendar, CreditCard, Activity, Users, Shield, MessageSquare, Zap, Clock, Code, Star } from 'lucide-react';
import Link from 'next/link';
import { ProductHero } from '@/components/sections/products/ProductHero';

export function GymMitraTemplate() {
    return (
        <>
            <Header />
            <main>
                {/* 1. Hero Section */}
                <ProductHero
                    title="GymMitra"
                    subtitle="Your Automated Gym Manager. Professional Enterprise Resource Planning (ERP) specifically designed for fitness businesses and gyms in India."
                    badge="Fitness Solutions"
                    color="blue"
                    ctaPrimary={{ text: "Book Free Demo", href: "/contact" }}
                    ctaSecondary={{ text: "Watch 2-Min Overview", href: "#overview" }}
                    visualIcon={Dumbbell}
                />

                {/* 2. 3 Value Props */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Stop chasing payments, prevent unauthorized access, and automate member engagement.
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <div className="h-16 w-16 bg-[#0066FF]/10 text-[#0066FF] rounded-full flex items-center justify-center mb-6">
                                    <Activity className="h-8 w-8" />
                                </div>
                                <h3 className="text-4xl font-black text-slate-900 mb-2">30%</h3>
                                <p className="text-slate-600 font-medium">Increase in member retention</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                                    <Clock className="h-8 w-8" />
                                </div>
                                <h3 className="text-4xl font-black text-slate-900 mb-2">50%</h3>
                                <p className="text-slate-600 font-medium">Reduction in admin work</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                                    <Shield className="h-8 w-8" />
                                </div>
                                <h3 className="text-4xl font-black text-slate-900 mb-2">Zero</h3>
                                <p className="text-slate-600 font-medium">Unauthorized entry</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. 4 Key Features */}
                <section id="overview" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Features</h2>
                            <p className="text-xl text-slate-500 max-w-2xl">Everything you need to run a modern, profitable fitness business.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-12 w-12 bg-[#0066FF]/10 text-[#0066FF] rounded-xl flex items-center justify-center">
                                        <MessageSquare className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Automated WhatsApp Renewals</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Never lose a member because they forgot to renew. Our system automatically sends friendly reminders at 7, 3, and 1-day intervals before expiry via WhatsApp.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-12 w-12 bg-[#0066FF]/10 text-[#0066FF] rounded-xl flex items-center justify-center">
                                        <Shield className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Biometric & QR Access Control</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Keep non-paying members out. Seamlessly integrate with gym turnstiles and doors using biometric fingerprints, face recognition, or dynamic QR codes.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-12 w-12 bg-[#0066FF]/10 text-[#0066FF] rounded-xl flex items-center justify-center">
                                        <Smartphone className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">White-Label Member App</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Give your gym a premium feel. Members book classes, track workouts, access their diet plans, and renew memberships in an app carrying your brand.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-12 w-12 bg-[#0066FF]/10 text-[#0066FF] rounded-xl flex items-center justify-center">
                                        <Activity className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Complete Business Dashboard</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        A full ERP suite to manage expenses, GST invoicing, Personal Trainers (PT) scheduling & commissions, inventory, and lead generation in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. How It Works */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative">
                        <div className="text-center mb-20 relative z-20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                            <p className="text-slate-400 text-xl">Get up and running in days, not weeks.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-20">
                            {/* Connecting Line (desktop) */}
                            <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-[2px] bg-slate-800 z-0" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="h-24 w-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-8">
                                    <span className="text-3xl font-black text-[#0066FF]">1</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Book a Demo</h3>
                                <p className="text-slate-400 leading-relaxed">Schedule a personalized walkthrough of the GymMitra platform and discuss your specific needs.</p>
                            </div>
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="h-24 w-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-8">
                                    <span className="text-3xl font-black text-[#0066FF]">2</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Quick Setup</h3>
                                <p className="text-slate-400 leading-relaxed">Our team migrates your member data, sets up the access control, and configures WhatsApp integrations.</p>
                            </div>
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="h-24 w-24 rounded-full bg-[#0066FF] border-4 border-slate-900 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,102,255,0.4)]">
                                    <span className="text-3xl font-black text-white">3</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Go Live & Grow</h3>
                                <p className="text-slate-200 leading-relaxed">Start managing your gym automatically. Watch your retention rates increase and admin hours drop.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Tech Stack */}
                <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Enterprise-Grade Technology</p>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-3 font-bold text-xl text-slate-700">
                                <Code className="h-8 w-8 text-[#0066FF]" /> Next.js + React
                            </div>
                            <div className="flex items-center gap-3 font-bold text-xl text-slate-700">
                                <svg className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg> Tailwind CSS
                            </div>
                            <div className="flex items-center gap-3 font-bold text-xl text-slate-700">
                                <svg className="h-8 w-8 text-slate-900" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22.8c-6 0-10.8-4.8-10.8-10.8S6 1.2 12 1.2 22.8 6 22.8 12 18 22.8 12 22.8zm0-19.2C7.3 3.6 3.6 7.3 3.6 12s3.7 8.4 8.4 8.4 8.4-3.7 8.4-8.4-3.7-8.4-8.4-8.4z" /></svg> Prisma ORM
                            </div>
                            <div className="flex items-center gap-3 font-bold text-xl text-slate-700">
                                <MessageSquare className="h-8 w-8 text-green-500" /> WhatsApp API
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Testimonials */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Market Leaders</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100">
                                <div className="flex text-yellow-400 mb-8">
                                    <Star className="h-6 w-6 fill-current" />
                                    <Star className="h-6 w-6 fill-current" />
                                    <Star className="h-6 w-6 fill-current" />
                                    <Star className="h-6 w-6 fill-current" />
                                    <Star className="h-6 w-6 fill-current" />
                                </div>
                                <p className="text-slate-700 text-xl mb-8 leading-relaxed font-medium">
                                    "Since switching to GymMitra, our member retention has skyrocketed. The automated WhatsApp reminders do the work of a full-time receptionist. Best investment for our gym."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 bg-[#0066FF]/10 rounded-full flex items-center justify-center text-[#0066FF] font-black text-xl">AK</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Aryan Khanna</h4>
                                        <p className="text-slate-500 font-medium">Owner, FitCore Studio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100">
                                <div className="flex text-yellow-400 mb-8">
                                    <Star className="h-6 w-6 fill-current" />
                                    <Star className="h-6 w-6 fill-current" />
                                    <Star className="h-6 w-6 fill-current" />
                                    <Star className="h-6 w-6 fill-current" />
                                    <Star className="h-6 w-6 fill-current text-slate-300" />
                                </div>
                                <p className="text-slate-700 text-xl mb-8 leading-relaxed font-medium">
                                    "No more unauthorized entry or sharing passes. The biometric integration works flawlessly with their software. It takes 10 seconds to onboard a new member."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-black text-xl">SM</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Sneha Malik</h4>
                                        <p className="text-slate-500 font-medium">Manager, Iron Addicts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Pricing */}
                <PricingSection
                    title="Pricing"
                    subtitle="Simple plans for growing fitness businesses."
                    color="blue"
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
                            ],
                            cta: "Book Demo"
                        },
                        {
                            name: "Pro",
                            price: "₹50,000",
                            period: "/year",
                            highlight: true,
                            description: "201-500 members",
                            features: [
                                "Everything in Basic, plus:",
                                "Branded member app",
                                "Gate access control integration",
                                "Personal Trainer (PT) Management",
                            ],
                            cta: "Book Demo"
                        },
                        {
                            name: "Elite",
                            price: "Custom",
                            period: "",
                            highlight: false,
                            description: "Large gyms & franchises",
                            features: [
                                "Everything in Pro, plus:",
                                "White-label member app",
                                "Multi-branch dashboard",
                                "Dedicated account manager",
                            ],
                            cta: "Contact Sales"
                        }
                    ]}
                />

                {/* 8. FAQ */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-xl text-slate-500">Everything you need to know about GymMitra.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center flex-shrink-0 text-sm">Q</div>
                                    How long does implementation take?
                                </h3>
                                <p className="text-slate-600 ml-11 leading-relaxed text-lg">Depending on your data size and hardware needs (like access gates), standard implementation takes between 3 to 7 days including staff training.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center flex-shrink-0 text-sm">Q</div>
                                    Do you integrate with my existing turnstile/biometric machine?
                                </h3>
                                <p className="text-slate-600 ml-11 leading-relaxed text-lg">Yes! We support standard controllers (e.g., eSSL, ZKTeco) and can map them to our cloud ERP for real-time access control without needing to buy new hardware.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center flex-shrink-0 text-sm">Q</div>
                                    Do members need to download the app?
                                </h3>
                                <p className="text-slate-600 ml-11 leading-relaxed text-lg">While highly recommended for diet plans, workouts, and self-renewals, members can still receive all essential alerts via WhatsApp without downloading the app.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center flex-shrink-0 text-sm">Q</div>
                                    What if I have multiple branches?
                                </h3>
                                <p className="text-slate-600 ml-11 leading-relaxed text-lg">Our Elite plan natively supports multi-branch setups, allowing owners to view aggregated revenue while manager accounts are restricted to their specific branch.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Final CTA */}
                <CTA />
            </main>
            <Footer />
        </>
    );
}
