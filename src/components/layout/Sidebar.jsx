
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, Users, Target, User, Briefcase, FileText, Settings, Menu, Image,
  MapPin, Database, Book
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = ({ collapsed = false, onToggle }) => {
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
          />
          <SidebarItem 
            icon={<Target size={18} />} 
            label="抢单看板" 
            to="/dashboard" 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Image size={18} />} 
            label="图片上传" 
            to="/image-upload" 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<FileText size={18} />} 
            label="我的接单" 
            to="/my-orders" 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<MapPin size={18} />} 
            label="我的位置" 
            to="/my-position" 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<User size={18} />} 
            label="人员管理" 
            to="/personnel" 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Book size={18} />} 
            label="简历库" 
            to="/resumes" 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Users size={18} />} 
            label="推荐管理" 
            to="/recommendations" 
            collapsed={collapsed} 
          />
          <SidebarItem 
            icon={<Database size={18} />} 
            label="数据管理" 
            to="/data" 
            collapsed={collapsed} 
          />
        </nav>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, to, collapsed = false, active = false }) => {
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
      <span className="flex-shrink-0">{icon}</span>
      {!collapsed && <span className="ml-3 animate-fade-in">{label}</span>}
    </Link>
  );
};

export default Sidebar;
