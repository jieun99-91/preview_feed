import React from 'react';

export const YoutubeMobileMockup: React.FC = () => {
  return (
    <svg
      width="390"
      height="844"
      viewBox="0 0 390 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none', userSelect: 'none', background: '#ffffff' }}
    >
      {/* --- PHONE STATUS BAR --- */}
      <rect width="390" height="44" fill="#ffffff" />
      <text x="32" y="28" fill="#000000" fontSize="14" fontWeight="bold" fontFamily="-apple-system, sans-serif" textAnchor="middle">09:41</text>
      
      {/* Battery, Wifi, Cell signal */}
      <g transform="translate(320, 16)">
        {/* Cell */}
        <rect x="0" y="4" width="3" height="8" rx="1" fill="#000000" />
        <rect x="5" y="2" width="3" height="10" rx="1" fill="#000000" />
        <rect x="10" y="0" width="3" height="12" rx="1" fill="#000000" />
        {/* Wifi (arc paths simplified to dots) */}
        <circle cx="20" cy="6" r="3" fill="#000000" />
        {/* Battery */}
        <rect x="28" y="1" width="20" height="10" rx="3" stroke="#000000" strokeWidth="1" />
        <rect x="30" y="3" width="13" height="6" rx="1.5" fill="#000000" />
        <rect x="49" y="4" width="1.5" height="4" rx="0.5" fill="#000000" />
      </g>


      {/* --- APP HEADER --- */}
      <g transform="translate(0, 44)">
        {/* Back arrow */}
        <path d="M24 24H12M12 24L18 18M12 24L18 30" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Cast icon */}
        <rect x="240" y="15" width="20" height="15" rx="2" stroke="#0f0f0f" strokeWidth="2" />
        <path d="M242 28a4 4 0 0 1 4-4" stroke="#0f0f0f" strokeWidth="2" />
        
        {/* Notification bell */}
        <path d="M288 18c0-2 2-3 4-3s4 1 4 3v4c2 2 3 3 3 5H279c0-2 1-3 3-5v-4z" fill="#0f0f0f" />
        
        {/* Search magnifying glass */}
        <circle cx="334" cy="22" r="5" stroke="#0f0f0f" strokeWidth="2" />
        <line x1="338" y1="26" x2="344" y2="32" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round" />
        
        {/* Profile dot */}
        <circle cx="370" cy="24" r="10" fill="#e0e0e0" />
      </g>


      {/* --- COMPONENT GAP FOR PLAYER --- */}
      {/* (y: 92 to y: 311 is the video-thumbnail layer) */}


      {/* --- ACTION ROW --- */}
      <g transform="translate(12, 452)">
        {/* Subscribe button */}
        <rect x="270" y="0" width="96" height="32" rx="16" fill="#0f0f0f" />
        <text x="318" y="20" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">Subscribe</text>

        {/* Action Pills */}
        <g transform="translate(0, 44)">
          {/* Like/Dislike */}
          <rect x="0" y="0" width="120" height="32" rx="16" fill="#f2f2f2" />
          <path d="M12 18v-5c0-.8.5-1.5 1.2-1.5h1.8c.4 0 .7-.3.9-.6l.6-1.9c.2-.6.7-1 1.4-1h.5c.5 0 .9.4.9.9v3.7H12zm8.2 0h1.4c.5 0 .9-.4.9-.9v-2.2c0-.5-.4-.9-.9-.9h-1.4V18z" fill="#0f0f0f" />
          <text x="36" y="20" fill="#0f0f0f" fontSize="11" fontWeight="bold" fontFamily="Roboto, sans-serif">154K</text>
          <line x1="75" y1="6" x2="75" y2="26" stroke="#dddddd" strokeWidth="1" />
          <path d="M102 14v5c0 .8-.5 1.5-1.2 1.5h-1.8c-.4 0-.7.3-.9.6l-.6 1.9c-.2.6-.7 1-1.4 1h-.5c-.5 0-.9-.4-.9-.9v-3.7H102z" fill="#0f0f0f" />

          {/* Share */}
          <rect x="126" y="0" width="80" height="32" rx="16" fill="#f2f2f2" />
          <text x="166" y="20" fill="#0f0f0f" fontSize="11" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">Share</text>
          
          {/* Remix */}
          <rect x="212" y="0" width="84" height="32" rx="16" fill="#f2f2f2" />
          <text x="254" y="20" fill="#0f0f0f" fontSize="11" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">Remix</text>

          {/* Download */}
          <rect x="302" y="0" width="64" height="32" rx="16" fill="#f2f2f2" />
          <path d="M328 11v5h4l-4 4-4-4h4v-5h0z" stroke="#0f0f0f" strokeWidth="1.5" />
        </g>
      </g>


      {/* --- MOBILE COMMENTS SECTION BOX --- */}
      <g transform="translate(12, 544)">
        <rect width="366" height="76" rx="12" fill="#f2f2f2" />
        <text x="16" y="24" fill="#0f0f0f" fontSize="13" fontWeight="bold" fontFamily="Roboto, sans-serif">Comments</text>
        <text x="340" y="24" fill="#606060" fontSize="12" fontFamily="Roboto, sans-serif" textAnchor="end">942</text>
        <circle cx="28" cy="52" r="12" fill="#e0e0e0" />
        <text x="48" y="55" fill="#0f0f0f" fontSize="11" fontFamily="Roboto, sans-serif">Awesome video, UI design templates are amazing...</text>
      </g>


      {/* --- RECOMMENDATIONS ROW (SKELETON) --- */}
      <g transform="translate(12, 636)">
        <rect width="120" height="68" rx="8" fill="#e5e5e5" />
        <text x="132" y="16" fill="#0f0f0f" fontSize="12" fontWeight="bold" fontFamily="Roboto, sans-serif">Next Video in Series</text>
        <text x="132" y="32" fill="#606060" fontSize="10" fontFamily="Roboto, sans-serif">DevCraft Studio</text>
        <text x="132" y="46" fill="#606060" fontSize="10" fontFamily="Roboto, sans-serif">120K views • 2 weeks ago</text>
      </g>


      {/* --- APP BOTTOM NAVIGATION BAR --- */}
      <g transform="translate(0, 794)">
        <line x1="0" y1="0" x2="390" y2="0" stroke="#eeeeee" strokeWidth="1" />
        <rect width="390" height="50" fill="#ffffff" />
        
        {/* Navigation Items */}
        {/* Home */}
        <rect x="25" y="10" width="20" height="15" stroke="#0f0f0f" strokeWidth="2" />
        <text x="35" y="38" fill="#0f0f0f" fontSize="9" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">Home</text>
        
        {/* Shorts */}
        <polygon points="110,10 125,18 110,26" fill="#0f0f0f" />
        <text x="110" y="38" fill="#0f0f0f" fontSize="9" fontFamily="Roboto, sans-serif" textAnchor="middle">Shorts</text>
        
        {/* Plus */}
        <circle cx="195" cy="20" r="12" stroke="#0f0f0f" strokeWidth="2" />
        <line x1="195" y1="14" x2="195" y2="26" stroke="#0f0f0f" strokeWidth="2" />
        <line x1="189" y1="20" x2="201" y2="20" stroke="#0f0f0f" strokeWidth="2" />

        {/* Subscriptions */}
        <rect x="268" y="10" width="22" height="14" rx="2" stroke="#0f0f0f" strokeWidth="2" />
        <text x="279" y="38" fill="#0f0f0f" fontSize="9" fontFamily="Roboto, sans-serif" textAnchor="middle">Subscriptions</text>
        
        {/* Library */}
        <rect x="345" y="10" width="16" height="16" stroke="#0f0f0f" strokeWidth="2" />
        <text x="353" y="38" fill="#0f0f0f" fontSize="9" fontFamily="Roboto, sans-serif" textAnchor="middle">You</text>
      </g>
    </svg>
  );
};
