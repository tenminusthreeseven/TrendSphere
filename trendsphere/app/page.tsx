"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import AboutPlatform from "@/components/AboutPlatform";
import PlatformCapabilities from "@/components/PlatformCapabilities";
import TechnologyArchitecture from "@/components/TechnologyArchitecture";
import UseCases from "@/components/UseCases";
import ContactDemo from "@/components/ContactDemo";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
  const lenis = new Lenis({
    lerp: 0.2,
    smoothWheel: true,
    wheelMultiplier: 1.5,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy()
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
