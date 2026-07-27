import React from 'react';
import iconStory from '../../assets/icon-story.png';

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
      {/* Profile Avatar Outer Border (Figma Frame 186) */}
      {/* Keep the circle outline so the avatar image has a clean white stroke border */}
      <circle cx="76" cy="124" r="45" stroke="#ffffff" strokeWidth="2.5" fill="none" />

      {/* Figma Screenshot Story Header Icons Layer (x:25, y:56, w:1030, h:99) */}
      <image href={iconStory} x="25" y="56" width="1030" height="99" />
    </svg>
  );
};
export default InstaStoryMockup;
