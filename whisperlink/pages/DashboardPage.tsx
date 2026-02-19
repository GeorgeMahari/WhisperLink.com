
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { CURRENT_USER } from '../constants.tsx';

const StatCard = ({ title, value, icon }: { title: string, value: string | number, icon: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Monthly</span>
    </div>
    <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
    <p className="text-3xl font-bold text-[#1E3A8A]">{value}</p>
  </div>
);

const DashboardPage: React.FC = () => {
  return (
    <MainLayout>
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, {CURRENT_USER.name} 👋</h2>
        <p className="text-gray-500 italic">"Silence is a source of great strength."</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard title="Whispers Received" value="42" icon="📨" />
        <StatCard title="Total Echoes" value="1.2k" icon="📡" />
        <StatCard title="Quiet Hours" value="128h" icon="🌙" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6 text-[#1E3A8A]">Recent Conversations</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                <img src={`https://picsum.photos/seed/${i+10}/100`} className="w-12 h-12 rounded-full" alt="User" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Connection #{i}</p>
                  <p className="text-sm text-gray-500 truncate">Last whisper sent 2 hours ago...</p>
                </div>
                <span className="text-xs text-gray-400">12:30</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1E3A8A] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4">Whisper of the Day</h3>
            <p className="text-lg leading-relaxed opacity-90 italic">
              "Your words carry weight. Choose them like you choose your friends: with intention and care."
            </p>
            <div className="mt-8 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center">✨</div>
              <span className="text-sm opacity-80">- The Oracle</span>
            </div>
          </div>
          <div className="absolute top-[-20px] right-[-20px] text-white opacity-5 text-9xl font-serif">"</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
