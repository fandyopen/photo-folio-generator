
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

const Layout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  console.log("Layout rendering with children:", children);
  
  return (
    <div className="min-h-screen bg-[#f0f5fc]">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <Header sidebarCollapsed={sidebarCollapsed} />
      <main className={cn(
        "pt-16 min-h-screen transition-all duration-300",
        sidebarCollapsed ? "pl-[60px]" : "pl-[200px]"
      )}>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
