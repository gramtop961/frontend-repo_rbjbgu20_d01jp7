import React from 'react';
import { Home, Search, MessageCircle, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1 px-6 py-2">
        <button className="flex flex-col items-center gap-1 text-[11px] text-[#2E2E2E]">
          <Home className="h-6 w-6" />
          Home
        </button>
        <a href="#browse" className="flex flex-col items-center gap-1 text-[11px] text-[#2E2E2E]">
          <Search className="h-6 w-6" />
          Browse
        </a>
        <button className="flex flex-col items-center gap-1 text-[11px] text-[#2E2E2E]">
          <MessageCircle className="h-6 w-6" />
          Chat
        </button>
        <button className="flex flex-col items-center gap-1 text-[11px] text-[#2E2E2E]">
          <User className="h-6 w-6" />
          Profile
        </button>
      </div>
    </nav>
  );
}
