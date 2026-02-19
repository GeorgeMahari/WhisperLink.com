
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-violet-100">
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1E3A8A] tracking-tighter">WhisperLink</h1>
        <div className="space-x-4">
          <Link to="/login"><Button variant="ghost">Login</Button></Link>
          <Link to="/register"><Button variant="accent">Join Now</Button></Link>
        </div>
      </nav>

      <main>
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
          <p className="shhh-decoration text-4xl mb-6">Shhh...</p>
          <h2 className="text-5xl md:text-7xl font-extrabold text-[#1E3A8A] mb-6 tracking-tight">
            Connect in <span className="text-[#8B5CF6]">Silence.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            The modern social platform for meaningful whispers. Share your thoughts where they truly matter, without the noise.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register"><Button variant="primary" size="lg">Get Started</Button></Link>
            <Link to="/feed"><Button variant="secondary" size="lg">Explore Feed</Button></Link>
          </div>
        </section>

        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 text-2xl">🤫</div>
              <h3 className="text-xl font-bold mb-3">Quiet Voices</h3>
              <p className="text-gray-500">A community that values depth over volume. Every word counts when you whisper.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center mb-6 text-2xl">🔒</div>
              <h3 className="text-xl font-bold mb-3">Private Link</h3>
              <p className="text-gray-500">End-to-end encrypted whispers ensure your conversations stay between you and your connections.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gray-50 text-gray-700 rounded-xl flex items-center justify-center mb-6 text-2xl">✨</div>
              <h3 className="text-xl font-bold mb-3">Minimal Design</h3>
              <p className="text-gray-500">No distractions. Just a clean, calm space for you to express yourself freely.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>&copy; 2024 WhisperLink. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
