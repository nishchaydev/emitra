import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageBreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'What is eMitra? eMitra Technologies vs Government eMitra Portal — Complete Guide',
    description:
        'Confused between eMitra Technologies and the Rajasthan eMitra portal? This guide explains the difference between eMitra Tech (private software studio in Indore) and eMitra Rajasthan (government citizen services).',
    keywords: [
        'what is emitra',
        'emitra technologies',
        'emitra rajasthan',
        'emitra vs emitra rajasthan',
        'emitra tech',
        'emitra indore',
        'emitra software company',
        'emitra kiosk vs emitra technologies',
    ],
    alternates: {
        canonical: 'https://emitra.dev/blog/what-is-emitra',
    },
    openGraph: {
        type: 'article',
        title: 'What is eMitra? Technology Studio vs Government Portal — Complete Guide',
        description:
            'Confused between eMitra Technologies and the Rajasthan eMitra portal? Read the definitive guide.',
        url: 'https://emitra.dev/blog/what-is-emitra',
        publishedTime: '2026-05-13T00:00:00.000Z',
        authors: ['Nishchay Gupta'],
        tags: ['eMitra', 'Technology', 'Indore', 'SaaS'],
    },
};

export default function WhatIsEmitraPage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'What is eMitra? eMitra Technologies vs Government eMitra Portal',
        description:
            'A comprehensive guide explaining the difference between eMitra Technologies (private software company) and the Rajasthan eMitra portal (government service).',
        author: {
            '@type': 'Person',
            name: 'Nishchay Gupta',
            jobTitle: 'Founder & CEO',
            worksFor: {
                '@type': 'Organization',
                '@id': 'https://emitra.dev/#organization',
                name: 'eMitra Technologies',
            },
        },
        publisher: {
            '@type': 'Organization',
            '@id': 'https://emitra.dev/#organization',
            name: 'eMitra Technologies',
            logo: {
                '@type': 'ImageObject',
                url: 'https://res.cloudinary.com/dkits80xk/image/upload/c_fill,w_400,h_400/v1771839836/ChatGPT_Image_Feb_23_2026_03_13_03_PM_foi1so.png',
                width: 400,
                height: 400,
            },
        },
        datePublished: '2026-05-13T00:00:00.000Z',
        dateModified: '2026-05-13T00:00:00.000Z',
        mainEntityOfPage: 'https://emitra.dev/blog/what-is-emitra',
        url: 'https://emitra.dev/blog/what-is-emitra',
        image: 'https://res.cloudinary.com/dkits80xk/image/upload/c_fill,w_1200,h_630/v1771839836/ChatGPT_Image_Feb_23_2026_03_13_03_PM_foi1so.png',
        wordCount: 1800,
        keywords: 'emitra, emitra technologies, emitra tech, emitra indore, emitra rajasthan',
    };

    return (
        <>
            <PageBreadcrumbJsonLd
                items={[
                    { name: 'Blog', url: 'https://emitra.dev/blog' },
                    { name: 'What is eMitra?', url: 'https://emitra.dev/blog/what-is-emitra' },
                ]}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />
            <main className="relative bg-white min-h-screen">
                {/* Article Header */}
                <section className="pt-32 pb-12 bg-white">
                    <div className="max-w-3xl mx-auto px-6">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-8"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Blog
                        </Link>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
                                Guide
                            </span>
                            <span className="text-slate-400 text-sm">Pillar Content</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tighter text-slate-900 leading-tight mb-6">
                            What is eMitra? Technology Studio vs Government Portal — Complete Guide
                        </h1>

                        <p className="text-lg text-slate-500 leading-relaxed mb-8">
                            If you&apos;ve searched &quot;eMitra&quot; and found two very different things, you&apos;re not alone.
                            This guide explains the difference between <strong>eMitra Technologies</strong> (a private
                            software company) and the <strong>Rajasthan eMitra portal</strong> (a government citizen
                            services platform).
                        </p>

                        <div className="flex items-center gap-6 text-sm text-slate-400 border-t border-b border-slate-100 py-4">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" /> Nishchay Gupta
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" /> May 13, 2026
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" /> 8 min read
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Body */}
                <article className="pb-20">
                    <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-lg">

                        <h2>TL;DR — The Quick Answer</h2>
                        <p>
                            <strong>eMitra Technologies</strong> (emitra.dev) is a <strong>private software product studio</strong> based
                            in <strong>Indore, Madhya Pradesh</strong>. We build SaaS products like GymMitra, FlatMitra, and SchoolMitra
                            for Indian businesses and institutions.
                        </p>
                        <p>
                            The <strong>Rajasthan eMitra portal</strong> (emitra.rajasthan.gov.in) is a <strong>government
                            citizen service platform</strong> operated by the Government of Rajasthan for services like Aadhaar enrollment,
                            bill payments, and certificate issuance.
                        </p>
                        <p>
                            <strong>The two are completely unrelated.</strong> Different organizations, different purposes, different locations.
                        </p>

                        <hr />

                        <h2>What is eMitra Technologies?</h2>
                        <p>
                            eMitra Technologies — commonly referred to as <strong>eMitra Tech</strong> — is a software product studio founded
                            in 2024. Headquartered in <strong>Indore, Madhya Pradesh, India</strong>, the company operates across three pillars:
                        </p>

                        <h3>1. Product Studio — SaaS for Indian SMBs</h3>
                        <p>
                            eMitra builds and launches its own SaaS products under the &quot;Mitra&quot; ecosystem. Each product solves a specific
                            operational pain point for Indian small-to-medium businesses:
                        </p>
                        <ul>
                            <li>
                                <strong><Link href="/gymmitra">GymMitra</Link></strong> — Gym and fitness center management. Member tracking,
                                billing cycles, trainer assignments, attendance, and performance analytics.
                            </li>
                            <li>
                                <strong><Link href="/flatmitra">FlatMitra</Link></strong> — Housing society management. Monthly billing,
                                complaint tracking, visitor logs, maintenance scheduling, and community communication.
                            </li>
                            <li>
                                <strong>SchoolMitra</strong> — Education ERP for schools. Fee management, attendance tracking, parent
                                communication, exam scheduling, and report card generation.
                            </li>
                        </ul>

                        <h3>2. Custom Engineering — Agency Services</h3>
                        <p>
                            Beyond its own products, eMitra Technologies offers custom software development services for clients who need
                            bespoke solutions. The tech stack includes <strong>Next.js, React, Flutter, Node.js, PostgreSQL, Firebase,
                            and AWS</strong>. Services include:
                        </p>
                        <ul>
                            <li>Full-stack web application development</li>
                            <li>Cross-platform mobile app development (iOS + Android)</li>
                            <li>Enterprise dashboards and analytics platforms</li>
                            <li>API integrations and backend engineering</li>
                            <li>Government and institutional software</li>
                        </ul>

                        <h3>3. Student Innovation Community</h3>
                        <p>
                            eMitra also operates a student innovation hub where aspiring engineers from Indore&apos;s colleges gain real-world
                            product development experience. Community members participate in hackathons (15+ wins and counting), build
                            projects that ship to production, and transition into professional engineering roles. It&apos;s an apprenticeship
                            model — students don&apos;t just learn theory, they build real products.
                        </p>

                        <hr />

                        <h2>What is the Rajasthan eMitra Portal?</h2>
                        <p>
                            The Rajasthan eMitra portal (emitra.rajasthan.gov.in) is a <strong>government e-governance platform</strong> launched
                            by the Government of Rajasthan. It provides citizen services through physical kiosks and online portals across
                            the state. Services include:
                        </p>
                        <ul>
                            <li>Aadhaar enrollment and updates</li>
                            <li>Electricity and water bill payments</li>
                            <li>Birth and death certificate issuance</li>
                            <li>Domicile and caste certificate applications</li>
                            <li>Various government fee payments</li>
                        </ul>
                        <p>
                            The eMitra kiosk network has been a significant part of Rajasthan&apos;s digital governance push, providing
                            convenient access to government services in rural and urban areas alike.
                        </p>

                        <hr />

                        <h2>Side-by-Side Comparison</h2>

                        <div className="overflow-x-auto">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Attribute</th>
                                        <th>eMitra Technologies</th>
                                        <th>eMitra Rajasthan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Type</strong></td>
                                        <td>Private software company</td>
                                        <td>Government service portal</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Location</strong></td>
                                        <td>Indore, Madhya Pradesh</td>
                                        <td>Rajasthan (statewide)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Website</strong></td>
                                        <td>emitra.dev</td>
                                        <td>emitra.rajasthan.gov.in</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Founded</strong></td>
                                        <td>2024</td>
                                        <td>2004</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Purpose</strong></td>
                                        <td>SaaS products + custom dev</td>
                                        <td>Citizen government services</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Products</strong></td>
                                        <td>GymMitra, FlatMitra, SchoolMitra</td>
                                        <td>Kiosk-based service delivery</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Target Users</strong></td>
                                        <td>SMBs, institutions, startups</td>
                                        <td>Citizens of Rajasthan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <h2>Why the Name &quot;eMitra&quot;?</h2>
                        <p>
                            &quot;Mitra&quot; means &quot;friend&quot; in Hindi and Sanskrit. eMitra Technologies chose the name to reflect
                            its mission: building technology that acts as a <strong>trusted friend</strong> for businesses and institutions.
                            Every product in the ecosystem carries the &quot;Mitra&quot; suffix — GymMitra, FlatMitra, SchoolMitra — to
                            reinforce this philosophy.
                        </p>
                        <p>
                            The &quot;e&quot; prefix represents the digital, electronic nature of the company&apos;s solutions. Together,
                            &quot;eMitra&quot; means &quot;electronic friend&quot; — software that simplifies complex operations for the
                            people who use it daily.
                        </p>

                        <hr />

                        <h2>Where is eMitra Technologies Based?</h2>
                        <p>
                            eMitra Technologies is headquartered in <strong>Indore, Madhya Pradesh, India</strong> (PIN: 452001). Indore is
                            one of India&apos;s fastest-growing tier-2 technology cities, with a thriving startup ecosystem, world-class
                            engineering colleges (IIT Indore, IIM Indore, DAVV), and a rapidly expanding tech talent pool.
                        </p>
                        <p>
                            The company chose Indore for its cost-effective talent base, strong student community, and proximity to
                            real-world institutional problems that its products solve.
                        </p>

                        <hr />

                        <h2>How to Work with eMitra Tech</h2>
                        <p>Whether you&apos;re a business, institution, or student, here&apos;s how to get started:</p>
                        <ul>
                            <li>
                                <strong>Use a Product:</strong> Visit <Link href="/products">emitra.dev/products</Link> to explore
                                GymMitra, FlatMitra, and SchoolMitra.
                            </li>
                            <li>
                                <strong>Custom Development:</strong> Need a bespoke solution? <Link href="/contact">Contact us</Link> or
                                email <a href="mailto:sales@emitra.dev">sales@emitra.dev</a>.
                            </li>
                            <li>
                                <strong>Join as a Student:</strong> Explore the <Link href="/launchpad">Launchpad program</Link> for
                                internships and student innovation opportunities.
                            </li>
                            <li>
                                <strong>Partnerships:</strong> Reach out at <a href="mailto:hello@emitra.dev">hello@emitra.dev</a>.
                            </li>
                        </ul>

                        <hr />

                        <h2>Frequently Asked Questions</h2>

                        <h3>Is eMitra Technologies affiliated with the Rajasthan government?</h3>
                        <p>
                            No. eMitra Technologies is a completely independent, private software company. It has no affiliation with the
                            Government of Rajasthan or the eMitra kiosk network.
                        </p>

                        <h3>Can I access Rajasthan government services on emitra.dev?</h3>
                        <p>
                            No. For Rajasthan government services (Aadhaar, bills, certificates), visit
                            emitra.rajasthan.gov.in. The emitra.dev website is for eMitra Technologies&apos; software
                            products and development services.
                        </p>

                        <h3>Does eMitra Technologies operate eMitra kiosks?</h3>
                        <p>
                            No. eMitra kiosks are operated by the Government of Rajasthan. eMitra Technologies builds SaaS products
                            for businesses and institutions — it does not operate any government service kiosks.
                        </p>

                        <h3>What technologies does eMitra Tech use?</h3>
                        <p>
                            eMitra Technologies uses a modern tech stack including Next.js, React, TypeScript, Node.js, Flutter,
                            PostgreSQL, Firebase, AWS, and Vercel. The company follows best practices in engineering, security,
                            and user experience design.
                        </p>
                    </div>
                </article>

                {/* CTA Section */}
                <section className="py-16 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <h2 className="text-2xl font-display font-black text-slate-900 mb-4">
                            Ready to Build With eMitra?
                        </h2>
                        <p className="text-slate-500 mb-8 max-w-lg mx-auto">
                            Whether you need a SaaS product, custom software, or want to join our community —
                            we&apos;d love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/products"
                                className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
