import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - eMitra Technologies',
    description:
        'Expert insights on digital transformation, institutional technology, SaaS product development, and the future of management systems from eMitra Tech, Indore.',
    keywords: [
        'emitra blog',
        'emitra tech blog',
        'institutional technology',
        'SaaS insights',
        'digital transformation india',
        'tech startup blog indore',
    ],
    alternates: {
        canonical: 'https://emitra.dev/blog',
    },
    openGraph: {
        title: 'Blog - eMitra Technologies',
        description:
            'Expert perspectives on digital transformation, institutional tech, and SaaS from eMitra Technologies, Indore.',
        url: 'https://emitra.dev/blog',
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

