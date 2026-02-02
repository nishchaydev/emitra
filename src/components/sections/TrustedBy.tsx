'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
    {
        name: 'SIA School',
        logo: 'https://res.cloudinary.com/dkits80xk/image/upload/v1768840468/bv5hyatjmoo7ajtt06pn.webp'
    },
    {
        name: 'Tristar Fitness',
        logo: 'https://res.cloudinary.com/dkits80xk/image/upload/v1769611874/2a806af6-8b18-4252-85d1-69405d860797.png'
    },
    {
        name: 'MP Punjab Harvesters',
        logo: 'https://res.cloudinary.com/dkits80xk/image/upload/v1770029506/c10df567-ebff-43f4-a4b0-4d2a8447783f.png'
    },
    {
        name: 'Global Institute'
    },
];

export function TrustedBy() {
    // Duplicate list for seamless infinite scroll
    const marqueeClients = [...clients, ...clients, ...clients];

    return (
        <section className="py-12 border-y border-slate-100 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Trusted by forward-thinking institutions
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

                <motion.div
                    className="flex items-center gap-16 py-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {marqueeClients.map((client, index) => (
                        <div
                            key={index}
                            className="relative h-12 w-40 flex-shrink-0 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer"
                        >
                            {client.logo ? (
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            ) : (
                                <span className="flex items-center justify-center h-full w-full font-bold text-slate-500 hover:text-slate-900 text-lg">
                                    {client.name}
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
