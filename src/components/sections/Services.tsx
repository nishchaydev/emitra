import {
    GraduationCap,
    Zap,
    BarChart3,
    Puzzle,
    Headphones,
    Shield,
    ChevronRight,
} from 'lucide-react';

const services = [
    {
        icon: GraduationCap,
        title: 'School ERP',
        description: 'Comprehensive management for admissions, academics, and finances.',
    },
    {
        icon: Zap,
        title: 'Automation',
        description: 'Custom workflow engines to eliminate manual administrative work.',
    },
    {
        icon: BarChart3,
        title: 'Analytics',
        description: 'Advanced data visualization for deep institutional insights.',
    },
    {
        icon: Puzzle,
        title: 'Integrations',
        description: 'Seamless API connections with your existing tech stack.',
    },
    {
        icon: Headphones,
        title: 'Dedicated Support',
        description: '24/7 technical assistance and managed maintenance.',
    },
    {
        icon: Shield,
        title: 'Cybersecurity',
        description: 'Enterprise-grade protection for sensitive institutional data.',
    },
];

export function Services() {
    return (
        <section className="py-24 bg-slate-50" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-display font-bold mb-4">
                            A complete ecosystem of services.
                        </h2>
                        <p className="text-slate-600">
                            From individual modules to full-scale digital transformation, we have the tools to
                            help you succeed.
                        </p>
                    </div>
                    <a href="#" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        View all services <ChevronRight className="h-5 w-5" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all"
                        >
                            <service.icon className="text-primary mb-4 h-8 w-8 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
