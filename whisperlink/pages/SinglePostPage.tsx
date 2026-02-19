
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { MOCK_POSTS, MOCK_COMMENTS } from '../constants.tsx';
import Button from '../components/Button';

const SinglePostPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = MOCK_POSTS.find(p => p.id === id) || MOCK_POSTS[0];

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-6 flex items-center text-gray-500 hover:text-[#1E3A8A]">
          <span className="mr-2">←</span> Back to Feed
        </button>

        <article className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-10">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-2xl object-cover" />
                <div>
                  <h3 className="font-bold text-gray-800 text-lg leading-none">{post.author.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">@{post.author.username}</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">{post.timestamp}</span>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {post.content}
            </p>

            {post.image && (
              <img src={post.image} alt="Whisper visual" className="w-full h-auto rounded-3xl mb-8 border border-gray-50" />
            )}

            <div className="flex items-center space-x-8 pt-6 border-t border-gray-50">
              <div className="flex items-center space-x-2 text-gray-500">
                <span className="text-2xl">🤍</span>
                <span className="font-bold">{post.likes} Echoes</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <span className="text-2xl">💬</span>
                <span className="font-bold">{MOCK_COMMENTS.length} Comments</span>
              </div>
            </div>
          </div>
        </article>

        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h4 className="text-lg font-bold text-gray-800 mb-6">Discussion</h4>
          
          <div className="flex items-start space-x-4 mb-10">
            <img src="https://picsum.photos/seed/me/100" className="w-10 h-10 rounded-xl" alt="Me" />
            <div className="flex-1">
              <textarea 
                placeholder="Add a comment..." 
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-3 text-sm focus:ring-1 focus:ring-violet-200 outline-none h-24 mb-3"
              />
              <div className="flex justify-end">
                <Button variant="accent" size="sm">Post Comment</Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {MOCK_COMMENTS.map(comment => (
              <div key={comment.id} className="flex space-x-4">
                <img src={comment.author.avatar} className="w-10 h-10 rounded-xl object-cover" alt={comment.author.name} />
                <div className="flex-1 bg-gray-50 p-4 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-gray-800">{comment.author.name}</span>
                    <span className="text-[10px] text-gray-400">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default SinglePostPage;
