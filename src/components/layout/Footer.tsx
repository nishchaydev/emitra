'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail, Linkedin, Twitter, Instagram, ArrowRight, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HeroVideo } from '@/components/ui/HeroVideo';

export function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="bg-slate-950 pt-24 pb-12 relative overflow-hidden text-white" itemScope itemType="https://schema.org/Organization">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <HeroVideo className="w-full h-full object-cover opacity-30 mix-blend-screen rotate-90 scale-[1.8]" />
                {/* Gradient Masks */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
            </div>

            {/* Junction-style Grid Overlay */}
            <div className="absolute inset-0 bg-dot-grid opacity-[0.2] pointer-events-none z-[1]" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-8 mb-16 md:mb-20">
                    {/* Brand & Address */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-display font-black tracking-tighter text-white uppercase" itemProp="name">
                                eMitra<span className="text-indigo-400">.</span>
                            </span>
                        </div>
                        <div className="text-slate-400 text-sm font-medium leading-relaxed" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <span itemProp="addressLocality">Indore</span>, <span itemProp="addressRegion">Madhya Pradesh</span> <span itemProp="postalCode">452001</span><br />
                            <span itemProp="addressCountry">India</span> • Product Studio & Custom Dev Firm
                        </div>
                        <p className="text-slate-500 text-xs font-medium">
                            <span itemProp="description">eMitra Technologies (eMitra Tech) Software product studio, SaaS company, and student innovation hub in Indore.</span>
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/emitratechnologies/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" itemProp="sameAs">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="mailto:hello@emitra.dev" className="text-slate-400 hover:text-white transition-colors" itemProp="email">
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns - 2 columns side-by-side on mobile */}
                    <div className="grid grid-cols-2 gap-8 md:col-span-2">
                        <div>
                            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8 opacity-50">Studio</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-400">
                                <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/launchpad" className="hover:text-white transition-colors">Launchpad</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8 opacity-50">Company</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-400">
                                <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Work With Us</Link></li>
                                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Legal</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter (Compact) */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] opacity-50">Newsletter</h4>
                        <form onSubmit={handleSubscribe} className="relative group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all font-medium"
                                required
                            />
                            <button type="submit" className="absolute right-2 top-2 p-1.5 text-slate-600 group-hover:text-white transition-colors">
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 pb-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <p className="text-xs font-bold text-slate-500">© {new Date().getFullYear()} eMitra Technologies</p>
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                            <span className="text-[10px]">🇮🇳</span>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em]">Engineered in Indore, India</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                        <Globe className="h-3.5 w-3.5" />
                        Registered Proprietorship
                    </div>
                </div>

                {/* Massive Brand Wordmark (Junction style) */}
                <div className="pb-8 pt-4 md:pb-12 overflow-hidden relative flex items-center justify-center pointer-events-none">
                    <motion.h2 
                        className="text-[clamp(4rem,16vw,16rem)] md:text-[clamp(6rem,14vw,24rem)] font-display font-black tracking-tighter text-white/10 md:text-white/5 leading-none text-center select-none"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        eMitra<span className="text-indigo-400/30 md:text-indigo-400/20">.</span>
                    </motion.h2>
                </div>
            </div>

            {/* Junction-style Background Glow */}
            <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[120%] h-96 bg-gradient-to-r from-indigo-500/10 via-indigo-500/20 to-indigo-500/10 blur-[120px] pointer-events-none opacity-30" />
        </footer>
    );
}

