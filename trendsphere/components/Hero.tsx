'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar';
import FloatingCardStrip from './FloatingCardStrip';
import ExcelUpload from './ExcelUpload';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Plane */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-black via-deep-violet/20 to-lavender-accent/10" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-lavender-accent/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-deep-violet/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-soft-pink/10 rounded-full blur-[150px]" />
        </div>
      </motion.div>

      {/* Mid-ground: TRENDSPHERE typography */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{ y: textY }}
      >
        <h1 className="text-[15vw] font-condensed tracking-[-0.02em] text-editorial-white/20 whitespace-nowrap select-none"
            style={{
              fontFamily: "'Bebas Neue', 'Anton', 'Oswald', sans-serif",
              fontWeight: 300,
              letterSpacing: '-0.02em',
            }}>
          TRENDSPHERE
        </h1>
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-20 h-full">
        <Navbar />
        
        {/* Excel Upload Box - LEFT POSITION with large size */}
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2 z-50">
          <ExcelUpload />
        </div>

        {/* Floating Analytics Panel - Right side */}
        <div className="absolute top-32 right-12 md:right-20">
          <div className="backdrop-blur-xl bg-midnight-black/40 border border-glass-border rounded-2xl p-6 w-80">
            <h3 className="text-mouse-gray text-xs tracking-[0.2em] uppercase mb-4">Live Intelligence</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-mouse-gray">Trending Categories</span>
                <span className="text-lavender-accent">+24%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-mouse-gray">Demand Spikes</span>
                <span className="text-editorial-white">87%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-mouse-gray">Product Engagement</span>
                <span className="text-editorial-white">92%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-mouse-gray">Forecast Confidence</span>
                <span className="text-lavender-accent">94%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Launch Platform Button */}
        <motion.button
          className="absolute bottom-12 right-12 px-8 py-4 bg-soft-cream text-midnight-black rounded-full font-medium hover:bg-gradient-to-r hover:from-lavender-accent hover:to-deep-violet hover:text-editorial-white transition-all duration-300 backdrop-blur-sm z-30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Launch Platform
        </motion.button>

        {/* Social Icons */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-30">
          {['in', 'gh', 'x'].map((icon) => (
            <a key={icon} href="#" className="block text-editorial-white/40 hover:text-lavender-accent transition-colors text-sm">
              {icon.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Floating Card Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <FloatingCardStrip />
      </div>
    </div>
  );
}
