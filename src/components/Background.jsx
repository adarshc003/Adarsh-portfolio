import { useEffect, useRef } from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Mid orb — blue */}
      <div
        className="absolute"
        style={{
          width: '700px', height: '700px',
          top: '10%', left: '-15%',
          background: 'radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 65%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Mid orb — purple */}
      <div
        className="absolute"
        style={{
          width: '600px', height: '600px',
          top: '30%', right: '-12%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 65%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Bottom orb */}
      <div
        className="absolute"
        style={{
          width: '800px', height: '400px',
          bottom: '-5%', left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse, rgba(79,142,247,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(79,142,247,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, black 0%, transparent 80%)',
          opacity: 0.3,
        }}
      />

      {/* Horizontal line accents */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(79,142,247,0.3), transparent)' }} />
    </div>
  );
}
