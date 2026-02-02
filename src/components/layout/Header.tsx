'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, Shield } from 'lucide-react';
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
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
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
                                    Or call us at <a href="tel:+918602175892" className="text-primary font-medium">+91 86021 75892</a>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
