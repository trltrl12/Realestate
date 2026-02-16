import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BarChart3 } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-navy-900">
              Real<span className="text-emerald-500">Metrics</span> Pro
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-navy-600 hover:text-navy-900 font-medium transition-colors">
              Pricing
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="btn-ghost">Log In</Link>
            <Link to="/signup" className="btn-primary text-sm">Start Free Trial</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-navy-600 hover:text-navy-900"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-navy-100 px-4 pb-4">
          <div className="flex flex-col gap-2">
            <a href="#features" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-navy-600 hover:bg-navy-50 rounded-lg font-medium">
              Features
            </a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-navy-600 hover:bg-navy-50 rounded-lg font-medium">
              How It Works
            </a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-navy-600 hover:bg-navy-50 rounded-lg font-medium">
              Pricing
            </a>
            <hr className="border-navy-100 my-2" />
            <Link to="/login" className="px-4 py-2 text-navy-600 hover:bg-navy-50 rounded-lg font-medium text-center">
              Log In
            </Link>
            <Link to="/signup" className="btn-primary text-sm text-center">
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
