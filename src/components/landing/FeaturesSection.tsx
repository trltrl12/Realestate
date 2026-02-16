import React from 'react';
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Building2,
  Target,
  ShieldCheck,
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Track Wholesale Margins',
    description:
      'Monitor assignment fees, acquisition costs, and profit margins across every wholesale deal in real time.',
  },
  {
    icon: TrendingUp,
    title: 'Flip ROI Projections',
    description:
      'Model rehab budgets, ARV estimates, and projected ROI before committing capital to any fix-and-flip.',
  },
  {
    icon: Building2,
    title: 'Rental Portfolio Analytics',
    description:
      'Track cash flow, occupancy rates, cap rates, and NOI across your entire rental portfolio in one view.',
  },
  {
    icon: Target,
    title: 'Marketing Performance',
    description:
      'See exactly which campaigns drive the best leads — direct mail, PPC, cold calling, or SMS — and optimize spend.',
  },
  {
    icon: PieChart,
    title: 'Power BI Integration',
    description:
      'Your uploaded data flows directly into Power BI workspaces for advanced, interactive reporting dashboards.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    description:
      'Bank-level encryption, SOC 2 compliance, and role-based access controls keep your data safe and private.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
            Everything You Need to Dominate Real Estate Investing
          </h2>
          <p className="text-lg text-navy-500">
            Purpose-built analytics for wholesalers, flippers, and rental investors
            who want to make smarter, faster, data-backed decisions.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group card p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
              <p className="text-navy-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
