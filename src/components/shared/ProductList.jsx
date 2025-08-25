"use client";

import SamagriCard from '@/components/shared/SamagriCard';

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((item) => (
        <SamagriCard 
          key={item.id} 
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}
