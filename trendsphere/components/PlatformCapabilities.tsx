// components/PlatformCapabilities.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const capabilities = [
  {
    icon: '⚡',
    title: 'Real-Time Streaming',
    description: 'Powered by Amazon Kinesis to process live fashion demand signals and user activity streams instantly.',
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    description: 'Built using AWS Glue and Apache Spark for scalable batch and real-time data transformation pipelines.',
  },
  {
    icon: '🤖',
    title: 'AI Forecasting',
    description: 'AWS SageMaker models predict upcoming fashion trends, customer demand, and inventory movement.',
  },
  {
    icon: '📈',
    title: 'Business Intelligence',
    description: 'Interactive AWS QuickSight dashboards provide pricing optimization, inventory insights, and market intelligence.',
  },
];

export default function PlatformCapabilities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-midnight-black border-t border-editorial-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-6xl font-condensed tracking-tight text-editorial-white">PLATFORM</h2>
            <div className="flex-1 h-px bg-editorial-white/20" />
          </div>
          <h2 className="text-6xl font-condensed tracking-tight text-editorial-white ml-20">CAPABILITIES</h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              className="group bg-editorial-white/5 backdrop-blur-sm border border-glass-border rounded-2xl p-6 transition-all duration-300 hover:border-lavender-accent hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="text-2xl mb-4 text-lavender-accent group-hover:scale-110 transition-transform">
                {cap.icon}
              </div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-editorial-white/80 mb-3">
                {cap.title}
              </h3>
              <p className="text-sm text-editorial-white/60 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}