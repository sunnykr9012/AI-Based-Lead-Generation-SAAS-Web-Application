import React from 'react';
import LeadForm from './LeadForm';
import LeadInsights from './LeadInsights';
import { useLeadGeneration } from '../../hooks/useLeadGeneration';

const LeadGeneration = () => {
  const { insights, loading, error, generateInsights } = useLeadGeneration();

  return (
    <section className="py-24 relative bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            AI-Powered Lead Generation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your business data into actionable leads with our advanced AI analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <LeadForm onSubmit={generateInsights} loading={loading} />
          <LeadInsights insights={insights} loading={loading} error={error} />
        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;