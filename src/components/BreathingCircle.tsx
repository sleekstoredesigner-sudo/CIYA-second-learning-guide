import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw, Volume2, VolumeX } from 'lucide-react';

interface BreathingCircleProps {
  interactiveControls?: boolean;
  size?: 'normal' | 'small' | 'large';
  showSubtext?: boolean;
}

export const BreathingCircle: React.FC<BreathingCircleProps> = ({
  interactiveControls = true,
  size = 'normal',
  showSubtext = true,
}) => {
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [secondsLeft, setSecondsLeft] = useState<number>(4);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // 12-second total cycle: 0-4s Inhale, 4-8s Hold, 8-12s Exhale
  useEffect(() => {
    if (!isActive) return;

    let totalSeconds = 0;
    const interval = setInterval(() => {
      totalSeconds = (totalSeconds + 1) % 12;

      if (totalSeconds < 4) {
        setPhase('Inhale');
        setSecondsLeft(4 - totalSeconds);
      } else if (totalSeconds < 8) {
        setPhase('Hold');
        setSecondsLeft(8 - totalSeconds);
      } else {
        setPhase('Exhale');
        setSecondsLeft(12 - totalSeconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  // Dimensions based on size prop
  const containerSize = size === 'small' ? 'w-48 h-48' : size === 'large' ? 'w-80 h-80 sm:w-96 sm:h-96' : 'w-64 h-64 sm:w-80 sm:h-80';
  const innerCircleSize = size === 'small' ? 'w-32 h-32' : size === 'large' ? 'w-56 h-56 sm:w-64 sm:h-64' : 'w-44 h-44 sm:w-56 sm:h-56';

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Outer Glow Ambient Field */}
      <div className={`relative ${containerSize} flex items-center justify-center`}>
        {/* Outer Ring: Lavender, 0.2 opacity, scale 1 -> 1.5 */}
        <div
          className={`absolute inset-0 rounded-full border border-[#C4B5FD]/30 bg-[#C4B5FD]/10 blur-sm ${
            isActive ? 'animate-breathe-outer' : 'scale-100 opacity-20'
          }`}
        />

        {/* Middle Ring: Purple, 0.4 opacity, scale 1 -> 1.3 */}
        <div
          className={`absolute inset-4 rounded-full border-2 border-[#7C3AED]/50 bg-[#7C3AED]/20 blur-[2px] ${
            isActive ? 'animate-breathe-middle' : 'scale-100 opacity-40'
          }`}
        />

        {/* Inner Ring: White & Gold Soft Filled Core */}
        <div
          className={`relative ${innerCircleSize} rounded-full bg-gradient-to-br from-white/90 via-[#C4B5FD]/80 to-[#7C3AED]/90 p-[2px] shadow-[0_0_50px_rgba(124,58,237,0.5)] ${
            isActive ? 'animate-breathe-inner' : 'scale-100'
          }`}
        >
          {/* Solid Inner Core Glass Disk */}
          <div className="w-full h-full rounded-full bg-[#0A0015]/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 text-center border border-white/20">
            {/* Phase Text */}
            <span className="text-xs uppercase tracking-[0.25em] text-[#F59E0B] font-semibold mb-1">
              4-4-4 Guide
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide transition-all duration-300">
              {phase === 'Inhale' && 'Breathe In'}
              {phase === 'Hold' && 'Hold'}
              {phase === 'Exhale' && 'Breathe Out'}
            </span>

            {/* Countdown timer */}
            <span className="text-sm font-medium text-[#C4B5FD]/90 mt-1">
              {secondsLeft}s
            </span>

            {showSubtext && (
              <span className="text-[10px] text-[#C4B5FD]/60 mt-1">
                Deep Diaphragmatic Loop
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Controls Overlay */}
      {interactiveControls && (
        <div className="mt-6 flex items-center gap-3 bg-[#1A0535]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#7C3AED]/40 shadow-lg">
          <button
            onClick={() => setIsActive(!isActive)}
            className="p-2 rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-transform active:scale-95 flex items-center gap-1.5 text-xs font-semibold"
            title={isActive ? 'Pause Guide' : 'Start Guide'}
          >
            {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            <span>{isActive ? 'Pause' : 'Start'}</span>
          </button>

          <button
            onClick={() => {
              setPhase('Inhale');
              setSecondsLeft(4);
            }}
            className="p-2 rounded-full hover:bg-white/10 text-[#C4B5FD] transition-colors"
            title="Reset Cycle"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <div className="w-px h-4 bg-white/20" />

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-full hover:bg-white/10 text-[#C4B5FD] transition-colors flex items-center gap-1 text-xs"
            title={isMuted ? 'Enable Ambient Chime' : 'Mute Chime'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#F59E0B]" />}
            <span className="text-[11px] hidden sm:inline">{isMuted ? 'Chime Off' : 'Chime On'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
