import { YoutubePcMockup } from './mockups/YoutubePc';
import { YoutubeMobileMockup } from './mockups/YoutubeMobile';
import { YoutubeSearchMockup } from './mockups/YoutubeSearch';
import { InstagramFeedMockup } from './mockups/InstagramFeed';
import { InstagramProfileMockup } from './mockups/InstagramProfile';
import { InstagramReelsMockup } from './mockups/InstagramReels';

export * from './config';

export const MOCKUP_COMPONENTS: Record<string, React.FC> = {
  'youtube-pc': YoutubePcMockup,
  'youtube-mobile': YoutubeMobileMockup,
  'youtube-search': YoutubeSearchMockup,
  'instagram-feed': InstagramFeedMockup,
  'instagram-profile': InstagramProfileMockup,
  'instagram-reels': InstagramReelsMockup,
};
export {
  YoutubePcMockup,
  YoutubeMobileMockup,
  YoutubeSearchMockup,
  InstagramFeedMockup,
  InstagramProfileMockup,
  InstagramReelsMockup
};
