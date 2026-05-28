// components/ContactDemo.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactDemo() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-black via-deep-violet/20 to-lavender-accent/20" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-lavender-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-deep-violet/30 rounded-full blur-[140px]" />
        {/* Floating fashion visuals */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-editorial-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-soft-pink/10 rounded-full blur-[100px]" />
      </div>

      {/* Glass Form Panel */}
      <motion.div
        className="relative z-10 w-full max-w-md mx-6 backdrop-blur-xl bg-midnight-black/40 border border-glass-border rounded-3xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-3xl text-editorial-white mb-2 leading-tight">
          Want to explore the<br />future of fashion intelligence?
        </h2>
        <p className="text-xs tracking-[0.2em] uppercase text-mouse-gray mb-8">
          Request a demo
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'company', 'email'].map((field) => (
            <div key={field} className="group">
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-editorial-white/20 focus:border-lavender-accent outline-none py-2 text-editorial-white/80 transition-colors duration-300 placeholder:text-mouse-gray/50"
              />
            </div>
          ))}
          <div className="group">
            <textarea
              name="comment"
              placeholder="Comment"
              rows={3}
              value={formData.comment}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-editorial-white/20 focus:border-lavender-accent outline-none py-2 text-editorial-white/80 transition-colors duration-300 placeholder:text-mouse-gray/50 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-4 bg-soft-cream text-midnight-black rounded-full font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-lavender-accent hover:to-deep-violet hover:text-editorial-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Request
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}