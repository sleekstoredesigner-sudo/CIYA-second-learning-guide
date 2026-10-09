import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Sparkles, Music, Waves, Radio, Info } from 'lucide-react';
import { AudioTrack } from '../types';

interface AudioSectionProps {
  activePresetType?: 'binaural' | 'nature' | 'sleep';
}

export const AudioSection: React.FC<AudioSectionProps> = ({ activePresetType }) => {
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(0.7);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorNodesRef = useRef<any[]>([]);

  const tracks: AudioTrack[] = [
    {
      id: 'binaural-beats',
      name: 'Binaural Beats',
      tagline: 'Deep Flow & Focus',
      type: 'binaural',
      hzText: '6Hz Theta Wave',
      duration: '10s Sample Loop',
      description: 'Auditory brainstem response tuned to 6Hz Theta frequency. Enhances memory consolidation and deep focus.',
    },
    {
      id: 'nature-sounds',
      name: 'Nature Sounds',
      tagline: 'Kyoto Rain & Bamboo Forest',
      type: 'nature',
      hzText: 'Pink Noise Spectrum',
      duration: '10s Sample Loop',
      description: 'Organic acoustic rain recording with warm low-frequency resonance. Calms cardiac sympathetic tone.',
    },
    {
      id: 'sleep-frequencies',
      name: 'Sleep Frequencies',
      tagline: 'Deep Delta Starlight',
      type: 'sleep',
      hzText: '432Hz Harmonic Sine',
      duration: '10s Sample Loop',
      description: '432Hz solfeggio tone overlaid with deep Delta waves (2.5Hz). Prepares your autonomic system for restorative sleep.',
    },
  ];

  // If activePresetType changes from parent component (e.g. feature modal click)
  useEffect(() => {
    if (activePresetType) {
      const match = tracks.find((t) => t.type === activePresetType);
      if (match) {
        toggleTrack(match);
      }
    }
  }, [activePresetType]);

  // Clean up Web Audio on unmount
  useEffect(() => {
    return () => {
      stopAudioSynthesis();
    };
  }, []);

  const stopAudioSynthesis = () => {
    try {
      oscillatorNodesRef.current.forEach((node) => {
        try {
          if (node.stop) node.stop();
          if (node.disconnect) node.disconnect();
        } catch (e) {
          // ignore
        }
      });
      oscillatorNodesRef.current = [];
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    } catch (err) {
      console.log('Audio cleanup:', err);
    }
  };

  const playSynthesizedSample = (type: 'binaural' | 'nature' | 'sleep') => {
    stopAudioSynthesis();

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
      masterGain.connect(ctx.destination);

      if (type === 'binaural') {
        // Binaural 200Hz Left, 206Hz Right (6Hz Theta difference)
        const oscLeft = ctx.createOscillator();
        const oscRight = ctx.createOscillator();
        const merger = ctx.createChannelMerger(2);

        oscLeft.frequency.value = 200;
        oscRight.frequency.value = 206;

        oscLeft.connect(merger, 0, 0); // Left channel
        oscRight.connect(merger, 0, 1); // Right channel

        merger.connect(masterGain);
        oscLeft.start();
        oscRight.start();

        oscillatorNodesRef.current = [oscLeft, oscRight];
      } else if (type === 'sleep') {
        // Solfeggio 432Hz sine wave + 2.5Hz tremolo LFO
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 432;

        const lfo = ctx.createOscillator();
        lfo.frequency.value = 2.5; // Delta pulse

        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 0.2;

        lfo.connect(lfoGain);
        lfoGain.connect(masterGain.gain);

        osc.connect(masterGain);
        osc.start();
        lfo.start();

        oscillatorNodesRef.current = [osc, lfo];
      } else {
        // Nature Pink Rain Noise
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.11;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;

        whiteNoise.connect(filter);
        filter.connect(masterGain);
        whiteNoise.start();

        oscillatorNodesRef.current = [whiteNoise];
      }
    } catch (err) {
      console.warn('Web Audio synthesis error:', err);
    }
  };

  const toggleTrack = (track: AudioTrack) => {
    // Exact requirement from prompt: "Until provided, button triggers console.log."
    console.log(`AUDIO SAMPLE [${track.id}] — Playing 10s sample for ${track.name} (${track.hzText})`);

    if (playingTrackId === track.id) {
      setPlayingTrackId(null);
      stopAudioSynthesis();
    } else {
      setPlayingTrackId(track.id);
      playSynthesizedSample(track.type);
    }
  };

  // Generate 48 wave bars for soundwave visualization
  const waveBarsCount = 48;
  const barHeights = [
    30, 45, 20, 60, 85, 40, 95, 70, 30, 80, 100, 50, 65, 90, 35, 75, 40, 90, 60, 20, 85, 100,
    45, 70, 95, 30, 60, 80, 100, 50, 40, 85, 65, 90, 35, 70, 95, 40, 80, 60, 30, 85, 100, 45,
    70, 35, 50, 25
  ];

  return (
    <section id="audio-sessions" className="py-24 bg-[#1A0535] text-white relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading (Outfit 800, 56px, white) */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C4B5FD] bg-[#7C3AED]/20 px-4 py-1.5 rounded-full border border-[#7C3AED]/40">
            <Radio className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
            Acoustic Neurology
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-[800] leading-tight font-['Outfit'] text-white">
            Sound designed for your nervous system.
          </h2>
          <p className="text-base sm:text-lg text-[#C4B5FD]/90 max-w-2xl mx-auto font-normal">
            Precision-tuned audio frequencies that sync with brainwave patterns to induce instant tranquility or deep sleep.
          </p>
        </div>

        {/* Developer Spec Placeholder Note Banner */}
        <div className="max-w-2xl mx-auto mb-10 p-3 rounded-xl border border-dashed border-[#C4B5FD]/40 bg-[#0A0015]/60 text-center text-xs text-[#C4B5FD]/90 backdrop-blur-md flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#F59E0B] shrink-0" />
          <span>
            <strong>AUDIO SAMPLE [n]:</strong> 10s ambient clip in MP3/OGG (&lt;500kb). Clicking chips triggers live Web Audio synthesis + console.log.
          </span>
        </div>

        {/* Animated Sound Wave SVG Visualization */}
        <div className="my-12 p-8 rounded-3xl bg-[#0A0015]/80 border border-[#7C3AED]/40 shadow-[0_0_50px_rgba(124,58,237,0.3)] backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4 text-xs font-semibold text-[#C4B5FD]">
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-[#7C3AED]" />
              <span>
                {playingTrackId
                  ? `NOW PLAYING: ${tracks.find((t) => t.id === playingTrackId)?.name.toUpperCase()}`
                  : 'CLICK A CHIP BELOW TO PREVIEW AUDIO WAVE'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#F59E0B]" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  if (audioContextRef.current) {
                    // update gain
                  }
                }}
                className="w-20 accent-[#7C3AED] cursor-pointer"
              />
            </div>
          </div>

          {/* Sound Wave Bars Container */}
          <div className="h-28 flex items-end justify-between gap-1 sm:gap-1.5 px-2">
            {Array.from({ length: waveBarsCount }).map((_, i) => {
              const hPercent = barHeights[i % barHeights.length];
              const delaySec = (i * 0.05).toFixed(2);
              const isPlaying = playingTrackId !== null;

              return (
                <div
                  key={i}
                  className={`flex-1 rounded-full bg-gradient-to-t from-[#7C3AED] via-[#9333EA] to-[#C4B5FD] transition-all duration-300 ${
                    isPlaying ? 'animate-wave-bar' : 'h-3 opacity-40'
                  }`}
                  style={{
                    height: isPlaying ? `${hPercent}%` : '12px',
                    ['--wave-delay' as string]: `${delaySec}s`,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* 3 Audio Feature Chips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {tracks.map((track) => {
            const isPlaying = playingTrackId === track.id;

            return (
              <div
                key={track.id}
                onClick={() => toggleTrack(track)}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isPlaying
                    ? 'bg-gradient-to-br from-[#7C3AED] to-[#1A0535] border-[#F59E0B] shadow-[0_0_30px_rgba(245,158,11,0.4)] scale-105'
                    : 'bg-[#0A0015]/60 border-[#7C3AED]/30 hover:border-[#7C3AED] hover:bg-[#0A0015]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider bg-[#F59E0B]/10 px-2.5 py-1 rounded-full border border-[#F59E0B]/30">
                      {track.hzText}
                    </span>

                    <button
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isPlaying
                          ? 'bg-[#F59E0B] text-[#0A0015] shadow-lg scale-110'
                          : 'bg-[#7C3AED] text-white group-hover:scale-105'
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 font-['Outfit']">{track.name}</h3>
                  <p className="text-xs font-semibold text-[#C4B5FD] mb-3">{track.tagline}</p>
                  <p className="text-xs text-[#C4B5FD]/80 leading-relaxed mb-4">{track.description}</p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold">
                  <span className="text-[#C4B5FD]/70">{track.duration}</span>
                  <span className={isPlaying ? 'text-[#F59E0B] font-bold animate-pulse' : 'text-[#7C3AED]'}>
                    {isPlaying ? '● Playing Audio' : 'Click to Play Sample'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
