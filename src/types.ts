export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  badge?: string;
  description: string;
  details: string;
  duration?: string;
  previewAudioType?: 'binaural' | 'nature' | 'sleep';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  flag: string;
  streak: string;
  rating: number;
  avatarUrl: string;
  before: string;
  after: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  annualTotalPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface AudioTrack {
  id: string;
  name: string;
  tagline: string;
  type: 'binaural' | 'nature' | 'sleep';
  hzText: string;
  duration: string;
  description: string;
}
