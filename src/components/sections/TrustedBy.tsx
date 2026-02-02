'use client';

import { motion } from 'framer-motion';

const clients = [
    { name: 'SIA School', description: 'Managing 500+ students' },
    { name: 'Tristar Fitness', description: 'Reduced admin time by 70%' },
    { name: 'Global Institute', description: 'Streamlined admissions' },
    { name: 'City Public School', description: 'Automated fee collection' },
];

export function TrustedBy() {
    return (
        <section className="py-20 border-y border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">
                    Trusted by growing institutions across India
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-50 px-6 py-4 rounded-xl border border-slate-100"
                        >
                            <p className="font-bold text-slate-900 text-lg mb-1">{client.name}</p>
                            <p className="text-xs text-slate-500">{client.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
