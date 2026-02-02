'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, Shield, ChevronDown, GraduationCap, Dumbbell, Building2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RippleButton } from '@/components/ui/RippleButton';

const navLinks = [
    { href: '/schoolmitra', label: 'SchoolMitra' },
    { href: '/gymmitra', label: 'GymMitra' },
    { href: '/flatmitra', label: 'FlatMitra' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <motion.div
                        className="relative flex items-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <Image
                            src="https://res.cloudinary.com/dkits80xk/image/upload/f_auto,q_auto/v1769698397/0b4d78b6-32e7-43b3-b12b-5bbf0746a22b.png"
                            alt="eMitra Technologies"
                            width={200}
                            height={45}
                            priority
                            className="w-[140px] md:w-[180px] lg:w-[200px] h-auto object-contain"
                            unoptimized={false}
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {/* Products Mega Menu Trigger */}
                    <div className="relative group" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors py-4">
                            Products
                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>

                        {/* Mega Menu Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Education</h4>
                                    <Link href="/schoolmitra" className="block group/item p-3 hover:bg-slate-50 rounded-xl transition-colors">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                <GraduationCap className="h-4 w-4" />
                                            </div>
                                            <span className="font-bold text-slate-900">SchoolMitra</span>
                                        </div>
                                        <p className="text-xs text-slate-500 pl-11">Complete ERP for schools & colleges.</p>
                                    </Link>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Fitness & Lifestyle</h4>
                                    <Link href="/gymmitra" className="block group/item p-3 hover:bg-slate-50 rounded-xl transition-colors">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                                                <Dumbbell className="h-4 w-4" />
                                            </div>
                                            <span className="font-bold text-slate-900">GymMitra</span>
                                        </div>
                                        <p className="text-xs text-slate-500 pl-11">Management software for modern gyms.</p>
                                    </Link>
                                    <Link href="/flatmitra" className="block group/item p-3 hover:bg-slate-50 rounded-xl transition-colors">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                                                <Building2 className="h-4 w-4" />
                                            </div>
                                            <span className="font-bold text-slate-900">FlatMitra</span>
                                        </div>
                                        <p className="text-xs text-slate-500 pl-11">Smart society & apartment management.</p>
                                    </Link>
                                </div>
                            </div>

                            {/* Callout */}
                            <div className="mt-6 pt-6 border-t border-slate-100 bg-slate-50/50 -mx-6 -mb-6 p-6 rounded-b-2xl flex items-center justify-between">
                                <div>
                                    <h5 className="font-bold text-slate-900 text-sm">Need a custom solution?</h5>
                                    <p className="text-xs text-slate-500">We build tailored software for large enterprises.</p>
                                </div>
                                <Link href="/contact" className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                    Contact Sales <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Pricing</Link>
                    <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Company</Link>
                    <Link href="/contact">
                        <RippleButton
                            as="div"
                            className="bg-primary hover:bg-blue-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95 transform duration-100"
                        >
                            Request a Demo
                        </RippleButton>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100"
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white/95 backdrop-blur-lg"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-8">
                            <nav className="space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium text-slate-900 hover:bg-slate-50 transition-colors"
                                        >
                                            {link.label}
                                            <ChevronRight className="h-5 w-5 text-slate-400" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                className="mt-8 pt-8 border-t border-slate-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-primary hover:bg-blue-800 text-white px-6 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-primary/20"
                                >
                                    Request a Demo
                                </Link>
                                <p className="mt-6 text-center text-sm text-slate-500">
                                    Or call us at <a href="tel:+918602175892" className="text-primary font-medium">+91 86021 75892</a> / <a href="tel:+916261854014" className="text-primary font-medium">+91 62618 54014</a>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
