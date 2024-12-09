import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group hover-glow p-6 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 animate-pulse-glow">
        <Icon className="w-6 h-6 text-blue-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;