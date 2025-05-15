import React from 'react';

export const GridPatternPlaceholder = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
      {Array(100).fill(null).map((_, i) => (
        <div key={i} className="border border-white/5" />
      ))}
    </div>
  );
};