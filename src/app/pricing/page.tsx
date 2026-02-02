'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { motion } from 'framer-motion';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <motion.h1
                            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Simple, Transparent Pricing
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            No hidden fees. No surprises. No vendor lock-in.
                            <br className="hidden md:block" />
                            Choose the plan that fits your institution.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Link href="/contact">
                                <button className="bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center gap-2 transition-all">
                                    Schedule Demo
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all">
                                    Talk to Sales
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* SchoolMitra Pricing */}
                <PricingSection
                    title="SchoolMitra"
                    subtitle="Complete School Management System"
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
                        },
                        {
                            name: "Enterprise",
                            price: "Custom",
                            period: "",
                            highlight: false,
                            description: "2,000+ students or special requirements",
                            features: [
                                "Everything in Scale, plus:",
                                "Custom feature development",
                                "White-label options",
                                "Advanced security & compliance",
                                "24/7 support with 2-hour SLA",
                                "Dedicated infrastructure",
                                "On-site training",
                                "Service level agreements"
                            ],
                            cta: "Contact Sales"
                        }
                    ]}
                />

                {/* GymMitra Pricing */}
                <PricingSection
                    title="GymMitra"
                    subtitle="Intelligent Gym Management"
                    color="emerald"
                    className="bg-slate-50"
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

                {/* FlatMitra Pricing */}
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
                        }
                    ]}
                />

                {/* Custom Solutions */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            Need Something Different?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            We also build custom management systems for Government institutions, Healthcare facilities, Retail chains, and Corporate offices.
                        </p>
                        <p className="text-lg text-slate-400 mb-10">
                            Pricing based on scope and requirements.
                        </p>
                        <Link href="/contact">
                            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed">
                                Discuss Your Project
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </Link>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2">
                            {[
                                { q: "Is there a free trial?", a: "Yes! All plans include a 30-day free trial with full features. No credit card required." },
                                { q: "Can I upgrade/downgrade?", a: "Absolutely. You can change plans anytime. We'll prorate the difference." },
                                { q: "What payment methods?", a: "Bank transfer, UPI, credit/debit cards, and cheques (for annual plans)." },
                                { q: "Is there a setup fee?", a: "No setup fees. Pricing includes installation, training, and onboarding." },
                                { q: "Can I pay monthly?", a: "Yes, monthly plans available at 10% higher rate. Annual payment saves money." },
                                { q: "Is my data secure?", a: "Yes. Bank-level encryption, daily backups, and ISO-compliant infrastructure." },
                            ].map((faq, i) => (
                                <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </>
    );
}

function PricingSection({ title, subtitle, color, tiers, className = "bg-white" }: { title: string, subtitle: string, color: string, tiers: any[], className?: string }) {
    const getColorClasses = (c: string, highlight: boolean) => {
        const colors: any = {
            blue: {
                badge: "bg-blue-100 text-blue-700",
                button: "bg-blue-600 hover:bg-blue-700",
                buttonOutline: "border-blue-200 text-blue-600 hover:bg-blue-50",
                check: "text-blue-500",
                border: "border-blue-200",
                highlightBorder: "border-blue-500 ring-4 ring-blue-500/10"
            },
            emerald: {
                badge: "bg-emerald-100 text-emerald-700",
                button: "bg-emerald-600 hover:bg-emerald-700",
                buttonOutline: "border-emerald-200 text-emerald-600 hover:bg-emerald-50",
                check: "text-emerald-500",
                border: "border-emerald-200",
                highlightBorder: "border-emerald-500 ring-4 ring-emerald-500/10"
            },
            purple: {
                badge: "bg-purple-100 text-purple-700",
                button: "bg-purple-600 hover:bg-purple-700",
                buttonOutline: "border-purple-200 text-purple-600 hover:bg-purple-50",
                check: "text-purple-500",
                border: "border-purple-200",
                highlightBorder: "border-purple-500 ring-4 ring-purple-500/10"
            }
        };
        return colors[c] || colors.blue;
    };

    return (
        <section className={`py-20 ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-4 ${getColorClasses(color, false).badge}`}>
                        {title}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{subtitle}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {tiers.map((tier: any, i: number) => {
                        const style = getColorClasses(color, tier.highlight);
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-6 rounded-2xl bg-white border h-full flex flex-col ${tier.highlight ? style.highlightBorder + ' shadow-xl z-10 scale-105 md:scale-105' : 'border-slate-200 shadow-sm hover:border-slate-300 transition-colors'}`}
                            >
                                {tier.highlight && (
                                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide ${style.button}`}>
                                        Most Popular
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                                    <div className="mt-4 mb-2">
                                        <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                                        <span className="text-slate-500 text-sm">{tier.period}</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-6">{tier.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {tier.features.map((feat: string, j: number) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                            <Check className={`h-4 w-4 shrink-0 mt-0.5 ${style.check}`} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="w-full">
                                    <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${tier.highlight ? 'text-white ' + style.button : 'bg-white border ' + style.buttonOutline}`}>
                                        {tier.cta}
                                    </button>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
