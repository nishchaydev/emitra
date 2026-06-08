'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, TrendingUp, Globe, Shield, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
    {
        slug: 'prompt-engineering-multi-agent-systems',
        title: 'Prompt Engineering in Multi-Agent Generative AI Systems',
        excerpt: 'A Survey of Techniques, Design Patterns, and Open Challenges. This research represents our foundational approach to building scalable, robust, and secure multi-agent systems.',
        category: 'Research',
        readTime: '3 min read',
        date: 'June 8, 2026',
        author: 'Nishchay Gupta',
        authorRole: 'Co-Founder',
        featured: true,
        icon: TrendingUp,
    }
];

export default function BlogPage() {
    const featuredPost = blogPosts.find(p => p.featured);
    const otherPosts = blogPosts.filter(p => !p.featured);

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="pt-32 pb-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                                eMitra Insights
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight mb-6">
                                Ideas that move <br className="hidden md:block" />
                                institutions forward.
                            </h1>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                                Expert perspectives on digital transformation, institutional technology, and the future of management systems.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Post */}
                {featuredPost && (
                    <section className="pb-16 bg-white">
                        <div className="max-w-7xl mx-auto px-6">
                            <Link href={`/blog/${featuredPost.slug}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-500 hover:scale-[1.01]"
                                >
                                    {/* Decorative */}
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                                    <div className="relative z-10 max-w-3xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-400 text-xs font-bold uppercase tracking-widest border border-indigo-600/20">
                                                Featured
                                            </span>
                                            <span className="text-slate-500 text-sm font-medium">{featuredPost.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3 mb-6 bg-slate-900/50 p-2 pr-4 rounded-full w-fit border border-slate-800 backdrop-blur-sm">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                                {featuredPost.author?.split(' ').map(n => n[0]).join('') || 'A'}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white leading-none flex items-center gap-1.5">
                                                    {featuredPost.author}
                                                    <span title="Published by Co-Founder">🎉</span>
                                                </p>
                                                <p className="text-xs text-slate-400 mt-0.5">{featuredPost.authorRole}</p>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight group-hover:text-indigo-300 transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                                <Clock className="h-4 w-4" />
                                                {featuredPost.readTime}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-indigo-600 font-bold group-hover:gap-3 transition-all">
                                                Read Article <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    </section>
                )}

                {/* Other Posts Grid */}
                {otherPosts.length > 0 && (
                <section className="py-16 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-10">Latest Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherPosts.map((post, index) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`}>
                                    <motion.article
                                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-lg hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 cursor-pointer h-full"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {/* Card Header */}
                                        <div className="p-8 pb-0">
                                            <div className="h-12 w-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 transition-colors">
                                                <post.icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest group-hover:bg-indigo-50 group-hover:text-indigo-600">
                                                    {post.category}
                                                </span>
                                                <span className="text-slate-400 text-xs">{post.date}</span>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="px-8 pb-8 flex flex-col h-[calc(100%-100px)]">
                                            <h4 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
                                                {post.title}
                                            </h4>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    {post.readTime}
                                                </div>
                                                <div className="flex items-center gap-1 text-xs text-indigo-600 font-bold group-hover:gap-2 transition-all">
                                                    Read <ArrowRight className="h-3.5 w-3.5" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                )}

                {/* Newsletter CTA */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                            Stay ahead of the curve.
                        </h2>
                        <p className="text-slate-500 mb-8 max-w-xl mx-auto">
                            Get the latest insights on institutional technology delivered straight to your inbox. No spam, just signal.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-5 py-4 rounded-xl border border-slate-200 text-slate-900 text-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none transition-all"
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Subscribe <ArrowRight className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}


