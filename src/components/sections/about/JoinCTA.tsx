export function JoinCTA() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 circuit-bg pointer-events-none"></div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl lg:text-5xl font-display font-bold">
                            Join the future of education.
                        </h2>
                        <p className="text-blue-100 text-lg">
                            Discover why 500+ top-tier institutions trust eMitra for their critical operations.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <button className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 transition-all">
                                Talk to Us
                            </button>
                            <button className="w-full sm:w-auto bg-white/10 backdrop-blur border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                                Download Press Kit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
