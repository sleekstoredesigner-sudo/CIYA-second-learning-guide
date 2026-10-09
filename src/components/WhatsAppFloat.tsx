import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block px-3 py-1.5 rounded-xl bg-[#1A0535] border border-[#7C3AED] text-white text-xs font-semibold shadow-lg animate-in fade-in slide-in-from-right-2 duration-200">
          Chat with Stillwater Care (+1 415 900 2244)
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/14159002244"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
        className="relative group p-4 rounded-full bg-gradient-to-tr from-[#25D366] via-[#7C3AED] to-[#9333EA] text-white shadow-[0_0_30px_rgba(124,58,237,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border border-white/30"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white group-hover:rotate-12 transition-transform" />
        
        {/* Glowing pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#7C3AED] animate-ping opacity-30 pointer-events-none" />
      </a>
    </div>
  );
};
