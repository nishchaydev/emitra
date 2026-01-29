import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Education as EducationSection } from '@/components/sections/Education';
import { CTA } from '@/components/sections/CTA';

export const metadata = {
    title: 'Education Solutions | eMitra Technologies',
    description: 'Enterprise-grade ERP and automation systems designed specifically for K-12 schools, universities, and educational institutions.',
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
