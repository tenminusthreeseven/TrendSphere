// components/FloatingCardStrip.tsx
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const cards = [
  { title: 'Real-time trends', video: '/videos/trends.mp4', image: '/images/trends.jpg' },
  { title: 'AI demand forecasting', video: '/videos/forecast.mp4', image: '/images/forecast.jpg' },
  { title: 'Smart inventory', video: '/videos/inventory.mp4', image: '/images/inventory.jpg' },
  { title: 'Consumer insights', video: '/videos/insights.mp4', image: '/images/insights.jpg' },
  { title: 'Fashion intelligence', video: '/videos/intelligence.mp4', image: '/images/intelligence.jpg' },
];

export default function FloatingCardStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-8">
      <motion.div
        className="flex gap-6 px-8"
        style={{ x }}
      >
        {cards.concat(cards).map((card, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden relative group cursor-pointer"
            whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-deep-violet/20 to-lavender-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <div className="absolute inset-0 bg-midnight-black/60 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-300 z-5" />
            <div className="w-full h-full bg-soft-cream/10 flex items-center justify-center">
              <span className="text-editorial-white/60 text-sm">{card.title}</span>
            </div>
            <div className="absolute bottom-3 left-3 z-20">
              <span className="text-[10px] tracking-[0.2em] uppercase text-editorial-white/80 bg-midnight-black/40 px-2 py-1 rounded">
                {card.title}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}