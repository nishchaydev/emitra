import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'Privacy Policy | eMitra Technologies',
    description: 'Learn how eMitra Technologies collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Privacy Policy</h1>
                    <p className="text-slate-500 mb-12">Last updated: January 29, 2025</p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                            <p className="text-slate-600 mb-4">
                                eMitra Technologies (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                when you visit our website or use our services.
                            </p>
                            <p className="text-slate-600">
                                Please read this privacy policy carefully. If you do not agree with the terms of this
                                privacy policy, please do not access the site.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                            <h3 className="text-lg font-semibold text-slate-800 mb-3">Personal Data</h3>
                            <p className="text-slate-600 mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                                <li>Fill out a contact form</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Request a demo or consultation</li>
                                <li>Register for an account</li>
                            </ul>
                            <p className="text-slate-600">
                                This information may include your name, email address, phone number, and organization name.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                            <p className="text-slate-600 mb-4">We use the information we collect to:</p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Provide, operate, and maintain our services</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Send you marketing and promotional communications (with your consent)</li>
                                <li>Improve and personalize your experience</li>
                                <li>Analyze usage patterns to enhance our services</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Protection</h2>
                            <p className="text-slate-600 mb-4">
                                We implement appropriate technical and organizational security measures to protect
                                your personal information against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                            <p className="text-slate-600">
                                These measures include encryption, secure servers, and regular security assessments.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Sharing</h2>
                            <p className="text-slate-600 mb-4">
                                We do not sell, trade, or rent your personal information to third parties.
                                We may share your information only in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>With service providers who assist in our operations</li>
                                <li>To comply with legal obligations</li>
                                <li>To protect our rights and safety</li>
                                <li>With your explicit consent</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
                            <p className="text-slate-600 mb-4">You have the right to:</p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Access the personal data we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Lodge a complaint with a supervisory authority</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies</h2>
                            <p className="text-slate-600">
                                We use cookies and similar tracking technologies to enhance your browsing experience.
                                You can control cookie preferences through your browser settings.
                                For more information, please see our Cookie Policy.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
                            <p className="text-slate-600 mb-4">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <p className="text-slate-700 font-medium">eMitra Technologies</p>
                                <p className="text-slate-600">Email: privacy@emitra.tech</p>
                                <p className="text-slate-600">Address: India</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
