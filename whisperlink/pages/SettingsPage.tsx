
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';

// Added interface for SettingsSection props to ensure children are correctly typed and recognized by the TS compiler.
interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

// Defining SettingsSection with explicit React.FC typing to resolve children inference issues.
const SettingsSection: React.FC<SettingsSectionProps> = ({ title, children }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
    <h3 className="text-lg font-bold text-[#1E3A8A] mb-6 border-b border-gray-50 pb-4">{title}</h3>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

// Added interface for ToggleSetting props for consistency and better type safety.
interface ToggleSettingProps {
  label: string;
  description: string;
  defaultChecked?: boolean;
}

// Defining ToggleSetting with explicit React.FC typing.
const ToggleSetting: React.FC<ToggleSettingProps> = ({ label, description, defaultChecked }) => (
  <div className="flex items-center justify-between">
    <div className="max-w-md">
      <p className="font-semibold text-gray-800">{label}</p>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1E3A8A]"></div>
    </label>
  </div>
);

const SettingsPage: React.FC = () => {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Settings</h2>

      <SettingsSection title="Account Settings">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-800">Email Address</p>
            <p className="text-sm text-gray-500">alex.johnson@example.com</p>
          </div>
          <Button variant="secondary" size="sm">Change</Button>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <p className="font-semibold text-gray-800">Password</p>
            <p className="text-sm text-gray-500">Last changed 3 months ago</p>
          </div>
          <Button variant="secondary" size="sm">Update</Button>
        </div>
      </SettingsSection>

      <SettingsSection title="Privacy & Silence">
        <ToggleSetting 
          label="Quiet Mode" 
          description="Mute all notifications during specific hours to maintain your focus." 
          defaultChecked 
        />
        <ToggleSetting 
          label="Private Profile" 
          description="Only approved connections can see your whispers and echoes." 
        />
        <ToggleSetting 
          label="Read Receipts" 
          description="Let others know when you've read their whispers." 
          defaultChecked 
        />
      </SettingsSection>

      <SettingsSection title="Notifications">
        <ToggleSetting 
          label="New Whisper" 
          description="Get notified when someone sends you a private message." 
          defaultChecked 
        />
        <ToggleSetting 
          label="New Echo" 
          description="Get notified when someone likes or comments on your whisper." 
          defaultChecked 
        />
      </SettingsSection>

      <div className="flex justify-end space-x-4 mb-10">
        <Button variant="ghost">Reset Defaults</Button>
        <Button variant="primary">Save All Settings</Button>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
