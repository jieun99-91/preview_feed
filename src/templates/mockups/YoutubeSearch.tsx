import React from 'react';

export const YoutubeSearchMockup: React.FC = () => {
  return (
    <svg
      width="1280"
      height="720"
      viewBox="0 0 1280 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none', userSelect: 'none', background: '#ffffff' }}
    >
      {/* --- HEADER --- */}
      <rect width="1280" height="56" fill="#ffffff" />
      <line x1="0" y1="56" x2="1280" y2="56" stroke="#f1f1f1" strokeWidth="1" />
      
      {/* Menu & Logo */}
      <path d="M18 20H30M18 28H30M18 36H30" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round" />
      <g transform="translate(52, 16)">
        {/* YT Red Logo Icon */}
        <rect width="28" height="20" rx="4" fill="#FF0000" />
        <polygon points="12,6 18,10 12,14" fill="#ffffff" />
        <text x="34" y="15" fill="#0f0f0f" fontSize="16" fontWeight="bold" fontFamily="Roboto, Arial, sans-serif" letterSpacing="-0.5px">YouTube</text>
      </g>

      {/* Search Input Box */}
      <rect x="240" y="8" width="560" height="40" rx="20" stroke="#cccccc" strokeWidth="1" fill="#ffffff" />
      <path d="M780 8h20c11 0 20 9 20 20v0c0 11-9 20-20 20h-20V8z" fill="#f8f8f8" stroke="#cccccc" strokeWidth="1" />
      {/* Search Magnifying Icon */}
      <circle cx="798" cy="28" r="6" stroke="#0f0f0f" strokeWidth="2" />
      <line x1="802" y1="32" x2="808" y2="38" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round" />

      {/* Profile circle & Icons */}
      <circle cx="1140" cy="28" r="12" stroke="#0f0f0f" strokeWidth="2" />
      <path d="M1180 20C1180 18 1182 16 1184 16C1186 16 1188 18 1188 20V26C1190 28 1192 30 1192 32H1176C1176 30 1178 28 1180 26V20Z" fill="#0f0f0f" />
      <circle cx="1232" cy="28" r="16" fill="#e0e0e0" />


      {/* --- COLLAPSIBLE LEFT SIDEBAR --- */}
      <g transform="translate(0, 56)">
        {/* Sidebar container */}
        <rect width="216" height="664" fill="#ffffff" />
        <line x1="216" y1="0" x2="216" y2="664" stroke="#f1f1f1" strokeWidth="1" />

        {/* Menu Items */}
        <g transform="translate(12, 12)">
          {/* Home */}
          <rect x="0" y="0" width="192" height="40" rx="10" fill="#f2f2f2" />
          <text x="56" y="25" fill="#0f0f0f" fontSize="14" fontWeight="bold" fontFamily="Roboto, sans-serif">Home</text>
          <rect x="18" y="12" width="16" height="14" stroke="#0f0f0f" strokeWidth="2" />

          {/* Shorts */}
          <text x="56" y="65" fill="#0f0f0f" fontSize="14" fontFamily="Roboto, sans-serif">Shorts</text>
          <polygon points="22,50 34,57 22,64" fill="#0f0f0f" />

          {/* Subscriptions */}
          <text x="56" y="105" fill="#0f0f0f" fontSize="14" fontFamily="Roboto, sans-serif">Subscriptions</text>
          <rect x="16" y="94" width="20" height="12" rx="2" stroke="#0f0f0f" strokeWidth="2" />

          <line x1="0" y1="130" x2="192" y2="130" stroke="#f1f1f1" strokeWidth="1" />

          {/* Library */}
          <text x="56" y="160" fill="#0f0f0f" fontSize="14" fontFamily="Roboto, sans-serif">Library</text>
          <path d="M16 148v12h12v-12z" stroke="#0f0f0f" strokeWidth="2" />

          {/* History */}
          <text x="56" y="200" fill="#0f0f0f" fontSize="14" fontFamily="Roboto, sans-serif">History</text>
          <circle cx="26" cy="194" r="7" stroke="#0f0f0f" strokeWidth="2" />
          <path d="M26 190v4h3" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>


      {/* --- CONTENT CONTAINER --- */}
      {/* Header filter tags */}
      <g transform="translate(240, 72)">
        <rect x="0" y="0" width="60" height="32" rx="8" fill="#0f0f0f" />
        <text x="30" y="20" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">All</text>

        <rect x="70" y="0" width="105" height="32" rx="8" fill="#f2f2f2" />
        <text x="1225" y="20" fill="#0f0f0f" fontSize="13" fontFamily="Roboto, sans-serif" textAnchor="middle" transform="translate(-1102, 0)">UI/UX Design</text>

        <rect x="185" y="0" width="85" height="32" rx="8" fill="#f2f2f2" />
        <text x="1225" y="20" fill="#0f0f0f" fontSize="13" fontFamily="Roboto, sans-serif" textAnchor="middle" transform="translate(-997, 0)">Tutorials</text>

        <rect x="280" y="0" width="90" height="32" rx="8" fill="#f2f2f2" />
        <text x="1225" y="20" fill="#0f0f0f" fontSize="13" fontFamily="Roboto, sans-serif" textAnchor="middle" transform="translate(-900, 0)">Live Stream</text>
      </g>


      {/* --- GAP FOR SEARCH RESULT ROW 1 (y: 120 to y: 322) --- */}


      {/* --- SEARCH RESULT ROW 2 (SKELETON) --- */}
      <g transform="translate(240, 350)">
        <rect width="360" height="202" rx="8" fill="#e5e5e5" />
        <text x="376" y="20" fill="#0f0f0f" fontSize="18" fontWeight="500" fontFamily="Roboto, sans-serif">10 Figma Tips to Speed Up Your Workflow By 3x</text>
        <text x="376" y="44" fill="#606060" fontSize="12" fontFamily="Roboto, sans-serif">950K views • 6 months ago</text>
        
        {/* Creator Info */}
        <circle cx="388" cy="74" r="12" fill="#e0e0e0" />
        <text x="408" y="78" fill="#606060" fontSize="12" fontFamily="Roboto, sans-serif">Design System Pro</text>

        <text x="376" y="108" fill="#606060" fontSize="12" fontFamily="Roboto, sans-serif">In this video, we go over 10 hidden Figma tips including component properties, styles...</text>
      </g>
    </svg>
  );
};
