import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SolutionsHero } from '@/components/sections/solutions/SolutionsHero';
import { SolutionsByScale } from '@/components/sections/solutions/SolutionsByScale';
import { ServicesGrid } from '@/components/sections/solutions/ServicesGrid';
import { SolutionIntegration } from '@/components/sections/solutions/SolutionIntegration';
import { CTA } from '@/components/sections/CTA';

export default function SolutionsPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <SolutionsHero />
                <SolutionsByScale />
                <ServicesGrid />
                <SolutionIntegration />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
