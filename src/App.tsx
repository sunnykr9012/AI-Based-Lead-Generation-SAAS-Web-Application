import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ImageSection from './components/ImageSection';
import Pricing from './components/Pricing';
import LeadGeneration from './components/LeadGeneration';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <ImageSection />
      <LeadGeneration />
      <Pricing />
    </div>
  );
}

export default App;