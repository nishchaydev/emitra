import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { VisionMission } from '@/components/sections/about/VisionMission';
import { LeadershipTeam } from '@/components/sections/about/LeadershipTeam';
import { SecurityCore } from '@/components/sections/about/SecurityCore';
import { JoinCTA } from '@/components/sections/about/JoinCTA';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <AboutHero />
                <VisionMission />
                <LeadershipTeam />
                <SecurityCore />
                <JoinCTA />
            </main>
            <Footer />
        </>
    );
}
