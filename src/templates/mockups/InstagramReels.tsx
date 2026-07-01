import React from 'react';

export const InstagramReelsMockup: React.FC = () => {
  return (
    <svg
      width="1080"
      height="1920"
      viewBox="0 0 1080 1920"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none', userSelect: 'none' }}
    >
      {/* --- BOTTOM GRADIENT SHADOW (FOR READABILITY) --- */}
      <defs>
        <linearGradient id="bottomShadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="50%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <rect x="0" y="1200" width="1080" height="720" fill="url(#bottomShadow)" />


      {/* --- PHONE STATUS BAR (WHITE FOR DARK BG) --- */}
      <text x="80" y="80" fill="#ffffff" fontSize="32" fontWeight="bold" fontFamily="-apple-system, sans-serif">09:41</text>
      
      {/* Battery, Wifi, Cell signal (white) */}
      <g transform="translate(880, 52)" fill="#ffffff">
        <rect x="0" y="10" width="6" height="18" rx="2" />
        <rect x="12" y="5" width="6" height="23" rx="2" />
        <rect x="24" y="0" width="6" height="28" rx="2" />
        <circle cx="48" cy="14" r="7" />
        {/* Battery */}
        <rect x="68" y="2" width="46" height="24" rx="6" stroke="#ffffff" strokeWidth="2.5" fill="none" />
        <rect x="73" y="6" width="30" height="16" rx="3.5" />
        <rect x="115" y="9" width="3" height="10" rx="1.5" />
      </g>


      {/* --- TOP HEADER (REELS TEXT) --- */}
      <g transform="translate(48, 140)">
        <text x="0" y="32" fill="#ffffff" fontSize="44" fontWeight="bold" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">Reels</text>
        {/* Camera icon */}
        <path d="M1000 0h-30l-6-8h-24l-6 8h-30c-5.5 0-10 4.5-10 10v48c0 5.5 4.5 10 10 10h96c5.5 0 10-4.5 10-10v-48c0-5.5-4.5-10-10-10z" fill="none" stroke="#ffffff" strokeWidth="4.5" transform="translate(-140, -10)" />
        <circle cx="952" cy="24" r="16" fill="none" stroke="#ffffff" strokeWidth="4.5" transform="translate(-140, -10)" />
      </g>


      {/* --- RIGHT OVERLAY SIDEBAR (HEART, COMMENT, SEND, MORE) --- */}
      <g transform="translate(916, 960)">
        {/* Like Heart Icon */}
        <path d="M40 34c-4.4-4.4-11.6-4.4-16 0s-4.4 11.6 0 16l16 16 16-16c4.4-4.4 4.4-11.6 0-16s-11.6-4.4-16 0z" stroke="#ffffff" strokeWidth="4.5" strokeLinejoin="round" fill="none" transform="translate(-16, 0)" />
        
        {/* Comment Icon */}
        <path d="M40 24H8c-4.4 0-8 3.6-8 8v24c0 4.4 3.6 8 8 8h8l8 8v-8h16c4.4 0 8-3.6 8-8V32c0-4.4-3.6-8-8-8z" stroke="#ffffff" strokeWidth="4.5" strokeLinejoin="round" fill="none" transform="translate(-16, 170)" />
        
        {/* Send Airplane Icon */}
        <path d="M50 0L0 22l20 7 7 20 23-49z" stroke="#ffffff" strokeWidth="4.5" strokeLinejoin="round" fill="none" transform="translate(-20, 340)" />

        {/* Three Dots (More) */}
        <circle cx="24" cy="510" r="4.5" fill="#ffffff" />
        <circle cx="24" cy="528" r="4.5" fill="#ffffff" />
        <circle cx="24" cy="546" r="4.5" fill="#ffffff" />

        {/* Music Album Disk Rotation Frame */}
        <circle cx="24" cy="710" r="32" fill="#262626" stroke="#ffffff" strokeWidth="3" />
        <circle cx="24" cy="710" r="12" fill="#121212" />
      </g>


      {/* --- BOTTOM CREATOR INFO ALIGNMENTS --- */}
      <g transform="translate(48, 1560)">
        {/* Music note icon next to audio */}
        <path d="M60 206h6v-14c0-2 2-3 4-3h4v-3h-6c-2 0-4 1.5-4 3.5v16.5zm0 0c0 2-1.5 3-3.5 3S53 207.8 53 206s1.5-3.5 3.5-3.5H60z" fill="#ffffff" />
        
        {/* Follow pill */}
        <rect x="350" y="12" width="105" height="38" rx="8" stroke="#ffffff" strokeWidth="2.5" fill="none" />
        <text x="402" y="37" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">Follow</text>
      </g>
    </svg>
  );
};
