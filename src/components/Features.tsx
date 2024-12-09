import React from 'react';
import { Brain, Cpu, Lock, BarChart } from 'lucide-react';
import FeatureCard from './common/FeatureCard';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'Leverage state-of-the-art machine learning models for intelligent decision making.'
    },
    {
      icon: Cpu,
      title: 'Real-time Processing',
      description: 'Process and analyze data in real-time with our powerful cloud infrastructure.'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and security measures to protect your sensitive data.'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track your AI performance metrics.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to succeed with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;