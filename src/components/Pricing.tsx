import React from 'react';
import { Check, Zap } from 'lucide-react';
import GradientButton from './common/GradientButton';
import PriceCard from './common/PriceCard';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 49,
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 team members',
        '50 AI generations per day',
        'Basic analytics',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: 99,
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 team members',
        'Unlimited AI generations',
        'Advanced analytics',
        'Priority support',
        'Custom AI training'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 299,
      description: 'For large-scale operations',
      features: [
        'Unlimited team members',
        'Dedicated AI resources',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantee'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <GradientButton variant="outline">
            Contact Sales <Zap className="w-4 h-4 ml-2" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default Pricing;