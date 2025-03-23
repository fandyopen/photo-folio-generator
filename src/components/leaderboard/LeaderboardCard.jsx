
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown } from 'lucide-react';

const LeaderboardCard = ({ title, entries, valueLabel, onTabChange, activeTab = 'month' }) => {
  return (
    <div className="bg-white rounded-lg shadow-md card-shadow animate-fade-up overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-medium text-gray-800">{title}</h3>
        
        {onTabChange && (
          <div className="flex mt-2 rounded-md overflow-hidden">
            <button 
              className={cn(
                "py-1 px-4 text-sm transition-colors duration-200",
                activeTab === 'month' ? 'tab-active' : 'tab-inactive'
              )}
              onClick={() => onTabChange('month')}
            >
              月
            </button>
            <button 
              className={cn(
                "py-1 px-4 text-sm transition-colors duration-200",
                activeTab === 'week' ? 'tab-active' : 'tab-inactive'
              )}
              onClick={() => onTabChange('week')}
            >
              周
            </button>
          </div>
        )}
      </div>
      
      <div className="divide-y divide-gray-100">
        <div className="grid grid-cols-12 py-2 px-4 text-sm text-gray-500 bg-gray-50">
          <div className="col-span-1">排名</div>
          <div className="col-span-9">姓名</div>
          <div className="col-span-2 text-right">{valueLabel}</div>
        </div>
        
        {entries.map((entry, index) => (
          <div 
            key={index} 
            className="grid grid-cols-12 py-3 px-4 text-sm leaderboard-item"
          >
            <div className="col-span-1 flex items-center">
              {entry.isTop ? (
                <Crown 
                  size={16} 
                  className={cn(
                    index === 0 ? "gold-badge" : 
                    index === 1 ? "silver-badge" : 
                    "bronze-badge"
                  )} 
                />
              ) : (
                <span className="text-gray-500">{entry.rank}</span>
              )}
            </div>
            <div className="col-span-9 flex items-center">
              <span className={cn(
                "font-medium",
                entry.isTop ? (
                  index === 0 ? "text-brand-gold" : 
                  index === 1 ? "text-brand-silver" : 
                  "text-brand-bronze"
                ) : "text-gray-700"
              )}>
                {entry.name}
              </span>
            </div>
            <div className="col-span-2 text-right font-medium text-gray-800">
              {entry.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardCard;
