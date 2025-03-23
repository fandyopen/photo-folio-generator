
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface PromotionBannerProps {
  banners: {
    id: number;
    imageUrl: string;
    title: string;
  }[];
}

const PromotionBanner: React.FC<PromotionBannerProps> = ({ banners }) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };
  
  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md h-full">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-medium text-gray-800">推荐直播报</h3>
      </div>
      
      <div className="p-4 relative overflow-hidden flex flex-col flex-1">
        <div className="flex-1">
          <img 
            src="/lovable-uploads/f6a030bc-b722-408b-a321-9691ff13de3f.png" 
            alt="Promotion Banner" 
            className="w-full object-contain"
          />
        </div>
      </div>
      
      <div className="px-4 pb-4 flex justify-between items-center">
        <button 
          onClick={prevBanner}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        
        <div className="text-sm text-gray-500">
          {currentBanner + 1}/{banners.length}
        </div>
        
        <button 
          onClick={nextBanner}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default PromotionBanner;
