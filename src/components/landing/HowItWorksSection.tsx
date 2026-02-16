import React from 'react';
import { Upload, Plug, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload Your Data',
    description:
      'Drag and drop your CSV or Excel files containing lead data, ad spend, property details, and deal metrics.',
  },
  {
    icon: Plug,
    number: '02',
    title: 'Connect to Power BI',
    description:
      'Your data automatically syncs to a dedicated Power BI workspace where interactive reports are generated.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Dominate Your Market',
    description:
      'Use real-time dashboards and advanced analytics to optimize deals, cut waste, and scale your portfolio.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            From Raw Data to Real Profits in 3 Steps
          </h2>
          <p className="text-lg text-navy-300">
            No technical setup required. Upload, connect, and start making
            data-driven decisions today.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500/60 to-emerald-500/20" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Step circle */}
              <div className="inline-flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-navy-800 border-2 border-navy-700 rounded-2xl flex items-center justify-center mx-auto relative z-10">
                    <step.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-xs font-bold z-20">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-navy-300 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
