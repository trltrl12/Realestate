import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, DollarSign, Home } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-emerald-50/30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Trusted by 500+ Real Estate Investors
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-tight mb-6">
              Scale Your Real Estate Empire with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600">
                Data-Driven
              </span>{' '}
              Insights
            </h1>
            <p className="text-lg sm:text-xl text-navy-500 leading-relaxed mb-8 max-w-lg">
              Upload your marketing data, connect to Power BI, and unlock actionable
              analytics for wholesale, wholetail, fix-and-flip, and rental portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-primary text-base px-8 py-4 gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn-secondary text-base px-8 py-4 gap-2">
                <Play className="w-5 h-5 text-emerald-500" />
                Book a Demo
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-navy-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                14-day free trial
              </div>
            </div>
          </div>

          {/* Right — dashboard preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-navy-100 p-6 lg:p-8">
              {/* Mini dashboard mockup */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-navy-900">Portfolio Overview</h3>
                <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full">Live</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-navy-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-navy-500 font-medium">Total Revenue</span>
                  </div>
                  <p className="text-2xl font-bold text-navy-900">$2.4M</p>
                  <span className="text-xs text-emerald-600">+18.2% this quarter</span>
                </div>
                <div className="bg-navy-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-navy-500 font-medium">Active Deals</span>
                  </div>
                  <p className="text-2xl font-bold text-navy-900">47</p>
                  <span className="text-xs text-emerald-600">12 closing this month</span>
                </div>
              </div>
              {/* Chart placeholder */}
              <div className="bg-gradient-to-r from-navy-50 to-emerald-50/50 rounded-xl p-6 flex items-end gap-2 h-40">
                {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100, 75, 110].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-sm opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-navy-100 px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">ROI Increased</p>
                <p className="text-xs text-emerald-600 font-medium">+34% this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
