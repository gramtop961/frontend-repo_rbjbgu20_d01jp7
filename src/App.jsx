import React from 'react';
import OnboardingBanner from './components/OnboardingBanner';
import Recommendations from './components/Recommendations';
import BrowseSection from './components/BrowseSection';
import BottomNav from './components/BottomNav';
import { Bell } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#2E2E2E]">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 bg-[#FDFCF7]/95 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-[#A8C686] shadow-sm" />
            <div className="leading-tight">
              <p className="text-xs text-slate-600">Welcome to</p>
              <h1 className="text-lg font-extrabold tracking-tight" style={{ fontFamily: 'Nunito Sans, Manrope, Inter, sans-serif' }}>Swapparel</h1>
            </div>
          </div>
          <button aria-label="Notifications" className="rounded-full border border-slate-200 bg-white p-2 shadow-sm">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-md px-4 pb-24 pt-4">
        <OnboardingBanner />
        <Recommendations />
        <BrowseSection />
        <section className="mt-8 rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold">Safety, connection, and fun</h2>
          <p className="mt-1 text-sm text-slate-600">Our community values trust. Profiles include ratings and reviews, chats are secure, and youre in control of every swap.</p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default App;
