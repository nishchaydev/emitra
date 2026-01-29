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
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
                                    Enterprise Solutions<br />
                                    <span className="text-primary">Built for Scale</span>
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed">
                                    From custom ERP development to AI-powered analytics, we provide
                                    end-to-end <span className="bg-primary/10 px-2 py-1 rounded text-primary font-medium">solutions</span> that transform how institutions operate.
                                </p>
                            </motion.div>

                            {/* 3D Isometric Stack Visual */}
                            <motion.div
                                className="relative flex justify-center items-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                                    {/* Background glow */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-400/10 to-accent/10 rounded-full blur-3xl"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.4, 0.6, 0.4]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    {/* Floating stack wrapper */}
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center"
                                        animate={{ y: [0, -12, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        {/* Isometric Container */}
                                        <div className="relative" style={{ transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)' }}>

                                            {/* Bottom layer - Shadow */}
                                            <div className="absolute top-16 left-4 w-56 h-40 bg-slate-900/10 rounded-2xl blur-xl" />

                                            {/* Bottom layer - Database */}
                                            <motion.div
                                                className="absolute top-12 left-2 w-56 h-36 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl border border-slate-300 shadow-lg flex items-center justify-center"
                                                animate={{ y: [0, 3, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                                            >
                                                <Database className="h-12 w-12 text-slate-400" />
                                            </motion.div>

                                            {/* Middle layer - Cloud */}
                                            <motion.div
                                                className="absolute top-6 left-1 w-56 h-36 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 shadow-xl flex items-center justify-center"
                                                animate={{ y: [0, 2, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                                            >
                                                <Cloud className="h-12 w-12 text-blue-400" />
                                            </motion.div>

                                            {/* Top layer - Card with cycling text */}
                                            <motion.div
                                                className="relative w-56 h-36 bg-gradient-to-br from-primary to-blue-700 rounded-2xl shadow-2xl overflow-hidden"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                {/* Grid pattern overlay */}
                                                <div className="absolute inset-0 opacity-10">
                                                    <div className="grid grid-cols-6 grid-rows-4 h-full">
                                                        {[...Array(24)].map((_, i) => (
                                                            <div key={i} className="border border-white/20" />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Content with icons */}
                                                <div className="relative h-full flex flex-col items-center justify-center text-white">
                                                    <div className="flex gap-3 mb-3">
                                                        <motion.div
                                                            className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center"
                                                            animate={{ scale: [1, 1.1, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                        >
                                                            <Code2 className="h-5 w-5" />
                                                        </motion.div>
                                                        <motion.div
                                                            className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center"
                                                            animate={{ scale: [1, 1.1, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                                        >
                                                            <Brain className="h-5 w-5" />
                                                        </motion.div>
                                                        <motion.div
                                                            className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center"
                                                            animate={{ scale: [1, 1.1, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                                                        >
                                                            <Plug className="h-5 w-5" />
                                                        </motion.div>
                                                    </div>

                                                    {/* Cycling text labels */}
                                                    <div className="relative h-6 overflow-hidden">
                                                        <motion.div
                                                            className="flex flex-col"
                                                            animate={{ y: [0, -24, -24, -48, -48, -72, -72, 0] }}
                                                            transition={{
                                                                duration: 12,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                                times: [0, 0.12, 0.25, 0.37, 0.5, 0.62, 0.87, 1]
                                                            }}
                                                        >
                                                            <p className="text-sm font-bold text-white/90 h-6 flex items-center">Enterprise Suite</p>
                                                            <p className="text-sm font-bold text-white/90 h-6 flex items-center">ERP Suite</p>
                                                            <p className="text-sm font-bold text-white/90 h-6 flex items-center">Analytics Suite</p>
                                                            <p className="text-sm font-bold text-white/90 h-6 flex items-center">Integration Suite</p>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Floating accent dots */}
                                            <motion.div
                                                className="absolute -top-4 -right-4 w-4 h-4 bg-accent rounded-full shadow-lg"
                                                animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2.5, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="absolute -bottom-2 -left-4 w-3 h-3 bg-primary/60 rounded-full"
                                                animate={{ y: [0, -6, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                            />
                                            <motion.div
                                                className="absolute top-1/2 -right-6 w-2 h-2 bg-blue-400 rounded-full"
                                                animate={{ x: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Icon with Unique Animation per Card */}
                                    <motion.div
                                        className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: "rgba(37, 99, 235, 0.2)", // darker blue bg
                                        }}
                                    >
                                        <motion.div
                                            variants={{
                                                hover: {
                                                    rotate: index % 6 === 0 ? 360 : 0,           // 1. Full Spin
                                                    y: index % 6 === 1 ? -5 : 0,                 // 2. Bounce Up
                                                    rotateZ: index % 6 === 2 ? [0, -10, 10, 0] : 0, // 3. Wiggle
                                                    scale: index % 6 === 3 ? 1.2 : 1,            // 4. Pulse
                                                    rotateY: index % 6 === 4 ? 180 : 0,          // 5. Flip
                                                    x: index % 6 === 5 ? [0, -5, 5, 0] : 0,      // 6. Shake
                                                }
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeInOut",
                                                repeat: index % 6 === 1 ? Infinity : 0, // Bounce repeats
                                                repeatType: "reverse"
                                            }}
                                        >
                                            <service.icon className="h-6 w-6 text-primary" />
                                        </motion.div>
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>

                                    {/* Description */}
                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
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
            </main>
            <Footer />
        </>
    );
}
