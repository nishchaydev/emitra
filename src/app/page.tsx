import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Partners } from '@/components/sections/Partners';
import { Problems } from '@/components/sections/Problems';
import { EmitaWay } from '@/components/sections/EmitaWay';
import { Services } from '@/components/sections/Services';
import { Education } from '@/components/sections/Education';
import { CTA } from '@/components/sections/CTA';
import { Statistics } from '@/components/sections/Statistics';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { Insights } from '@/components/sections/Insights';
import { FAQ } from '@/components/sections/FAQ';
import { Testimonials } from '@/components/sections/Testimonials';
import { TrustBadges } from '@/components/sections/TrustBadges';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <TrustBadges />
        <Problems />
        <EmitaWay />
        <Services />
        <Partners />
        <Testimonials />
        <Statistics />
        <ProductShowcase />
        <Education />
        <Insights />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
