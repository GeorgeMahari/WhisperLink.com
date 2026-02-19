
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl shadow-blue-900/5">
        <div className="text-center mb-10">
          <Link to="/" className="text-2xl font-bold text-[#1E3A8A] block mb-2">WhisperLink</Link>
          <p className="text-gray-500">Start your journey into the quiet.</p>
        </div>

        <form onSubmit={handleRegister}>
          <Input label="Full Name" type="text" placeholder="Jane Doe" />
          <Input label="Username" type="text" placeholder="jane_whisper" />
          <Input label="Email Address" type="email" placeholder="jane@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          
          <p className="text-xs text-gray-400 mb-8 leading-relaxed">
            By joining, you agree to our Terms of Service and Privacy Policy. We value your silence and privacy.
          </p>

          <Button type="submit" variant="accent" fullWidth size="lg">Create Account</Button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-sm">
          Already a member? <Link to="/login" className="text-[#1E3A8A] font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
