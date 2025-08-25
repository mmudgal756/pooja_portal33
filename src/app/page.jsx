import PujaServiceCard from '@/components/shared/PujaServiceCard';
import { getServices } from '@/services/pujaServices';

export default async function Home() {
  const pujaServices = await getServices();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-headline">Pooja Services</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">Book our expert Pandits for your sacred ceremonies. We provide experienced and knowledgeable priests for all your ritual needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pujaServices.map((service) => (
            <PujaServiceCard 
              key={service.id} 
              title={service.title}
              description={service.description}
              price={service.price}
              image={{
                src: 'https://placehold.co/600x400.png',
                alt: `Placeholder for ${service.title}`,
                aiHint: 'hindu ceremony' // A default hint
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
