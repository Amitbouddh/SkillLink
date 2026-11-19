import React from 'react';
import { Check, Circle, Clock3 } from 'lucide-react';

const ProjectTracking: React.FC = () => {
  const milestones = [
    { title: 'Material preparation', detail: 'Materials sourced and approved', status: 'done' },
    { title: 'Initial production', detail: '24 pieces · First sample review', status: 'active' },
    { title: 'Finishing', detail: 'Polishing and quality check', status: 'pending' },
    { title: 'Delivery', detail: 'Packaging and dispatch', status: 'pending' },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <span className="eyebrow">Project tracking</span>
        <h3 className="mt-2 text-2xl font-extrabold text-slate-900">Hand-carved dining collection</h3>
        <p className="mt-1 text-sm text-slate-500">Project SL-2048 · Rajesh Kumar · Due 30 Oct 2024</p>
      </div>
      <div className="rounded-2xl bg-[#11132c] p-6 text-white shadow-lg">
        <div className="flex flex-wrap items-center gap-8">
          <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-[10px] border-white/15">
            <div className="absolute inset-[-10px] rounded-full border-[10px] border-indigo-400 border-b-transparent border-l-transparent rotate-[35deg]" />
            <div className="text-center"><div className="text-2xl font-extrabold">42%</div><div className="text-[10px] text-indigo-200">overall</div></div>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div><div className="eyebrow text-indigo-200">Artisan</div><div className="mt-1 font-semibold">Rajesh Kumar</div></div>
            <div><div className="eyebrow text-indigo-200">Budget</div><div className="mt-1 font-semibold">₹50,000</div></div>
            <div><div className="eyebrow text-indigo-200">Status</div><div className="mt-1 font-semibold text-amber-300">In progress</div></div>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
        <h4 className="font-bold text-slate-900">Project milestones</h4>
        <p className="mt-1 text-xs text-slate-500">Keep every handoff visible.</p>
        <div className="mt-4">
          {milestones.map((milestone) => (
            <div key={milestone.title} className="flex items-center gap-4 border-t border-slate-100 py-4 first:border-t-0">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${milestone.status === 'done' ? 'bg-emerald-600' : milestone.status === 'active' ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                {milestone.status === 'done' ? <Check className="h-4 w-4" /> : milestone.status === 'active' ? <Clock3 className="h-4 w-4" /> : <Circle className="h-3 w-3" />}
              </div>
              <div className="flex-1"><div className="text-sm font-semibold text-slate-900">{milestone.title}</div><div className="text-xs text-slate-500">{milestone.detail}</div></div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${milestone.status === 'done' ? 'bg-emerald-50 text-emerald-700' : milestone.status === 'active' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>{milestone.status === 'done' ? 'Completed' : milestone.status === 'active' ? 'In progress' : 'Pending'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTracking;
