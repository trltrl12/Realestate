import React, { useState } from 'react';
import {
  User,
  Building2,
  Bell,
  Shield,
  Save,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SettingsPage() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [company, setCompany] = useState(user?.company || '');
  const [phone, setPhone] = useState('(555) 123-4567');

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy-900">Account Settings</h1>
        <p className="text-navy-500 mt-1">Manage your profile, company information, and preferences.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left nav */}
        <div className="lg:col-span-1">
          <nav className="card p-2 space-y-1">
            {[
              { icon: User, label: 'Profile', active: true },
              { icon: Building2, label: 'Company' },
              { icon: Bell, label: 'Notifications' },
              { icon: Shield, label: 'Security' },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-navy-600 hover:bg-navy-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-6">Profile Information</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
              </div>
              <div>
                <button className="btn-secondary text-sm">Change Avatar</button>
                <p className="text-xs text-navy-400 mt-1">JPG, PNG, or GIF. Max 2MB.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Role</label>
                <select className="input-field">
                  <option>Owner / CEO</option>
                  <option>Acquisitions Manager</option>
                  <option>Marketing Director</option>
                  <option>Analyst</option>
                </select>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-6">Company Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Company Name</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Industry Focus</label>
                <select className="input-field">
                  <option>Wholesaling</option>
                  <option>Fix & Flip</option>
                  <option>Rental / Buy & Hold</option>
                  <option>Wholetail</option>
                  <option>Mixed Portfolio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Primary Market</label>
                <input
                  type="text"
                  placeholder="e.g., Atlanta, GA"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Team Size</label>
                <select className="input-field">
                  <option>1 - Solo Investor</option>
                  <option>2-5</option>
                  <option>6-15</option>
                  <option>16-50</option>
                  <option>50+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification prefs */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              {[
                { label: 'Data sync complete', desc: 'Get notified when uploads finish syncing to Power BI', checked: true },
                { label: 'Upload failures', desc: 'Alert me if a data upload fails to process', checked: true },
                { label: 'Weekly digest', desc: 'Receive a weekly summary of key performance metrics', checked: false },
                { label: 'Billing reminders', desc: 'Reminders before your subscription renews', checked: true },
              ].map((pref) => (
                <div key={pref.label} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-navy-900">{pref.label}</p>
                    <p className="text-xs text-navy-500">{pref.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={pref.checked} className="sr-only peer" />
                    <div className="w-11 h-6 bg-navy-200 peer-focus:ring-2 peer-focus:ring-emerald-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-emerald-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Save */}
          <div className="flex justify-end">
            <button className="btn-primary gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
