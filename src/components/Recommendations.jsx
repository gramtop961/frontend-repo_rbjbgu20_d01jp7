import React from 'react';
import ItemCard from './ItemCard';

const demoOwners = [
  { id: 1, name: 'Maya', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop', rating: 4.8 },
  { id: 2, name: 'Leo', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop', rating: 4.6 },
  { id: 3, name: 'Jules', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop', rating: 4.9 },
];

const demoItems = [
  {
    id: 'i1',
    name: 'Sage Linen Shirt',
    category: 'Tops',
    size: 'M',
    condition: 'Like New',
    photo: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop',
    owner: demoOwners[0],
  },
  {
    id: 'i2',
    name: 'Vintage Denim Jacket',
    category: 'Outerwear',
    size: 'L',
    condition: 'Good',
    photo: 'https://images.unsplash.com/photo-1520975930476-0d9170c8e1f5?q=80&w=800&auto=format&fit=crop',
    owner: demoOwners[1],
  },
  {
    id: 'i3',
    name: 'Flowy Boho Dress',
    category: 'Dresses',
    size: 'S',
    condition: 'New',
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    owner: demoOwners[2],
  },
];

export default function Recommendations() {
  return (
    <section className="mt-6">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-bold text-[#2E2E2E]">Recommended for you</h2>
        <a href="#browse" className="text-sm text-[#2E2E2E]/70 underline">See all</a>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {demoItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
