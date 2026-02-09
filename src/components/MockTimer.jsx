import React from 'react';

/**
 * Radial countdown timer for mock tests.
 */
const MockTimer = ({ remaining, total, running }) => {
  const progress = ((total - remaining) / total) * 100;

  return (
    <div className="relative h-32 w-32">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div
        className="absolute inset-0 rounded-full border-4 border-accent-500"
        style={{
          clipPath: `inset(${100 - progress}% 0 0 0)`
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-sm uppercase text-white/60">{running ? 'Time Left' : 'Paused'}</p>
        <p className="text-2xl font-semibold">{remaining}m</p>
      </div>
    </div>
  );
};

export default MockTimer;
