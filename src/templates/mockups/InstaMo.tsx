import React from 'react';
import iconInsta from '../../assets/icon-insta.png';

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

      {/* Figma Screenshot Icons Image Layer (x:0, y:816, w:590, h:98) */}
      <image href={iconInsta} x="0" y="816" width="590" height="98" />
    </svg>
  );
};
export default InstaMoMockup;
