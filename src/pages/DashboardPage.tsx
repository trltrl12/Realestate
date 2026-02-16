import React from 'react';
import {
  DollarSign,
  Users,
  Handshake,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  RefreshCw,
} from 'lucide-react';

const metrics = [
  {
    label: 'Total Ad Spend',
    value: '$24,580',
    change: '+12.5%',
    trend: 'up' as const,
    icon: DollarSign,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Leads Generated',
    value: '1,284',
    change: '+8.2%',
    trend: 'up' as const,
    icon: Users,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    label: 'Active Deals',
    value: '47',
    change: '-3.1%',
    trend: 'down' as const,
    icon: Handshake,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    label: 'Average ROI',
    value: '34.7%',
    change: '+5.4%',
    trend: 'up' as const,
    icon: TrendingUp,
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Dashboard</h1>
          <p className="text-navy-500 mt-1">Welcome back. Here's your portfolio overview.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="input-field text-sm py-2 px-3 w-auto">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
          <button className="btn-ghost text-sm gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m) => (
          <div key={m.label} className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${m.color}`}>
                <m.icon className="w-5 h-5" />
              </div>
              <span
                className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                  m.trend === 'up'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {m.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {m.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-navy-900 mb-1">{m.value}</p>
            <p className="text-sm text-navy-500">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Power BI Report Areas */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Marketing Performance Report */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-navy-900">Marketing Performance Report</h2>
            <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
              Open Full Report
            </button>
          </div>
          <div className="bg-navy-50 rounded-xl border-2 border-dashed border-navy-200 flex flex-col items-center justify-center min-h-[360px] p-8">
            <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center mb-4">
              <BarChart3 className="w-8 h-8 text-navy-400" />
            </div>
            <h3 className="text-lg font-semibold text-navy-700 mb-2">Embedded Power BI Report</h3>
            <p className="text-sm text-navy-500 text-center max-w-sm mb-4">
              Marketing &amp; Ad Performance Dashboard — tracks spend, CPL, conversion rates, and channel attribution.
            </p>
            <div className="flex items-center gap-2 text-xs text-navy-400 bg-white px-3 py-1.5 rounded-full border border-navy-200">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Power BI Workspace Connected
            </div>
          </div>
        </div>

        {/* Deal Performance Report */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-navy-900">Deal Performance Report</h2>
            <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
              Open Full Report
            </button>
          </div>
          <div className="bg-navy-50 rounded-xl border-2 border-dashed border-navy-200 flex flex-col items-center justify-center min-h-[360px] p-8">
            <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-navy-400" />
            </div>
            <h3 className="text-lg font-semibold text-navy-700 mb-2">Embedded Power BI Report</h3>
            <p className="text-sm text-navy-500 text-center max-w-sm mb-4">
              Deal Analytics — wholesale margins, flip ROI, rental cash-flow, and pipeline tracking.
            </p>
            <div className="flex items-center gap-2 text-xs text-navy-400 bg-white px-3 py-1.5 rounded-full border border-navy-200">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Power BI Workspace Connected
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Portfolio Report */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-navy-900">Portfolio Overview Report</h2>
          <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            Open Full Report
          </button>
        </div>
        <div className="bg-navy-50 rounded-xl border-2 border-dashed border-navy-200 flex flex-col items-center justify-center min-h-[280px] p-8">
          <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center mb-4">
            <BarChart3 className="w-8 h-8 text-navy-400" />
          </div>
          <h3 className="text-lg font-semibold text-navy-700 mb-2">Embedded Power BI Report</h3>
          <p className="text-sm text-navy-500 text-center max-w-md mb-4">
            Full portfolio analytics — aggregated view of all properties, financial summaries, and market-level benchmarks.
          </p>
          <div className="flex items-center gap-2 text-xs text-navy-400 bg-white px-3 py-1.5 rounded-full border border-navy-200">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Power BI Workspace Connected
          </div>
        </div>
      </div>
    </div>
  );
}
