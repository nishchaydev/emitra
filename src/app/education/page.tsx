import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Education as EducationSection } from '@/components/sections/Education';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Education Technology Solutions — SchoolMitra by eMitra Tech',
    description:
        'Enterprise-grade ERP and automation for K-12 schools, universities, and educational institutions. Built by eMitra Technologies, Indore. Smart attendance, fee management, and digital classrooms.',
    keywords: ['education software indore', 'school ERP india', 'SchoolMitra', 'emitra education', 'school management system', 'edtech indore'],
    alternates: {
        canonical: 'https://emitra.dev/education',
    },
    openGraph: {
        title: 'Education Technology Solutions — eMitra Tech',
        description: 'Smart school ERP systems built for Indian educational institutions.',
        url: 'https://emitra.dev/education',
    },
};

export default function EducationPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <EducationSection />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
