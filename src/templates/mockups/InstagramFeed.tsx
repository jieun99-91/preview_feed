import React from 'react';

export const InstagramFeedMockup: React.FC = () => {
  return (
    <svg
      width="1080"
      height="1350"
      viewBox="0 0 1080 1350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none', userSelect: 'none', background: '#ffffff' }}
    >
      {/* --- POST HEADER --- */}
      {/* (y: 0 to y: 120 is the header area) */}
      
      {/* Action buttons (three dots) on the far right of header */}
      <g transform="translate(1008, 52)">
        <circle cx="0" cy="0" r="3" fill="#262626" />
        <circle cx="12" cy="0" r="3" fill="#262626" />
        <circle cx="24" cy="0" r="3" fill="#262626" />
      </g>

      <line x1="0" y1="120" x2="1080" y2="120" stroke="#efefef" strokeWidth="1" />


      {/* --- COMPONENT GAP FOR MAIN POST IMAGE --- */}
      {/* (y: 120 to y: 920 is the 1080x800 post image) */}


      {/* --- ACTION TRAY (HEART, COMMENT, SEND, BOOKMARK) --- */}
      <g transform="translate(0, 920)">
        <rect width="1080" height="80" fill="#ffffff" />
        
        {/* Heart Icon (Like) */}
        <path d="M50 42c-5.5-5.5-14.5-5.5-20 0s-5.5 14.5 0 20l20 20 20-20c5.5-5.5 5.5-14.5 0-20s-14.5-5.5-20 0z" stroke="#262626" strokeWidth="4.5" strokeLinejoin="round" transform="translate(0, -18)" />

        {/* Comment Bubble Icon */}
        <path d="M120 42c0-11-9-20-20-20s-20 9-20 20c0 7 4 13 10 17v9l9-5c1 .5 2 .5 3 .5 11 0 20-9 20-20z" stroke="#262626" strokeWidth="4.5" strokeLinejoin="round" fill="none" transform="translate(30, -18)" />

        {/* Send Paper Airplane Icon */}
        <path d="M100 24L30 55l28 10 10 28 32-69z" stroke="#262626" strokeWidth="4.5" strokeLinejoin="round" fill="none" transform="translate(90, -18)" />

        {/* Bookmark Icon (Right align) */}
        <path d="M1000 28v50l-18-14-18 14V28c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4z" stroke="#262626" strokeWidth="4.5" strokeLinejoin="round" fill="none" />
      </g>


      {/* --- COMMENTS INPUT BOX (SKELETON) --- */}
      <g transform="translate(0, 1240)">
        <line x1="36" y1="0" x2="1044" y2="0" stroke="#efefef" strokeWidth="1.5" />
        
        <circle cx="68" cy="50" r="24" fill="#f0f0f0" />
        <text x="110" y="58" fill="#8e8e8e" fontSize="20" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">Add a comment...</text>
        
        {/* Post button */}
        <text x="1044" y="58" fill="#0095f6" fontSize="20" fontWeight="bold" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" textAnchor="end">Post</text>
      </g>
    </svg>
  );
};
