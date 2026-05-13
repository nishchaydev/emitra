'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3" : "bg-transparent py-5"
        )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <span className="text-xl font-black tracking-tighter text-brand-navy group-hover:text-brand-ion transition-colors">
                        eMitra<span className="text-brand-ion">.</span>
                    </span>
                    <span className="hidden md:inline ml-2 text-xs font-bold uppercase tracking-widest text-slate-400">Technologies</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-[13px] font-bold text-slate-600 hover:text-brand-ion transition-colors uppercase tracking-wider"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center">
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-ion text-white px-6 py-2.5 rounded-full text-[13px] font-black uppercase tracking-widest transition-all shadow-lg shadow-brand-ion/20 hover:shadow-brand-ion/40"
                        >
                            Work With Us
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-slate-600"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-slate-900"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-brand-ion text-white py-4 rounded-2xl font-black uppercase tracking-widest">
                                    Work With Us
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
