export interface TemplateField {
  key: string;
  label: string;
  type: 'text' | 'image';
  defaultValue: string;
  placeholder?: string;
  multiline?: boolean;
  maxLength?: number;
}

export interface TemplateLayer {
  id: string;
  type: 'image' | 'text' | 'mockup';
  fieldKey?: string; // Maps to TemplateField key
  x: number;         // Logical X coordinate
  y: number;         // Logical Y coordinate
  width: number;
  height: number;
  borderRadius?: number;
  objectFit?: 'cover' | 'contain';
  // Typography for text layers
  fontSize?: number;
  fontWeight?: string | number;
  color?: string;
  fontFamily?: string;
  maxLines?: number;
  textAlign?: 'left' | 'center' | 'right';
  lineHeight?: number;
  letterSpacing?: string;
}

export interface TemplateConfig {
  id: string;
  name: string;
  category: 'YouTube' | 'Instagram';
  width: number;
  height: number;
  aspectRatio: string;
  fields: TemplateField[];
  layers: TemplateLayer[];
}

export const TEMPLATES: TemplateConfig[] = [
  {
    id: 'youtube-pc',
    name: 'YouTube PC (Watch Page)',
    category: 'YouTube',
    width: 1280,
    height: 720,
    aspectRatio: '16:9',
    fields: [
      { key: 'thumbnail', label: 'Video Thumbnail', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', placeholder: 'Upload thumbnail image' },
      { key: 'avatar', label: 'Channel Avatar', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', placeholder: 'Upload channel profile' },
      { key: 'title', label: 'Video Title', type: 'text', defaultValue: 'How to Design Beautiful User Interfaces for Modern Web Applications', placeholder: 'Enter video title', maxLength: 100, multiline: true },
      { key: 'channel', label: 'Channel Name', type: 'text', defaultValue: 'DesignCraft Studio', placeholder: 'Enter channel name', maxLength: 50 },
      { key: 'subscribers', label: 'Subscriber Count', type: 'text', defaultValue: '1.24M subscribers', placeholder: 'e.g. 1.24M subscribers' },
      { key: 'views', label: 'Views', type: 'text', defaultValue: '342K views', placeholder: 'e.g. 342K views' },
      { key: 'date', label: 'Upload Date', type: 'text', defaultValue: '5 days ago', placeholder: 'e.g. 5 days ago' }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 1280, height: 720 },
      { id: 'video-thumbnail', type: 'image', fieldKey: 'thumbnail', x: 24, y: 72, width: 854, height: 480, borderRadius: 12, objectFit: 'cover' },
      { id: 'channel-avatar', type: 'image', fieldKey: 'avatar', x: 24, y: 622, width: 40, height: 40, borderRadius: 20 },
      { id: 'video-title', type: 'text', fieldKey: 'title', x: 24, y: 566, width: 854, height: 50, fontSize: 18, fontWeight: 600, color: '#0f0f0f', fontFamily: 'Roboto, sans-serif', maxLines: 2, lineHeight: 24 },
      { id: 'channel-name', type: 'text', fieldKey: 'channel', x: 76, y: 622, width: 250, height: 20, fontSize: 15, fontWeight: 500, color: '#0f0f0f', fontFamily: 'Roboto, sans-serif', maxLines: 1 },
      { id: 'sub-count', type: 'text', fieldKey: 'subscribers', x: 76, y: 642, width: 250, height: 16, fontSize: 12, fontWeight: 400, color: '#606060', fontFamily: 'Roboto, sans-serif', maxLines: 1 },
      { id: 'views-date', type: 'text', fieldKey: 'views', x: 24, y: 678, width: 800, height: 20, fontSize: 13, fontWeight: 400, color: '#606060', fontFamily: 'Roboto, sans-serif', maxLines: 1 }
    ]
  },
  {
    id: 'youtube-mobile',
    name: 'YouTube Mobile (Watch Page)',
    category: 'YouTube',
    width: 390,
    height: 844,
    aspectRatio: '390:844',
    fields: [
      { key: 'thumbnail', label: 'Video Thumbnail', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' },
      { key: 'avatar', label: 'Channel Avatar', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
      { key: 'title', label: 'Video Title', type: 'text', defaultValue: 'Build an SNS mockup composition app from scratch', maxLength: 80, multiline: true },
      { key: 'channel', label: 'Channel Name', type: 'text', defaultValue: 'DevCraft Studio', maxLength: 40 },
      { key: 'subscribers', label: 'Subscriber Count', type: 'text', defaultValue: '450K subscribers' },
      { key: 'views', label: 'Views', type: 'text', defaultValue: '84K views' },
      { key: 'date', label: 'Upload Date', type: 'text', defaultValue: '3 weeks ago' }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 390, height: 844 },
      { id: 'video-thumbnail', type: 'image', fieldKey: 'thumbnail', x: 0, y: 92, width: 390, height: 219, objectFit: 'cover' },
      { id: 'video-title', type: 'text', fieldKey: 'title', x: 12, y: 324, width: 366, height: 46, fontSize: 16, fontWeight: 600, color: '#0f0f0f', fontFamily: 'Roboto, sans-serif', maxLines: 2, lineHeight: 22 },
      { id: 'views-date', type: 'text', fieldKey: 'views', x: 12, y: 374, width: 366, height: 16, fontSize: 11, fontWeight: 400, color: '#606060', fontFamily: 'Roboto, sans-serif', maxLines: 1 },
      { id: 'channel-avatar', type: 'image', fieldKey: 'avatar', x: 12, y: 402, width: 32, height: 32, borderRadius: 16 },
      { id: 'channel-name', type: 'text', fieldKey: 'channel', x: 52, y: 402, width: 170, height: 18, fontSize: 13, fontWeight: 500, color: '#0f0f0f', fontFamily: 'Roboto, sans-serif', maxLines: 1 },
      { id: 'sub-count', type: 'text', fieldKey: 'subscribers', x: 52, y: 420, width: 170, height: 14, fontSize: 10, fontWeight: 400, color: '#606060', fontFamily: 'Roboto, sans-serif', maxLines: 1 }
    ]
  },
  {
    id: 'youtube-search',
    name: 'YouTube Search (Desktop)',
    category: 'YouTube',
    width: 1280,
    height: 720,
    aspectRatio: '16:9',
    fields: [
      { key: 'query', label: 'Search Query', type: 'text', defaultValue: 'ui design tutorials' },
      { key: 'thumbnail', label: 'Video Thumbnail', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' },
      { key: 'avatar', label: 'Channel Avatar', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
      { key: 'title', label: 'Video Title', type: 'text', defaultValue: 'Figma UI Design Tutorial: Master Auto Layout in 2026', maxLength: 100 },
      { key: 'channel', label: 'Channel Name', type: 'text', defaultValue: 'Figma Guru', maxLength: 50 },
      { key: 'views', label: 'Views', type: 'text', defaultValue: '210K views' },
      { key: 'date', label: 'Upload Date', type: 'text', defaultValue: '2 months ago' },
      { key: 'description', label: 'Description Preview', type: 'text', defaultValue: 'Learn how to construct highly scalable design systems using auto layout. We will build a complete dashboard from scratch...', maxLength: 150, multiline: true }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 1280, height: 720 },
      { id: 'search-query', type: 'text', fieldKey: 'query', x: 260, y: 15, width: 440, height: 26, fontSize: 14, color: '#0f0f0f', fontFamily: 'Roboto, sans-serif', maxLines: 1 },
      { id: 'video-thumbnail', type: 'image', fieldKey: 'thumbnail', x: 240, y: 120, width: 360, height: 202, borderRadius: 8, objectFit: 'cover' },
      { id: 'video-title', type: 'text', fieldKey: 'title', x: 616, y: 120, width: 500, height: 46, fontSize: 18, fontWeight: 500, color: '#0f0f0f', fontFamily: 'Roboto, sans-serif', maxLines: 2, lineHeight: 22 },
      { id: 'views-date', type: 'text', fieldKey: 'views', x: 616, y: 172, width: 500, height: 16, fontSize: 12, color: '#606060', fontFamily: 'Roboto, sans-serif', maxLines: 1 },
      { id: 'channel-avatar', type: 'image', fieldKey: 'avatar', x: 616, y: 198, width: 24, height: 24, borderRadius: 12 },
      { id: 'channel-name', type: 'text', fieldKey: 'channel', x: 648, y: 202, width: 300, height: 18, fontSize: 12, color: '#606060', fontFamily: 'Roboto, sans-serif', maxLines: 1 },
      { id: 'video-description', type: 'text', fieldKey: 'description', x: 616, y: 232, width: 500, height: 36, fontSize: 12, color: '#606060', fontFamily: 'Roboto, sans-serif', maxLines: 2, lineHeight: 18 }
    ]
  },
  {
    id: 'instagram-feed',
    name: 'Instagram Feed (Square)',
    category: 'Instagram',
    width: 1080,
    height: 1440,
    aspectRatio: '3:4',
    fields: [
      { key: 'avatar', label: 'User Avatar', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
      { key: 'username', label: 'Username', type: 'text', defaultValue: 'sara_creative', maxLength: 30 },
      { key: 'location', label: 'Location', type: 'text', defaultValue: 'Seoul, South Korea', maxLength: 40 },
      { key: 'postImage', label: 'Post Image', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1080&q=80' },
      { key: 'likes', label: 'Likes Count', type: 'text', defaultValue: '1,482 likes', placeholder: 'e.g. 1,482 likes' },
      { key: 'caption', label: 'Caption', type: 'text', defaultValue: 'Stunning gradients to inspire your next web project. Designed in Figma, built with passion. ✨ Let me know what you think!', maxLength: 250, multiline: true },
      { key: 'timeAgo', label: 'Time Ago', type: 'text', defaultValue: '4 HOURS AGO' }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 1080, height: 1440 },
      { id: 'user-avatar', type: 'image', fieldKey: 'avatar', x: 36, y: 28, width: 64, height: 64, borderRadius: 32 },
      { id: 'user-username', type: 'text', fieldKey: 'username', x: 120, y: 34, width: 600, height: 28, fontSize: 24, fontWeight: 600, color: '#262626', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', maxLines: 1 },
      { id: 'post-location', type: 'text', fieldKey: 'location', x: 120, y: 64, width: 600, height: 22, fontSize: 18, color: '#4d4d4d', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', maxLines: 1 },
      { id: 'post-image', type: 'image', fieldKey: 'postImage', x: 0, y: 120, width: 1080, height: 900, objectFit: 'cover' },
      { id: 'post-likes', type: 'text', fieldKey: 'likes', x: 36, y: 1120, width: 500, height: 28, fontSize: 22, fontWeight: 600, color: '#262626', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', maxLines: 1 },
      { id: 'post-caption', type: 'text', fieldKey: 'caption', x: 36, y: 1162, width: 1008, height: 80, fontSize: 20, color: '#262626', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', maxLines: 3, lineHeight: 26 },
      { id: 'post-time', type: 'text', fieldKey: 'timeAgo', x: 36, y: 1390, width: 500, height: 22, fontSize: 15, fontWeight: 500, color: '#8e8e8e', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', maxLines: 1, letterSpacing: '0.2px' }
    ]
  },
  {
    id: 'instagram-profile',
    name: 'Instagram Profile Grid',
    category: 'Instagram',
    width: 1080,
    height: 1500,
    aspectRatio: '18:25',
    fields: [
      { key: 'avatar', label: 'Profile Avatar', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
      { key: 'username', label: 'Username', type: 'text', defaultValue: 'design_studio_seoul', maxLength: 30 },
      { key: 'fullName', label: 'Full Name', type: 'text', defaultValue: 'Design Studio Seoul 🇰🇷', maxLength: 40 },
      { key: 'bio', label: 'Profile Bio', type: 'text', defaultValue: '🎨 Creative Agency specialized in UX/UI Design.\n🚀 Empowering startups through digital products.\n✉️ hello@designstudio.kr', multiline: true, maxLength: 150 },
      { key: 'postsCount', label: 'Posts Count', type: 'text', defaultValue: '124' },
      { key: 'followers', label: 'Followers Count', type: 'text', defaultValue: '24.5K' },
      { key: 'following', label: 'Following Count', type: 'text', defaultValue: '382' },
      { key: 'gridImage1', label: 'Grid Item 1 (New)', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80' },
      { key: 'gridImage2', label: 'Grid Item 2', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
      { key: 'gridImage3', label: 'Grid Item 3', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80' }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 1080, height: 1500 },
      { id: 'profile-username', type: 'text', fieldKey: 'username', x: 36, y: 56, width: 500, height: 40, fontSize: 32, fontWeight: 600, color: '#262626', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
      { id: 'profile-avatar', type: 'image', fieldKey: 'avatar', x: 56, y: 140, width: 180, height: 180, borderRadius: 90 },
      { id: 'posts-count', type: 'text', fieldKey: 'postsCount', x: 400, y: 180, width: 100, height: 32, fontSize: 28, fontWeight: 600, color: '#262626', textAlign: 'center' },
      { id: 'followers-count', type: 'text', fieldKey: 'followers', x: 600, y: 180, width: 150, height: 32, fontSize: 28, fontWeight: 600, color: '#262626', textAlign: 'center' },
      { id: 'following-count', type: 'text', fieldKey: 'following', x: 830, y: 180, width: 150, height: 32, fontSize: 28, fontWeight: 600, color: '#262626', textAlign: 'center' },
      { id: 'profile-fullname', type: 'text', fieldKey: 'fullName', x: 56, y: 350, width: 968, height: 30, fontSize: 22, fontWeight: 600, color: '#262626' },
      { id: 'profile-bio', type: 'text', fieldKey: 'bio', x: 56, y: 386, width: 968, height: 100, fontSize: 20, color: '#262626', lineHeight: 28, maxLines: 4 },
      // Grid Items: 3 columns starting at y: 690. Cell width: 356px, gap: 6px. Total 356 * 3 + 12 = 1080.
      { id: 'grid-1', type: 'image', fieldKey: 'gridImage1', x: 0, y: 690, width: 356, height: 356, objectFit: 'cover' },
      { id: 'grid-2', type: 'image', fieldKey: 'gridImage2', x: 362, y: 690, width: 356, height: 356, objectFit: 'cover' },
      { id: 'grid-3', type: 'image', fieldKey: 'gridImage3', x: 724, y: 690, width: 356, height: 356, objectFit: 'cover' }
    ]
  },
  {
    id: 'instagram-reels',
    name: 'Instagram Reels',
    category: 'Instagram',
    width: 1080,
    height: 1920,
    aspectRatio: '9:16',
    fields: [
      { key: 'videoThumbnail', label: 'Reels Image/Video', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=80' },
      { key: 'avatar', label: 'Creator Avatar', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
      { key: 'username', label: 'Username', type: 'text', defaultValue: 'sara_creative', maxLength: 30 },
      { key: 'caption', label: 'Reels Caption', type: 'text', defaultValue: 'Exploring the absolute best photography spots in the heart of nature 🌲✨ #explore #nature #reels #photography', maxLength: 200, multiline: true },
      { key: 'musicName', label: 'Audio Name', type: 'text', defaultValue: 'sara_creative • Original Audio', maxLength: 50 },
      { key: 'likes', label: 'Likes Count', type: 'text', defaultValue: '34.8K' },
      { key: 'comments', label: 'Comments Count', type: 'text', defaultValue: '1,280' }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 1080, height: 1920 },
      { id: 'reels-background', type: 'image', fieldKey: 'videoThumbnail', x: 0, y: 0, width: 1080, height: 1920, objectFit: 'cover' },
      { id: 'creator-avatar', type: 'image', fieldKey: 'avatar', x: 48, y: 1560, width: 72, height: 72, borderRadius: 36 },
      { id: 'creator-username', type: 'text', fieldKey: 'username', x: 136, y: 1572, width: 450, height: 36, fontSize: 24, fontWeight: 600, color: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
      { id: 'reels-caption', type: 'text', fieldKey: 'caption', x: 48, y: 1650, width: 800, height: 90, fontSize: 22, color: '#ffffff', lineHeight: 28, maxLines: 3 },
      { id: 'music-ticker', type: 'text', fieldKey: 'musicName', x: 90, y: 1762, width: 500, height: 30, fontSize: 20, color: '#ffffff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' },
      // Overlay Sidebar info (Likes, Comments)
      { id: 'like-count', type: 'text', fieldKey: 'likes', x: 890, y: 1230, width: 150, height: 26, fontSize: 18, fontWeight: 500, color: '#ffffff', textAlign: 'center' },
      { id: 'comment-count', type: 'text', fieldKey: 'comments', x: 890, y: 1400, width: 150, height: 26, fontSize: 18, fontWeight: 500, color: '#ffffff', textAlign: 'center' }
    ]
  }
];
