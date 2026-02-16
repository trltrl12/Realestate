import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart3, Eye, EyeOff, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(name, email, company, password);
    navigate('/portal/dashboard');
  };

  return (
    <div className="min-h-screen bg-navy-50 flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col justify-center px-16">
          <Link to="/" className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Real<span className="text-emerald-400">Metrics</span> Pro
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your 14-Day Free Trial
          </h2>
          <p className="text-navy-300 text-lg leading-relaxed max-w-md mb-10">
            Get instant access to the analytics platform built for serious real estate investors.
          </p>
          <ul className="space-y-4">
            {[
              'Upload your first dataset in under 2 minutes',
              'Auto-generate Power BI dashboards',
              'Track wholesale, flip, and rental KPIs',
              'No credit card required to start',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-navy-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-navy-900">
              Real<span className="text-emerald-500">Metrics</span> Pro
            </span>
          </div>

          <h1 className="text-2xl font-bold text-navy-900 mb-2">Create your account</h1>
          <p className="text-navy-500 mb-8">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-600 font-semibold hover:text-emerald-700">
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">
                Full name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Marcus Johnson"
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                Work email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1.5">
                Company name
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="PropertyPros Capital"
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-navy-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="input-field pr-12"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-navy-400 mt-1">Must be at least 8 characters</p>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <input id="terms" type="checkbox" className="w-4 h-4 mt-0.5 rounded border-navy-300 text-emerald-500 focus:ring-emerald-500" required />
              <label htmlFor="terms" className="text-sm text-navy-600">
                I agree to the{' '}
                <button type="button" className="text-emerald-600 hover:text-emerald-700 font-medium">Terms of Service</button> and{' '}
                <button type="button" className="text-emerald-600 hover:text-emerald-700 font-medium">Privacy Policy</button>
              </label>
            </div>
            <button type="submit" className="btn-primary w-full py-3.5 mt-2">
              Create Account
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-navy-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-navy-50 text-navy-500">or sign up with</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="btn-secondary text-sm py-2.5">Google</button>
              <button className="btn-secondary text-sm py-2.5">Microsoft</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
