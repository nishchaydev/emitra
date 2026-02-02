'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
        <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Newsletter Section */}
                <motion.div
                    className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 opacity-10 circuit-bg pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                                Stay ahead of the curve
                            </h3>
                            <p className="text-blue-100">
                                Get the latest insights on institutional technology delivered to your inbox.
                            </p>
                        </div>
                        <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-3">
                            {subscribed ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex items-center gap-2 text-white font-medium"
                                >
                                    <span className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white">✓</span>
                                    Thanks for subscribing!
                                </motion.div>
                            ) : (
                                <>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="flex-1 md:w-64 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2 whitespace-nowrap"
                                    >
                                        Subscribe <ArrowRight className="h-4 w-4" />
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </motion.div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="relative h-36 w-[30rem]">
                                <Image
                                    src="https://res.cloudinary.com/dkits80xk/image/upload/v1769612105/0ed66ac0-9d39-4eb0-a4f9-b82da198b557.png"
                                    alt="eMitra Technologies"
                                    fill
                                    className="object-contain object-left"
                                    unoptimized
                                />
                            </div>
                        </Link>
                        <p className="text-slate-500 leading-relaxed max-w-sm">
                            Where technology meets trust. Providing enterprise-grade solutions for institutions worldwide.
                        </p>
                        <div className="flex gap-3">
                            {/* Social links hidden until profiles are live
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>
                             */}
                            <a href="mailto:contact@emitra.tech" className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Products</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="/schoolmitra" className="hover:text-primary transition-colors">SchoolMitra</Link></li>
                            <li><Link href="/gymmitra" className="hover:text-primary transition-colors">GymMitra</Link></li>
                            <li><Link href="/flatmitra" className="hover:text-primary transition-colors">FlatMitra</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Custom Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Sales</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>© 2025 eMitra Technologies. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
                        <Link href="/security" className="hover:text-slate-600 transition-colors">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
