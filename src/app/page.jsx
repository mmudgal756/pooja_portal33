import PujaServiceCard from '@/components/shared/PujaServiceCard';
import SamagriCard from '@/components/shared/SamagriCard';

const pujaServices = [
  {
    title: 'Satyanarayan Katha',
    description: 'A sacred ritual to honor Lord Vishnu, bringing peace and prosperity to your home.',
    price: 5100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Satyanarayan Katha setup',
      aiHint: 'hindu ceremony'
    },
  },
  {
    title: 'Mundan Sanskar',
    description: 'The traditional head-shaving ceremony for your child, performed by our experienced pandits.',
    price: 3100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Mundan ceremony',
      aiHint: 'baby haircut'
    },
  },
  {
    title: 'Janeu Sanskar',
    description: 'The sacred thread ceremony (Upanayana) marking the journey into spiritual studies.',
    price: 4100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Janeu ceremony',
      aiHint: 'sacred thread'
    },
  },
  {
    title: 'Grah Pravesh Pooja',
    description: 'A housewarming ceremony to purify your new home and invite blessings for happiness and prosperity.',
    price: 7100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Grah Pravesh Pooja',
      aiHint: 'housewarming ceremony'
    },
  },
];

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


export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-headline">Pooja Services</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">Book our expert Pandits for your sacred ceremonies. We provide experienced and knowledgeable priests for all your ritual needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pujaServices.map((service, index) => (
            <PujaServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-headline">Poojan Samagri</h2>
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
