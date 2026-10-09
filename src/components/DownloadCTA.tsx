import React, { useState, useRef, useEffect } from 'react';
import { BreathingCircle } from './BreathingCircle';
import { Check, Info } from 'lucide-react';

interface DownloadCTAProps {
  onOpenDownloadModal: (platform?: 'ios' | 'android') => void;
}

export const DownloadCTA: React.FC<DownloadCTAProps> = ({ onOpenDownloadModal }) => {
  // Magnetic CTA offsets
  const [iosPos, setIosPos] = useState({ x: 0, y: 0 });
  const [androidPos, setAndroidPos] = useState({ x: 0, y: 0 });

  const iosBtnRef = useRef<HTMLButtonElement>(null);
  const androidBtnRef = useRef<HTMLButtonElement>(null);

  // Magnetic proximity calculation (80px radius, max +/-10px movement)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const calcOffset = (btnRef: React.RefObject<HTMLButtonElement | null>) => {
        if (!btnRef.current) return { x: 0, y: 0 };
        const rect = btnRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 80) {
          const power = (1 - distance / 80) * 10; // max 10px
          return {
            x: (distX / distance) * power,
            y: (distY / distance) * power,
          };
        }
        return { x: 0, y: 0 };
      };

      setIosPos(calcOffset(iosBtnRef));
      setAndroidPos(calcOffset(androidBtnRef));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [activeSocialTooltip, setActiveSocialTooltip] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'Instagram',
      handle: 'https://instagram.com/YOURHANDLE',
      placeholderNote: 'INSTAGRAM — https://instagram.com/YOURHANDLE — post mindfulness tips, breathing guides, sleep hygiene content, user stories',
      bgColor: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#cc2366]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      handle: 'https://tiktok.com/@YOURHANDLE',
      placeholderNote: 'TIKTOK — https://tiktok.com/@YOURHANDLE — 60-second breathing exercises, quick mindfulness tips — massive wellness niche on TikTok',
      bgColor: 'bg-black border border-[#69C9D0]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.07-1.3 1.8-.24.88-.06 1.85.45 2.58.58.84 1.58 1.34 2.61 1.35.88.03 1.76-.32 2.38-.94.75-.71 1.14-1.74 1.13-2.77.01-4.73.01-9.46.01-14.19z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      handle: 'https://youtube.com/@YOURCHANNEL',
      placeholderNote: 'YOUTUBE — https://youtube.com/@YOURCHANNEL — free guided meditations, breathing exercise tutorials, sleep stories previews',
      bgColor: 'bg-[#FF0000]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Twitter/X',
      handle: 'https://x.com/YOURHANDLE',
      placeholderNote: 'X (TWITTER) — https://x.com/YOURHANDLE — daily mindfulness quotes, product update announcements, live community Q&As',
      bgColor: 'bg-[#1D9BF0]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Pinterest',
      handle: 'https://pinterest.com/YOURHANDLE',
      placeholderNote: 'PINTEREST — https://pinterest.com/YOURHANDLE — aesthetic wellness boards, calming wallpapers, breathwork infographs',
      bgColor: 'bg-[#E60023]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0A0015] via-[#120224] to-[#1A0535] text-white overflow-hidden flex flex-col items-center justify-center">

      {/* Large Decorative Background Breathing Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 transform scale-150">
        <BreathingCircle interactiveControls={false} size="large" showSubtext={false} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Heading (Outfit 800, 80px/44px mobile, white) */}
        <h2 className="text-4xl sm:text-6xl lg:text-[80px] font-[800] leading-tight font-['Outfit'] text-white mb-6 tracking-tight">
          Your mind deserves this.
        </h2>

        <p className="text-lg sm:text-2xl text-[#C4B5FD] max-w-2xl mx-auto mb-10 font-normal">
          Join 2,000,000+ humans experiencing clearer focus, calmer days, and deeper sleep every single night.
        </p>

        {/* Magnetic CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">

          {/* iOS Magnetic Button */}
          <button
            ref={iosBtnRef}
            onClick={() => onOpenDownloadModal('ios')}
            style={{
              transform: `translate(${iosPos.x}px, ${iosPos.y}px)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-lg shadow-[0_0_35px_rgba(124,58,237,0.6)] flex items-center justify-center gap-3 border border-white/20 hover:scale-105 active:scale-95"
          >
            <svg className="w-7 h-7 fill-white" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.9-14.37-6.08-3.37-2.73-7.22-7.38-11.57-13.96-7.3-11.06-12.83-23.11-16.59-36.14-3.76-13.04-5.64-25.07-5.64-36.1 0-14.78 3.82-27.18 11.45-37.19 7.64-10.01 17.39-15.08 29.28-15.22 4.47 0 9.59 1.16 15.36 3.48 5.78 2.32 9.69 3.53 11.75 3.64 1.84 0 5.86-1.27 12.06-3.8 6.2-2.53 11.4-3.69 15.6-3.48 11.41.6 20.88 4.8 28.4 12.6-10.12 6.1-15.06 14.7-14.83 25.8.23 8.7 3.63 16.03 10.2 22 6.57 5.97 14.4 9.29 23.5 9.96-2.52 7.62-5.94 15.03-10.26 22.22zM119.22 31.83c0-7.07 2.6-13.72 7.8-19.95 5.2-6.23 11.7-9.87 19.5-10.92.23.97.35 1.95.35 2.93 0 7.29-2.67 14.07-8.01 20.35-5.34 6.27-11.89 9.88-19.64 10.82-.23-.97-.35-1.95-.35-2.93z" />
            </svg>
            <span>Download for iOS</span>
          </button>

          {/* Android Magnetic Button */}
          <button
            ref={androidBtnRef}
            onClick={() => onOpenDownloadModal('android')}
            style={{
              transform: `translate(${androidPos.x}px, ${androidPos.y}px)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#C4B5FD] hover:bg-white text-[#0A0015] font-extrabold text-lg shadow-[0_0_30px_rgba(196,181,253,0.4)] flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
          >
            <svg className="w-7 h-7 fill-[#0A0015]" viewBox="0 0 24 24">
              <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.09.86.27l12.87 8.36c.64.42.82 1.28.4 1.92-.1.16-.24.3-.4.4L5.36 21.23c-.25.18-.55.27-.86.27-.83 0-1.5-.67-1.5-1.5zm1.5-16.14v15.28l11.08-7.64L4.5 4.36z" />
            </svg>
            <span>Get on Android</span>
          </button>
        </div>

        {/* SOCIAL MEDIA — OFFICIAL SVG ICONS */}
        <div className="pt-8 border-t border-white/10 max-w-xl mx-auto">
          <p className="text-xs font-semibold text-[#C4B5FD]/70 uppercase tracking-widest mb-6">
            Join Our Global Mindfulness Community
          </p>

          <div className="flex items-center justify-center gap-5">
            {socialLinks.map((soc) => (
              <div key={soc.name} className="relative group">
                <a
                  href={soc.handle}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  onMouseEnter={() => setActiveSocialTooltip(soc.placeholderNote)}
                  onMouseLeave={() => setActiveSocialTooltip(null)}
                  className={`w-[36px] h-[36px] rounded-full ${soc.bgColor} flex items-center justify-center shadow-md transform hover:scale-[1.15] transition-transform duration-200 cursor-pointer`}
                >
                  {soc.icon}
                </a>
              </div>
            ))}
          </div>

          {/* Social Media Requirement Placeholder Notice Banner */}
          <div className="mt-8 p-3 rounded-xl border border-dashed border-[#C4B5FD]/40 text-left text-[11px] text-[#C4B5FD]/90 bg-[#1A0535]/80 backdrop-blur-md">
            <div className="flex items-center gap-1.5 font-bold text-[#F59E0B] mb-1">
              <Info className="w-3.5 h-3.5" />
              <span>OFFICIAL SOCIAL CHANNELS & PLACEHOLDERS:</span>
            </div>
            {activeSocialTooltip ? (
              <p className="font-semibold text-white animate-in fade-in duration-150">{activeSocialTooltip}</p>
            ) : (
              <p className="text-[#C4B5FD]/80">
                Hover over any 36×36px social icon above to inspect target handle placeholder notes (Instagram, TikTok, YouTube, X/Twitter, Pinterest).
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
