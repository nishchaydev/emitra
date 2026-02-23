'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, Shield, ChevronDown, GraduationCap, Dumbbell, Building2, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RippleButton } from '@/components/ui/RippleButton';

const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

const mobileProducts = [
    { href: 'https://school.emitra.dev', label: 'EduMitra', icon: GraduationCap },
    { href: 'https://gym.emitra.dev', label: 'GymMitra', icon: Dumbbell },
    { href: 'https://flat.emitra.dev', label: 'FlatMitra', icon: Building2 },
    { href: '#', label: 'MediMitra (Soon)', icon: Shield, disabled: true },
];

const services = [
    { href: '/web-development', label: 'Web Development', description: 'Modern high-performance web applications.' },
    { href: '/digital-transformation', label: 'Digital Transformation', description: 'Modernize your institution workflows.' },
    { href: '/ai-integration', label: 'AI Integration', description: 'Smart automation and predictive insights.' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <motion.div
                        className="relative flex items-center group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <Image
                            src="https://res.cloudinary.com/dkits80xk/image/upload/v1771839836/ChatGPT_Image_Feb_23_2026_03_13_03_PM_foi1so.png"
                            alt="eMitra Technologies"
                            width={160}
                            height={60}
                            priority
                            className="w-[120px] md:w-[150px] lg:w-[160px] h-auto object-contain transition-all group-hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.3)]"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {/* Products Mega Menu Trigger */}
                    <div className="relative group" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <button className="flex items-center gap-1.5 text-[13px] font-bold text-slate-600 hover:text-blue-600 transition-all py-4 uppercase tracking-wider">
                            Products
                            <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                        </button>

                        {/* Mega Menu Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-4 group-hover:translate-y-2">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2">Institutional ERP</h4>
                                    <a href="https://school.emitra.dev" className="block group/item p-4 hover:bg-blue-50/50 rounded-2xl transition-all">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all shadow-sm">
                                                <GraduationCap className="h-5 w-5" />
                                            </div>
                                            <span className="font-bold text-slate-900 tracking-tight">EduMitra</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 pl-14 font-medium leading-relaxed">Enterprise automation for modern educational institutions.</p>
                                    </a>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2">Lifestyle & Security</h4>
                                    <a href="https://gym.emitra.dev" className="block group/item p-4 hover:bg-emerald-50/50 rounded-2xl transition-all">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all shadow-sm">
                                                <Dumbbell className="h-5 w-5" />
                                            </div>
                                            <span className="font-bold text-slate-900 tracking-tight">GymMitra</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 pl-14 font-medium leading-relaxed">Precision management for elite fitness centers.</p>
                                    </a>
                                    <a href="https://flat.emitra.dev" className="block group/item p-4 hover:bg-indigo-50/50 rounded-2xl transition-all">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all shadow-sm">
                                                <Building2 className="h-5 w-5" />
                                            </div>
                                            <span className="font-bold text-slate-900 tracking-tight">FlatMitra</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 pl-14 font-medium leading-relaxed">Smart society management with native mobile apps.</p>
                                    </a>
                                </div>
                            </div>

                            {/* Custom Solutions Callout */}
                            <div className="mt-8 pt-8 border-t border-slate-100 bg-slate-50/50 -mx-8 -mb-8 p-8 rounded-b-[32px] flex items-center justify-between group/cta">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                                        <Sparkles className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900 text-sm tracking-tight">Custom Software Engineering</h5>
                                        <p className="text-[11px] text-slate-500 font-medium">Bespoke technical solutions for large-scale enterprise needs.</p>
                                    </div>
                                </div>
                                <Link href="/contact" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-all group-hover/cta:translate-x-1">
                                    Contact <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1.5 text-[13px] font-bold text-slate-600 hover:text-blue-600 transition-all py-4 uppercase tracking-wider">
                            Services
                            <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full left-0 w-[300px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-4 group-hover:translate-y-2">
                            {services.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="block p-4 hover:bg-slate-50 rounded-2xl transition-all group/service"
                                >
                                    <div className="font-bold text-slate-900 text-[13px] mb-1 group-hover/service:text-blue-600 transition-colors tracking-tight">
                                        {service.label}
                                    </div>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[13px] font-bold text-slate-600 hover:text-blue-600 transition-all uppercase tracking-wider"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <Link href="/contact">
                        <RippleButton
                            as="div"
                            className="bg-[#0066FF] hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl text-[13px] font-black uppercase tracking-widest transition-all shadow-[0_15px_30px_-10px_rgba(0,102,255,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.5)] active:scale-95 transform duration-200"
                        >
                            Request Demo
                        </RippleButton>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-2xl text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="h-6 w-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="h-6 w-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Navigation - Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white/95 backdrop-blur-xl z-50 overflow-y-auto"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-10">
                            <nav className="space-y-2">
                                {/* Mobile Products Accordion */}
                                <div className="border-b border-slate-100 pb-2">
                                    <button
                                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                        className="w-full flex items-center justify-between py-5 px-4 rounded-2xl text-[13px] font-black uppercase tracking-widest text-slate-900 hover:bg-slate-50 transition-colors"
                                    >
                                        Products
                                        <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-all duration-300", mobileProductsOpen && "rotate-180")} />
                                    </button>
                                    <AnimatePresence>
                                        {mobileProductsOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-slate-50/50 rounded-3xl mx-2 mb-4"
                                            >
                                                <div className="p-4 space-y-2">
                                                    {mobileProducts.map((product) => (
                                                        product.disabled ? (
                                                            <div key={product.label} className="flex items-center gap-4 py-4 px-4 text-slate-400 border-b border-white/50 last:border-0 opacity-60">
                                                                <product.icon className="h-5 w-5" />
                                                                <span className="text-base font-bold tracking-tight">{product.label}</span>
                                                            </div>
                                                        ) : (
                                                            <a
                                                                key={product.label}
                                                                href={product.href}
                                                                className="flex items-center gap-4 py-4 px-4 rounded-2xl text-base font-bold text-slate-700 hover:bg-white hover:text-blue-600 transition-all border-b border-white/50 last:border-0 hover:shadow-sm"
                                                            >
                                                                <product.icon className="h-5 w-5" />
                                                                <span className="tracking-tight">{product.label}</span>
                                                            </a>
                                                        )
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Mobile Services Accordion */}
                                <div className="border-b border-slate-100 pb-2">
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className="w-full flex items-center justify-between py-5 px-4 rounded-2xl text-[13px] font-black uppercase tracking-widest text-slate-900 hover:bg-slate-50 transition-colors"
                                    >
                                        Services
                                        <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-all duration-300", mobileServicesOpen && "rotate-180")} />
                                    </button>
                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-slate-50/50 rounded-3xl mx-2 mb-4"
                                            >
                                                <div className="p-4 space-y-2">
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.href}
                                                            href={service.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="flex flex-col py-4 px-5 rounded-2xl hover:bg-white transition-all group border-b border-white/50 last:border-0 hover:shadow-sm"
                                                        >
                                                            <span className="text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors tracking-tight">{service.label}</span>
                                                            <span className="text-[11px] text-slate-500 font-medium">{service.description}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between py-5 px-4 rounded-2xl text-[13px] font-black uppercase tracking-widest text-slate-900 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                                        >
                                            {link.label}
                                            <ChevronRight className="h-4 w-4 text-slate-300" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                className="mt-12 space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-[#0066FF] hover:bg-blue-700 text-white px-8 py-5 rounded-2xl text-[15px] font-black uppercase tracking-widest transition-all shadow-[0_20px_40px_-10px_rgba(0,102,255,0.3)]"
                                >
                                    Request a Demo
                                </Link>
                                <div className="text-center space-y-2">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Direct Support</p>
                                    <div className="flex flex-col gap-2">
                                        <a href="tel:+918602175892" className="text-slate-900 font-bold text-lg tracking-tight hover:text-blue-600 transition-colors">+91 86021 75892</a>
                                        <a href="tel:+916261854014" className="text-slate-900 font-bold text-lg tracking-tight hover:text-blue-600 transition-colors">+91 62618 54014</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
