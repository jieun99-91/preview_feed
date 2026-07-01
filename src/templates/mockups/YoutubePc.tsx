import React from 'react';

export const YoutubePcMockup: React.FC = () => {
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
        {/* YT Text */}
        <text x="34" y="15" fill="#0f0f0f" fontSize="16" fontWeight="bold" fontFamily="Roboto, Arial, sans-serif" letterSpacing="-0.5px">YouTube</text>
      </g>

      {/* Search Bar */}
      <rect x="380" y="8" width="520" height="40" rx="20" stroke="#cccccc" strokeWidth="1" fill="#f8f8f8" />
      <text x="400" y="32" fill="#606060" fontSize="14" fontFamily="Roboto, sans-serif">Search</text>
      {/* Search Icon */}
      <circle cx="870" cy="28" r="6" stroke="#0f0f0f" strokeWidth="2" />
      <line x1="874" y1="32" x2="880" y2="38" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round" />

      {/* Header Right Icons */}
      <circle cx="1140" cy="28" r="12" stroke="#0f0f0f" strokeWidth="2" />
      {/* Bell icon */}
      <path d="M1180 20C1180 18 1182 16 1184 16C1186 16 1188 18 1188 20V26C1190 28 1192 30 1192 32H1176C1176 30 1178 28 1180 26V20Z" fill="#0f0f0f" />
      <path d="M1182 34C1182 36.2 1182.9 37 1184 37C1185.1 37 1186 36.2 1186 34" stroke="#0f0f0f" strokeWidth="2" />
      
      {/* Profile circle (static placeholder) */}
      <circle cx="1232" cy="28" r="16" fill="#e0e0e0" />
      <path d="M1224 40C1224 35 1228 33 1232 33C1236 33 1240 35 1240 40" fill="#a0a0a0" />
      <circle cx="1232" cy="26" r="6" fill="#a0a0a0" />


      {/* --- RIGHT SIDEBAR (RECOMMENDED VIDEOS) --- */}
      <g transform="translate(902, 72)">
        {/* Rec Video 1 */}
        <rect x="0" y="0" width="168" height="94" rx="8" fill="#e5e5e5" />
        <text x="180" y="16" fill="#0f0f0f" fontSize="13" fontWeight="bold" fontFamily="Roboto, sans-serif">10 Design Secrets Every...</text>
        <text x="180" y="36" fill="#606060" fontSize="11" fontFamily="Roboto, sans-serif">Creative Channel</text>
        <text x="180" y="52" fill="#606060" fontSize="11" fontFamily="Roboto, sans-serif">1.2M views • 1 year ago</text>

        {/* Rec Video 2 */}
        <rect x="0" y="110" width="168" height="94" rx="8" fill="#e5e5e5" />
        <text x="180" y="126" fill="#0f0f0f" fontSize="13" fontWeight="bold" fontFamily="Roboto, sans-serif">Modern CSS Layouts Tutorial</text>
        <text x="180" y="146" fill="#606060" fontSize="11" fontFamily="Roboto, sans-serif">Coding Acad</text>
        <text x="180" y="162" fill="#606060" fontSize="11" fontFamily="Roboto, sans-serif">300K views • 2 weeks ago</text>

        {/* Rec Video 3 */}
        <rect x="0" y="220" width="168" height="94" rx="8" fill="#e5e5e5" />
        <text x="180" y="236" fill="#0f0f0f" fontSize="13" fontWeight="bold" fontFamily="Roboto, sans-serif">Portfolio Review (Live!)</text>
        <text x="180" y="256" fill="#606060" fontSize="11" fontFamily="Roboto, sans-serif">DesignCraft Studio</text>
        <text x="180" y="272" fill="#606060" fontSize="11" fontFamily="Roboto, sans-serif">15K views • Streamed 1 day ago</text>

        {/* Rec Video 4 */}
        <rect x="0" y="330" width="168" height="94" rx="8" fill="#e5e5e5" />
        <text x="180" y="346" fill="#0f0f0f" fontSize="13" fontWeight="bold" fontFamily="Roboto, sans-serif">Typography Masterclass</text>
        <text x="180" y="366" fill="#606060" fontSize="11" fontFamily="Roboto, sans-serif">TypeGeek</text>
        <text x="180" y="382" fill="#606060" fontSize="11" fontFamily="Roboto, sans-serif">84K views • 3 days ago</text>
      </g>


      {/* --- VIDEO DETAILS ACTION BUTTONS --- */}
      {/* Subscribe Button */}
      <rect x="300" y="618" width="94" height="36" rx="18" fill="#0f0f0f" />
      <text x="347" y="640" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">Subscribe</text>

      {/* Like / Dislike Pill */}
      <rect x="520" y="618" width="125" height="36" rx="18" fill="#f2f2f2" />
      {/* Like icon */}
      <path d="M538 638v-8c0-1.5 1-2.5 2-2.5h3c.8 0 1.5-.5 1.8-1.2l1.2-3.8c.4-1.2 1.5-2 2.8-2h1c1 0 1.7.8 1.7 1.7v7.3H538zm16.5 0h2.8c.9 0 1.7-.8 1.7-1.7V633c0-.9-.8-1.7-1.7-1.7h-2.8V638z" fill="#0f0f0f" />
      <text x="568" y="640" fill="#0f0f0f" fontSize="12" fontWeight="bold" fontFamily="Roboto, sans-serif">12K</text>
      <line x1="600" y1="624" x2="600" y2="648" stroke="#cccccc" strokeWidth="1" />
      {/* Dislike icon */}
      <path d="M624 627v8c0 1.5-1 2.5-2 2.5h-3c-.8 0-1.5.5-1.8 1.2l-1.2 3.8c-.4 1.2-1.5 2-2.8 2h-1c-1 0-1.7-.8-1.7-1.7v-7.3H624z" fill="#0f0f0f" />

      {/* Share Pill */}
      <rect x="653" y="618" width="86" height="36" rx="18" fill="#f2f2f2" />
      <text x="696" y="640" fill="#0f0f0f" fontSize="12" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">Share</text>
      {/* Share arrow icon */}
      <path d="M668 636l4-4-4-4v2.5c-4 0-6 2.5-6 5.5.8-2 2.2-4 6-4V636z" fill="#0f0f0f" />

      {/* Download Pill */}
      <rect x="747" y="618" width="105" height="36" rx="18" fill="#f2f2f2" />
      <text x="800" y="640" fill="#0f0f0f" fontSize="12" fontWeight="bold" fontFamily="Roboto, sans-serif" textAnchor="middle">Download</text>
      {/* Download icon */}
      <path d="M764 630v5h8v-5h2l-6-6-6 6h2zm-2 7v2h12v-2H762z" fill="#0f0f0f" />


      {/* --- COMMENTS SECTION SKELETON --- */}
      <g transform="translate(24, 715)">
        <text x="0" y="0" fill="#0f0f0f" fontSize="16" fontWeight="bold" fontFamily="Roboto, sans-serif">1,482 Comments</text>
      </g>
    </svg>
  );
};
