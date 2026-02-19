
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl shadow-blue-900/5">
        <div className="text-center mb-10">
          <Link to="/" className="text-2xl font-bold text-[#1E3A8A] block mb-2">WhisperLink</Link>
          <p className="text-gray-500">Welcome back to the silence.</p>
        </div>

        <form onSubmit={handleLogin}>
          <Input label="Email Address" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          
          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded text-[#8B5CF6] focus:ring-[#8B5CF6]" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#8B5CF6] hover:underline">Forgot password?</a>
          </div>

          <Button type="submit" variant="accent" fullWidth size="lg">Login</Button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-sm">
          Don't have an account? <Link to="/register" className="text-[#1E3A8A] font-bold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
