import React from "react";
import { useApp } from "@/context/AppContext";
import { Card, CardContent } from "@/components/ui";
import { Building, User, Settings, ChevronRight } from "lucide-react";

const LoginPage: React.FC = () => {
  const { dispatch } = useApp();

  const selectRole = (role: "manufacturer" | "artisan" | "admin") => {
    // We'll use a simpler approach: just dispatch role and page
    dispatch({ type: "SET_ROLE", payload: role });
    if (role === "manufacturer") dispatch({ type: "SET_PAGE", payload: "manufacturer-dashboard" });
    else if (role === "artisan") dispatch({ type: "SET_PAGE", payload: "artisan-dashboard" });
    else dispatch({ type: "SET_PAGE", payload: "admin-dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111a3a] p-4 relative overflow-hidden"><div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_15%_20%,#8290ff,transparent_30%),radial-gradient(circle_at_90%_80%,#4657d9,transparent_35%)]" />
      <Card className="w-full max-w-md relative shadow-2xl border-0">
        <CardContent className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm">SL</div>
            <span className="text-lg font-bold display-font text-slate-900">SkillLink</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Choose your workspace</h2>
          <p className="text-sm text-slate-500 mt-1">This demo lets you explore SkillLink as any role.</p>
          <div className="mt-6 space-y-3">
            <div
              className="border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-primary transition flex items-center gap-4"
              onClick={() => selectRole("manufacturer")}
            >
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                <Building className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Manufacturer</div>
                <div className="text-sm text-slate-500">Find skilled partners for your work</div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
            <div
              className="border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-primary transition flex items-center gap-4"
              onClick={() => selectRole("artisan")}
            >
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Artisan</div>
                <div className="text-sm text-slate-500">Discover projects that fit your craft</div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
            <div
              className="border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-primary transition flex items-center gap-4"
              onClick={() => selectRole("admin")}
            >
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                <Settings className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Platform admin</div>
                <div className="text-sm text-slate-500">Manage the SkillLink ecosystem</div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">No password needed — this is a clickable demo</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;