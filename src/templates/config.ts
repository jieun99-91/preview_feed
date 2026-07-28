export interface TemplateField {
  key: string;
  label: string;
  type: 'text' | 'image' | 'select';
  defaultValue: string;
  placeholder?: string;
  multiline?: boolean;
  maxLength?: number;
  options?: Array<{ value: string; label: string }>;
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
  zIndex?: number;   // Customize render order in canvas
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
    id: 'youtube-card',
    name: '유튜브 피드 카드 (YouTubeCard)',
    category: 'YouTube',
    width: 1400,
    height: 1127,
    aspectRatio: '1400:1127',
    fields: [
      { key: 'thumbnail', label: '비디오 썸네일 이미지', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80', placeholder: '썸네일 이미지를 업로드해 주세요' },
      { key: 'avatar', label: '채널 프로필 이미지', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', placeholder: '채널 프로필 이미지를 업로드해 주세요' },
      { key: 'title', label: '영상 제목', type: 'text', defaultValue: '[심야괴담회] 건드리지 말아야 할 것을 건드렸다... 한번의 소리가 바꿔버린운명 #심야괴담회', placeholder: '영상 제목을 입력해 주세요', maxLength: 120, multiline: true },
      { key: 'channel', label: '채널명', type: 'text', defaultValue: '채널 명', placeholder: '채널명을 입력해 주세요', maxLength: 50 },
      { key: 'views', label: '조회수 및 업로드 시간', type: 'text', defaultValue: '조회수 5.3천회 · 1시간 전', placeholder: '예: 조회수 5.3천회 · 1시간 전' }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 1400, height: 1127 },
      { id: 'video-thumbnail', type: 'image', fieldKey: 'thumbnail', x: 67, y: 70, width: 1266, height: 712, borderRadius: 12, objectFit: 'cover' },
      { id: 'channel-avatar', type: 'image', fieldKey: 'avatar', x: 67, y: 825, width: 86, height: 86, borderRadius: 43 },
      { id: 'video-title', type: 'text', fieldKey: 'title', x: 179, y: 825, width: 1119, height: 112, fontSize: 37, fontWeight: 700, color: '#000000', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif', maxLines: 2, lineHeight: 50 },
      { id: 'channel-name', type: 'text', fieldKey: 'channel', x: 178.5, y: 937, width: 1120, height: 60, fontSize: 32, fontWeight: 500, color: '#606060', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif', maxLines: 1 },
      { id: 'views-date', type: 'text', fieldKey: 'views', x: 178.5, y: 997, width: 1120, height: 60, fontSize: 32, fontWeight: 500, color: '#606060', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif', maxLines: 1 }
    ]
  },
  {
    id: 'insta-mo',
    name: '인스타그램 모바일 피드 (insta_mo)',
    category: 'Instagram',
    width: 590,
    height: 1214,
    aspectRatio: '590:1214',
    fields: [
      { key: 'avatar', label: '사용자 프로필 이미지', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', placeholder: '프로필 이미지를 업로드해 주세요' },
      { key: 'username', label: '사용자 아이디 (계정명)', type: 'text', defaultValue: 'hyundaiwia_official', placeholder: '사용자 계정명을 입력해 주세요', maxLength: 30 },
      { key: 'postType', label: '포스트 형태 (캐러셀/단장)', type: 'select', defaultValue: 'single', options: [
        { value: 'single', label: '단장 (일반)' },
        { value: 'carousel', label: '캐러셀 (다장)' }
      ]},
      { key: 'postImage', label: '피드 메인 이미지', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', placeholder: '게시물 메인 이미지를 업로드해 주세요' },
      { key: 'caption', label: '피드 본문 텍스트', type: 'text', defaultValue: '현대위아 멘토링 우수팀이ㅇㅇㅇㅇㅇㅇㅇㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ', placeholder: '피드 본문 내용을 입력해 주세요', maxLength: 350, multiline: true }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 590, height: 1214 },
      { id: 'user-avatar', type: 'image', fieldKey: 'avatar', x: 15.5, y: 14, width: 48, height: 48, borderRadius: 24 },
      { id: 'user-username', type: 'text', fieldKey: 'username', x: 78.5, y: 24, width: 300, height: 30, fontSize: 21, fontWeight: 500, color: '#000000', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif', maxLines: 1 },
      { id: 'post-image', type: 'image', fieldKey: 'postImage', x: 0, y: 78, width: 590, height: 738, objectFit: 'cover' },
      { id: 'post-caption', type: 'text', fieldKey: 'caption', x: 19, y: 920, width: 552, height: 168, fontSize: 20, fontWeight: 500, color: '#000000', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif', maxLines: 5, lineHeight: 28 }
    ]
  },
  {
    id: 'insta-story',
    name: '인스타그램 모바일 스토리 (insta_story)',
    category: 'Instagram',
    width: 1080,
    height: 1960,
    aspectRatio: '1080:1960',
    fields: [
      { key: 'storyImage', label: '스토리 배경 이미지', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1080&q=80', placeholder: '스토리 전체 배경 이미지를 업로드해 주세요' },
      { key: 'avatar', label: '스토리 프로필 이미지', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', placeholder: '프로필 이미지를 업로드해 주세요' },
      { key: 'username', label: '스토리 계정명', type: 'text', defaultValue: 'signature_library', placeholder: '계정명을 입력해 주세요', maxLength: 30 }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 1080, height: 1960 },
      { id: 'story-background', type: 'image', fieldKey: 'storyImage', x: 0, y: 0, width: 1080, height: 1960, objectFit: 'cover', zIndex: 1 },
      { id: 'story-avatar', type: 'image', fieldKey: 'avatar', x: 31, y: 79, width: 90, height: 90, borderRadius: 45 },
      { id: 'story-username', type: 'text', fieldKey: 'username', x: 149, y: 99, width: 600, height: 70, fontSize: 39.5, fontWeight: 400, color: '#ffffff', fontFamily: 'Pretendard, sans-serif', maxLines: 1 }
    ]
  },
  {
    id: 'insta-comment',
    name: '인스타그램 댓글 (insta_comment)',
    category: 'Instagram',
    width: 790,
    height: 175.4,
    aspectRatio: '790:175',
    fields: [
      { key: 'avatar', label: '사용자 프로필 이미지', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', placeholder: '프로필 이미지를 업로드해 주세요' },
      { key: 'username', label: '사용자 아이디 (계정명)', type: 'text', defaultValue: 'dear.heejin', placeholder: '사용자 계정명을 입력해 주세요', maxLength: 30 },
      { key: 'comment', label: '댓글 본문 텍스트', type: 'text', defaultValue: '우와 진짜 맛있겠다~~!아아아아아아아아아아아아아아아아앙아아아아앙아아아아아아아아아아아아아아아아아아아아', placeholder: '댓글 본문 내용을 입력해 주세요', maxLength: 350, multiline: true },
      { key: 'time', label: '작성 시간', type: 'text', defaultValue: '1주', placeholder: '예: 1주, 2일 등', maxLength: 20 },
      { key: 'likes', label: '좋아요 수', type: 'text', defaultValue: '좋아요 16개', placeholder: '예: 좋아요 16개', maxLength: 30 }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 790, height: 175.4 },
      { id: 'comment-avatar', type: 'image', fieldKey: 'avatar', x: 12.4, y: 12.4, width: 68.3, height: 68.3, borderRadius: 34 },
      { id: 'comment-text', type: 'text', fieldKey: 'comment', x: 105.6, y: 12.4, width: 672, height: 97, fontSize: 26.8, fontWeight: 500, color: '#000000', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif' },
      { id: 'comment-time', type: 'text', fieldKey: 'time', x: 105.6, y: 133, width: 37, height: 30, fontSize: 24.3, fontWeight: 500, color: '#6a717a', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif' },
      { id: 'comment-likes', type: 'text', fieldKey: 'likes', x: 162.5, y: 133, width: 123, height: 30, fontSize: 24.3, fontWeight: 500, color: '#6a717a', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif' }
    ]
  },
  {
    id: 'youtube-comment',
    name: '유튜브 댓글 (youtube_comment)',
    category: 'YouTube',
    width: 790,
    height: 186,
    aspectRatio: '790:186',
    fields: [
      { key: 'avatar', label: '사용자 프로필 이미지', type: 'image', defaultValue: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80', placeholder: '프로필 이미지를 업로드해 주세요' },
      { key: 'username', label: '사용자 핸들 (계정명)', type: 'text', defaultValue: '@음치킨', placeholder: '사용자 핸들을 입력해 주세요', maxLength: 30 },
      { key: 'time', label: '작성 시간', type: 'text', defaultValue: '3년 전', placeholder: '예: 3년 전, 1시간 전 등', maxLength: 20 },
      { key: 'comment', label: '댓글 본문 텍스트', type: 'text', defaultValue: '플레이리스트가 너무 좋습니다요 ', placeholder: '댓글 본문 내용을 입력해 주세요', maxLength: 350, multiline: true },
      { key: 'likes', label: '좋아요 수', type: 'text', defaultValue: '146', placeholder: '예: 146', maxLength: 10 }
    ],
    layers: [
      { id: 'mockup-bg', type: 'mockup', x: 0, y: 0, width: 790, height: 186 },
      { id: 'comment-avatar', type: 'image', fieldKey: 'avatar', x: 14, y: 15, width: 81, height: 81, borderRadius: 40.5 },
      { id: 'comment-username', type: 'text', fieldKey: 'username', x: 105, y: 15, width: 91, height: 46, fontSize: 24.3, fontWeight: 500, color: '#000000', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif' },
      { id: 'comment-time', type: 'text', fieldKey: 'time', x: 206, y: 15, width: 64, height: 46, fontSize: 24.3, fontWeight: 500, color: '#606060', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif' },
      { id: 'comment-text', type: 'text', fieldKey: 'comment', x: 105, y: 61, width: 640, height: 46, fontSize: 30, fontWeight: 500, color: '#000000', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif' },
      { id: 'comment-likes', type: 'text', fieldKey: 'likes', x: 153, y: 125, width: 42, height: 46, fontSize: 24.3, fontWeight: 500, color: '#606060', fontFamily: 'Noto Sans, Noto Sans KR, sans-serif' }
    ]
  }
];
