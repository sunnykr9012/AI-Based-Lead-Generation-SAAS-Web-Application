import React from 'react';
import { Brain, Loader, AlertCircle } from 'lucide-react';
import InsightCard from '../common/InsightCard';

interface LeadInsightsProps {
  insights: any[] | null;
  loading: boolean;
  error: string | null;
}

const LeadInsights = ({ insights, loading, error }: LeadInsightsProps) => {
  if (loading) {
    return (
      <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 h-full flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Analyzing your business data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-800 rounded-2xl p-8 border border-red-700 h-full">
        <div className="text-center text-red-400">
          <AlertCircle className="w-12 h-12 mx-auto mb-4" />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!insights) {
    return (
      <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 h-full">
        <div className="text-center">
          <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <p className="text-gray-400">Submit your business information to receive AI-powered insights</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
      <h3 className="text-2xl font-semibold text-white mb-6">AI Generated Insights</h3>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>
    </div>
  );
};

export default LeadInsights;