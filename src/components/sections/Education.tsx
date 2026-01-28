import Image from 'next/image';

export function Education() {
    return (
        <section className="py-24 overflow-hidden" id="education">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 circuit-bg pointer-events-none"></div>

                    {/* Content */}
                    <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
                            Built for education. <br />
                            Engineered for scale.
                        </h2>
                        <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Our Education Variant combines pedagogical needs with technological precision. From
                            K-12 to Higher Ed, we bridge the gap between teaching and management.
                        </p>
                        <div className="pt-4">
                            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
                                Explore Education Variant
                            </button>
                        </div>
                    </div>

                    {/* Book Image - With white background card */}
                    <div className="flex-1 relative z-10 flex items-center justify-center">
                        <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                                <Image
                                    src="https://res.cloudinary.com/dkits80xk/image/upload/v1769612213/5b4b7f9b-d51e-4287-9206-a70d69f51a94.png"
                                    alt="Education"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
