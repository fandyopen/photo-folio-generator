
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
    <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
      <div className="p-4 border-b border-gray-100 bg-blue-500 text-white rounded-t-lg">
        <h3 className="font-medium text-center">推荐直播报</h3>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <img 
            src={banners[currentBanner].imageUrl}
            alt={banners[currentBanner].title}
            className="w-full object-contain"
          />
        </div>
        
        <div className="flex justify-center items-center gap-2 mt-4">
          <button 
            onClick={prevBanner}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          
          <div className="text-sm text-gray-500">
            {currentBanner + 1}/{banners.length}
          </div>
          
          <button 
            onClick={nextBanner}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
