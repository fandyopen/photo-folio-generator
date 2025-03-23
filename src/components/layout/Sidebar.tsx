
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart, Users, Target, User, Briefcase, FileText, Settings, Menu, Image,
  MapPin, Database, Book
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, onToggle }) => {
  const location = useLocation();
  
  return (
    <div className={cn(
      "h-screen bg-sidebar fixed left-0 top-0 z-40 flex flex-col transition-all duration-300",
      collapsed ? "w-[60px]" : "w-[200px]"
    )}>
      <div className="flex items-center h-16 border-b border-sidebar-border px-4">
        {!collapsed && (
          <div className="text-white font-bold flex items-center">
            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center mr-2">
              <span className="text-white text-sm">R</span>
            </div>
            <span className="animate-fade-in">推荐直文档系统</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center mx-auto">
            <span className="text-white text-sm">R</span>
          </div>
        )}
        <button 
          onClick={onToggle}
          className="ml-auto text-white p-1 hover:bg-sidebar-accent rounded-md"
        >
          <Menu size={18} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          <SidebarItem 
            icon={<BarChart size={18} />} 
            label="排行榜" 
            to="/" 
            collapsed={collapsed} 
            active={location.pathname === '/'}
          />
          <SidebarItem 
            icon={<Target size={18} />} 
            label="抢单看板" 
            to="/dashboard" 
            collapsed={collapsed} 
            active={location.pathname === '/dashboard'}
          />
          <SidebarItem 
            icon={<Image size={18} />} 
            label="图片上传" 
            to="/image-upload" 
            collapsed={collapsed} 
            active={location.pathname === '/image-upload'}
          />
          <SidebarItem 
            icon={<FileText size={18} />} 
            label="我的接单" 
            to="/my-orders" 
            collapsed={collapsed} 
            active={location.pathname === '/my-orders'}
          />
          <SidebarItem 
            icon={<MapPin size={18} />} 
            label="我的位置" 
            to="/my-position" 
            collapsed={collapsed} 
            active={location.pathname === '/my-position'}
          />
          <SidebarItem 
            icon={<User size={18} />} 
            label="人员管理" 
            to="/personnel" 
            collapsed={collapsed} 
            active={location.pathname === '/personnel'}
          />
          <SidebarItem 
            icon={<Book size={18} />} 
            label="简历库" 
            to="/resumes" 
            collapsed={collapsed} 
            active={location.pathname === '/resumes' || location.pathname.startsWith('/resumes/')}
          />
          <SidebarItem 
            icon={<Users size={18} />} 
            label="推荐管理" 
            to="/recommendations" 
            collapsed={collapsed} 
            active={location.pathname === '/recommendations'}
          />
          <SidebarItem 
            icon={<Database size={18} />} 
            label="数据管理" 
            to="/data" 
            collapsed={collapsed} 
            active={location.pathname === '/data'}
          />
        </nav>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  collapsed?: boolean;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  to, 
  collapsed = false,
  active = false
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center py-2 px-3 text-sm rounded-md transition-all duration-200",
        active 
          ? "bg-sidebar-primary text-sidebar-primary-foreground" 
          : "text-sidebar-foreground hover:bg-sidebar-accent",
        collapsed ? "justify-center" : ""
      )}
    >
      <span className={cn("flex-shrink-0", active ? "text-white" : "")}>{icon}</span>
      {!collapsed && <span className={cn("ml-3 animate-fade-in", active ? "font-medium" : "")}>{label}</span>}
    </Link>
  );
};

export default Sidebar;
