'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        institution: '',
        helpType: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you! We will reach out within 24 hours.');
    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-2xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold mb-4">Request a Demo</h2>
                    <p className="text-slate-600">
                        Fill out the form below and an expert will reach out within 24 hours.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Institutional Email
                            </label>
                            <input
                                type="email"
                                placeholder="john@university.edu"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    {/* Institution Name */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Institution Name
                        </label>
                        <input
                            type="text"
                            placeholder="Global Institute of Tech"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            value={formData.institution}
                            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                            required
                        />
                    </div>

                    {/* Help Type */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            How can we help?
                        </label>
                        <select
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white"
                            value={formData.helpType}
                            onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="demo">Request a Demo</option>
                            <option value="pricing">Pricing Information</option>
                            <option value="partnership">Partnership Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
                    >
                        Submit Request <Send className="h-5 w-5" />
                    </button>
                </form>
            </div>
        </section>
    );
}
