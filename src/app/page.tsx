import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { CustomSolutions } from '@/components/sections/CustomSolutions';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Products />
        <WhyChooseUs />
        <TrustedBy />
        <CustomSolutions />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
