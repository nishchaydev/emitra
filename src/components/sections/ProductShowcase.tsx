import Image from 'next/image';

export function ProductShowcase() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Complete visibility over <br />
                        <span className="text-primary">your entire network.</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        From student attendance to financial audits, track every metric in real-time with
                        our unified dashboard.
                    </p>
                </div>

                <div className="relative mx-auto mt-12 max-w-5xl">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 animate-pulse"></div>

                    {/* Image Container */}
                    <div className="relative rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-[16/9]">
                        <Image
                            src="https://res.cloudinary.com/dkits80xk/image/upload/v1769620712/1f1ba133-f5ff-4e52-ac77-1d8874601734.png"
                            alt="eMitra Dashboard Interface"
                            fill
                            className="object-cover object-top"
                            unoptimized
                        />

                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
                        <div className="h-24 w-24 rounded-full bg-blue-500/10 blur-3xl"></div>
                    </div>
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block">
                        <div className="h-24 w-24 rounded-full bg-teal-500/10 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
