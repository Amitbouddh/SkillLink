import React from 'react';
import { Bell, ChevronDown, Search, Settings } from 'lucide-react';
import Sidebar from './Sidebar';
import { useApp } from '@/context/AppContext';

type Item = { id: string; label: string; icon: React.ElementType };

export const AppShell: React.FC<{ items: Item[]; active: string; onSelect: (id: string) => void; children: React.ReactNode; role: string }> = ({ items, active, onSelect, children, role }) => {
  const { state, dispatch } = useApp();
  return <div className="app-shell flex">
    <Sidebar items={items} active={active} onSelect={onSelect} bottomItems={[{ id: 'settings', label: 'Settings', icon: Settings }]} />
    <main className="min-w-0 flex-1">
      <header className="h-[72px] bg-white border-b border-slate-200 px-5 md:px-9 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3 text-sm text-slate-400"><Search className="w-4 h-4" /><span className="hidden sm:inline">Search anything</span></div>
        <div className="flex items-center gap-5"><button className="relative text-slate-500 hover:text-slate-900" onClick={() => dispatch({ type: 'MARK_ALL_NOTIFICATIONS_READ' })}><Bell className="w-5 h-5" />{state.notifications.some(n => !n.read) && <span className="absolute -right-1 -top-1 w-2 h-2 bg-rose-500 rounded-full" />}</button><div className="h-8 w-px bg-slate-200" /><button className="flex items-center gap-2 text-left" onClick={() => dispatch({ type: 'SET_PAGE', payload: 'landing' })}><span className="w-9 h-9 rounded-full bg-indigo-100 text-primary flex items-center justify-center font-bold text-sm">AS</span><span className="hidden md:block"><b className="block text-sm text-slate-800">Aditi Shah</b><small className="text-xs text-slate-400">{role}</small></span><ChevronDown className="w-4 h-4 text-slate-400" /></button></div>
      </header>
      <div className="p-5 md:p-9 max-w-[1500px]">{children}</div>
    </main>
  </div>;
};