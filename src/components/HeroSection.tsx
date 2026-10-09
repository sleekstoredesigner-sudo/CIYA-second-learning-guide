import React from 'react';
import { ParticleBackground } from './ParticleBackground';
import { BreathingCircle } from './BreathingCircle';
import { Star, Play, Moon, Sparkles, Heart, Activity, Check } from 'lucide-react';

interface HeroSectionProps {
  onOpenDownloadModal: (platform?: 'ios' | 'android') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDownloadModal }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col justify-center bg-gradient-to-b from-[#0A0015] via-[#120224] to-[#1A0535] text-white">
      {/* Starfield Particles */}
      <ParticleBackground />

      {/* Decorative Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#F59E0B]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines & Breathing Circle Guide */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

            {/* Gold Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0535]/80 border border-[#F59E0B]/40 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-xs sm:text-sm font-semibold text-[#F59E0B] backdrop-blur-md animate-in fade-in duration-700">
              <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
              <span>4.9★ — 2M+ downloads — 190 countries</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-[800] leading-[1.05] tracking-tight text-white font-['Outfit']">
              Find your still <br />
              <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#7C3AED] bg-clip-text text-transparent">
                in the chaos.
              </span>
            </h1>

            {/* Subtext in Outfit Regular 17px */}
            <p className="text-base sm:text-lg text-[#C4B5FD]/90 max-w-2xl font-normal leading-relaxed">
              Guided meditations, sleep sounds, breathing exercises, and daily mindfulness — for a mind that won't slow down on its own.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              {/* iOS Button */}
              <button
                onClick={() => onOpenDownloadModal('ios')}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-base shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 border border-white/20"
              >
                {/* Official Apple Inline SVG */}
                <svg className="w-6 h-6 fill-white" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.9-14.37-6.08-3.37-2.73-7.22-7.38-11.57-13.96-7.3-11.06-12.83-23.11-16.59-36.14-3.76-13.04-5.64-25.07-5.64-36.1 0-14.78 3.82-27.18 11.45-37.19 7.64-10.01 17.39-15.08 29.28-15.22 4.47 0 9.59 1.16 15.36 3.48 5.78 2.32 9.69 3.53 11.75 3.64 1.84 0 5.86-1.27 12.06-3.8 6.2-2.53 11.4-3.69 15.6-3.48 11.41.6 20.88 4.8 28.4 12.6-10.12 6.1-15.06 14.7-14.83 25.8.23 8.7 3.63 16.03 10.2 22 6.57 5.97 14.4 9.29 23.5 9.96-2.52 7.62-5.94 15.03-10.26 22.22zM119.22 31.83c0-7.07 2.6-13.72 7.8-19.95 5.2-6.23 11.7-9.87 19.5-10.92.23.97.35 1.95.35 2.93 0 7.29-2.67 14.07-8.01 20.35-5.34 6.27-11.89 9.88-19.64 10.82-.23-.97-.35-1.95-.35-2.93z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-semibold text-[#C4B5FD]">Download for</div>
                  <div className="text-base font-extrabold">iOS App Store</div>
                </div>
              </button>

              {/* Android Button */}
              <button
                onClick={() => onOpenDownloadModal('android')}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#C4B5FD] hover:bg-white text-[#0A0015] font-bold text-base shadow-[0_0_25px_rgba(196,181,253,0.3)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                {/* Official Google Play Inline SVG */}
                <svg className="w-6 h-6 fill-[#0A0015]" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.09.86.27l12.87 8.36c.64.42.82 1.28.4 1.92-.1.16-.24.3-.4.4L5.36 21.23c-.25.18-.55.27-.86.27-.83 0-1.5-.67-1.5-1.5zm1.5-16.14v15.28l11.08-7.64L4.5 4.36z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-semibold text-[#1A0535]">Get it on</div>
                  <div className="text-base font-extrabold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Gold text note */}
            <p className="text-xs font-semibold text-[#F59E0B] tracking-wide flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#F59E0B]" />
              <span>Free forever plan available · No credit card required</span>
            </p>

            {/* Breathing Circle Component mounted inside Hero */}
            <div className="pt-6 w-full flex justify-center lg:justify-start">
              <BreathingCircle size="normal" interactiveControls={true} />
            </div>

          </div>

          {/* Right Column: App Mockup Floating Devices & Spec Banner */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">

            {/* Developer Spec Note Banner */}
            <div className="w-full mb-4 p-2.5 rounded-lg border border-dashed border-[#C4B5FD]/40 text-center text-[11px] text-[#C4B5FD]/90 bg-[#1A0535]/80 backdrop-blur-md">
              <strong>APP MOCKUP:</strong> iPhone 15 Pro frame SVG with live meditation timer & sleep UI. Min 390×844px.
            </div>

            {/* Overlapping Floating Phones Container */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] h-[580px] sm:h-[640px] flex items-center justify-center">

              {/* Phone 1: Meditation Session Screen (Left/Top float, 3s speed) */}
              <div className="absolute left-0 top-4 w-[240px] sm:w-[270px] z-20 animate-float-phone1 drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]">
                {/* iPhone 15 Pro SVG Shell */}
                <div className="relative rounded-[48px] bg-[#1a1829] p-3 border-4 border-[#3c2a63] shadow-[0_0_40px_rgba(124,58,237,0.4)]">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#120024] border border-white/20" />
                    <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                  </div>

                  {/* Screen Content */}
                  <div className="w-full h-[480px] sm:h-[530px] rounded-[38px] bg-gradient-to-b from-[#1A0535] via-[#0A0015] to-[#2B0952] overflow-hidden p-5 flex flex-col justify-between relative text-white">

                    {/* Ambient Art Background */}
                    <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#7C3AED]/40 rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#F59E0B]/30 rounded-full blur-2xl" />

                    {/* App Header */}
                    <div className="pt-4 flex items-center justify-between z-10">
                      <span className="text-[11px] font-semibold tracking-wider text-[#C4B5FD] uppercase">Evening Stillness</span>
                      <Heart className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                    </div>

                    {/* Progress Circle & Timer */}
                    <div className="my-auto flex flex-col items-center justify-center z-10 text-center">
                      <div className="relative w-36 h-36 rounded-full border-4 border-[#7C3AED]/30 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                        <div className="absolute inset-0 rounded-full border-4 border-[#C4B5FD] border-t-transparent animate-spin duration-[10000ms]" />
                        <div className="text-center">
                          <span className="text-3xl font-extrabold text-white">12:45</span>
                          <span className="block text-[10px] text-[#C4B5FD]">15 Min Session</span>
                        </div>
                      </div>

                      <span className="mt-4 text-xs font-bold text-white">Deep Calm & Clarity</span>
                      <span className="text-[10px] text-[#C4B5FD]/80">Guided by Dr. Aris Thorne</span>
                    </div>

                    {/* Play Controls */}
                    <div className="pb-2 z-10 flex items-center justify-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">10s</div>
                      <div className="w-12 h-12 rounded-full bg-[#7C3AED] flex items-center justify-center text-white shadow-lg">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">10s</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2: Sleep Sounds Library (Right/Bottom float, 4s speed) */}
              <div className="absolute right-0 bottom-4 w-[230px] sm:w-[260px] z-10 animate-float-phone2 drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] opacity-95">
                {/* iPhone 15 Pro SVG Shell */}
                <div className="relative rounded-[48px] bg-[#120d21] p-3 border-4 border-[#2d1b4e] shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                  {/* Dynamic Island */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

                  {/* Screen Content */}
                  <div className="w-full h-[470px] sm:h-[520px] rounded-[38px] bg-gradient-to-b from-[#0A0015] via-[#15022b] to-[#200442] overflow-hidden p-4 flex flex-col justify-between text-white">

                    {/* Top status */}
                    <div className="pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Moon className="w-4 h-4 text-[#F59E0B]" />
                        <span className="text-xs font-bold">Sleep Stories</span>
                      </div>
                      <span className="text-[10px] text-[#F59E0B] bg-[#F59E0B]/20 px-2 py-0.5 rounded-full font-semibold">Offline</span>
                    </div>

                    {/* Sound Cards Stack */}
                    <div className="space-y-3 my-auto">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-[#2A0852] to-[#1A0535] border border-[#7C3AED]/40 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/40 flex items-center justify-center">
                          <Moon className="w-5 h-5 text-[#C4B5FD]" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-white">Midnight Rain in Kyoto</div>
                          <div className="text-[10px] text-[#C4B5FD]">432Hz Sleep Binaural</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#1A0535]/80 border border-white/10 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-[#F59E0B]" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-white">Cosmic Starlight Voyage</div>
                          <div className="text-[10px] text-[#C4B5FD]">Narrated by Stephen Fry</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#1A0535]/80 border border-white/10 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center">
                          <Activity className="w-5 h-5 text-[#C4B5FD]" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-white">Deep Delta Waves</div>
                          <div className="text-[10px] text-[#C4B5FD]">8 Hours Continuous</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status bar */}
                    <div className="p-2.5 rounded-xl bg-[#7C3AED]/20 text-center text-[10px] text-[#C4B5FD] border border-[#7C3AED]/30">
                      Sleep Quality Score: <strong className="text-white font-bold">96% Excellent</strong>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
