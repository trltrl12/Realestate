import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Menu, Bell, Search } from 'lucide-react';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';

export default function PortalLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-navy-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content area */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-navy-100">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-navy-600 hover:text-navy-900 hover:bg-navy-50 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              {/* Search */}
              <div className="hidden sm:flex items-center gap-2 bg-navy-50 rounded-lg px-3 py-2 w-64">
                <Search className="w-4 h-4 text-navy-400" />
                <input
                  type="text"
                  placeholder="Search deals, leads..."
                  className="bg-transparent border-none outline-none text-sm text-navy-700 placeholder-navy-400 w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-navy-500 hover:text-navy-900 hover:bg-navy-50 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full" />
              </button>
              <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-navy-200">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-900">{user?.name}</p>
                  <p className="text-xs text-navy-500 capitalize">{user?.plan} Plan</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
