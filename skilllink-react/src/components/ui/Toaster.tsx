import React from 'react';
import { useApp } from '@/context/AppContext';

export const Toaster: React.FC = () => {
  const { state } = useApp();
  const toasts = state.toast ? [{ id: 1, message: state.toast }] : [];

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end space-y-2">
      {toasts.map((t) => (
        <div key={t.id} className="max-w-sm w-full bg-white border border-slate-200 shadow-md rounded-lg px-4 py-2 text-sm text-slate-900">
          {t.message}
        </div>
      ))}
    </div>
  );
};

export default Toaster;
