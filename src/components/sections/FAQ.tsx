'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
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
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Common Questions
                    </h2>
                    <p className="text-slate-600">
                        Everything you need to know about transforming your institution.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${openIndex === index ? 'border-primary/20 bg-blue-50/30' : 'border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-primary flex-shrink-0 ml-4" />
                                ) : (
                                    <Plus className="h-5 w-5 text-slate-400 flex-shrink-0 ml-4" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48' : 'max-h-0'
                                    }`}
                            >
                                <p className="p-6 pt-0 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
