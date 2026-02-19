
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { CURRENT_USER, MOCK_POSTS } from '../constants.tsx';
import PostCard from '../components/PostCard';
import Button from '../components/Button';

const ProfilePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-8">
        <div className="h-48 bg-gradient-to-r from-[#1E3A8A] to-[#8B5CF6]"></div>
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <img 
              src={CURRENT_USER.avatar} 
              alt={CURRENT_USER.name} 
              className="w-32 h-32 rounded-3xl border-4 border-white shadow-lg object-cover" 
            />
            <Link to="/edit-profile">
              <Button variant="secondary">Edit Profile</Button>
            </Link>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{CURRENT_USER.name}</h2>
            <p className="text-gray-500">@{CURRENT_USER.username}</p>
          </div>

          <p className="text-gray-700 max-w-2xl mb-6 leading-relaxed">
            {CURRENT_USER.bio}
          </p>

          <div className="flex space-x-8 py-4 border-y border-gray-50">
            <div className="text-center">
              <p className="font-bold text-gray-800">{CURRENT_USER.followersCount}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800">{CURRENT_USER.followingCount}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Following</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800">128</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Whispers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-8">
          <button className="px-2 py-4 border-b-2 border-[#1E3A8A] font-bold text-[#1E3A8A]">Posts</button>
          <button className="px-2 py-4 text-gray-500 hover:text-gray-700">Echoes</button>
          <button className="px-2 py-4 text-gray-500 hover:text-gray-700">Saved</button>
        </div>
      </div>

      <div className="space-y-6 max-w-2xl">
        {MOCK_POSTS.filter(p => p.author.id === '1').concat(MOCK_POSTS[0]).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
