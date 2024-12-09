import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';
import GradientButton from '../common/GradientButton';
import InputField from '../common/InputField';
import TextArea from '../common/TextArea';

interface LeadFormProps {
  onSubmit: (data: any) => void;
  loading: boolean;
}

const LeadForm = ({ onSubmit, loading }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    targetAudience: '',
    businessGoals: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
      <h3 className="text-2xl font-semibold text-white mb-6">Generate Lead Insights</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="Business Name"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
        />

        <InputField
          label="Industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
        />

        <InputField
          label="Target Audience"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
          required
        />

        <TextArea
          label="Business Goals"
          name="businessGoals"
          value={formData.businessGoals}
          onChange={handleChange}
          required
        />

        <GradientButton variant="primary">
          {loading ? (
            <>
              <Loader className="w-4 h-4 mr-2 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              Generate Insights
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </GradientButton>
      </form>
    </div>
  );
};

export default LeadForm;