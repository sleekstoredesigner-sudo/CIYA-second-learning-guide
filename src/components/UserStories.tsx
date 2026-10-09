import React from 'react';
import { TestimonialItem } from '../types';
import { Star, Quote, Award, Sparkles } from 'lucide-react';

export const UserStories: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 'lagos-professional',
      name: 'Amara Okafor',
      role: 'Fintech Lead & Mother',
      location: 'Lagos, Nigeria',
      flag: '🇳🇬',
      streak: '42-day streak',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80',
      before: 'I used to lie awake until 3 AM with my mind racing about work deadlines, feeling exhausted before my day even started.',
      after: 'Now I fall asleep within 10 minutes using the Kyoto Rain Sleep Story, and my morning anxiety has completely melted away.',
    },
    {
      id: 'london-nurse',
      name: 'Sarah Jenkins',
      role: 'Emergency Ward Nurse',
      location: 'London, UK',
      flag: '🇬🇧',
      streak: '89-day streak',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      before: 'I used to carry high sensory overload and adrenaline home from 12-hour NHS shifts, taking hours to unwind.',
      after: 'Now I do a 5-minute Box Breathing session in my car before driving home, resetting my autonomic system instantly.',
    },
    {
      id: 'newyork-student',
      name: 'Alex Chen',
      role: 'Columbia Medical Student',
      location: 'New York, USA',
      flag: '🇺🇸',
      streak: '120-day streak',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
      before: 'I used to get overwhelmed by study burnout and panic before major anatomical board exams.',
      after: 'Now I listen to Binaural Beats during study sessions and daily 10-minute meditations. Passed my exams with top honors!',
    },
  ];

  return (
    <section id="stories" className="py-24 bg-[#0A0015] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B] bg-[#F59E0B]/10 px-3.5 py-1 rounded-full border border-[#F59E0B]/30">
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-5xl font-[800] text-white font-['Outfit'] tracking-tight">
            Stories of still from around the world.
          </h2>
          <p className="text-base sm:text-lg text-[#C4B5FD]/80">
            Over 2 million people in 190 countries rely on Stillwater to navigate life’s daily chaos.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-3xl bg-[#1A0535]/80 border border-[#7C3AED]/30 hover:border-[#7C3AED] shadow-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Gold Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#F59E0B]/30 rotate-180" />

              <div>
                {/* User Header: Photo + Name + Location + Streak */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Photo Placeholder (Circle 80x80px) */}
                  <div className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-[#F59E0B] to-[#7C3AED] shrink-0 shadow-md">
                    <img
                      src={item.avatarUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 text-base" title={item.location}>
                      {item.flag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-['Outfit']">{item.name}</h3>
                    <p className="text-xs text-[#C4B5FD] font-medium">{item.role}</p>
                    <p className="text-[11px] text-[#C4B5FD]/70">{item.location}</p>

                    {/* Streak Badge */}
                    <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-bold text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded-full border border-[#F59E0B]/20">
                      <Award className="w-3 h-3 text-[#F59E0B]" />
                      <span>{item.streak}</span>
                    </div>
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Before / After Format */}
                <div className="space-y-4 text-sm leading-relaxed">
                  {/* Before State */}
                  <div className="p-3.5 rounded-2xl bg-[#0A0015]/60 border border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/90 block mb-1">
                      Before Stillwater:
                    </span>
                    <p className="text-[#C4B5FD]/70 italic">
                      "{item.before}"
                    </p>
                  </div>

                  {/* After State */}
                  <div className="p-3.5 rounded-2xl bg-[#7C3AED]/20 border border-[#7C3AED]/40">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] block mb-1">
                      Now with Stillwater:
                    </span>
                    <p className="text-white font-medium">
                      "{item.after}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#C4B5FD]/60 flex items-center justify-between">
                <span>Verified Subscriber</span>
                <span className="flex items-center gap-1 text-[#F59E0B]">
                  <Sparkles className="w-3 h-3" /> Life Changed
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
