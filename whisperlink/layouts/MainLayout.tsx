
import React from 'react';
import Sidebar from '../components/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F3F4F6]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-100 px-6 flex items-center justify-between">
          <div className="md:hidden">
            <h1 className="text-xl font-bold text-[#1E3A8A]">WL</h1>
          </div>
          <div className="flex-1 max-w-md mx-auto relative hidden md:block">
            <input 
              type="text" 
              placeholder="Find whispers..." 
              className="w-full bg-gray-100 border-none rounded-full px-4 py-1.5 text-sm focus:ring-1 focus:ring-blue-200 outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-[#8B5CF6] relative">
               🔔 <span className="absolute top-1 right-1 w-2 h-2 bg-[#8B5CF6] rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
               <img src="https://picsum.photos/seed/me/100" alt="Me" />
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 md:p-8 max-w-5xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
