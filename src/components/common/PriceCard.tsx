import React from 'react';
import { Check } from 'lucide-react';
import GradientButton from './GradientButton';

interface PriceCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted: boolean;
}

const PriceCard = ({ name, price, description, features, highlighted }: PriceCardProps) => {
  return (
    <div className={`
      relative rounded-2xl p-8 hover-glow transition-all duration-500
      ${highlighted 
        ? 'bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 border border-blue-400 animate-pulse-glow'
        : 'bg-gray-800/50 backdrop-blur-lg border border-gray-700 hover:border-blue-500'}
    `}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-float">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            ${price}
          </span>
          <span className="text-gray-400 ml-2">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300 group">
            <div className="w-5 h-5 mr-3 rounded-full bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-800 transition-colors duration-300">
              <Check className="w-3 h-3 text-blue-400" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <div className="text-center">
        <GradientButton variant={highlighted ? 'primary' : 'outline'}>
          Get Started
        </GradientButton>
      </div>
    </div>
  );
};

export default PriceCard;