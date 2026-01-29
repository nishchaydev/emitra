'use client';

import { ReactNode } from 'react';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { BackToTop } from '@/components/ui/BackToTop';
import { Preloader } from '@/components/ui/Preloader';
import { FloatingContact } from '@/components/ui/FloatingContact';
import { CookieConsent } from '@/components/ui/CookieConsent';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <>
            <Preloader />
            <ScrollProgress />
            {children}
            <BackToTop />
            <FloatingContact />
            <CookieConsent />
        </>
    );
}
