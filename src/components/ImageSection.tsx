import React from 'react';
import { Brain, Sparkles, Network } from 'lucide-react';

const ImageSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Advanced AI Solutions Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
              alt="Advanced AI Solutions"
              className="rounded-2xl w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className="w-16 h-16 text-blue-400 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <h3 className="text-white font-semibold text-lg">Advanced AI Solutions</h3>
              <p className="text-gray-300 text-sm">Next-gen artificial intelligence</p>
            </div>
          </div>

          {/* Deep Learning Networks Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1555255707-c07966088b7b"
              alt="Deep Learning Networks"
              className="rounded-2xl w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Network className="w-16 h-16 text-purple-400 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <h3 className="text-white font-semibold text-lg">Deep Learning Networks</h3>
              <p className="text-gray-300 text-sm">Neural network architecture</p>
            </div>
          </div>

          {/* Intelligent Analytics Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Intelligent Analytics"
              className="rounded-2xl w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-blue-400 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <h3 className="text-white font-semibold text-lg">Intelligent Analytics</h3>
              <p className="text-gray-300 text-sm">Data-driven insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;