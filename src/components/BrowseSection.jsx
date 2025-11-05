import React, { useMemo, useState } from 'react';
import { Filter } from 'lucide-react';
import ItemCard from './ItemCard';

const owners = [
  { id: 10, name: 'Kai', avatar: 'https://images.unsplash.com/photo-1542326237-94b1c5a538d6?q=80&w=400&auto=format&fit=crop', rating: 4.7 },
  { id: 11, name: 'Zoe', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop', rating: 4.9 },
  { id: 12, name: 'Omar', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop', rating: 4.5 },
  { id: 13, name: 'Lila', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop', rating: 4.8 },
];

const allItems = [
  { id: 'b1', name: 'Corduroy Overshirt', category: 'Tops', size: 'M', condition: 'Good', photo: 'https://images.unsplash.com/photo-1520975930476-0d9170c8e1f5?q=80&w=800&auto=format&fit=crop', owner: owners[0] },
  { id: 'b2', name: 'Minimal Knit Sweater', category: 'Tops', size: 'S', condition: 'Like New', photo: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop', owner: owners[1] },
  { id: 'b3', name: 'Relaxed Chino Pants', category: 'Bottoms', size: 'L', condition: 'Good', photo: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=800&auto=format&fit=crop', owner: owners[2] },
  { id: 'b4', name: 'Olive Utility Jacket', category: 'Outerwear', size: 'M', condition: 'Fair', photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop', owner: owners[3] },
  { id: 'b5', name: 'Denim Skirt', category: 'Bottoms', size: 'S', condition: 'Like New', photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop', owner: owners[1] },
  { id: 'b6', name: 'Classic White Tee', category: 'Tops', size: 'M', condition: 'New', photo: 'https://images.unsplash.com/photo-1520975930476-0d9170c8e1f5?q=80&w=800&auto=format&fit=crop', owner: owners[0] },
];

export default function BrowseSection() {
  const [filter, setFilter] = useState({ size: 'All', category: 'All' });

  const filtered = useMemo(() => {
    return allItems.filter((i) =>
      (filter.size === 'All' || i.size === filter.size) &&
      (filter.category === 'All' || i.category === filter.category)
    );
  }, [filter]);

  return (
    <section id="browse" className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#2E2E2E]">Discover nearby</h2>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-[#2E2E2E]" />
          <select
            value={filter.category}
            onChange={(e) => setFilter((f) => ({ ...f, category: e.target.value }))}
            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm"
          >
            {['All', 'Tops', 'Bottoms', 'Outerwear', 'Dresses'].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            value={filter.size}
            onChange={(e) => setFilter((f) => ({ ...f, size: e.target.value }))}
            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm"
          >
            {['All', 'XS', 'S', 'M', 'L', 'XL'].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {filtered.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
