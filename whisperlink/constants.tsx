
import { User, Post, Conversation, Comment } from './types';

export const CURRENT_USER: User = {
  id: 'me',
  username: 'alex_whisper',
  name: 'Alex Johnson',
  avatar: 'https://picsum.photos/seed/me/200',
  bio: 'Exploring the quiet corners of the digital world. Whisper to me.',
  followersCount: 1240,
  followingCount: 450
};

export const MOCK_USERS: User[] = [
  { id: '1', username: 'sarah_m', name: 'Sarah Miller', avatar: 'https://picsum.photos/seed/1/200', bio: 'Digital nomad and minimalist.' },
  { id: '2', username: 'ocean_breeze', name: 'James Ocean', avatar: 'https://picsum.photos/seed/2/200', bio: 'Capturing moments in silence.' },
  { id: '3', username: 'luna_sky', name: 'Luna Park', avatar: 'https://picsum.photos/seed/3/200', bio: 'Poetry in whispers.' },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    author: MOCK_USERS[0],
    content: 'Just found this quiet spot by the lake. Sometimes silence is the loudest message.',
    image: 'https://picsum.photos/seed/post1/800/600',
    timestamp: '2h ago',
    likes: 45,
    comments: 12
  },
  {
    id: 'p2',
    author: MOCK_USERS[1],
    content: 'The art of conversation isn’t just about talking; it’s about listening to what isn’t said.',
    timestamp: '5h ago',
    likes: 128,
    comments: 24
  },
  {
    id: 'p3',
    author: MOCK_USERS[2],
    content: 'Working on a new secret project. Can’t wait to share it with you all... in due time.',
    image: 'https://picsum.photos/seed/post3/800/600',
    timestamp: '1d ago',
    likes: 312,
    comments: 56
  }
];

export const MOCK_CONVERSATIONS: Conversation[] = [
  { id: 'c1', participant: MOCK_USERS[0], lastMessage: 'Did you see the latest update?', timestamp: '10:30 AM', unread: true },
  { id: 'c2', participant: MOCK_USERS[1], lastMessage: 'Let’s meet tomorrow at the usual spot.', timestamp: 'Yesterday' },
  { id: 'c3', participant: MOCK_USERS[2], lastMessage: 'Thanks for the feedback!', timestamp: '2 days ago' },
];

export const MOCK_COMMENTS: Comment[] = [
  { id: 'cm1', author: MOCK_USERS[1], content: 'Absolutely beautiful. Where is this?', timestamp: '1h ago' },
  { id: 'cm2', author: MOCK_USERS[2], content: 'The composition is stunning.', timestamp: '45m ago' },
];
