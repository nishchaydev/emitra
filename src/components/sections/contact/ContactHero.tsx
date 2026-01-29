'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@emitra.tech', href: 'mailto:contact@emitra.tech' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: MapPin, label: 'Location', value: 'India', href: null },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
];

export function ContactHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        Get in Touch
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl lg:text-5xl font-display font-bold leading-[1.1] text-slate-900">
                        Let&apos;s build your institution&apos;s{' '}
                        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            future together.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                        Our consultative approach ensures we understand your specific institutional
                        challenges before proposing a solution. Let&apos;s start a conversation.
                    </p>
                </motion.div>

                {/* Visual - Contact Info Cards with Floating Animation */}
                <motion.div
                    className="relative grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Glow effect */}
                    <motion.div
                        className="absolute -top-10 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: [0, -5, 0]
                            }}
                            transition={{
                                opacity: { delay: 0.3 + index * 0.1 },
                                y: {
                                    duration: 3 + index * 0.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }
                            }}
                            whileHover={{ scale: 1.03, y: -3 }}
                        >
                            <motion.div
                                className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center mb-3"
                                whileHover={{ rotate: 5 }}
                            >
                                <item.icon className="h-6 w-6 text-white" />
                            </motion.div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{item.label}</p>
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="text-slate-900 font-bold hover:text-primary transition-colors"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <p className="text-slate-900 font-bold">{item.value}</p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
