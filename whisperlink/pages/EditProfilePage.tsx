
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { CURRENT_USER } from '../constants.tsx';
import Button from '../components/Button';
import Input from '../components/Input';

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center space-x-4 mb-10">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            ←
          </button>
          <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-6 mb-10">
            <div className="relative">
              <img src={CURRENT_USER.avatar} className="w-24 h-24 rounded-2xl object-cover" alt="Me" />
              <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-lg shadow-md border border-gray-100 text-xs font-bold text-[#8B5CF6]">
                Change
              </button>
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">{CURRENT_USER.name}</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Update your visual whisper</p>
            </div>
          </div>

          <form className="space-y-6">
            <Input label="Display Name" defaultValue={CURRENT_USER.name} />
            <Input label="Username" defaultValue={CURRENT_USER.username} />
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea 
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none transition-all h-32"
                defaultValue={CURRENT_USER.bio}
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <Button variant="primary" className="flex-1" onClick={() => navigate('/profile')}>Save Changes</Button>
              <Button variant="secondary" className="flex-1" onClick={() => navigate('/profile')}>Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditProfilePage;
