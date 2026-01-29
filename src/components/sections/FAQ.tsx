'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'What are your pricing tiers?',
        answer: 'We offer transparent, modular pricing starting with a base platform fee. You only pay for the modules you need (e.g., Admissions, Finance, Exams). Contact us for a custom quote based on your institution size.'
    },
    {
        question: 'Can eMitra integrate with our existing legacy systems?',
        answer: 'Yes, we specialize in bridging the gap between legacy infrastructure and modern workflows. Our Unified Data Layer is designed to ingest and normalize data from various existing sources.'
    },
    {
        question: 'How long does implementation typically take?',
        answer: 'Implementation timelines vary by institution size and complexity. Typically, a core deployment takes 4-8 weeks, with our team handling the heavy lifting of data migration and configuration.'
    },
    {
        question: 'Is my data secure with eMitra?',
        answer: 'Security is our foundation. We use enterprise-grade encryption for data at rest and in transit, with role-based access control (RBAC) to ensure only authorized personnel can access sensitive information.'
    },
    {
        question: 'Do you offer training for staff?',
        answer: 'Absolutely. We provide comprehensive training sessions for administrators, teachers, and staff, along with a dedicated knowledge base and priority support to ensure a smooth transition.'
    },
    {
        question: 'What happens if we need a custom feature?',
        answer: 'Our platform is modular by design. We have a "Custom Workflow" solution specifically for institutions with unique needs, allowing us to build tailored modules on top of our core engine.'
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">
                        Common Questions
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Everything you need to know about transforming your institution.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index
                                ? 'border-primary/30 bg-blue-50/50 shadow-sm'
                                : 'border-slate-200 hover:border-slate-300 bg-white'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex-shrink-0 ml-4 h-8 w-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}
                                >
                                    {openIndex === index ? (
                                        <Minus className="h-4 w-4" />
                                    ) : (
                                        <Plus className="h-4 w-4" />
                                    )}
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
