'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
    {
        name: 'SIA School',
        logo: 'https://res.cloudinary.com/dkits80xk/image/upload/v1768840468/bv5hyatjmoo7ajtt06pn.webp',
        context: 'Managing 500+ students',
    },
    {
        name: 'Tristar Fitness',
        logo: 'https://res.cloudinary.com/dkits80xk/image/upload/v1769611874/2a806af6-8b18-4252-85d1-69405d860797.png',
        context: 'Reduced admin time by 70%',
    },
];

export function Partners() {
    // Duplicate for seamless infinite scroll
    const duplicatedClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

    return (
        <section className="py-20 border-y border-slate-100 overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                        Our Clients
                    </span>
                    <p className="text-lg font-medium text-slate-600">
                        Trusted by leading institutions across India
                    </p>
                </motion.div>
            </div>

            {/* Scrolling container */}
            <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling track */}
                <div className="flex animate-scroll hover:pause-animation">
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-16 relative h-24 w-56 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
                        >
                            <div className="group/tooltip relative h-full w-full">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                                {client.context && (
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                                        {client.context}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* More clients coming soon badge */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                    More partnerships coming soon
                </span>
            </motion.div>
        </section>
    );
}
