import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        quote: "This space is reserved for your client's feedback. Real stories build the most trust.",
        author: "Client Name",
        role: "Designation",
        org: "Institution Name"
    },
    {
        quote: "Another success story will go here. Highlight your specific impact on their operations.",
        author: "Client Name",
        role: "Designation",
        org: "Institution Name"
    },
    {
        quote: "Use this space to showcase a different use case or benefit of your platform.",
        author: "Client Name",
        role: "Designation",
        org: "Institution Name"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Trusted by visionaries.
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We let our partners speak for us. Here is what leading administrators have to say about the eMitra difference.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                            <Quote className="h-8 w-8 text-primary/20 mb-6" />
                            <p className="text-slate-600 italic mb-8 flex-grow">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold overflow-hidden">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-slate-900">{testimonial.author}</p>
                                    <p className="text-xs text-slate-500">{testimonial.role}, {testimonial.org}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
