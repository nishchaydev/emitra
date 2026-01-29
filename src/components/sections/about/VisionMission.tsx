'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Lightbulb, Shield } from 'lucide-react';

const cards = [
    {
        icon: Eye,
        title: 'Our Vision',
        description: 'To create a world where institutional complexity is invisible, handled by intelligent systems that allow educators and leaders to focus purely on human potential.',
        gradient: 'from-primary to-blue-700',
    },
    {
        icon: Target,
        title: 'Our Mission',
        description: 'We engineer robust, secure, and scalable digital infrastructures. By simplifying administrative workflows, we empower institutions to lead with agility.',
        gradient: 'from-blue-600 to-blue-800',
    },
    {
        icon: Lightbulb,
        title: 'Our Approach',
        description: 'We believe in partnership over transactions. Every solution is crafted through deep understanding of your unique challenges and goals.',
        gradient: 'from-blue-700 to-primary',
    },
    {
        icon: Shield,
        title: 'Our Promise',
        description: 'Enterprise-grade security, 24/7 reliability, and a dedicated team that treats your success as our own. We stand behind every line of code.',
        gradient: 'from-primary to-blue-600',
    },
];

export function VisionMission() {
    const [activeTab, setActiveTab] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', interest: 'careers' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const activeCard = cards[activeTab];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Interaction submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setShowForm(false);
            setIsSubmitted(false);
            setFormData({ name: '', email: '', interest: 'careers' });
        }, 3000);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-4">
                        What Drives Us
                    </h2>
                    <p className="text-lg text-slate-600">
                        Explore the pillars that define our identity
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Interactive Tabs */}
                    <div className="lg:col-span-4 space-y-4">
                        {cards.map((card, index) => (
                            <motion.button
                                key={index}
                                onClick={() => { setActiveTab(index); setShowForm(false); }}
                                className={`w-full text-left p-4 rounded-xl flex items-center gap-4 transition-all ${activeTab === index
                                    ? `bg-gradient-to-r ${card.gradient} text-white shadow-lg`
                                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${activeTab === index ? 'bg-white/20' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                    <card.icon className="h-5 w-5" />
                                </div>
                                <span className="font-bold">{card.title}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right: Content & Interaction Area */}
                    <div className="lg:col-span-8">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl relative overflow-hidden"
                        >
                            {/* Background Gradient Spot */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeCard.gradient} opacity-5 rounded-bl-full`} />

                            <div className={`h-16 w-16 bg-gradient-to-br ${activeCard.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                                <activeCard.icon className="h-8 w-8" />
                            </div>

                            <h3 className="text-3xl font-bold text-slate-900 mb-6">{activeCard.title}</h3>
                            <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                {activeCard.description}
                            </p>

                            {!showForm ? (
                                <motion.button
                                    onClick={() => setShowForm(true)}
                                    className={`px-8 py-4 bg-gradient-to-r ${activeCard.gradient} text-white rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Join Our Mission <Target className="h-4 w-4" />
                                </motion.button>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        // TODO: Implement actual API call
                                        setIsSubmitted(true);
                                        setTimeout(() => {
                                            setShowForm(false);
                                            setIsSubmitted(false);
                                            setFormData({ name: '', email: '', interest: 'careers' });
                                        }, 3000);
                                    }}
                                >
                                    {isSubmitted ? (
                                        <div className="text-center py-8">
                                            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Target className="h-6 w-6" />
                                            </div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                                            <p className="text-slate-600">Thanks for connecting with us.</p>
                                        </div>
                                    ) : (
                                        <>
                                            <h4 className="text-lg font-bold text-slate-900 mb-4">Connect with us about {activeCard.title}</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <label htmlFor="vm-name" className="sr-only">Name</label>
                                                    <input
                                                        id="vm-name"
                                                        type="text"
                                                        placeholder="Name"
                                                        required
                                                        value={formData.name}
                                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="vm-email" className="sr-only">Email</label>
                                                    <input
                                                        id="vm-email"
                                                        type="email"
                                                        placeholder="Email"
                                                        required
                                                        value={formData.email}
                                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="vm-interest" className="sr-only">Interest</label>
                                                <select
                                                    id="vm-interest"
                                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none mb-4"
                                                    value={formData.interest}
                                                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                                                >
                                                    <option value="careers">I want to join the team</option>
                                                    <option value="partnership">I want to partner</option>
                                                    <option value="general">General inquiry</option>
                                                </select>
                                            </div>
                                            <div className="flex gap-3">
                                                <button
                                                    type="submit"
                                                    className={`px-6 py-3 bg-gradient-to-r ${activeCard.gradient} text-white rounded-lg font-bold hover:shadow-lg transition-all flex-1`}
                                                >
                                                    Send Message
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowForm(false)}
                                                    className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold hover:bg-slate-50"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </motion.form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
