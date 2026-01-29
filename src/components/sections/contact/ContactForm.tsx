'use client';

import { useActionState, useEffect, useState } from 'react'; // Updated import for Next.js 15+ (using useActionState if available or useFormState)
// Note: In Next.js 15 (React 19), useFormState is deprecated in favor of useActionState. 
// Since package.json says "next": "16.1.6" (which implies highly recent/canary or maybe user meant 15), 
// and "react": "19.2.3", we should use useActionState from 'react'.

import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { sendEmail } from '@/app/actions';

const initialState = {
    success: false,
    error: '',
}

export function ContactForm() {
    // @ts-ignore - Types for useActionState might not be fully inferred in some setups yet
    const [state, formAction, isPending] = useActionState(sendEmail, initialState);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (state?.success) {
            setIsSubmitted(true);
        }
    }, [state?.success]);

    if (isSubmitted) {
        return (
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-2xl mx-auto px-6">
                    <motion.div
                        className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200 text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div className="h-16 w-16 bg-gradient-to-br from-accent to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Message Received!</h2>
                        <p className="text-slate-600 mb-6">
                            Thank you for reaching out. Our team will get back to you within 24 hours.
                        </p>
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                // Resetting state technically requires a key change or router refresh, 
                                // but for valid UX simply showing the form again is fine. 
                                // Ideally we would reset the action state.
                                window.location.reload();
                            }}
                            className="text-primary font-semibold hover:underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-2xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Request a Demo</h2>
                    <p className="text-slate-600">
                        Fill out the form below and a solutions expert will reach out within 24 hours.
                    </p>
                </motion.div>

                <motion.form
                    action={formAction}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {state?.error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                            {state.error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                Email *
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@institution.edu"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    {/* Institution Name */}
                    <div className="mb-6">
                        <label htmlFor="institution" className="block text-sm font-semibold text-slate-700 mb-2">
                            Institution / Organization Name *
                        </label>
                        <input
                            id="institution"
                            name="institution"
                            type="text"
                            placeholder="Your institution name"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Help Type */}
                    <div className="mb-6">
                        <label htmlFor="helpType" className="block text-sm font-semibold text-slate-700 mb-2">
                            How can we help? *
                        </label>
                        <select
                            id="helpType"
                            name="helpType"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="demo">Request a Demo</option>
                            <option value="pricing">Pricing Information</option>
                            <option value="custom_erp">Custom ERP Development</option>
                            <option value="partnership">Partnership Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                            Message (Optional)
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your requirements..."
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-gradient-to-r from-primary to-blue-700 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: isPending ? 1 : 1.01 }}
                        whileTap={{ scale: isPending ? 1 : 0.99 }}
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Submit Request <Send className="h-5 w-5" />
                            </>
                        )}
                    </motion.button>

                    <p className="text-center text-xs text-slate-500 mt-4">
                        By submitting, you agree to our Privacy Policy and Terms of Service.
                    </p>
                </motion.form>
            </div>
        </section>
    );
}
