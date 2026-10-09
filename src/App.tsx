import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AudioSection } from './components/AudioSection';
import { UserStories } from './components/UserStories';
import { PricingSection } from './components/PricingSection';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadPlatform, setDownloadPlatform] = useState<'ios' | 'android' | string>('ios');
  const [activeAudioPreset, setActiveAudioPreset] = useState<'binaural' | 'nature' | 'sleep' | undefined>(undefined);

  const handleOpenDownloadModal = (platform?: 'ios' | 'android' | string) => {
    if (platform) setDownloadPlatform(platform);
    setDownloadModalOpen(true);
  };

  const handleSelectFeatureAudio = (type: 'binaural' | 'nature' | 'sleep') => {
    setActiveAudioPreset(type);
  };

  return (
    <div className="min-h-screen bg-[#0A0015] text-[#C4B5FD] font-['Outfit',sans-serif] relative selection:bg-[#7C3AED] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenDownloadModal={() => handleOpenDownloadModal('ios')} />

      {/* Main Content */}
      <main>
        {/* Hero Section with Starfield, Breathing Circle, Floating iPhones */}
        <HeroSection onOpenDownloadModal={handleOpenDownloadModal} />

        {/* 6 Core Features */}
        <FeaturesSection onSelectFeatureAudio={handleSelectFeatureAudio} />

        {/* Interactive Audio Wave & Soundscapes */}
        <AudioSection activePresetType={activeAudioPreset} />

        {/* Global User Testimonial Stories */}
        <UserStories />

        {/* Pricing Plans with Monthly/Annual Odometer */}
        <PricingSection onOpenDownloadModal={handleOpenDownloadModal} />

        {/* Download CTA with Magnetic Buttons & Social Media Marks */}
        <DownloadCTA onOpenDownloadModal={handleOpenDownloadModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Care Support Button */}
      <WhatsAppFloat />

      {/* Download Modal with QR Code and SMS Link */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        defaultPlatform={downloadPlatform}
      />
    </div>
  );
}
