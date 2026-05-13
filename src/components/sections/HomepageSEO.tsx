/**
 * HomepageSEO — Server-rendered, crawlable content section
 * 
 * This component adds 600+ words of keyword-rich, indexable text to the homepage.
 * It's critical for:
 * - Fixing thin content (Google needs 500+ words on homepage)
 * - AI citation readiness (self-contained 134-167 word answer blocks)
 * - Disambiguation from the government eMitra portal
 * - Ranking for "emitra", "emitra tech", "emitra indore"
 */

import Link from 'next/link';

export function HomepageSEO() {
    return (
        <section className="py-20 bg-white" id="about-emitra">
            <div className="max-w-7xl mx-auto px-6">
                {/* What is eMitra? — Critical for AI citation */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-display font-black tracking-tighter text-slate-900 mb-8">
                        What is eMitra Technologies?
                    </h2>
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p className="text-slate-600 leading-relaxed mb-6">
                            <strong>eMitra Technologies</strong> (commonly known as <strong>eMitra Tech</strong>) is a software product studio, 
                            custom development firm, and student innovation community headquartered in <strong>Indore, Madhya Pradesh, India</strong>. 
                            Founded in 2024, eMitra builds enterprise-grade SaaS platforms that help Indian SMBs, gyms, housing societies, 
                            schools, and institutions digitize their operations with modern, reliable software.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Unlike the Rajasthan government&apos;s eMitra portal (emitra.rajasthan.gov.in) which provides citizen services 
                            like Aadhaar enrollment and bill payments, <strong>eMitra Technologies is a private software company</strong> that 
                            creates products like <Link href="/gymmitra" className="text-indigo-600 font-semibold hover:text-indigo-700">GymMitra</Link> for 
                            fitness centers, <Link href="/flatmitra" className="text-indigo-600 font-semibold hover:text-indigo-700">FlatMitra</Link> for 
                            housing societies, and SchoolMitra for educational institutions.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Based in <strong>Indore</strong> — one of India&apos;s fastest-growing tech cities — eMitra Tech operates at the intersection 
                            of product development, custom engineering, and community building. The company also runs a student innovation 
                            hub where young engineers build real products, win hackathons, and launch their careers in technology.
                        </p>
                    </div>
                </div>

                {/* Key Facts — structured for AI extraction */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                        <h3 className="text-lg font-black text-slate-900 mb-3">🏢 Product Studio</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            eMitra builds and launches its own SaaS products for Indian markets — from gym management 
                            to society billing to school ERPs. Each product is designed, engineered, and supported in-house 
                            from our Indore office.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                        <h3 className="text-lg font-black text-slate-900 mb-3">⚡ Custom Development</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            eMitra Technologies also works with clients who need custom software solutions — web applications, 
                            mobile apps, enterprise dashboards, and API integrations built with Next.js, React, Flutter, 
                            Node.js, and PostgreSQL.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                        <h3 className="text-lg font-black text-slate-900 mb-3">🎓 Student Community</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            eMitra runs a student innovation hub where aspiring engineers from Indore&apos;s colleges 
                            gain real-world product development experience. Members participate in hackathons, build 
                            projects, and transition into professional engineering roles.
                        </p>
                    </div>
                </div>

                {/* FAQ Section — Critical for AI Overviews and featured snippets */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-display font-black tracking-tighter text-slate-900 mb-10">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        <details className="group p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors" open>
                            <summary className="text-base font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                                What is eMitra Technologies?
                                <span className="text-indigo-600 group-open:rotate-45 transition-transform text-xl">+</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                eMitra Technologies (eMitra Tech) is a software product studio and custom development firm based in Indore, 
                                Madhya Pradesh, India. Founded in 2024, eMitra builds enterprise-grade SaaS platforms for Indian SMBs 
                                and institutions, including GymMitra for fitness centers, FlatMitra for housing societies, and SchoolMitra 
                                for schools. The company also operates a student innovation community and offers custom web and mobile 
                                development services using modern technologies like Next.js, React, Flutter, and Node.js.
                            </p>
                        </details>

                        <details className="group p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors">
                            <summary className="text-base font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                                Is eMitra Technologies the same as eMitra Rajasthan?
                                <span className="text-indigo-600 group-open:rotate-45 transition-transform text-xl">+</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                No. eMitra Technologies (emitra.dev) is a private software product studio based in Indore, Madhya Pradesh. 
                                The Rajasthan eMitra portal (emitra.rajasthan.gov.in) is a government citizen service platform operated 
                                by the Government of Rajasthan for services like Aadhaar enrollment, bill payments, and certificate issuance. 
                                The two entities are completely unrelated — eMitra Technologies is a private company that builds SaaS 
                                products and provides custom software development services.
                            </p>
                        </details>

                        <details className="group p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors">
                            <summary className="text-base font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                                Where is eMitra Technologies located?
                                <span className="text-indigo-600 group-open:rotate-45 transition-transform text-xl">+</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                eMitra Technologies is headquartered in Indore, Madhya Pradesh, India (PIN: 452001). Indore is one of 
                                India&apos;s fastest-growing technology hubs with a thriving startup ecosystem. The company serves clients 
                                across India and builds products designed for the Indian market, with a focus on SMBs and educational institutions.
                            </p>
                        </details>

                        <details className="group p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors">
                            <summary className="text-base font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                                What products does eMitra build?
                                <span className="text-indigo-600 group-open:rotate-45 transition-transform text-xl">+</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                eMitra Technologies builds SaaS products under the &quot;Mitra&quot; ecosystem: <strong>GymMitra</strong> is a 
                                gym and fitness center management platform with member tracking, billing, and attendance features. 
                                <strong> FlatMitra</strong> is a housing society management tool for billing, complaints, and visitor management. 
                                <strong> SchoolMitra</strong> is an education ERP for school administration, fee management, and parent communication. 
                                All products are available at <Link href="/products" className="text-indigo-600 font-semibold hover:text-indigo-700">emitra.dev/products</Link>.
                            </p>
                        </details>

                        <details className="group p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors">
                            <summary className="text-base font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                                How can I work with eMitra Tech?
                                <span className="text-indigo-600 group-open:rotate-45 transition-transform text-xl">+</span>
                            </summary>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                                You can reach eMitra Technologies for custom software development, product partnerships, or student internships 
                                by visiting <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700">emitra.dev/contact</Link> or 
                                emailing <a href="mailto:hello@emitra.dev" className="text-indigo-600 font-semibold hover:text-indigo-700">hello@emitra.dev</a>. 
                                For sales inquiries, contact <a href="mailto:sales@emitra.dev" className="text-indigo-600 font-semibold hover:text-indigo-700">sales@emitra.dev</a>. 
                                Student founders can explore the <Link href="/launchpad" className="text-indigo-600 font-semibold hover:text-indigo-700">Launchpad program</Link>.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * FAQPage JSON-LD schema for the homepage FAQ section
 * Note: FAQPage schema no longer triggers rich results for commercial sites in Google,
 * but is still beneficial for AI/LLM citation and Bing rich results.
 */
export function HomepageFAQJsonLd() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is eMitra Technologies?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'eMitra Technologies (eMitra Tech) is a software product studio and custom development firm based in Indore, Madhya Pradesh, India. Founded in 2024, eMitra builds enterprise-grade SaaS platforms for Indian SMBs and institutions, including GymMitra for fitness centers, FlatMitra for housing societies, and SchoolMitra for schools.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is eMitra Technologies the same as eMitra Rajasthan?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. eMitra Technologies (emitra.dev) is a private software product studio based in Indore, Madhya Pradesh. The Rajasthan eMitra portal (emitra.rajasthan.gov.in) is a government citizen service platform. The two entities are completely unrelated.',
                },
            },
            {
                '@type': 'Question',
                name: 'Where is eMitra Technologies located?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'eMitra Technologies is headquartered in Indore, Madhya Pradesh, India (PIN: 452001). The company serves clients across India and builds products designed for the Indian market.',
                },
            },
            {
                '@type': 'Question',
                name: 'What products does eMitra build?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'eMitra builds SaaS products under the "Mitra" ecosystem: GymMitra for gym management, FlatMitra for housing society management, and SchoolMitra for school administration. All products are available at emitra.dev/products.',
                },
            },
            {
                '@type': 'Question',
                name: 'How can I work with eMitra Tech?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Contact eMitra Technologies at hello@emitra.dev for custom software development, product partnerships, or student internships. For sales inquiries, email sales@emitra.dev.',
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
    );
}
