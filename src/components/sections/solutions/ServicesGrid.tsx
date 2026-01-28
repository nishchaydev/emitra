import { Database, Cog, BarChart3, Puzzle, Headphones, Shield, ChevronRight } from 'lucide-react';

const services = [
    {
        icon: Database,
        title: 'School ERP',
        description: 'Comprehensive management for admissions, academics, and finance structures.',
    },
    {
        icon: Cog,
        title: 'Automation',
        description: 'End-to-end engines for attendance, manual administrative tasks and human errors.',
    },
    {
        icon: BarChart3,
        title: 'Analytics',
        description: 'Real-time dashboards for deep institutional insights and predictive modeling.',
    },
    {
        icon: Puzzle,
        title: 'Integrations',
        description: 'Seamless API connections with enterprise solutions and third-party ecosystems.',
    },
    {
        icon: Headphones,
        title: 'Dedicated Support',
        description: '24/7 expert assistance and managed services for uninterrupted operations.',
    },
    {
        icon: Shield,
        title: 'Cybersecurity',
        description: 'Enterprise-grade threat detection, compliance, and continuous encrypted data protection.',
    },
];

export function ServicesGrid() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                            A complete ecosystem of services.
                        </h2>
                        <p className="text-slate-600">
                            Our suite of specialized services addresses every technical requirement of your institution in tandem with scalability.
                        </p>
                    </div>
                    <a href="#" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        Explore all services <ChevronRight className="h-5 w-5" />
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all group cursor-pointer"
                        >
                            <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
