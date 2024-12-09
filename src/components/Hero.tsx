import React from 'react';
import { Bot, Sparkles, Zap } from 'lucide-react';
import GradientButton from './common/GradientButton';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-gradient"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1676277791608-ac54525aa94d"
          alt="AI Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-900/50 rounded-2xl animate-pulse-glow">
              <Bot className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-6 animate-float">
            AI-Powered Solutions for Your Business
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Transform your workflow with cutting-edge AI technology. Automate tasks, gain insights, and scale your business with our intelligent platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton>
              Get Started <Zap className="w-4 h-4 ml-2" />
            </GradientButton>
            <GradientButton variant="outline">
              See Demo <Sparkles className="w-4 h-4 ml-2" />
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;