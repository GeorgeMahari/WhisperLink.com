
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PostCard from '../components/PostCard';
import { MOCK_POSTS } from '../constants.tsx';
import Button from '../components/Button';

const FeedPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Your Feed</h2>
        <div className="flex space-x-2">
           <Button variant="ghost" size="sm">Recent</Button>
           <Button variant="primary" size="sm">Trending</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 mb-8">
            <img src="https://picsum.photos/seed/me/100" className="w-10 h-10 rounded-full" alt="Me" />
            <input 
              type="text" 
              placeholder="What's your whisper today?" 
              className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-violet-200 outline-none"
            />
            <Button variant="accent" size="sm">Whisper</Button>
          </div>

          {MOCK_POSTS.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="hidden lg:block space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Suggested Connections</h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={`https://picsum.photos/seed/suggest${i}/100`} className="w-8 h-8 rounded-full" alt="User" />
                    <span className="text-sm font-medium text-gray-700">user_{i*12}</span>
                  </div>
                  <button className="text-xs font-bold text-[#8B5CF6] hover:underline">Follow</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-violet-50 p-6 rounded-2xl border border-violet-100">
            <h3 className="font-bold text-violet-900 mb-2">Private Circles</h3>
            <p className="text-xs text-violet-700 mb-4 leading-relaxed">Create a gated community for your closest connections.</p>
            <Button variant="accent" size="sm" fullWidth>Create Circle</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FeedPage;
