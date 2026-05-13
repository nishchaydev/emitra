'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "eMitra didn't just build software for us — they understood our operations and delivered a system that actually works on the ground.",
        name: 'Municipal Officer',
        role: 'City Administration, Madhya Pradesh',
    },
    {
        quote: "As a student founder, having the eMitra team behind me gave me the confidence to ship my first product. The mentorship is real.",
        name: 'Student Founder',
        role: 'eMitra Launchpad Cohort',
    },
    {
        quote: "GymMitra transformed how we manage our members. Billing, attendance, everything is seamless now.",
        name: 'Gym Owner',
        role: 'Indore, MP',
    },
];

export function CustomSolutions() {
    return (
        <section className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">What People Say</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-6 tracking-tighter leading-[0.95] text-slate-900">
                        Voices from the <span className="text-indigo-600">Ground.</span>
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
                        From government officers to student founders — hear from the people who work with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
                        >
                            <Quote className="h-6 w-6 text-indigo-300 mb-6" />
                            <p className="text-slate-700 text-sm leading-relaxed mb-8 font-medium italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div>
                                <p className="text-sm font-black text-slate-900">{t.name}</p>
                                <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
