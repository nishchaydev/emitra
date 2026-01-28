import { Server, ShieldCheck, Clock, Headphones } from 'lucide-react';

const stats = [
    {
        icon: Server,
        value: '99.9%',
        label: 'Uptime Guarantee',
        description: 'Reliable infrastructure aimed at zero downtime.',
    },
    {
        icon: Headphones,
        value: '24/7',
        label: 'Dedicated Support',
        description: 'Round-the-clock technical assistance for critical issues.',
    },
    {
        icon: ShieldCheck,
        value: 'ISO',
        label: 'Standards Compliant',
        description: 'Built following international security best practices.',
    },
    {
        icon: Clock,
        value: 'Real-time',
        label: 'Data Sync',
        description: 'Instant updates across all your institutional nodes.',
    },
];

export function Statistics() {
    return (
        <section className="py-20 border-y border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3 group">
                            <div className="h-12 w-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-4xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors">
                                {stat.value}
                            </h3>
                            <p className="font-bold text-slate-700">{stat.label}</p>
                            <p className="text-sm text-slate-500 max-w-[200px]">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
