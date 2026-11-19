import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui';
import { LayoutDashboard, Users, ShieldCheck, Flag, BarChart3, ArrowUpRight } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const items = [{ id: 'overview', label: 'Overview', icon: LayoutDashboard }, { id: 'users', label: 'Users', icon: Users }, { id: 'verification', label: 'Verification queue', icon: ShieldCheck }, { id: 'reports', label: 'Reports', icon: Flag }, { id: 'analytics', label: 'Analytics', icon: BarChart3 }];
    const statCards = [
      { label: 'Total users', value: '12,480', change: '+6.4%' },
      { label: 'Active projects', value: '1,842', change: '+12.1%' },
      { label: 'Pending verification', value: '37', change: 'Needs review' },
      { label: 'Disputes open', value: '8', change: '-2 this week' },
    ];

    const verificationQueue = [
      { name: 'Kavita Textiles', type: 'Manufacturer', time: 'submitted 1h ago' },
      { name: 'Noble Woodworks', type: 'Artisan', time: 'submitted 3h ago' },
      { name: 'Arjun Metal Studio', type: 'Manufacturer', time: 'submitted 5h ago' },
    ];

    const healthMetrics = [
      { label: 'Verification rate', value: '92%', tone: 'bg-emerald-500' },
      { label: 'On-time delivery', value: '88%', tone: 'bg-sky-500' },
      { label: 'Job satisfaction', value: '94%', tone: 'bg-violet-500' },
    ];

    const alerts = [
      { title: '3 profiles need document checks', tone: 'amber' },
      { title: '1 dispute escalated to finance', tone: 'rose' },
      { title: '5 new manufacturer onboardings this week', tone: 'emerald' },
    ];

    const categories = [
      { name: 'Wood carving', share: 32 },
      { name: 'Furniture finishing', share: 24 },
      { name: 'Metal craft', share: 18 },
      { name: 'Textile work', share: 14 },
    ];

    return (
      <AppShell items={items} active="overview" onSelect={() => undefined} role="Platform admin">
        <div className="mb-8">
          <p className="text-sm font-semibold text-primary mb-2">PLATFORM OPERATIONS</p>
          <h1 className="display-font text-3xl md:text-4xl font-bold text-slate-950">Good morning, Admin</h1>
          <p className="text-slate-500 mt-2">Keep the SkillLink network healthy, verified, and growing.</p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-7">
          {statCards.map(({ label, value, change }) => (
            <Card className="p-5" key={label}>
              <span className="text-sm text-slate-500">{label}</span>
              <strong className="display-font block text-3xl mt-3 text-slate-900">{value}</strong>
              <small className={label === 'Pending verification' ? 'text-amber-600' : 'text-emerald-600'}>{change}</small>
            </Card>
          ))}
        </div>

        <div className="grid xl:grid-cols-[1.2fr_1fr] gap-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-bold text-lg text-slate-900">Verification queue</h2>
                <p className="text-sm text-slate-500 mt-1">Profiles waiting for a trust review.</p>
              </div>
              <button className="text-primary text-sm font-semibold flex items-center gap-1">
                Open queue <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {verificationQueue.map(({ name, type, time }) => (
                <div className="flex items-center gap-3 py-4 border-b last:border-0 border-slate-100" key={name}>
                  <span className="w-10 h-10 rounded-full bg-indigo-100 text-primary flex items-center justify-center font-bold">
                    {name[0]}
                  </span>
                  <span className="flex-1 min-w-0">
                    <b className="block text-sm text-slate-900">{name}</b>
                    <small className="text-slate-500">{type} · {time}</small>
                  </span>
                  <button className="text-xs font-semibold px-3 py-2 rounded-lg bg-indigo-50 text-primary">Review</button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-bold text-lg text-slate-900">Network health</h2>
            <p className="text-sm text-slate-500 mt-1">Activity across the marketplace.</p>

            <div className="space-y-5 mt-5">
              {healthMetrics.map(({ label, value, tone }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">{label}</span>
                    <strong className="text-slate-900">{value}</strong>
                  </div>
                  <div className="h-2 mt-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-2 rounded-full ${tone}`} style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 grid xl:grid-cols-[1fr_1fr] gap-6">
          <Card className="p-6">
            <h2 className="font-bold text-lg text-slate-900">Operational alerts</h2>
            <div className="mt-5 space-y-4">
              {alerts.map((item) => (
                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3" key={item.title}>
                  <span className="text-sm text-slate-700">{item.title}</span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.tone === 'amber' ? 'bg-amber-400' : item.tone === 'rose' ? 'bg-rose-500' : 'bg-emerald-500'
                    }`}
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-bold text-lg text-slate-900">Top categories</h2>
            <div className="mt-5 space-y-4">
              {categories.map((category) => (
                <div key={category.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">{category.name}</span>
                    <span className="text-slate-900">{category.share}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-2 rounded-full bg-indigo-500" style={{ width: `${category.share}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </AppShell>
    );
};

export default AdminDashboard;
