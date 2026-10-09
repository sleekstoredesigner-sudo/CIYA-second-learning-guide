import React, { useState } from 'react';
import { FeatureItem } from '../types';
import {
  Compass,
  Moon,
  Wind,
  Sun,
  Headphones,
  TrendingUp,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  Play
} from 'lucide-react';

interface FeaturesSectionProps {
  onSelectFeatureAudio?: (type: 'binaural' | 'nature' | 'sleep') => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onSelectFeatureAudio }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  const features: FeatureItem[] = [
    {
      id: 'guided-meditations',
      iconName: 'Compass',
      title: 'Guided Meditations',
      badge: '500+ Sessions',
      description: '5–40 min sessions curated for every emotional state, stress level, and daily goal.',
      details: 'Choose from single sessions or 14-day masterclass tracks guided by world-renowned mindfulness experts. Topics include Anxiety Release, Overthinking, Emotional Resiliency, and Creative Flow.',
      duration: '5–40 min',
      previewAudioType: 'nature'
    },
    {
      id: 'sleep-stories',
      iconName: 'Moon',
      title: 'Sleep Stories',
      badge: 'Bedtime Audio',
      description: 'Narrated bedtime journeys with soothing acoustics designed to help you drift off effortlessly.',
      details: 'Immersive soundscapes and gentle spoken narratives narrated by beloved voice artists. Scientifically engineered tempo drops calm your heart rate and trigger deep REM sleep.',
      duration: '30–60 min',
      previewAudioType: 'sleep'
    },
    {
      id: 'breathing-exercises',
      iconName: 'Wind',
      title: 'Breathing Exercises',
      badge: '4 Active Protocols',
      description: 'Box breathing, 4-7-8 relaxation, Wim Hof energy, and coherent autonomic breathing.',
      details: 'Instant autonomic nervous system regulation. Visual tactile guides pace your diaphragm to lower cortisol levels within 120 seconds of practice.',
      duration: '2–10 min',
      previewAudioType: 'binaural'
    },
    {
      id: 'daily-mindfulness',
      iconName: 'Sun',
      title: 'Daily Mindfulness',
      badge: 'Rituals',
      description: '5-minute morning micro-habits and evening reflection rituals for consistent peace.',
      details: 'Short, high-impact sessions designed for busy calendars. Start your day with clear intention setting and wind down with non-judgmental daily reflection.',
      duration: '5 min daily',
      previewAudioType: 'nature'
    },
    {
      id: 'focus-music',
      iconName: 'Headphones',
      title: 'Focus Music',
      badge: 'Binaural Audio',
      description: 'Binaural beats, organic nature sounds, and ambient soundscapes for deep focus.',
      details: 'Auditory entrainment tracks using Alpha and Theta sound frequencies to boost deep work concentration, eliminate distractions, and enter flow state fast.',
      duration: 'Continuous',
      previewAudioType: 'binaural'
    },
    {
      id: 'progress-tracking',
      iconName: 'TrendingUp',
      title: 'Progress Tracking',
      badge: 'Analytics',
      description: 'Mindful streaks, mood journals, heart-rate insights, and sleep quality scores.',
      details: 'Track your growth with privacy-first analytics. Sync with Apple Health and Google Fit to measure real physiological improvements in heart rate variability (HRV).',
      duration: 'Real-time',
      previewAudioType: 'sleep'
    },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#C4B5FD]" />;
      case 'Moon':
        return <Moon className="w-6 h-6 text-[#C4B5FD]" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-[#C4B5FD]" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-[#C4B5FD]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#C4B5FD]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#C4B5FD]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C4B5FD]" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-[#150228] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
            Engineered For Calm
          </span>
          <h2 className="text-3xl sm:text-5xl font-[800] text-white font-['Outfit'] tracking-tight">
            Everything your mind needs in one serene sanctuary.
          </h2>
          <p className="text-base sm:text-lg text-[#C4B5FD]/80">
            Backed by neuroscientific research, designed for effortless daily practice.
          </p>
        </div>

        {/* 3-Column Feature Grid with Spring Bounce Entrances */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              onClick={() => setSelectedFeature(feature)}
              className="group relative p-8 rounded-3xl bg-[#1A0535]/70 border border-[#7C3AED]/30 hover:border-[#7C3AED] hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
              style={{
                animationDelay: `${idx * 0.12}s`,
              }}
            >
              <div>
                {/* Top Row: Icon Circle + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#9333EA] p-[1px] shadow-[0_0_20px_rgba(124,58,237,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-2xl bg-[#0A0015] flex items-center justify-center">
                      {renderIcon(feature.iconName)}
                    </div>
                  </div>

                  {feature.badge && (
                    <span className="text-[11px] font-semibold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-2.5 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Title (Outfit 700, 20px) */}
                <h3 className="text-xl font-[700] text-white mb-2 font-['Outfit'] group-hover:text-[#C4B5FD] transition-colors">
                  {feature.title}
                </h3>

                {/* Two-line description */}
                <p className="text-sm text-[#C4B5FD]/80 leading-relaxed line-clamp-2">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Learn More link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#C4B5FD] group-hover:text-white">
                <span>Explore Feature</span>
                <ArrowRight className="w-4 h-4 text-[#7C3AED] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Feature Details Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 bg-[#0A0015]/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#1A0535] border border-[#7C3AED] p-8 shadow-[0_0_50px_rgba(124,58,237,0.5)] text-white">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-[#C4B5FD] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#7C3AED] flex items-center justify-center shadow-lg">
                {renderIcon(selectedFeature.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">{selectedFeature.badge}</span>
                <h3 className="text-2xl font-bold font-['Outfit']">{selectedFeature.title}</h3>
              </div>
            </div>

            <p className="text-base text-[#C4B5FD] mb-6 leading-relaxed">
              {selectedFeature.details}
            </p>

            <div className="p-4 rounded-2xl bg-[#0A0015]/80 border border-white/10 mb-6 space-y-2 text-sm text-[#C4B5FD]">
              <div className="flex justify-between">
                <span>Typical Session Duration:</span>
                <strong className="text-white">{selectedFeature.duration}</strong>
              </div>
              <div className="flex justify-between">
                <span>Recommended Frequency:</span>
                <strong className="text-white">Daily or on-demand</strong>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (onSelectFeatureAudio && selectedFeature.previewAudioType) {
                    onSelectFeatureAudio(selectedFeature.previewAudioType);
                  }
                  setSelectedFeature(null);
                  const audioElem = document.getElementById('audio-sessions');
                  if (audioElem) audioElem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Listen to Sound Sample</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
