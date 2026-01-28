import { Globe, Headphones, Newspaper } from 'lucide-react';

const contactTypes = [
    {
        icon: Globe,
        title: 'Global Sales',
        description: 'For enterprise licensing and strategic partnerships.',
        email: 'sales@emitra.tech',
    },
    {
        icon: Headphones,
        title: 'Technical Support',
        description: 'Existing clients seeking technical assistance.',
        email: 'support@emitra.tech',
    },
    {
        icon: Newspaper,
        title: 'Media Inquiries',
        description: 'Press resources, interviews, and brand assets.',
        email: 'press@emitra.tech',
    },
];

export function ContactTypes() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactTypes.map((type, index) => (
                        <div key={index} className="text-center">
                            <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 mx-auto mb-6">
                                <type.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                            <p className="text-slate-600 text-sm mb-4">{type.description}</p>
                            <a
                                href={`mailto:${type.email}`}
                                className="text-primary font-semibold hover:underline"
                            >
                                {type.email}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
