import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { PricingTier } from '../../types';

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    description: 'Perfect for solo investors and small wholesaling operations.',
    features: [
      'Up to 500 lead records/month',
      '1 Power BI workspace',
      'Basic marketing analytics',
      'CSV & Excel uploads',
      'Email support',
    ],
    highlighted: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    description: 'For growing teams running multiple deal types.',
    features: [
      'Up to 5,000 lead records/month',
      '3 Power BI workspaces',
      'Advanced ROI projections',
      'Marketing & ad spend analytics',
      'Rental portfolio tracking',
      'Priority support',
      'Team access (up to 5 users)',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: '$399',
    period: '/mo',
    description: 'For high-volume operators and investment firms.',
    features: [
      'Unlimited lead records',
      'Unlimited Power BI workspaces',
      'Custom report builder',
      'API access & integrations',
      'Dedicated account manager',
      'White-label options',
      'SSO & advanced security',
      'Unlimited team members',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
            Invest in Your Data. Scale Your Returns.
          </h2>
          <p className="text-lg text-navy-500">
            Choose the plan that matches your portfolio size. All plans include a
            14-day free trial with no credit card required.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? 'bg-navy-900 text-white ring-2 ring-emerald-500 shadow-2xl relative scale-105'
                  : 'bg-white border border-navy-100 shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-1 ${
                    tier.highlighted ? 'text-white' : 'text-navy-900'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm ${
                    tier.highlighted ? 'text-navy-300' : 'text-navy-500'
                  }`}
                >
                  {tier.description}
                </p>
              </div>
              <div className="mb-6">
                <span
                  className={`text-4xl font-extrabold ${
                    tier.highlighted ? 'text-white' : 'text-navy-900'
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlighted ? 'text-navy-300' : 'text-navy-500'
                  }`}
                >
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? 'text-emerald-400' : 'text-emerald-500'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? 'text-navy-200' : 'text-navy-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/signup"
                className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  tier.highlighted
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25'
                    : 'bg-navy-900 text-white hover:bg-navy-800'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
