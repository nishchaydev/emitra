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
import { Testimonials } from '@/components/sections/Testimonials';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Problems />
        <EmitaWay />
        <Services />
        <Partners />
        <Statistics />
        <ProductShowcase />
        <Education />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
