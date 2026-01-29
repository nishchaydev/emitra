import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'Terms of Service | eMitra Technologies',
    description: 'Read the terms and conditions for using eMitra Technologies services.',
};

export default function TermsOfServicePage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Terms of Service</h1>
                    <p className="text-slate-500 mb-12">Last updated: January 29, 2025</p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
                            <p className="text-slate-600 mb-4">
                                By accessing or using the eMitra Technologies website and services, you agree to be
                                bound by these Terms of Service. If you disagree with any part of these terms,
                                you may not access the service.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
                            <p className="text-slate-600 mb-4">
                                eMitra Technologies provides enterprise software solutions for institutional management,
                                including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Enterprise Resource Planning (ERP) systems</li>
                                <li>Educational institution management software</li>
                                <li>Data analytics and reporting tools</li>
                                <li>Custom workflow automation solutions</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
                            <p className="text-slate-600 mb-4">
                                When you create an account with us, you must provide accurate, complete, and
                                current information. You are responsible for:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>Maintaining the confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Notifying us immediately of any unauthorized use</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
                            <p className="text-slate-600 mb-4">
                                The service and its original content, features, and functionality are owned by
                                eMitra Technologies and are protected by international copyright, trademark,
                                patent, trade secret, and other intellectual property laws.
                            </p>
                            <p className="text-slate-600">
                                You may not copy, modify, distribute, sell, or lease any part of our services
                                without prior written consent.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Acceptable Use</h2>
                            <p className="text-slate-600 mb-4">You agree not to use the service:</p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                                <li>To violate any international, federal, or state regulations</li>
                                <li>To infringe upon or violate our intellectual property rights</li>
                                <li>To harass, abuse, insult, or threaten others</li>
                                <li>To upload or transmit viruses or malicious code</li>
                                <li>To attempt to gain unauthorized access to our systems</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Service Availability</h2>
                            <p className="text-slate-600 mb-4">
                                We strive to provide reliable service but cannot guarantee uninterrupted access.
                                We reserve the right to modify, suspend, or discontinue the service at any time
                                without notice.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
                            <p className="text-slate-600 mb-4">
                                To the maximum extent permitted by law, eMitra Technologies shall not be liable
                                for any indirect, incidental, special, consequential, or punitive damages,
                                including without limitation, loss of profits, data, use, goodwill, or other
                                intangible losses.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Indemnification</h2>
                            <p className="text-slate-600">
                                You agree to defend, indemnify, and hold harmless eMitra Technologies from and
                                against any claims, liabilities, damages, judgments, awards, losses, costs,
                                expenses, or fees arising out of or relating to your violation of these Terms
                                of Service or your use of the service.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
                            <p className="text-slate-600">
                                These Terms shall be governed by and construed in accordance with the laws of India,
                                without regard to its conflict of law provisions. Any disputes arising under these
                                terms shall be subject to the exclusive jurisdiction of the courts in India.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to Terms</h2>
                            <p className="text-slate-600 mb-4">
                                We reserve the right to modify or replace these Terms at any time. If a revision
                                is material, we will provide at least 30 days notice prior to any new terms taking
                                effect.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                            <p className="text-slate-600 mb-4">
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <p className="text-slate-700 font-medium">eMitra Technologies</p>
                                <p className="text-slate-600">Email: legal@emitra.tech</p>
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
