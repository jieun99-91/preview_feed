import React from 'react';

export const InstaMoMockup: React.FC = () => {
  return (
    <svg
      width="590"
      height="1214"
      viewBox="0 0 590 1214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none', userSelect: 'none', background: '#ffffff' }}
    >
      {/* Header Separation line */}
      <line x1="0" y1="78" x2="590" y2="78" stroke="#efefef" strokeWidth="1" />

      {/* Profile Avatar Placeholder Outline */}
      <circle cx="39.5" cy="38" r="24" stroke="#dbdbdb" strokeWidth="1" fill="#f8f9fa" />

      {/* Header Options (Three Horizontal Dots) */}
      <g fill="#262626" transform="translate(0, 0)">
        <circle cx="545" cy="38" r="2.5" />
        <circle cx="555" cy="38" r="2.5" />
        <circle cx="565" cy="38" r="2.5" />
      </g>

      {/* Main Post Image Placeholder */}
      <rect x="0" y="78" width="590" height="738" fill="#f8f9fa" />

      {/* --- ACTION TRAY (y: 816 to y: 914) --- */}
      <g transform="translate(19, 816)">
        {/* Heart Icon (Like) */}
        <path d="M24 16c-3.3-3.3-8.7-3.3-12 0s-3.3 8.7 0 12l12 12 12-12c3.3-3.3 3.3-8.7 0-12s-8.7-3.3-12 0z" stroke="#262626" strokeWidth="3" strokeLinejoin="round" fill="none" transform="translate(0, 10)" />

        {/* Comment Icon */}
        <path d="M12 8c0-5 4-9 9-9s9 4 9 9c0 3-2 6-5 8l-1 4-4-2c-5 0-8-5-8-10z" stroke="#262626" strokeWidth="3" strokeLinejoin="round" fill="none" transform="translate(32, 12)" />

        {/* Share Icon */}
        <path d="M22 2L2 14l10 3 3 10 7-25z" stroke="#262626" strokeWidth="3" strokeLinejoin="round" fill="none" transform="translate(68, 12)" />

        {/* Bookmark Icon (Far Right) */}
        <path d="M532 14v28l-10-8-10 8V14c0-1.5 1-2.5 2.5-2.5h15c1.5 0 2.5 1 2.5 2.5z" stroke="#262626" strokeWidth="3" strokeLinejoin="round" fill="none" transform="translate(0, 8)" />
      </g>
    </svg>
  );
};
export default InstaMoMockup;
