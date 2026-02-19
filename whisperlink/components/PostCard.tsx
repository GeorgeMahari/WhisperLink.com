
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6 transition-transform hover:translate-y-[-2px]">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <Link to={`/user/${post.author.id}`} className="flex items-center space-x-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-bold text-gray-800 leading-none">{post.author.name}</p>
              <p className="text-xs text-gray-500 mt-1">@{post.author.username}</p>
            </div>
          </Link>
          <span className="text-xs text-gray-400">{post.timestamp}</span>
        </div>

        <Link to={`/post/${post.id}`} className="block">
          <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
        </Link>
      </div>

      {post.image && (
        <Link to={`/post/${post.id}`}>
          <img src={post.image} alt="Post content" className="w-full h-80 object-cover" />
        </Link>
      )}

      <div className="px-5 py-4 border-t border-gray-50 flex items-center space-x-6">
        <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
          <span>🤍</span>
          <span className="text-sm font-medium">{post.likes}</span>
        </button>
        <Link to={`/post/${post.id}`} className="flex items-center space-x-2 text-gray-500 hover:text-[#1E3A8A] transition-colors">
          <span>💬</span>
          <span className="text-sm font-medium">{post.comments}</span>
        </Link>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-[#8B5CF6] transition-colors ml-auto">
          <span>🔗</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
