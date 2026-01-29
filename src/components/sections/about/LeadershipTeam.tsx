'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Instead of fake team members with placeholder photos, show company strengths
const strengths = [
    {
        number: '01',
        title: 'Expert Engineering Team',
        description: 'Our team comprises senior engineers with 10+ years of experience in enterprise software development.',
    },
    {
        number: '02',
        title: 'Domain Expertise',
        description: 'Deep understanding of education, government, and enterprise workflows from years of hands-on implementation.',
    },
    {
        number: '03',
        title: 'Client-Centric Approach',
        description: 'Every project includes a dedicated success manager who understands your institution inside-out.',
    },
    {
        number: '04',
        title: 'Continuous Innovation',
        description: 'We invest in R&D to bring cutting-edge AI/ML capabilities to institutional management.',
    },
];

export function LeadershipTeam() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-4 mb-6">
                            Built by experts. <br />Trusted by institutions.
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            We&apos;re not just a software company—we&apos;re your long-term technology partner.
                            Our team brings together the best of enterprise engineering and institutional domain expertise.
                        </p>
                        <Link href="/contact">
                            <motion.div
                                className="inline-flex bg-primary text-white px-8 py-4 rounded-xl font-bold items-center gap-2 hover:bg-blue-800 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Work With Us
                                <ArrowRight className="h-5 w-5" />
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Right - Strengths */}
                    <div className="space-y-4">
                        {strengths.map((strength, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all group"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl font-bold text-slate-100 group-hover:text-primary/20 transition-colors">
                                        {strength.number}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{strength.title}</h3>
                                        <p className="text-slate-600 text-sm">{strength.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
