// components/Footer.tsx
'use client';

const footerLinks = ['Home', 'Platform', 'Forecasting', 'Insights', 'Contact'];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-editorial-white/10 py-12 bg-midnight-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-lavender-accent" />
            <span className="text-xs tracking-[0.2em] uppercase text-editorial-white/80">TRENDSPHERE</span>
          </div>

          {/* Navigation */}
          <div className="flex gap-8">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs tracking-[0.2em] uppercase text-editorial-white/40 hover:text-lavender-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {['in', 'gh', 'x'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="text-editorial-white/40 hover:text-lavender-accent transition-colors text-xs"
              >
                {icon.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-[10px] tracking-[0.2em] uppercase text-mouse-gray/50">
            Real-time fashion intelligence powered by predictive analytics.
          </p>
        </div>
      </div>
    </footer>
  );
}