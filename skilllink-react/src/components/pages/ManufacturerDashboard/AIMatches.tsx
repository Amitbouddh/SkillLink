import React from 'react';
import { ARTISANS } from '@/lib/constants';

const AIMatches: React.FC = () => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold">AI Matches</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {ARTISANS.map(a => (
          <div key={a.id} className="p-4 border rounded">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold">{a.name}</div>
                <div className="text-sm text-slate-600">{a.skill} • {a.location}</div>
              </div>
              <div className="text-sm text-slate-700">Match: {a.match}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIMatches;
