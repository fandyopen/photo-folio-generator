
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar, Share2 } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-medium">抢单看板</h1>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="h-8" asChild>
          <Link to="/my-orders">
            <Calendar className="w-4 h-4 mr-2" />
            保存预览
          </Link>
        </Button>
        <Button variant="outline" className="h-8" asChild>
          <Link to="/recommendations">
            <Share2 className="w-4 h-4 mr-2" />
            专用预览
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
