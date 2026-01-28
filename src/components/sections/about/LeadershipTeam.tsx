import { ChevronRight } from 'lucide-react';

const team = [
    {
        name: 'David Vance',
        role: 'Chief Executive Officer',
        image: '/images/team/ceo.jpg',
    },
    {
        name: 'Elena Rostova',
        role: 'CTO & Co-Founder',
        image: '/images/team/cto.jpg',
    },
    {
        name: 'Marcus Chen',
        role: 'VP of Product',
        image: '/images/team/vp-product.jpg',
    },
    {
        name: 'Sarah Jenkins',
        role: 'Head of Operations',
        image: '/images/team/head-ops.jpg',
    },
];

export function LeadershipTeam() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-display font-bold mb-4">Leadership Team</h2>
                        <p className="text-slate-600">
                            Guided by experts in education technology, systems architecture, and enterprise security.
                        </p>
                    </div>
                    <a href="#" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        Join our team <ChevronRight className="h-5 w-5" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group">
                            {/* Photo placeholder */}
                            <div className="aspect-[3/4] bg-slate-100 rounded-2xl mb-4 overflow-hidden flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="w-20 h-20 mx-auto bg-slate-200 rounded-full mb-3"></div>
                                    <p className="text-xs text-slate-400">Photo</p>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">{member.name}</h3>
                            <p className="text-sm text-accent">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
