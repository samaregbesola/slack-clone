import {
  slackAddPartners,
  slackBrainstorm,
  slackPauseNotifications,
  slackCreateChannel,
  slackWaChannels,
} from '../assets/images';

import { slackFocus, slackSimplify, slackMove } from '../assets/videos';

export const channelItems = [
  {
    id: 1,
    heading: 'Move faster by organizing your work life',
    text: 'The key to productivity in Slack is organized spaces called channels—a different one for everything you’re working on. With all the people, messages and files related to a topic in one place, you can move a whole lot faster.',
    link: 'Learn more about channels',
    images: [
      {
        image: slackWaChannels,
        caption: 'What is a channel?',
      },
      {
        image: slackCreateChannel,
        caption: 'How to create a channel',
      },
    ],
    video: slackMove,
    order: 1,
  },
  {
    id: 2,
    heading: 'Focus your time, on your own terms',
    text: 'Give yourself the flexibility to work when, where and how you work best. Take control of notifications, collaborate live or on your own time, and find answers in conversations from across your company',
    link: 'Support a more flexible work schedule in Slack',
    images: [
      {
        image: slackPauseNotifications,
        caption: 'How to pause notifications',
      },
    ],
    video: slackFocus,
    order: -1,
  },
  {
    id: 3,
    heading: 'Simplify team work for everyone',
    text: 'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.',
    link: 'Learn how to work with external partners in Slack',
    images: [
      {
        image: slackAddPartners,
        caption: 'Work with external partners using Slack Connect',
      },
      {
        image: slackBrainstorm,
        caption: 'How to brainstorm in a channel',
      },
    ],
    video: slackSimplify,
    order: 1,
  },
];
