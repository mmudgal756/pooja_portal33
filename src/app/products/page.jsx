import SamagriCard from '@/components/shared/SamagriCard';

const samagriItems = [
  {
    title: 'Havan Samagri Kit',
    description: 'A complete kit with all essential items for performing a sacred Havan at home.',
    price: '₹499',
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Havan Samagri',
      aiHint: 'fire ritual'
    },
  },
  {
    title: 'Premium Agarbatti',
    description: 'Aromatic incense sticks to create a divine and peaceful atmosphere during your puja.',
    price: '₹149',
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Agarbatti sticks',
      aiHint: 'incense sticks'
    },
  },
  {
    title: 'Natural Dhoop Batti',
    description: 'Pure and natural incense cones for a long-lasting and soothing fragrance.',
    price: '₹199',
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Dhoop Batti cones',
      aiHint: 'incense cones'
    },
  },
];


export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-headline">Poojan Samagri</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">All you need for your rituals, delivered to your doorstep. High-quality items for an authentic experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samagriItems.map((item, index) => (
            <SamagriCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
