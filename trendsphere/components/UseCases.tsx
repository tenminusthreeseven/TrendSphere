// components/UseCases.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useCases = [
  { title: 'Inventory Optimization', description: 'Predict demand and reduce overstock by 35%', visual: '📦' },
  { title: 'Trend Detection', description: 'Identify emerging trends 2 weeks ahead', visual: '📈' },
  { title: 'Pricing Intelligence', description: 'Dynamic pricing optimization', visual: '💰' },
  { title: 'Consumer Behavior', description: 'Deep audience segmentation', visual: '👥' },
  { title: 'Recommendation Systems', description: 'AI-powered product matching', visual: '🎯' },
  { title: 'Demand Forecasting', description: 'Multi-channel demand prediction', visual: '📊' },
];

export default function UseCases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-midnight-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="sticky top-32">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-editorial-white/20" />
                <h2 className="text-xs tracking-[0.3em] uppercase text-mouse-gray">04 — APPLICATIONS</h2>
                <div className="h-px w-12 bg-editorial-white/20" />
              </div>
              <h3 className="text-7xl font-condensed tracking-tight text-editorial-white leading-tight">
                USE<br />CASES
              </h3>
            </div>
            <p className="text-editorial-white/60 font-serif text-lg leading-relaxed">
              ForecastTrend empowers fashion brands, retailers, and merchandisers with predictive intelligence 
              to make faster, smarter, and more profitable business decisions.
            </p>
          </div>

          {/* Right Column - Cards Grid */}
          <div ref={ref} className="grid sm:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                className="group bg-editorial-white/5 backdrop-blur-sm border border-glass-border rounded-2xl p-6 transition-all duration-300 hover:border-lavender-accent hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl mb-4">{useCase.visual}</div>
                <h3 className="text-lg font-medium mb-2 text-editorial-white group-hover:text-lavender-accent transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-sm text-editorial-white/40">
                  {useCase.description}
                </p>
                {/* Minimal analytics overlay */}
                <div className="mt-4 pt-4 border-t border-glass-border">
                  <div className="flex justify-between text-[10px] text-editorial-white/30">
                    <span>confidence</span>
                    <span>92%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}