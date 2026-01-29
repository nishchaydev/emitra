'use client';

import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
    {
        quote: "eMitra transformed how we manage our school operations. What used to take hours now happens in minutes. The real-time analytics have been game-changing for our decision making.",
        author: "Dr. Anjali Sharma",
        role: "Principal",
        org: "SIA International Academy",
        rating: 5,
    },
    {
        quote: "The automation features alone saved us 70% of our administrative time. Our staff can now focus on what matters most - student success.",
        author: "Rahul Verma",
        role: "Operations Head",
        org: "Tristar Group",
        rating: 5,
    },
    {
        quote: "Enterprise-grade security with the simplicity of consumer software. eMitra truly understands the needs of modern educational institutions.",
        author: "Priya Patel",
        role: "IT Director",
        org: "Delhi Public School Network",
        rating: 5,
    },
    {
        quote: "Implementation was seamless. The eMitra team guided us through every step, and we were up and running in just 4 weeks.",
        author: "Vikram Singh",
        role: "Administrator",
        org: "Cambridge School System",
        rating: 5,
    },
    {
        quote: "The ROI was visible within the first quarter. We've reduced paperwork by 90% and improved parent communication dramatically.",
        author: "Neha Gupta",
        role: "Director of Operations",
        org: "Ryan International Group",
        rating: 5,
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance carousel
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                        Success Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">
                        Trusted by visionaries.
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        We let our partners speak for us. Here's what leading administrators have to say about the eMitra difference.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 h-12 w-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/20 transition-all"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 h-12 w-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/20 transition-all"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Testimonial Card */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-slate-100"
                            >
                                <Quote className="h-12 w-12 text-primary/10 mb-6" />

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold text-xl">
                                        {testimonials[currentIndex].author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-slate-900">{testimonials[currentIndex].author}</p>
                                        <p className="text-slate-500">{testimonials[currentIndex].role}, {testimonials[currentIndex].org}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                        ? 'w-8 bg-primary'
                                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
