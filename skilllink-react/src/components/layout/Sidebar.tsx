import React from "react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface SidebarProps {
  items: SidebarItem[];
  active: string;
  onSelect: (id: string) => void;
  bottomItems?: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items, active, onSelect, bottomItems }) => {
  return (
    <div className="sidebar w-64 navy-panel text-white h-screen sticky top-0 flex flex-col p-5 overflow-y-auto">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-9 h-9 bg-indigo-400 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-950/30">SL</div>
        <span className="text-xl font-semibold display-font">SkillLink</span>
      </div>
      <nav className="flex-1 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <div
              key={item.id}
              className={cn(
                "sidebar-item flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors",
                isActive ? "bg-white/15 text-white" : "text-indigo-100/65 hover:bg-white/10 hover:text-white"
              )}
              onClick={() => onSelect(item.id)}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>
      {bottomItems && bottomItems.length > 0 && (
        <div className="border-t border-slate-200 pt-4 mt-2 space-y-1">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <div
                key={item.id}
                className={cn(
                  "sidebar-item flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors",
                  isActive ? "bg-white/15 text-white" : "text-indigo-100/65 hover:bg-white/10 hover:text-white"
                )}
                onClick={() => onSelect(item.id)}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;