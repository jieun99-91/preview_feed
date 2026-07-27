import { YoutubeCardMockup } from './mockups/YoutubeCard';
import { InstaMoMockup } from './mockups/InstaMo';
import { InstaStoryMockup } from './mockups/InstaStory';

export * from './config';

export const MOCKUP_COMPONENTS: Record<string, React.FC> = {
  'youtube-card': YoutubeCardMockup,
  'insta-mo': InstaMoMockup,
  'insta-story': InstaStoryMockup,
};

export {
  YoutubeCardMockup,
  InstaMoMockup,
  InstaStoryMockup,
};
