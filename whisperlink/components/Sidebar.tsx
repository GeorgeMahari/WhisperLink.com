
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ to, label, icon, active }: { to: string, label: string, icon: string, active: boolean }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
      active ? 'bg-[#1E3A8A] text-white shadow-md' : 'text-gray-600 hover:bg-white hover:text-[#1E3A8A]'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-medium">{label}</span>
  </Link>
);

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <aside className="w-64 h-screen sticky top-0 bg-[#F3F4F6] border-r border-gray-200 p-6 flex flex-col hidden md:flex">
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-bold text-[#1E3A8A] tracking-tight">WhisperLink</h1>
        <p className="text-[10px] shhh-decoration mt-1 uppercase tracking-[0.2em]">Shhh...</p>
      </div>

      <nav className="space-y-2 flex-grow">
        <NavItem to="/dashboard" label="Dashboard" icon="🏠" active={location.pathname === '/dashboard'} />
        <NavItem to="/feed" label="Feed" icon="🌊" active={location.pathname === '/feed'} />
        <NavItem to="/messages" label="Messages" icon="💬" active={location.pathname.startsWith('/messages')} />
        <NavItem to="/profile" label="Profile" icon="👤" active={location.pathname === '/profile'} />
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-200 space-y-2">
        <NavItem to="/settings" label="Settings" icon="⚙️" active={location.pathname === '/settings'} />
        <NavItem to="/" label="Logout" icon="🚪" active={false} />
      </div>
    </aside>
  );
};

export default Sidebar;
