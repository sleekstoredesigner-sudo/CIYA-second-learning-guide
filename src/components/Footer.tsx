import React from 'react';
import { Mail, Phone, MapPin, Globe, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0015] text-[#C4B5FD] border-t border-[#7C3AED]/30 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#C4B5FD] p-[1px]">
                <div className="w-full h-full rounded-full bg-[#0A0015] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                </div>
              </div>
              <span className="text-xl font-[800] text-white tracking-wider font-['Outfit']">
                STILLWATER
              </span>
            </div>

            <p className="text-xs text-[#C4B5FD]/80 leading-relaxed">
              Global mindfulness and deep sleep app engineered for high-stress lives. Helping 2M+ minds find still in the chaos.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#F59E0B] font-semibold">
              <Globe className="w-4 h-4 text-[#F59E0B]" />
              <span>Available in 190 countries & 14 languages</span>
            </div>
          </div>

          {/* Column 2: Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Mindfulness Suite
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B5FD]/80">
              <li><a href="#features" className="hover:text-white transition-colors">Guided Meditations (500+)</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Bedtime Sleep Stories</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Box & 4-7-8 Breathing Guides</a></li>
              <li><a href="#audio-sessions" className="hover:text-white transition-colors">Binaural Beats & 432Hz Sound</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Daily 5-Min Morning Rituals</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">HRV & Sleep Quality Analytics</a></li>
            </ul>
          </div>

          {/* Column 3: Company Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Global Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-[#C4B5FD]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                <span>Stillwater App Inc.<br />900 Market Street<br />San Francisco, CA 94103, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7C3AED] shrink-0" />
                <a href="tel:+14159002244" className="hover:text-white transition-colors">+1 415 900 2244</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7C3AED] shrink-0" />
                <a href="mailto:hello@stillwater.app" className="hover:text-white transition-colors">hello@stillwater.app</a>
              </div>
            </div>
          </div>

          {/* Column 4: Legal & Security */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Privacy & Compliance
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B5FD]/80">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR Data Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HIPAA Compliant Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
            </ul>
            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#F59E0B]">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>256-bit Encrypted Local Storage</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C4B5FD]/60 gap-4">
          <p>© 2026 Stillwater App Inc. Available on iOS and Android.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#7C3AED] fill-[#7C3AED]" /> for stressed minds everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};
