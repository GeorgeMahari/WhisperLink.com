
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { MOCK_CONVERSATIONS } from '../constants.tsx';
import Button from '../components/Button';

const ChatPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const conversation = MOCK_CONVERSATIONS.find(c => c.id === id) || MOCK_CONVERSATIONS[0];
  const [message, setMessage] = useState('');

  const messages = [
    { id: 1, text: "Hey! Did you hear about the quiet gathering?", sender: 'them', time: '10:00 AM' },
    { id: 2, text: "I did! I'm planning to be there. Will it be at the library?", sender: 'me', time: '10:05 AM' },
    { id: 3, text: "Exactly. No talking allowed, just reading and shared presence.", sender: 'them', time: '10:07 AM' },
    { id: 4, text: "Sounds like my kind of party.", sender: 'me', time: '10:10 AM' },
  ];

  return (
    <MainLayout>
      <div className="h-[calc(100vh-12rem)] flex flex-col bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/messages')} className="p-2 hover:bg-gray-100 rounded-full md:hidden">
              ←
            </button>
            <img src={conversation.participant.avatar} className="w-10 h-10 rounded-xl object-cover" alt={conversation.participant.name} />
            <div>
              <h3 className="font-bold text-gray-800 leading-none">{conversation.participant.name}</h3>
              <p className="text-xs text-green-500 mt-1 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span> Online
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400">📞</button>
            <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400">ℹ️</button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100">Yesterday</span>
          </div>
          
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] group relative`}>
                <div className={`px-5 py-3 rounded-2xl shadow-sm ${
                  msg.sender === 'me' 
                    ? 'bg-[#1E3A8A] text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
                <span className={`text-[10px] mt-1 block opacity-0 group-hover:opacity-100 transition-opacity ${msg.sender === 'me' ? 'text-right' : 'text-left'} text-gray-400`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-50">
          <form className="flex items-center space-x-3" onSubmit={(e) => e.preventDefault()}>
            <button type="button" className="p-2 text-gray-400 hover:text-violet-500 text-xl">📎</button>
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a whisper..." 
              className="flex-1 bg-gray-100 border-none rounded-2xl px-5 py-3 text-sm focus:ring-1 focus:ring-violet-200 outline-none"
            />
            <button type="submit" className="bg-[#8B5CF6] text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/20 hover:scale-105 transition-transform">
              ✈️
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default ChatPage;
