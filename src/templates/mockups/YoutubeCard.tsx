import React from 'react';

export const YoutubeCardMockup: React.FC = () => {
  return (
    <svg
      width="1400"
      height="1127"
      viewBox="0 0 1400 1127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none', userSelect: 'none', background: '#ffffff' }}
    >
      {/* Container Background (Card) */}
      <rect width="1400" height="1127" fill="#ffffff" />

      {/* Placeholder Outline for Thumbnail */}
      <rect x="67" y="70" width="1266" height="731" rx="12" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" />

      {/* Profile Avatar Placeholder Outline */}
      <circle cx="110" cy="868" r="43" fill="#e9ecef" />

      {/* YouTube Options (Three Vertical Dots) */}
      <g fill="#030303">
        <circle cx="1328.5" cy="829.5" r="4.5" />
        <circle cx="1328.5" cy="844.5" r="4.5" />
        <circle cx="1328.5" cy="859.5" r="4.5" />
      </g>
    </svg>
  );
};
export default YoutubeCardMockup;
