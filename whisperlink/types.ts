
export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio?: string;
  isFollowing?: boolean;
  followersCount?: number;
  followingCount?: number;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  hasLiked?: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  participant: User;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
}
