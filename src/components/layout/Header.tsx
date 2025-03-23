
import React from 'react';
import { User, Bell, Settings, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  sidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ sidebarCollapsed }) => {
  return (
    <header className={cn(
      "h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-0 z-30 flex items-center transition-all duration-300",
      sidebarCollapsed ? "pl-[60px]" : "pl-[200px]"
    )}>
      <div className="flex-1 flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <span className="font-medium text-gray-700">排行榜</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-1">
            <span className="text-gray-700 font-medium">¥1,400.00</span>
            <span className="ml-2 text-primary hover:text-primary-600 text-sm cursor-pointer">提现</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </button>
            
            <button className="text-gray-600 hover:text-gray-900">
              <Settings size={20} />
            </button>
            
            <button className="text-gray-600 hover:text-gray-900">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <User size={16} />
              </span>
            </button>
            
            <div className="flex items-center cursor-pointer">
              <span className="text-sm text-gray-700">陈文光</span>
              <ChevronDown size={16} className="ml-1 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
