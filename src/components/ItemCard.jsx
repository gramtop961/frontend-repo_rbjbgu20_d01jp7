import React from 'react';
import { Heart, Star, MessageCircle } from 'lucide-react';

const conditionColors = {
  New: 'bg-green-100 text-green-700',
  "Like New": 'bg-emerald-100 text-emerald-700',
  Good: 'bg-yellow-100 text-yellow-700',
  Fair: 'bg-orange-100 text-orange-700',
};

export default function ItemCard({ item }) {
  const { photo, name, size, condition, owner, category } = item;
  return (
    <div className="rounded-2xl bg-[#FDFCF7] shadow-sm border border-[#D3E4CD] overflow-hidden">
      <div className="relative aspect-[4/5] w-full">
        <img
          src={photo}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <button
          type="button"
          aria-label="Mark as interested"
          className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-white/90 p-2 shadow-sm backdrop-blur hover:bg-white"
        >
          <Heart className="h-5 w-5 text-rose-500" />
        </button>
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full ${conditionColors[condition] || 'bg-slate-100 text-slate-700'}`}>{condition}</span>
          <span className="text-xs px-2 py-1 rounded-full bg-white/90 text-slate-700">{size}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[#2E2E2E]">{name}</h3>
            <p className="text-xs text-slate-500">{category}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs font-medium text-amber-600">{owner.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={owner.avatar} alt={owner.name} className="h-7 w-7 rounded-full object-cover" />
            <span className="text-xs text-slate-600">{owner.name}</span>
          </div>
          <button className="inline-flex items-center gap-1 rounded-full bg-[#A8C686] px-3 py-1.5 text-xs font-medium text-white hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> I'm Interested
          </button>
        </div>
      </div>
    </div>
  );
}
