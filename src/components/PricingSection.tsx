import React, { useState } from 'react';
import { Check, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onOpenDownloadModal: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDownloadModal }) => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  const plans: PricingPlan[] = [
    {
      id: 'free-plan',
      name: 'Free Forever',
      monthlyPrice: 0,
      annualPricePerMonth: 0,
      annualTotalPrice: 0,
      popular: false,
      features: [
        '15 guided meditations',
        '5 immersive sleep stories',
        'Basic 4-4-4 breathing guide',
        'Daily 5-minute reminder',
        'Community access',
      ],
      ctaText: 'Start Free Forever',
    },
    {
      id: 'plus-plan',
      name: 'Stillwater Plus',
      monthlyPrice: 9.99,
      annualPricePerMonth: 4.99, // $59.99 / yr
      annualTotalPrice: 59.99,
      popular: true,
      features: [
        'Full 500+ meditation library',
        'Unlimited sleep stories & music',
        'Offline audio downloads',
        'Zero ads & uninterrupted flow',
        'Binaural beats & 432Hz tracks',
        'Advanced streak & HRV analytics',
      ],
      ctaText: 'Start 14-Day Free Trial',
    },
    {
      id: 'family-plan',
      name: 'Stillwater Family',
      monthlyPrice: 14.99,
      annualPricePerMonth: 7.49, // $89.99 / yr
      annualTotalPrice: 89.99,
      popular: false,
      features: [
        'Up to 6 individual accounts',
        'All Plus features included',
        'Kids mindfulness & sleep stories',
        'Family activity insights',
        'Shared playlist curation',
        'Priority 24/7 care support',
      ],
      ctaText: 'Start Family Trial',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#1A0535] text-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B] bg-[#F59E0B]/10 px-3.5 py-1 rounded-full border border-[#F59E0B]/30">
            Accessible Wellness
          </span>
          <h2 className="text-3xl sm:text-5xl font-[800] text-white font-['Outfit'] tracking-tight">
            Invest in your peace of mind.
          </h2>
          <p className="text-base sm:text-lg text-[#C4B5FD]/90">
            Cancel anytime in one tap. No hidden commitments.
          </p>

          {/* Monthly / Annual Toggle with Odometer Feel */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-[#C4B5FD]/70'}`}>
              Monthly
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-[#0A0015] p-1 border border-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-colors focus:outline-none"
              aria-label="Toggle billing interval"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] shadow-md transform transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold transition-colors ${isAnnual ? 'text-white' : 'text-[#C4B5FD]/70'}`}>
                Annual Billing
              </span>
              <span className="text-[11px] font-bold text-[#0A0015] bg-[#F59E0B] px-2.5 py-0.5 rounded-full shadow-sm">
                Save 50%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const displayPrice = isAnnual ? plan.annualPricePerMonth : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#2B0952] to-[#120224] border-2 border-[#7C3AED] shadow-[0_0_40px_rgba(124,58,237,0.5)] transform md:-translate-y-3 z-20'
                    : 'bg-[#0A0015]/80 border border-[#7C3AED]/30 hover:border-[#7C3AED] shadow-xl'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0A0015] font-extrabold text-xs tracking-wider uppercase shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-[#0A0015]" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Outfit']">{plan.name}</h3>

                  {/* Price Header with Odometer Transition */}
                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-[800] text-white font-['Outfit'] transition-all">
                        ${displayPrice === 0 ? '0' : displayPrice.toFixed(2)}
                      </span>
                      <span className="text-sm text-[#C4B5FD]">
                        {displayPrice === 0 ? 'forever' : '/ mo'}
                      </span>
                    </div>

                    {isAnnual && plan.annualTotalPrice > 0 && (
                      <p className="text-xs text-[#F59E0B] mt-1 font-semibold">
                        Billed as ${plan.annualTotalPrice}/yr (Save ${(plan.monthlyPrice * 12 - plan.annualTotalPrice).toFixed(2)})
                      </p>
                    )}
                  </div>

                  <div className="w-full h-px bg-white/10 my-6" />

                  {/* Feature List */}
                  <ul className="space-y-3.5 mb-8 text-sm text-[#C4B5FD]">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#7C3AED]/30 border border-[#7C3AED] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-white/90 font-normal">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenDownloadModal(plan.name)}
                  className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 transform active:scale-95 shadow-lg flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_25px_rgba(124,58,237,0.6)]'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantees / Trust Badges */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs text-[#C4B5FD]/80">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
            <span>14-day money back guarantee · No questions asked</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#7C3AED]" />
            <span>Family plan includes 6 separate private accounts</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C4B5FD]" />
            <span>Cancel anytime from your iPhone or Android settings</span>
          </div>
        </div>

      </div>
    </section>
  );
};
