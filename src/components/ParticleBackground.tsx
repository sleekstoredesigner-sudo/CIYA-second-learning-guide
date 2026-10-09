import React, { useMemo } from 'react';

interface Particle {
  id: number;
  top: number;
  left: number;
  size: number;
  dx: number;
  dy: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const ParticleBackground: React.FC = () => {
  // Generate 60 deterministic/random particles
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      // pseudo-random generation based on index seed for consistent feel
      const seed = (i + 1) * 9301 + 49297;
      const rnd1 = (seed % 233280) / 233280;
      const rnd2 = ((seed * 7) % 233280) / 233280;
      const rnd3 = ((seed * 13) % 233280) / 233280;
      const rnd4 = ((seed * 17) % 233280) / 233280;

      return {
        id: i,
        top: Math.floor(rnd1 * 100),
        left: Math.floor(rnd2 * 100),
        size: Math.floor(rnd3 * 2.5) + 1, // 1px to 3px
        dx: Math.floor(rnd4 * 80) - 40,   // -40px to +40px
        dy: Math.floor(rnd1 * -120) - 20, // -20px to -140px upward drift
        duration: 8 + Math.floor(rnd2 * 12), // 8s to 20s
        delay: Math.floor(rnd3 * 10),     // 0s to 10s
        opacity: 0.15 + rnd4 * 0.55,      // 0.15 to 0.7
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white animate-particle shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            ['--dx' as string]: `${p.dx}px`,
            ['--dy' as string]: `${p.dy}px`,
            ['--duration' as string]: `${p.duration}s`,
            ['--delay' as string]: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
