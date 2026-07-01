import React from 'react';

export const InstagramProfileMockup: React.FC = () => {
  return (
    <svg
      width="1080"
      height="1500"
      viewBox="0 0 1080 1500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none', userSelect: 'none', background: '#ffffff' }}
    >
      {/* --- TOP HEADER BAR --- */}
      {/* Back button */}
      <path d="M50 76H30M30 76L42 64M30 76L42 88" stroke="#262626" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Username at top is dynamic, overlays header */}
      
      {/* Header icons on right */}
      {/* Bell icon */}
      <path d="M910 68c0-4 3-7 7-7s7 3 7 7v10c1 2 2 3 2 5H908c0-2 1-3 2-5V68z" stroke="#262626" strokeWidth="3" fill="none" />
      
      {/* Option menu dots */}
      <circle cx="1010" cy="76" r="4" fill="#262626" />
      <circle cx="1024" cy="76" r="4" fill="#262626" />
      <circle cx="1038" cy="76" r="4" fill="#262626" />


      {/* --- PROFILE STATS LABELS --- */}
      <text x="450" y="240" fill="#8e8e8e" fontSize="20" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">posts</text>
      <text x="675" y="240" fill="#8e8e8e" fontSize="20" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">followers</text>
      <text x="905" y="240" fill="#8e8e8e" fontSize="20" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">following</text>


      {/* --- ACTIONS BUTTONS (EDIT PROFILE, SHARE, STORY) --- */}
      <g transform="translate(56, 500)">
        {/* Edit Profile Button */}
        <rect width="456" height="68" rx="8" fill="#efefef" />
        <text x="228" y="42" fill="#262626" fontSize="22" fontWeight="bold" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">Edit profile</text>

        {/* Share Profile Button */}
        <rect x="472" y="0" width="456" height="68" rx="8" fill="#efefef" />
        <text x="700" y="42" fill="#262626" fontSize="22" fontWeight="bold" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">Share profile</text>
        
        {/* Plus contact icon */}
        <rect x="944" y="0" width="80" height="68" rx="8" fill="#efefef" />
        <path d="M980 24v20M970 34h20" stroke="#262626" strokeWidth="4.5" strokeLinecap="round" />
      </g>


      {/* --- STORY HIGHLIGHTS SKELETON --- */}
      <g transform="translate(56, 595)">
        <circle cx="48" cy="48" r="48" fill="#f5f5f5" stroke="#efefef" strokeWidth="2" />
        <circle cx="48" cy="48" r="42" fill="#ffffff" />
        <path d="M48 38v20M38 48h20" stroke="#a0a0a0" strokeWidth="4" strokeLinecap="round" />
        <text x="48" y="124" fill="#262626" fontSize="18" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">New</text>

        <circle cx="196" cy="48" r="48" fill="#f5f5f5" stroke="#efefef" strokeWidth="2" />
        <circle cx="196" cy="48" r="42" fill="#e0e0e0" />
        <text x="196" y="124" fill="#262626" fontSize="18" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">Highlights</text>

        <circle cx="344" cy="48" r="48" fill="#f5f5f5" stroke="#efefef" strokeWidth="2" />
        <circle cx="344" cy="48" r="42" fill="#e0e0e0" />
        <text x="344" y="124" fill="#262626" fontSize="18" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="middle">Moments</text>
      </g>


      {/* --- TABS HEADER (POSTS, REELS, TAGGED) --- */}
      <g transform="translate(0, 755)">
        <line x1="0" y1="0" x2="1080" y2="0" stroke="#efefef" strokeWidth="2" />
        
        {/* Posts Tab (Active) */}
        {/* Grid Icon */}
        <g transform="translate(144, 20)" stroke="#0095f6" strokeWidth="3" fill="none">
          <rect x="0" y="0" width="24" height="24" rx="2" />
          <line x1="8" y1="0" x2="8" y2="24" />
          <line x1="16" y1="0" x2="16" y2="24" />
          <line x1="0" y1="8" x2="24" y2="8" />
          <line x1="0" y1="16" x2="24" y2="16" />
        </g>
        <line x1="0" y1="65" x2="360" y2="65" stroke="#262626" strokeWidth="4" />

        {/* Reels Tab */}
        <g transform="translate(528, 20)" stroke="#8e8e8e" strokeWidth="3" fill="none">
          <rect x="0" y="0" width="24" height="24" rx="4" />
          <polygon points="10,8 16,12 10,16" fill="#8e8e8e" />
        </g>

        {/* Tagged Tab */}
        <g transform="translate(912, 20)" stroke="#8e8e8e" strokeWidth="3" fill="none">
          <path d="M12 4a5 5 0 0 1 5 5c0 4-5 11-5 11s-5-7-5-11a5 5 0 0 1 5-5z" />
          <circle cx="12" cy="9" r="2" />
        </g>

        <line x1="0" y1="65" x2="1080" y2="65" stroke="#efefef" strokeWidth="2" />
      </g>


      {/* --- GRID ITEMS WRAPPER --- */}
      {/* Cells are rendered dynamically in canvas layers */}
      {/* We add divider spacing lines to make sure grid cells look perfectly divided if backgrounds bleed */}
      <line x1="359" y1="820" x2="359" y2="1500" stroke="#ffffff" strokeWidth="6" />
      <line x1="721" y1="820" x2="721" y2="1500" stroke="#ffffff" strokeWidth="6" />
      <line x1="0" y1="1176" x2="1080" y2="1176" stroke="#ffffff" strokeWidth="6" />
    </svg>
  );
};
