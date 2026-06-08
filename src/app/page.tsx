import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroPremium } from '@/components/sections/HeroPremium';
import { StudioPillars } from '@/components/sections/StudioPillars';
import { Products } from '@/components/sections/Products';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { CustomSolutions } from '@/components/sections/CustomSolutions';
import { HomepageSEO, HomepageFAQJsonLd } from '@/components/sections/HomepageSEO';
import { HeroVideo } from '@/components/ui/HeroVideo';

export default function Home() {
  return (
    <div className="bg-white min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main className="relative">
        <HeroPremium />
        
        <StudioPillars />
        
        {/* TrustedBy with cinematic video edges â€” left & right */}
        <section className="relative overflow-hidden bg-white">
            <div className="flex items-stretch">
                {/* Left Video Edge */}
                <div className="relative w-32 md:w-48 lg:w-64 flex-shrink-0 overflow-hidden hidden md:block">
                    <HeroVideo className="absolute inset-0 w-full h-full object-cover opacity-50 rotate-90 scale-150" />
                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.7) 70%, white 100%)' }} />
                </div>

                {/* Center â€” White Band with Logos */}
                <div className="flex-1 min-w-0 bg-white relative z-10 overflow-hidden">
                    <TrustedBy />
                </div>

                {/* Right Video Edge */}
                <div className="relative w-32 md:w-48 lg:w-64 flex-shrink-0 overflow-hidden hidden md:block">
                    <HeroVideo className="absolute inset-0 w-full h-full object-cover opacity-50 rotate-90 scale-150" />
                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to left, transparent 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.7) 70%, white 100%)' }} />
                </div>
            </div>
        </section>

        {/* Products with Cinematic Video Backdrop */}
        <div className="relative">
            <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
                <HeroVideo className="w-full h-full object-cover sticky top-0 rotate-90 scale-[1.8]" />
            </div>
            
            <div className="relative z-10">
                <Products />
            </div>
        </div>
        
        <CustomSolutions />
        <HomepageSEO />
        <HomepageFAQJsonLd />
      </main>
      <Footer />
    </div>
  );
}

