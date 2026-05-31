'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const architectureLayers = [
  { name: 'Cloud Layer', items: ['Amazon Web Services'], color: 'from-cyan-500/20 to-blue-500/20' },
  { name: 'Storage Layer', items: ['Amazon S3 Data Lake'], color: 'from-emerald-500/20 to-teal-500/20' },
  { name: 'Processing Layer', items: ['AWS Glue', 'Apache Spark'], color: 'from-orange-500/20 to-red-500/20' },
  { name: 'Streaming Layer', items: ['Amazon Kinesis'], color: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Warehouse Layer', items: ['Amazon Redshift'], color: 'from-indigo-500/20 to-violet-500/20' },
  { name: 'Machine Learning', items: ['AWS SageMaker'], color: 'from-fuchsia-500/20 to-purple-500/20' },
  { name: 'Backend/API', items: ['FastAPI'], color: 'from-green-500/20 to-lime-500/20' },
  { name: 'Visualization', items: ['AWS QuickSight'], color: 'from-sky-500/20 to-blue-500/20' },
];

// Deterministic particles so SSR and client render match
const particles = Array.from({ length: 20 }, (_, i) => {
  const left = (i * 17) % 100;
  const top = (i * 29) % 100;
  const duration = 3 + (i % 5);
  const delay = (i % 6) * 0.4;

  return { left, top, duration, delay };
});

export default function TechnologyArchitecture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-midnight-black via-deep-violet/5 to-midnight-black">
      {/* Background atmospheric elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-lavender-accent/10 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-deep-violet/10 blur-[140px]" />

        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-lavender-accent/20"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.5, 0], y: [0, -100] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-editorial-white/20" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-mouse-gray">03 — TECHNOLOGY</h2>
            <div className="h-px w-12 bg-editorial-white/20" />
          </div>
          <h3 className="text-5xl font-condensed tracking-tight text-editorial-white">
            TECHNOLOGY STACK
          </h3>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {architectureLayers.map((layer, idx) => (
            <motion.div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl border border-glass-border bg-gradient-to-br ${layer.color} p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-lavender-accent hover:shadow-lg hover:shadow-lavender-accent/10`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="mb-3 text-sm font-medium text-editorial-white/80">{layer.name}</h3>

              <div className="space-y-1">
                {layer.items.map((item, itemIdx) => (
                  <p key={itemIdx} className="text-sm text-editorial-white/40">
                    {item}
                  </p>
                ))}
              </div>

              {/* Animated connection line glow on hover */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}