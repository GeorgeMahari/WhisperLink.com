
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { MOCK_CONVERSATIONS } from '../constants.tsx';

const MessagesPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
        <button className="bg-violet-100 text-[#8B5CF6] p-2 rounded-xl text-xl">
          ➕
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {MOCK_CONVERSATIONS.map(conv => (
            <Link 
              key={conv.id} 
              to={`/messages/${conv.id}`}
              className={`flex items-center space-x-4 p-5 hover:bg-gray-50 transition-colors ${conv.unread ? 'bg-blue-50/30' : ''}`}
            >
              <div className="relative">
                <img src={conv.participant.avatar} className="w-14 h-14 rounded-2xl object-cover" alt={conv.participant.name} />
                {conv.unread && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8B5CF6] border-2 border-white rounded-full"></span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-800">{conv.participant.name}</h3>
                  <span className="text-xs text-gray-400">{conv.timestamp}</span>
                </div>
                <p className={`text-sm line-clamp-1 ${conv.unread ? 'font-bold text-gray-700' : 'text-gray-500'}`}>
                  {conv.lastMessage}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MessagesPage;
