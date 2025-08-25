import SamagriCard from '@/components/shared/SamagriCard';
import { getProducts } from '@/services/pujaProducts';

export default async function ProductsPage() {
  const samagriItems = await getProducts();
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-headline">Poojan Samagri</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">All you need for your rituals, delivered to your doorstep. High-quality items for an authentic experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samagriItems.map((item) => (
            <SamagriCard 
              key={item.id} 
              title={item.title}
              description={item.description}
              price={item.price}
              image={{
                src: 'https://placehold.co/600x400.png',
                alt: item.title,
                aiHint: 'prayer platter' // A default hint, can be improved
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
