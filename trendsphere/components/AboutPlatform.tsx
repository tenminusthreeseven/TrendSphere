// components/AboutPlatform.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

const timelineNodes = [
  {
    title: 'Data Collection',
    subtitle: 'Amazon, Flipkart, Myntra product streams',
    images: ['/images/ecommerce1.jpg', '/images/analytics1.jpg'],
  },
  {
    title: 'Data Processing',
    subtitle: 'AWS Glue + Apache Spark pipelines',
    images: ['/images/dataflow.jpg', '/images/spark.jpg'],
  },
  {
    title: 'Forecast Intelligence',
    subtitle: 'SageMaker predictive models',
    images: ['/images/forecast-graph.jpg', '/images/heatmap.jpg'],
  },
  {
    title: 'Business Insights',
    subtitle: 'QuickSight analytics dashboards',
    images: ['/images/dashboard.jpg', '/images/inventory.jpg'],
  },
];

export default function AboutPlatform() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section ref={sectionRef} className="py-32 bg-midnight-black relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-editorial-white/20" />
            <h2 className="text-sm tracking-[0.3em] uppercase text-mouse-gray">01 — ABOUT THE PLATFORM</h2>
            <div className="h-px w-16 bg-editorial-white/20" />
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="h-px flex-1 max-w-32 bg-editorial-white/10" />
            <span className="text-xs text-mouse-gray">PREMIUM INTELLIGENCE</span>
            <div className="h-px flex-1 max-w-32 bg-editorial-white/10" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <p className="font-serif text-xl leading-relaxed text-editorial-white/80">
              <span className="font-serif">ForecastTrend is a real-time fashion analytics and demand forecasting platform 
              designed to help brands </span>
              <span className="text-lavender-accent font-serif transition-all duration-700 inline-block">
                predict emerging trends
              </span>
              <span className="font-serif">, optimize inventory, and understand 
              consumer behavior across modern e-commerce ecosystems.</span>
            </p>
            
            <p className="font-serif text-xl leading-relaxed text-editorial-white/80">
              <span className="font-serif">Built as an end-to-end AWS-powered data engineering ecosystem, the platform collects, 
              processes, and analyzes large-scale fashion product and user behavior data from platforms 
              like Amazon, Flipkart, and Myntra using scalable </span>
              <span className="text-lavender-accent font-serif transition-all duration-700 inline-block">
                real-time and batch pipelines
              </span>
              <span className="font-serif">.</span>
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-editorial-white/20" />
            
            <div className="space-y-12">
              {timelineNodes.map((node, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-12"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { delay: idx * 0.2, duration: 0.6 } },
                  }}
                >
                  {/* Node Circle */}
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-lavender-accent" />
                  
                  <h3 className="text-lg font-medium mb-1">{node.title}</h3>
                  <p className="text-mouse-gray text-sm mb-3">{node.subtitle}</p>
                  
                  {/* Image Cluster */}
                  <div className="flex gap-3 mt-2">
                    {node.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="w-20 h-20 bg-editorial-white/5 rounded-lg overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300"
                      >
                        <div className="w-full h-full bg-gradient-to-br from-deep-violet/30 to-lavender-accent/30 flex items-center justify-center text-[10px] text-editorial-white/40">
                          Visual
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}