import React from 'react';
import {
  CreditCard,
  Check,
  ArrowUpRight,
  Receipt,
  Shield,
  Calendar,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Invoice } from '../types';

const mockInvoices: Invoice[] = [
  { id: 'INV-2026-012', date: '2026-02-01', amount: '$149.00', status: 'Paid', description: 'Pro Plan — February 2026' },
  { id: 'INV-2026-011', date: '2026-01-01', amount: '$149.00', status: 'Paid', description: 'Pro Plan — January 2026' },
  { id: 'INV-2025-010', date: '2025-12-01', amount: '$149.00', status: 'Paid', description: 'Pro Plan — December 2025' },
  { id: 'INV-2025-009', date: '2025-11-01', amount: '$49.00', status: 'Paid', description: 'Starter Plan — November 2025' },
  { id: 'INV-2025-008', date: '2025-10-01', amount: '$49.00', status: 'Paid', description: 'Starter Plan — October 2025' },
];

const plans = [
  {
    name: 'Starter',
    price: '$49',
    features: ['500 leads/mo', '1 Power BI workspace', 'Basic analytics'],
    current: false,
  },
  {
    name: 'Pro',
    price: '$149',
    features: ['5,000 leads/mo', '3 Power BI workspaces', 'Advanced analytics', 'Up to 5 users'],
    current: true,
  },
  {
    name: 'Enterprise',
    price: '$399',
    features: ['Unlimited leads', 'Unlimited workspaces', 'Custom reports', 'Unlimited users'],
    current: false,
  },
];

export default function BillingPage() {
  const { user } = useAuth();

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy-900">Billing & Subscription</h1>
        <p className="text-navy-500 mt-1">Manage your plan, payment method, and invoices.</p>
      </div>

      {/* Current plan + payment */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Current plan */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-navy-900">Current Plan</h2>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
              <Check className="w-3.5 h-3.5" />
              Active
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy-900 capitalize">{user?.plan || 'Pro'} Plan</h3>
              <p className="text-navy-500">
                <span className="text-2xl font-bold text-navy-900">$149</span>/month
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-navy-500 mb-4">
            <Calendar className="w-4 h-4" />
            Next billing date: <span className="font-medium text-navy-700">March 1, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-primary text-sm gap-2">
              <ArrowUpRight className="w-4 h-4" />
              Upgrade Plan
            </button>
            <button className="btn-ghost text-sm text-navy-500">
              Cancel Subscription
            </button>
          </div>
        </div>

        {/* Payment method */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-navy-900 mb-6">Payment Method</h2>
          <div className="flex items-center gap-4 p-4 bg-navy-50 rounded-xl mb-6">
            <div className="w-14 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">Visa ending in 4242</p>
              <p className="text-xs text-navy-500">Expires 08/2028</p>
            </div>
          </div>
          <button className="btn-secondary text-sm w-full">
            Update Payment Method
          </button>
          <div className="mt-4 flex items-center gap-2 text-xs text-navy-400">
            <Shield className="w-4 h-4" />
            Payments are secured with 256-bit SSL encryption
          </div>
        </div>
      </div>

      {/* Plan comparison */}
      <div className="card p-6 mb-8">
        <h2 className="text-lg font-bold text-navy-900 mb-6">Available Plans</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-5 border-2 transition-all ${
                plan.current
                  ? 'border-emerald-500 bg-emerald-50/50'
                  : 'border-navy-100 hover:border-navy-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-navy-900">{plan.name}</h3>
                {plan.current && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-navy-900 mb-3">
                {plan.price}<span className="text-sm font-normal text-navy-500">/mo</span>
              </p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-navy-600">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {plan.current ? (
                <button className="w-full py-2 text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-lg" disabled>
                  Current Plan
                </button>
              ) : (
                <button className="w-full py-2 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-lg transition-colors">
                  {plan.price === '$399' ? 'Contact Sales' : 'Switch Plan'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Invoice history */}
      <div className="card">
        <div className="flex items-center justify-between p-6 border-b border-navy-100">
          <h2 className="text-lg font-bold text-navy-900">Invoice History</h2>
          <button className="btn-ghost text-sm gap-2">
            <Receipt className="w-4 h-4" />
            Download All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-100">
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">Invoice</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">Date</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">Description</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-navy-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50">
              {mockInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-navy-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-emerald-600">{inv.id}</td>
                  <td className="px-6 py-4 text-sm text-navy-500">{inv.date}</td>
                  <td className="px-6 py-4 text-sm text-navy-700">{inv.description}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-navy-900">{inv.amount}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                      <Check className="w-3.5 h-3.5" />
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
