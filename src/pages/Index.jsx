
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import LeaderboardCard from '@/components/leaderboard/LeaderboardCard';
import PromotionBanner from '@/components/leaderboard/PromotionBanner';
import { hiringData, interviewData, offerData, promotionBanners } from '@/data/leaderboardData';

const Index = () => {
  const [hiringTimeFrame, setHiringTimeFrame] = useState('month');
  const [interviewTimeFrame, setInterviewTimeFrame] = useState('month');
  const [offerTimeFrame, setOfferTimeFrame] = useState('month');
  
  useEffect(() => {
    console.log("Index component mounted");
  }, []);
  
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* First column */}
        <div className="lg:col-span-3">
          <PromotionBanner banners={promotionBanners} />
        </div>
        
        {/* Second column */}
        <div className="lg:col-span-3">
          <LeaderboardCard 
            title="入职排行榜"
            entries={hiringData}
            valueLabel="入职"
            activeTab={hiringTimeFrame}
            onTabChange={setHiringTimeFrame}
          />
        </div>
        
        {/* Third column */}
        <div className="lg:col-span-3">
          <LeaderboardCard 
            title="约面排行榜"
            entries={interviewData}
            valueLabel="约面"
            activeTab={interviewTimeFrame}
            onTabChange={setInterviewTimeFrame}
          />
        </div>
        
        {/* Fourth column */}
        <div className="lg:col-span-3">
          <LeaderboardCard 
            title="offer排行榜"
            entries={offerData}
            valueLabel="offer"
            activeTab={offerTimeFrame}
            onTabChange={setOfferTimeFrame}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
