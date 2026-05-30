'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from '@/components/Hero';
import AboutPlatform from '@/components/AboutPlatform';
import PlatformCapabilities from '@/components/PlatformCapabilities';
import TechnologyArchitecture from '@/components/TechnologyArchitecture';
import UseCases from '@/components/UseCases';
import ContactDemo from '@/components/ContactDemo';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <main className="bg-midnight-black text-editorial-white overflow-x-hidden">
        <Hero />
        <AboutPlatform />
        <PlatformCapabilities />
        <TechnologyArchitecture />
        <UseCases />
        <ContactDemo />
        <Footer />
      </main>
    </>
  );
}
