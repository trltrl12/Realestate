import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart3, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/portal/dashboard');
  };

  return (
    <div className="min-h-screen bg-navy-50 flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
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
            Welcome Back, Investor
          </h2>
          <p className="text-navy-300 text-lg leading-relaxed max-w-md">
            Access your analytics dashboard, review your latest deal metrics,
            and keep scaling your real estate business with data.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {['bg-emerald-500', 'bg-blue-500', 'bg-purple-500', 'bg-orange-500'].map((bg, i) => (
                <div key={i} className={`w-10 h-10 ${bg} rounded-full border-2 border-navy-950 flex items-center justify-center text-white text-xs font-bold`}>
                  {['MJ', 'AK', 'SR', 'LD'][i]}
                </div>
              ))}
            </div>
            <p className="text-navy-400 text-sm">
              Join <span className="text-emerald-400 font-semibold">500+</span> investors already using RealMetrics
            </p>
          </div>
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

          <h1 className="text-2xl font-bold text-navy-900 mb-2">Sign in to your account</h1>
          <p className="text-navy-500 mb-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-emerald-600 font-semibold hover:text-emerald-700">
              Start your free trial
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                Email address
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
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-navy-700">
                  Password
                </label>
                <button type="button" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input-field pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input id="remember" type="checkbox" className="w-4 h-4 rounded border-navy-300 text-emerald-500 focus:ring-emerald-500" />
              <label htmlFor="remember" className="text-sm text-navy-600">Remember me for 30 days</label>
            </div>
            <button type="submit" className="btn-primary w-full py-3.5">
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-navy-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-navy-50 text-navy-500">or continue with</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="btn-secondary text-sm py-2.5">
                Google
              </button>
              <button className="btn-secondary text-sm py-2.5">
                Microsoft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
