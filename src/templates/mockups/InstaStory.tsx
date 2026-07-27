import React from 'react';

export const InstaStoryMockup: React.FC = () => {
  return (
    <svg
      width="1080"
      height="1960"
      viewBox="0 0 1080 1960"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none', userSelect: 'none' }}
    >
      {/* Top Story Progress Bars (Vector 3 & Vector 4 in Figma logs) */}
      {/* We draw segments of white bars to represent active and pending stories */}
      <g transform="translate(36, 56)">
        {/* Active story line */}
        <rect x="0" y="0" width="758" height="6" rx="3" fill="#ffffff" />
        {/* Next stories lines */}
        <rect x="774" y="0" width="270" height="6" rx="3" fill="#ffffff" fillOpacity="0.4" />
      </g>

      {/* Profile Avatar Outer Border (Figma Frame 186) */}
      <circle cx="76" cy="124" r="45" stroke="#ffffff" strokeWidth="2.5" fill="none" />

      {/* Header Option Dots (Ellipse 37, 38, 39 at relative x: 887, y: 119) */}
      <g fill="#ffffff">
        <circle cx="891.5" cy="123" r="4.5" />
        <circle cx="908.5" cy="123" r="4.5" />
        <circle cx="925.5" cy="123" r="4.5" />
      </g>

      {/* Close button 'X' (Vector 2 in Figma logs at relative x: 993, y: 98) */}
      <g stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" transform="translate(993, 98)">
        <line x1="12" y1="12" x2="42" y2="42" />
        <line x1="42" y1="12" x2="12" y2="42" />
      </g>
    </svg>
  );
};
export default InstaStoryMockup;
