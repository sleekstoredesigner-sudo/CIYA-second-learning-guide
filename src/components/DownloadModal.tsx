import React, { useState } from 'react';
import { X, QrCode, Smartphone, Send, CheckCircle2, Star, Sparkles, Download } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlatform?: 'ios' | 'android' | string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, defaultPlatform = 'ios' }) => {
  const [platform, setPlatform] = useState<'ios' | 'android'>(
    defaultPlatform === 'android' ? 'android' : 'ios'
  );
  const [phone, setPhone] = useState('');
  const [sentSms, setSentSms] = useState(false);

  if (!isOpen) return null;

  const handleSendSms = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSentSms(true);
    setTimeout(() => {
      setSentSms(false);
      setPhone('');
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0015]/90 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#1A0535] border border-[#7C3AED] p-8 shadow-[0_0_60px_rgba(124,58,237,0.6)] text-white">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-[#C4B5FD] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#7C3AED] flex items-center justify-center mx-auto mb-3 shadow-lg">
            <Download className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold font-['Outfit']">Get Stillwater App</h3>
          <p className="text-xs text-[#C4B5FD] mt-1">Available in 190 countries · 4.9★ Rated (2M+ Reviews)</p>
        </div>

        {/* Platform Tabs */}
        <div className="flex rounded-2xl bg-[#0A0015] p-1.5 border border-[#7C3AED]/40 mb-6">
          <button
            onClick={() => setPlatform('ios')}
            className={`flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              platform === 'ios'
                ? 'bg-[#7C3AED] text-white shadow-md'
                : 'text-[#C4B5FD] hover:text-white'
            }`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.9-14.37-6.08-3.37-2.73-7.22-7.38-11.57-13.96-7.3-11.06-12.83-23.11-16.59-36.14-3.76-13.04-5.64-25.07-5.64-36.1 0-14.78 3.82-27.18 11.45-37.19 7.64-10.01 17.39-15.08 29.28-15.22 4.47 0 9.59 1.16 15.36 3.48 5.78 2.32 9.69 3.53 11.75 3.64 1.84 0 5.86-1.27 12.06-3.8 6.2-2.53 11.4-3.69 15.6-3.48 11.41.6 20.88 4.8 28.4 12.6-10.12 6.1-15.06 14.7-14.83 25.8.23 8.7 3.63 16.03 10.2 22 6.57 5.97 14.4 9.29 23.5 9.96-2.52 7.62-5.94 15.03-10.26 22.22zM119.22 31.83c0-7.07 2.6-13.72 7.8-19.95 5.2-6.23 11.7-9.87 19.5-10.92.23.97.35 1.95.35 2.93 0 7.29-2.67 14.07-8.01 20.35-5.34 6.27-11.89 9.88-19.64 10.82-.23-.97-.35-1.95-.35-2.93z" />
            </svg>
            <span>Apple App Store</span>
          </button>

          <button
            onClick={() => setPlatform('android')}
            className={`flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              platform === 'android'
                ? 'bg-[#C4B5FD] text-[#0A0015] shadow-md'
                : 'text-[#C4B5FD] hover:text-white'
            }`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.09.86.27l12.87 8.36c.64.42.82 1.28.4 1.92-.1.16-.24.3-.4.4L5.36 21.23c-.25.18-.55.27-.86.27-.83 0-1.5-.67-1.5-1.5zm1.5-16.14v15.28l11.08-7.64L4.5 4.36z" />
            </svg>
            <span>Google Play</span>
          </button>
        </div>

        {/* QR Code + Direct Link */}
        <div className="p-6 rounded-2xl bg-[#0A0015]/80 border border-white/10 flex flex-col sm:flex-row items-center gap-6 mb-6">
          {/* Simulated QR Code */}
          <div className="w-28 h-28 rounded-xl bg-white p-2.5 shrink-0 flex flex-col items-center justify-center shadow-inner text-black">
            <QrCode className="w-full h-full text-black" />
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white mb-1">Scan to Install</h4>
            <p className="text-xs text-[#C4B5FD] mb-3">
              Point your phone camera at the QR code to open {platform === 'ios' ? 'iOS App Store' : 'Google Play Store'} immediately.
            </p>
            <a
              href={platform === 'ios' ? 'https://apps.apple.com' : 'https://play.google.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:underline"
            >
              <span>Direct Store Link</span>
              <Smartphone className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Text me a link form */}
        <form onSubmit={handleSendSms} className="space-y-3">
          <label className="block text-xs font-semibold text-[#C4B5FD]">
            Or text a direct download link to your phone:
          </label>
          <div className="flex gap-2">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="flex-1 bg-[#0A0015] border border-[#7C3AED]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-[#C4B5FD]/40 focus:outline-none focus:border-[#7C3AED]"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shrink-0 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Link</span>
            </button>
          </div>

          {sentSms && (
            <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>Direct download link sent to {phone}! Check your SMS messages.</span>
            </p>
          )}
        </form>

        <div className="mt-6 pt-4 border-t border-white/10 text-center text-[11px] text-[#C4B5FD]/70">
          Instant installation · Free plan included · No credit card required
        </div>
      </div>
    </div>
  );
};
