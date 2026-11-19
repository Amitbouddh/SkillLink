import * as React from "react";
import { CheckCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="bg-slate-900 text-white rounded-xl px-5 py-4 shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-5">
        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <span className="text-sm">{message}</span>
        <button onClick={onClose} className="ml-2 hover:opacity-70">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}