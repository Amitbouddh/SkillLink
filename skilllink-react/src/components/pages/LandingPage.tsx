import React from "react";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui";
import { Award, ArrowRight, User, Shield, Bot, CheckCircle } from "lucide-react";

const LandingPage: React.FC = () => {
  const { dispatch } = useApp();

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#111a3a] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-indigo-400 rounded-xl flex items-center justify-center text-white font-bold text-sm">SL</div>
            <span className="text-xl font-bold display-font">SkillLink</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-indigo-100 hover:bg-white/10 hover:text-white hidden md:inline-flex">How it works</Button>
            <Button variant="ghost" size="sm" className="text-indigo-100 hover:bg-white/10 hover:text-white hidden md:inline-flex">For teams</Button>
            <Button className="bg-white text-[#111a3a] hover:bg-indigo-50" onClick={() => dispatch({ type: "SET_PAGE", payload: "login" })}>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#111a3a] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-indigo-400/15 text-indigo-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" /> AI-Powered Matching
            </div>
            <h1 className="display-font text-4xl md:text-6xl font-bold leading-tight">
              Connect Skills.<br />
              <span className="text-indigo-300">Build Opportunities.</span>
            </h1>
            <p className="text-lg text-indigo-100/70 mt-4 max-w-lg">
              SkillLink connects manufacturers with verified skilled professionals through intelligent matching.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button onClick={() => dispatch({ type: "SET_PAGE", payload: "login" })}>
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="secondary" className="border-indigo-300/30 bg-transparent text-white hover:bg-white/10" onClick={() => dispatch({ type: "SET_PAGE", payload: "login" })}>
                Explore Talent
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-slate-500">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-indigo-300" />
                <span>12,400+ verified professionals</span>
              </div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-indigo-300" />
                <span>Trusted by 2,000+ teams</span>
              </div>
            </div>
          </div>
          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=85')" }}>
            <div className="absolute inset-0 bg-[#111a3a]/25" />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 text-slate-900 rounded-xl p-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">AI</div>
              <div>
                <div className="font-semibold text-slate-900">AI Match found</div>
                <div className="text-sm text-slate-500">Rajesh Kumar · 94% match</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">RK</div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Rajesh Kumar</div>
                  <div className="text-sm text-slate-500">Wood Carving · 8 years</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">94%</div>
                  <div className="text-xs text-slate-500">Match</div>
                </div>
              </div>
            </div></div>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">Wood Carving</span>
              <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">Available</span>
              <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">Jodhpur</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">How SkillLink Works</h2>
            <p className="text-slate-500 mt-2">From brief to build, in five simple steps</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: "01", label: "Create Profile", desc: "Tell us what you need and who you are." },
              { num: "02", label: "Post Requirement", desc: "Share your brief in a few simple steps." },
              { num: "03", label: "AI Matches", desc: "Our engine ranks the best-fit professionals." },
              { num: "04", label: "Collaborate", desc: "Message, agree terms and get to work." },
              { num: "05", label: "Complete Project", desc: "Track progress and celebrate the result." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">{s.num}</div>
                <h4 className="font-semibold text-slate-900">{s.label}</h4>
                <p className="text-sm text-slate-500 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
                <User className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-slate-900">People, not profiles</h4>
              <p className="text-sm text-slate-500 mt-1">See the craft, context and capability behind every match.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-slate-900">Trust, built in</h4>
              <p className="text-sm text-slate-500 mt-1">Verification and work history make every decision clearer.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
                <Bot className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-slate-900">Intelligence that helps</h4>
              <p className="text-sm text-slate-500 mt-1">Spend less time searching, more time building what matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">SL</div>
            <span className="text-lg font-bold">SkillLink</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">How it works</a>
            <a href="#" className="hover:text-white transition">Trust & verification</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
          <div className="text-sm text-slate-500 mt-4 md:mt-0">© 2024 SkillLink. The network for skilled work.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;