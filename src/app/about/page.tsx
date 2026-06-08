import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { VisionMission } from '@/components/sections/about/VisionMission';
import { OurStory } from '@/components/sections/about/OurStory';
import { LeadershipTeam } from '@/components/sections/about/LeadershipTeam';
import { SecurityCore } from '@/components/sections/about/SecurityCore';
import { JoinCTA } from '@/components/sections/about/JoinCTA';
import { PageBreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/siteConfig';

const pageUrl = `${siteConfig.baseUrl}/about`;

export const metadata: Metadata = {
    title: 'About eMitra Technologies â€” Product Studio in Indore, India',
    description:
        'Learn about eMitra Tech â€” an Indore-based software product studio, custom development firm, and student innovation community building enterprise-grade SaaS for Indian institutions.',
    keywords: ['about emitra', 'emitra technologies', 'emitra indore', 'emitra tech about', 'software studio indore', 'tech company indore india'],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'About eMitra Technologies â€” Product Studio in Indore',
        description: 'eMitra Tech is a product studio, custom development firm, and student innovation hub based in Indore, India.',
        url: pageUrl,
    },
};

export default function AboutPage() {
    return (
        <>
            <PageBreadcrumbJsonLd items={[{ name: 'Home', url: `${siteConfig.baseUrl}/` }, { name: 'About', url: pageUrl }]} />
            <Header />
            <main>
                <AboutHero />
                <VisionMission />
                <OurStory />
                <LeadershipTeam />
                <SecurityCore />
                <JoinCTA />
            </main>
            <Footer />
        </>
    );
}

