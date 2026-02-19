
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { MOCK_USERS, MOCK_POSTS } from '../constants.tsx';
import PostCard from '../components/PostCard';
import Button from '../components/Button';

const OtherProfilePage: React.FC = () => {
  const { id } = useParams();
  const user = MOCK_USERS.find(u => u.id === id) || MOCK_USERS[0];

  return (
    <MainLayout>
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-8">
        <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300"></div>
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-32 h-32 rounded-3xl border-4 border-white shadow-lg object-cover" 
            />
            <div className="flex space-x-2">
              <Link to={`/messages/${user.id}`}>
                <Button variant="secondary">Message</Button>
              </Link>
              <Button variant="accent">Follow</Button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-500">@{user.username}</p>
          </div>

          <p className="text-gray-700 max-w-2xl mb-6 leading-relaxed">
            {user.bio}
          </p>
        </div>
      </div>

      <div className="space-y-6 max-w-2xl">
        {MOCK_POSTS.filter(p => p.author.id === user.id).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
        {MOCK_POSTS.filter(p => p.author.id === user.id).length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 italic">This user hasn't whispered anything yet.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default OtherProfilePage;
