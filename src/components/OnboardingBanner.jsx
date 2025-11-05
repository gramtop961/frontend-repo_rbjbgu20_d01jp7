import React, { useState } from 'react';

export default function OnboardingBanner() {
  const [gender, setGender] = useState('All');
  const [size, setSize] = useState('M');
  const [radius, setRadius] = useState(15);
  const [styles, setStyles] = useState(['Casual', 'Minimal']);

  const toggleStyle = (tag) => {
    setStyles((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const allTags = ['Casual', 'Streetwear', 'Vintage', 'Boho', 'Minimal', 'Sporty'];

  return (
    <section className="rounded-2xl bg-[#D3E4CD] p-4 text-[#2E2E2E] shadow-sm">
      <h1 className="text-xl font-bold tracking-tight">Welcome to Swapparel — your wardrobe’s new best friend</h1>
      <p className="mt-1 text-sm text-slate-700">Set your vibe so we can find the perfect swap matches near you.</p>

      <div className="mt-4 grid grid-cols-1 gap-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
          >
            <option>All</option>
            <option>Women</option>
            <option>Men</option>
            <option>Unisex</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
          >
            {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Distance</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={1}
              max={50}
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="accent-[#A8C686]"
            />
            <span className="text-sm">{radius} km</span>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">Style tags</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleStyle(tag)}
                className={`rounded-full px-3 py-1 text-xs border transition ${
                  styles.includes(tag)
                    ? 'bg-[#A8C686] text-white border-transparent'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <button className="mt-1 rounded-xl bg-[#A8C686] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
          Save preferences
        </button>
      </div>
    </section>
  );
}
