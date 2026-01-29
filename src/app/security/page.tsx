import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Shield, Lock, Eye, Server, Users, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Security | eMitra Technologies',
    description: 'Learn about eMitra Technologies security practices and how we protect your data.',
};

const securityPractices = [
    {
        icon: Lock,
        title: 'Data Encryption',
        description: 'All data is encrypted at rest and in transit using industry-standard AES-256 encryption and TLS 1.3.',
    },
    {
        icon: Server,
        title: 'Secure Infrastructure',
        description: 'Our systems are hosted on enterprise-grade cloud infrastructure with multiple layers of security.',
    },
    {
        icon: Users,
        title: 'Access Controls',
        description: 'Role-based access control (RBAC) ensures users only access data they are authorized to view.',
    },
    {
        icon: Eye,
        title: '24/7 Monitoring',
        description: 'Continuous monitoring and alerting for potential security threats and anomalies.',
    },
    {
        icon: Shield,
        title: 'Regular Audits',
        description: 'We conduct regular security assessments and vulnerability testing to maintain high standards.',
    },
    {
        icon: FileCheck,
        title: 'Data Backup',
        description: 'Automated daily backups with geographic redundancy to ensure data recovery capabilities.',
    },
];

export default function SecurityPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Security</h1>
                    <p className="text-xl text-slate-600 mb-12">
                        We take the security of your data seriously. Here&apos;s how we protect your information.
                    </p>

                    {/* Security Practices Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {securityPractices.map((practice, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
                            >
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <practice.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{practice.title}</h3>
                                <p className="text-slate-600 text-sm">{practice.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Compliance Roadmap */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Compliance Roadmap</h2>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                            <p className="text-slate-700 mb-4">
                                We are actively working towards industry-standard compliance certifications:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm">→</span>
                                    ISO 27001 certification (In Progress)
                                </li>
                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm">→</span>
                                    SOC 2 Type II audit (Planned)
                                </li>
                                <li className="flex items-center gap-3 text-slate-600">
                                    <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm">→</span>
                                    GDPR compliance documentation (In Progress)
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 mt-4">
                                Contact us for the latest updates on our compliance status.
                            </p>
                        </div>
                    </section>

                    {/* Responsible Disclosure */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Responsible Disclosure</h2>
                        <p className="text-slate-600 mb-4">
                            If you discover a security vulnerability, we encourage you to report it responsibly.
                            Please email us at <a href="mailto:security@emitra.tech" className="text-primary font-medium">security@emitra.tech</a> with:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li>Description of the vulnerability</li>
                            <li>Steps to reproduce the issue</li>
                            <li>Potential impact assessment</li>
                        </ul>
                        <p className="text-slate-600 mt-4">
                            We will acknowledge receipt within 48 hours and work to address the issue promptly.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Security Questions?</h2>
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <p className="text-slate-600 mb-4">
                                For security-related inquiries or to request our security documentation:
                            </p>
                            <p className="text-slate-700 font-medium">Email: <a href="mailto:security@emitra.tech" className="text-primary hover:underline">security@emitra.tech</a></p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
