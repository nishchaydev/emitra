import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactTypes } from '@/components/sections/contact/ContactTypes';
import { GlobalPresence } from '@/components/sections/contact/GlobalPresence';

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <ContactHero />
                <ContactForm />
                <ContactTypes />
                <GlobalPresence />
            </main>
            <Footer />
        </>
    );
}
