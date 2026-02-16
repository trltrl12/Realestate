import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import PricingSection from '../components/landing/PricingSection';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />

      {/* CTA section before footer */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p className="text-lg text-navy-500 mb-8 max-w-2xl mx-auto">
            Join hundreds of real estate investors already using RealMetrics Pro to
            make smarter decisions, close more deals, and maximize returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="btn-primary text-base px-8 py-4">
              Start Your Free Trial
            </a>
            <button className="btn-secondary text-base px-8 py-4">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
