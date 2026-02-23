'use client';


import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2,
    Cloud,
    Brain,
    Database,
    HeadphonesIcon,
    Plug,
    CheckCircle,
    ArrowRight,
    ArrowLeft
} from 'lucide-react';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import Link from 'next/link';
import Image from 'next/image';

const services = [
    {
        icon: Code2,
        title: 'Custom ERP Development',
        description: 'Tailored enterprise resource planning solutions designed specifically for your institution\'s unique workflows and requirements.',
        features: [
            'Modular architecture for flexible scaling',
            'Role-based access control (RBAC)',
            'Multi-tenant support',
            'Custom reporting dashboards',
            'API-first design for integrations',
            'Mobile-responsive interfaces'
        ],
    },
    {
        icon: Cloud,
        title: 'Cloud Infrastructure',
        description: 'Scalable, secure cloud-based solutions with enterprise-grade reliability and performance.',
        features: [
            '99.9% uptime SLA',
            'Auto-scaling infrastructure',
            'Geographic redundancy',
            'Automated backups',
            'SSL/TLS encryption',
            'DDoS protection'
        ],
    },
    {
        icon: Brain,
        title: 'AI & ML Integration',
        description: 'Leverage artificial intelligence to predict outcomes, automate processes, and gain actionable insights.',
        features: [
            'Predictive analytics for student performance',
            'Automated attendance tracking',
            'Smart resource allocation',
            'Fraud detection systems',
            'Natural language processing',
            'Custom ML model training'
        ],
    },
    {
        icon: Database,
        title: 'Data Migration',
        description: 'Seamless transition from legacy systems with zero data loss and minimal operational disruption.',
        features: [
            'Legacy system assessment',
            'Data mapping and transformation',
            'Validation and integrity checks',
            'Parallel running period',
            'Full audit trail',
            'Rollback capabilities'
        ],
    },
    {
        icon: HeadphonesIcon,
        title: 'Training & Support',
        description: 'Comprehensive onboarding and ongoing support to ensure your team maximises system value.',
        features: [
            'On-site training sessions',
            'Video tutorials and documentation',
            'Dedicated success manager',
            'Priority ticket resolution',
            'Regular health checks',
            'Quarterly business reviews'
        ],
    },
    {
        icon: Plug,
        title: 'API & Integrations',
        description: 'Connect your systems with third-party tools, payment gateways, and government portals.',
        features: [
            'RESTful API development',
            'Webhook implementations',
            'Payment gateway integration',
            'Biometric device connectivity',
            'SMS/Email gateway setup',
            'Government portal compliance'
        ],
    },
];

const customizeModules = [
    'Student Management', 'Fee & Finance',
    'Attendance Tracking', 'Exam & Results',
    'HR & Payroll', 'Inventory',
    'Transport', 'Library',
    'Hostel', 'Alumni Portal',
    'Parent Portal', 'Custom Modules'
];

// Interactive Module Selector Component
import { useState } from 'react';

function InteractiveModuleSelector() {
    const [selectedModules, setSelectedModules] = useState<string[]>([]);
    const [formData, setFormData] = useState({ name: '', email: '', institution: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [step, setStep] = useState<'selection' | 'details'>('selection');

    const toggleModule = (module: string) => {
        setSelectedModules(prev =>
            prev.includes(module)
                ? prev.filter(m => m !== module)
                : [...prev, module]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Lead submitted:', { ...formData, modules: selectedModules });
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                className="bg-[#1E293B] rounded-2xl p-8 border border-slate-700 text-center flex flex-col items-center justify-center min-h-[400px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Request Received!</h3>
                <p className="text-slate-400 max-w-sm mx-auto">
                    We&apos;ve noted your requirements. Our team will prepare a custom demo for your institution and reach out within 24 hours.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="bg-[#1E293B] rounded-2xl border border-slate-700 overflow-hidden relative min-h-[480px] flex flex-col">
            {/* Progress / Helper Text */}
            <div className="p-8 pb-0">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-white">Build Your Custom ERP</h3>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Step {step === 'selection' ? '1' : '2'} of 2
                    </span>
                </div>
                <p className="text-slate-400 text-sm">
                    {step === 'selection'
                        ? 'Select the modules you need for your institution:'
                        : 'Tell us a bit about your institution:'}
                </p>
            </div>

            <div className="p-8 pt-6 flex-grow flex flex-col">
                <AnimatePresence mode="wait">
                    {step === 'selection' ? (
                        <motion.div
                            key="selection"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-grow flex flex-col"
                        >
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {customizeModules.map((module, i) => (
                                    <motion.button
                                        key={i}
                                        onClick={() => toggleModule(module)}
                                        className={`px-4 py-3 rounded-xl text-sm text-left transition-all border ${selectedModules.includes(module)
                                            ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                                            : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/80'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{module}</span>
                                            {selectedModules.includes(module) && (
                                                <CheckCircle className="h-4 w-4" />
                                            )}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <motion.button
                                    onClick={() => setStep('details')}
                                    disabled={selectedModules.length === 0}
                                    className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${selectedModules.length > 0
                                        ? 'bg-white text-slate-900 hover:bg-slate-100'
                                        : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                        }`}
                                    whileHover={selectedModules.length > 0 ? { scale: 1.02 } : {}}
                                    whileTap={selectedModules.length > 0 ? { scale: 0.98 } : {}}
                                >
                                    Continue <ArrowRight className="h-4 w-4" />
                                </motion.button>
                                {selectedModules.length === 0 && (
                                    <p className="text-center text-xs text-slate-500 mt-2">
                                        Select at least one module to proceed
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="details"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex-grow flex flex-col"
                        >
                            <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
                                <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-slate-700">
                                    <p className="text-xs text-slate-400 mb-2">Selected Modules:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedModules.map(m => (
                                            <span key={m} className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-md border border-blue-500/30">
                                                {m}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5 ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-slate-900/80 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5 ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-slate-900/80 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                                            placeholder="john@school.edu"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5 ml-1">Institution Type</label>
                                        <select
                                            required
                                            value={formData.institution}
                                            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                                            className="w-full bg-slate-900/80 border border-slate-600 rounded-xl px-4 py-3 text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all appearance-none"
                                        >
                                            <option value="">Select type...</option>
                                            <option value="school">School (K-12)</option>
                                            <option value="college">College/University</option>
                                            <option value="coaching">Coaching Institute</option>
                                            <option value="government">Government Body</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-8">
                                    <motion.button
                                        type="button"
                                        onClick={() => setStep('selection')}
                                        className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        aria-label="Back to selection"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                    </motion.button>
                                    <motion.button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-primary to-blue-600 text-white py-4 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Get Custom Quote
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                {/* Hero Section */}
                <ServicesHero />

                {/* Core Services - Scrollytelling */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                                    Our Core Capabilities
                                </h2>
                                <p className="text-xl text-slate-500">
                                    We build digital products that scale. From high-performance web applications to native mobile experiences and enterprise systems.
                                </p>
                            </motion.div>
                        </div>

                        <div className="space-y-32">
                            {/* Service 1: Web Development */}
                            <motion.div
                                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="lg:w-1/2 order-2 lg:order-1">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6">
                                        <Code2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Web Application Development</h3>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        We engineer fast, secure, and scalable web applications using modern stacks like Next.js, React, and Node.js. Whether it's a dynamic portal, a complex dashboard, or a high-traffic SaaS platform, we deliver pixel-perfect, responsive experiences.
                                    </p>
                                    <ul className="space-y-3">
                                        {['High-Performance SPAs', 'Progressive Web Apps (PWA)', 'API-Driven Architecture', 'SEO-Optimized Rendering'].map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <CheckCircle className="w-5 h-5 text-blue-500" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:w-1/2 order-1 lg:order-2">
                                    <div className="relative aspect-square w-full max-w-md mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-3xl transform rotate-3 scale-105" />
                                        <div className="absolute inset-0 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col">
                                            {/* Mockup Browser Window */}
                                            <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col gap-4">
                                                <div className="h-8 w-3/4 bg-slate-100 rounded-lg animate-pulse" />
                                                <div className="h-32 w-full bg-blue-50/50 rounded-lg animate-pulse" />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="h-24 bg-slate-50 rounded-lg animate-pulse" />
                                                    <div className="h-24 bg-slate-50 rounded-lg animate-pulse" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Service 2: Mobile App Dev */}
                            <motion.div
                                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="lg:w-1/2 order-1 lg:order-1">
                                    <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-indigo-50 rounded-[3rem] transform -rotate-3 scale-105" />
                                        <div className="absolute inset-0 bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
                                            {/* Mockup Phone */}
                                            <div className="absolute top-0 inset-x-0 h-6 bg-transparent flex justify-center z-10">
                                                <div className="w-1/3 h-4 bg-slate-800 rounded-b-xl" />
                                            </div>
                                            <div className="pt-10 p-5 h-full flex flex-col gap-4">
                                                <div className="flex justify-between items-center">
                                                    <div className="w-10 h-10 rounded-full bg-slate-800 animate-pulse" />
                                                    <div className="w-20 h-4 rounded bg-slate-800 animate-pulse" />
                                                </div>
                                                <div className="h-32 w-full bg-indigo-500/20 rounded-xl" />
                                                <div className="space-y-3 mt-4">
                                                    <div className="h-16 w-full bg-slate-800/80 rounded-xl animate-pulse" />
                                                    <div className="h-16 w-full bg-slate-800/80 rounded-xl animate-pulse" />
                                                    <div className="h-16 w-full bg-slate-800/80 rounded-xl animate-pulse" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 order-2 lg:order-2">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 mb-6">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Mobile App Development</h3>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        We build cross-platform and native mobile applications that put your services right in the pockets of your users. From Flutter and React Native to native iOS and Android, we ensure smooth, fluid experiences.
                                    </p>
                                    <ul className="space-y-3">
                                        {['iOS & Android Native apps', 'Cross-Platform Frameworks', 'Offline-First Capabilities', 'Push Notifications integration'].map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <CheckCircle className="w-5 h-5 text-indigo-500" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Service 3: Custom ERP */}
                            <motion.div
                                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="lg:w-1/2 order-2 lg:order-1">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
                                        <Database className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Enterprise ERP & AI</h3>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        Beyond basic websites, we specialize in complex business logic. Custom ERPs, automated workflows, and AI integration that drastically cut down manual administrative overhead.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Custom Dashboard & Analytics', 'Cloud Data Migration', 'Automated Workflows', 'Machine Learning Models'].map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:w-1/2 order-1 lg:order-2">
                                    <div className="relative aspect-video w-full max-w-lg mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-emerald-50 rounded-3xl transform rotate-2 scale-105" />
                                        <div className="absolute inset-0 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col p-4">
                                            {/* Mockup Dashboard */}
                                            <div className="flex gap-4 h-full">
                                                <div className="w-1/4 bg-slate-50 rounded-lg flex flex-col gap-2 p-2">
                                                    <div className="h-6 w-3/4 bg-slate-200 rounded mb-4" />
                                                    <div className="h-4 w-full bg-slate-200 rounded" />
                                                    <div className="h-4 w-5/6 bg-slate-200 rounded" />
                                                    <div className="h-4 w-full bg-emerald-100 rounded" />
                                                </div>
                                                <div className="w-3/4 flex flex-col gap-4">
                                                    <div className="h-1/3 bg-slate-50 rounded-lg" />
                                                    <div className="h-2/3 bg-emerald-50/50 rounded-lg flex items-end p-4 gap-2">
                                                        <div className="w-1/5 bg-emerald-200 h-1/4 rounded-t-sm animate-pulse" />
                                                        <div className="w-1/5 bg-emerald-300 h-2/4 rounded-t-sm animate-pulse" />
                                                        <div className="w-1/5 bg-emerald-400 h-3/4 rounded-t-sm animate-pulse" />
                                                        <div className="w-1/5 bg-emerald-500 h-full rounded-t-sm animate-pulse" />
                                                        <div className="w-1/5 bg-emerald-600 h-5/6 rounded-t-sm animate-pulse" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Custom ERP Section - Dark */}
                <section className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                    Your Institution, Your System
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    No two institutions are alike. That&apos;s why we build ERP
                                    solutions that adapt to your specific workflows, not the other
                                    way around.
                                </p>

                                {/* Benefits */}
                                <ul className="space-y-4 mb-8">
                                    {[
                                        'Fully customizable modules',
                                        'White-label branding options',
                                        'Custom workflow automation',
                                        'Industry-specific features',
                                        'Scalable from 100 to 100,000+ users'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                                                <CheckCircle className="h-3 w-3 text-white" />
                                            </div>
                                            <span className="text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact">
                                    <motion.button
                                        className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Talk to Us
                                    </motion.button>
                                </Link>
                            </motion.div>

                            {/* Right - Interactive Module Selector + Lead Form */}
                            <InteractiveModuleSelector />
                        </div>
                    </div>
                </section>

                {/* How We Work - Scrollytelling Process */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Section Header */}
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-[#0066FF] text-xs font-bold uppercase tracking-widest">
                                    Our Process
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                                    From Discovery to Delivery
                                </h2>
                                <p className="text-slate-500 text-lg">
                                    A proven 4-phase methodology that ensures your system is built right, on time, and within budget.
                                </p>
                            </motion.div>
                        </div>

                        {/* Scrollytelling Timeline */}
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 lg:-translate-x-[1px]" />

                            {[
                                {
                                    step: '01',
                                    title: 'Discovery & Audit',
                                    subtitle: 'Understanding your world',
                                    desc: 'We study your current workflows, pain points, and institutional goals to build a comprehensive requirements map.',
                                    details: [
                                        'Stakeholder interviews & site visits',
                                        'Existing system audit & gap analysis',
                                        'Requirements documentation & sign-off'
                                    ],
                                    duration: '1-2 Weeks',
                                    accent: 'bg-[#0066FF]',
                                    accentLight: 'bg-blue-50 border-blue-100',
                                    accentText: 'text-[#0066FF]'
                                },
                                {
                                    step: '02',
                                    title: 'Architecture & Design',
                                    subtitle: 'Blueprinting the solution',
                                    desc: 'Our architects design a scalable, modular system tailored to your institution\'s unique needs.',
                                    details: [
                                        'System architecture & database design',
                                        'UI/UX wireframes & prototyping',
                                        'Technical specification & approval'
                                    ],
                                    duration: '2-3 Weeks',
                                    accent: 'bg-slate-900',
                                    accentLight: 'bg-slate-50 border-slate-200',
                                    accentText: 'text-slate-900'
                                },
                                {
                                    step: '03',
                                    title: 'Build & Iterate',
                                    subtitle: 'Agile development in action',
                                    desc: 'We build in 2-week sprints with regular demos. You see progress, give feedback, and steer direction continuously.',
                                    details: [
                                        'Sprint-based development with demos',
                                        'Continuous integration & testing',
                                        'Real-time feedback and iteration'
                                    ],
                                    duration: '6-12 Weeks',
                                    accent: 'bg-[#0066FF]',
                                    accentLight: 'bg-blue-50 border-blue-100',
                                    accentText: 'text-[#0066FF]'
                                },
                                {
                                    step: '04',
                                    title: 'Deploy & Support',
                                    subtitle: 'Launch with confidence',
                                    desc: 'Zero-downtime deployment with on-site training, data migration, and a dedicated support team by your side.',
                                    details: [
                                        'Staged rollout & data migration',
                                        'On-site training for all user roles',
                                        'Dedicated account manager & SLA'
                                    ],
                                    duration: 'Ongoing',
                                    accent: 'bg-slate-900',
                                    accentLight: 'bg-slate-50 border-slate-200',
                                    accentText: 'text-slate-900'
                                },
                            ].map((phase, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16 mb-20 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                                        <motion.div
                                            className={`h-12 w-12 rounded-full ${phase.accent} flex items-center justify-center text-white font-black text-sm shadow-lg`}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        >
                                            {phase.step}
                                        </motion.div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:pr-0' : 'lg:pl-0'}`}>
                                        <motion.div
                                            className={`p-8 rounded-2xl border ${phase.accentLight} hover:shadow-xl transition-shadow duration-500`}
                                            whileHover={{ y: -4 }}
                                        >
                                            {/* Duration Badge */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${phase.accentText} bg-white border border-current/10`}>
                                                    {phase.duration}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className={`text-2xl font-bold text-slate-900 mb-1`}>{phase.title}</h3>
                                            <p className="text-sm text-slate-400 font-medium mb-4">{phase.subtitle}</p>

                                            {/* Description */}
                                            <p className="text-slate-600 leading-relaxed mb-6">{phase.desc}</p>

                                            {/* Detail List */}
                                            <ul className="space-y-3">
                                                {phase.details.map((detail, i) => (
                                                    <motion.li
                                                        key={i}
                                                        className="flex items-start gap-3 text-sm text-slate-600"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.3 + i * 0.1 }}
                                                    >
                                                        <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${phase.accentText}`} />
                                                        {detail}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                                Ready to modernize your operations?
                            </h2>
                            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                                Book a free consultation with our solutions architect. No pressure, just clarity.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <motion.button
                                        className="bg-[#0066FF] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center gap-3 cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Book Free Consultation <ArrowRight className="h-5 w-5" />
                                    </motion.button>
                                </Link>
                                <Link href="/about">
                                    <motion.button
                                        className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Learn About Us
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
