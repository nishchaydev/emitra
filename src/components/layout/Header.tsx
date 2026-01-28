'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-14 w-14">
                        <Image
                            src="https://res.cloudinary.com/dkits80xk/image/upload/v1769612138/e21fcb20-e06e-49e6-bc0b-b14e4557c36b.png"
                            alt="eMitra"
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-display font-bold leading-none tracking-tight">
                            <span className="text-warning">e</span>
                            <span className="text-primary">Mitra</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500">
                            Technologies
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/solutions" className="text-sm font-medium hover:text-primary transition-colors">
                        Solutions
                    </Link>
                    <a href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
                        Services
                    </a>
                    <a href="/#education" className="text-sm font-medium hover:text-primary transition-colors">
                        Education
                    </a>
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="bg-primary hover:bg-blue-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all">
                        Request a Demo
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    'overflow-hidden transition-all duration-300 md:hidden',
                    isOpen ? 'max-h-80' : 'max-h-0'
                )}
            >
                <div className="border-t border-slate-200 bg-white px-6 py-4">
                    <Link href="/solutions" onClick={() => setIsOpen(false)} className="block py-3 text-sm font-medium hover:text-primary">
                        Solutions
                    </Link>
                    <a href="/#services" onClick={() => setIsOpen(false)} className="block py-3 text-sm font-medium hover:text-primary">
                        Services
                    </a>
                    <a href="/#education" onClick={() => setIsOpen(false)} className="block py-3 text-sm font-medium hover:text-primary">
                        Education
                    </a>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="block py-3 text-sm font-medium hover:text-primary">
                        About
                    </Link>
                    <div className="pt-4">
                        <Link href="/contact" className="block w-full text-center bg-primary hover:bg-blue-800 text-white px-5 py-3 rounded-full text-sm font-semibold transition-all">
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
