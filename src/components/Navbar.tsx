import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Download, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDownloadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownloadModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Sessions', href: '#audio-sessions' },
    { name: 'Stories', href: '#stories' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0015]/90 backdrop-blur-md border-b border-[#7C3AED]/20 shadow-xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Developer Placeholder Badge & SVG Mark */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <a
              href="#"
              className="group flex items-center gap-3 text-white transition-opacity hover:opacity-95"
            >
              {/* Water Ripple Drop SVG Icon */}
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#9333EA] to-[#C4B5FD] p-[1.5px] shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                <div className="w-full h-full rounded-full bg-[#0A0015] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-[#C4B5FD] group-hover:scale-110 transition-transform duration-300"
                  >
                    {/* Concentric Water Ripples */}
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" />
                    <circle cx="12" cy="12" r="2.5" fill="#F59E0B" />
                    <path
                      d="M12 2C12 2 15 6 15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 6 12 2 12 2Z"
                      fill="url(#rippleGradient)"
                      opacity="0.9"
                    />
                    <defs>
                      <linearGradient id="rippleGradient" x1="12" y1="2" x2="12" y2="12.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C4B5FD" />
                        <stop offset="1" stopColor="#7C3AED" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* STILLWATER Wordmark in Outfit 800 */}
              <div className="flex flex-col">
                <span className="text-xl font-[800] tracking-wider text-white font-['Outfit'] group-hover:text-[#C4B5FD] transition-colors">
                  STILLWATER
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F59E0B] font-semibold -mt-1">
                  Mindfulness
                </span>
              </div>
            </a>

            {/* Developer Spec Placeholder Requirement Tag */}
            <div className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-[#C4B5FD]/40 text-[10px] text-[#C4B5FD]/70 bg-[#1A0535]/50">
              <span>LOGO — SVG/PNG, white/lavender version. Water ripple + STILLWATER Outfit 800 (Min 180×44px)</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#C4B5FD] hover:text-white transition-colors hover-underline-scale py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDownloadModal}
              className="relative group px-5 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-sm shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
              <span>Download Free</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#C4B5FD] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Dark Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0015]/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="p-3 rounded-lg border border-dashed border-[#C4B5FD]/40 text-xs text-[#C4B5FD]/80 bg-[#1A0535]">
              <strong>LOGO Placeholder Notice:</strong> White/lavender version for dark bg. Water ripple icon + STILLWATER wordmark in Outfit 800.
            </div>

            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-[#C4B5FD] transition-all transform hover:translate-x-2"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white font-bold text-base shadow-[0_0_25px_rgba(124,58,237,0.6)] flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Free App</span>
            </button>

            <div className="text-center text-xs text-[#C4B5FD]/60">
              4.9★ Rated · 2M+ Downloads globally
            </div>
          </div>
        </div>
      )}
    </>
  );
};
