export function CTA() {
    return (
        <section className="py-24 text-center">
            <div className="max-w-4xl mx-auto px-6 space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                    Let&apos;s build something smart together.
                </h2>
                <p className="text-xl text-slate-600">
                    Ready to transform your institutional workflows? Our team is here to help you architect
                    the future.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all">
                        Talk to Us
                    </button>
                    <button className="w-full sm:w-auto bg-slate-100 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-200 transition-all">
                        Email Support
                    </button>
                </div>
            </div>
        </section>
    );
}
