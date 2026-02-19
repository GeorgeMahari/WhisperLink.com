
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import FeedPage from '../pages/FeedPage';
import ProfilePage from '../pages/ProfilePage';
import OtherProfilePage from '../pages/OtherProfilePage';
import EditProfilePage from '../pages/EditProfilePage';
import MessagesPage from '../pages/MessagesPage';
import ChatPage from '../pages/ChatPage';
import SettingsPage from '../pages/SettingsPage';
import SinglePostPage from '../pages/SinglePostPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* These would normally be protected */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user/:id" element={<OtherProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/messages/:id" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/post/:id" element={<SinglePostPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
