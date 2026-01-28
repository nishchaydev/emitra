import { Shield, CheckCircle, Clock, Award, Lock, Server } from 'lucide-react';

const certifications = [
    { icon: Shield, label: 'GDPR Compliant' },
    { icon: CheckCircle, label: 'SOC 2 Type II' },
    { icon: Award, label: 'ISO 27001' },
    { icon: Lock, label: 'End-to-End Encrypted' },
    { icon: Clock, label: '99.99% Uptime' },
    { icon: Server, label: 'FERPA Ready' },
];

export function SecurityCore() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                            Enterprise Security
                        </div>
                        <h2 className="text-4xl font-display font-bold">
                            Security at our Core
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We understand the value of the data you hold. That&apos;s why eMitra is built with the robustness of institutional architecture, rigorous compliance, and 24/7 threat monitoring.
                        </p>
                        <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all">
                            View Security Whitepaper
                        </button>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow"
                            >
                                <cert.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                                <p className="text-xs font-medium text-slate-600">{cert.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
