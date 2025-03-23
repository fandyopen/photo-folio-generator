
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
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
