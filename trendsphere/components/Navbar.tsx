// components/Navbar.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = ['Platform', 'Analytics', 'Forecasting', 'Insights', 'Contact'];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border border-lavender-accent" />
          <span className="text-xs tracking-[0.2em] uppercase text-editorial-white/80">TRENDSPHERE</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-[0.2em] uppercase text-editorial-white/60 hover:text-editorial-white transition-colors"
              >
                {item}
              </a>
              {hoveredItem === item && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-lavender-accent"
                  layoutId="navbar-underline"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Launch Pill */}
        <button className="px-4 py-2 border border-glass-border rounded-full text-xs tracking-[0.2em] uppercase text-editorial-white/80 hover:border-lavender-accent hover:text-lavender-accent transition-all">
          Launch Platform
        </button>
      </div>
    </nav>
  );
}