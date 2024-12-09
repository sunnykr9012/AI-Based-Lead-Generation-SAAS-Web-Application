import React from 'react';
import { LucideIcon, Target, Users, TrendingUp, MessageSquare } from 'lucide-react';

interface InsightCardProps {
  type: 'audience' | 'opportunity' | 'strategy' | 'action';
  title: string;
  description: string;
}

const InsightCard = ({ type, title, description }: InsightCardProps) => {
  const icons: Record<string, LucideIcon> = {
    audience: Users,
    opportunity: TrendingUp,
    strategy: Target,
    action: MessageSquare
  };

  const Icon = icons[type] || Target;

  return (
    <div className="group p-4 bg-gradient-to-r hover:from-blue-900/20 hover:to-transparent rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-500 hover-glow">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-900/50 rounded-lg group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;