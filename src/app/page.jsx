import PujaServiceCard from '@/components/shared/PujaServiceCard';

const pujaServices = [
  {
    title: 'Satyanarayan Katha',
    description: 'A sacred ritual to honor Lord Vishnu, bringing peace and prosperity to your home.',
    price: 5100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'A family performing Satyanarayan Katha with a pandit.',
      aiHint: 'hindu prayer'
    },
  },
  {
    title: 'Mundan Sanskar',
    description: 'The traditional head-shaving ceremony for your child, performed by our experienced pandits.',
    price: 3100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'A baby during a Mundan ceremony with a pandit.',
      aiHint: 'hindu ceremony'
    },
  },
  {
    title: 'Janeu Sanskar',
    description: 'The sacred thread ceremony (Upanayana) marking the journey into spiritual studies.',
    price: 4100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'A young boy during his Janeu (sacred thread) ceremony.',
      aiHint: 'sacred thread'
    },
  },
  {
    title: 'Grah Pravesh Pooja',
    description: 'A housewarming ceremony to purify your new home and invite blessings for happiness and prosperity.',
    price: 7100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'A couple performing Grah Pravesh pooja at their new home entrance.',
      aiHint: 'housewarming ceremony'
    },
  },
  {
    title: 'Vivah Sanskar',
    description: 'A beautiful wedding ceremony conducted by our expert pandits, following all the sacred traditions.',
    price: 15100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'A bride and groom during a traditional Hindu wedding ceremony.',
      aiHint: 'indian wedding'
    },
  },
  {
    title: 'Naamkaran',
    description: 'The naming ceremony for your newborn, a joyous occasion to officially welcome them into the family.',
    price: 3500,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'Parents with their newborn during a Naamkaran ceremony.',
      aiHint: 'baby naming'
    },
  },
  {
    title: 'Vahan Pooja',
    description: 'Bless your new vehicle with a Vahan Pooja to ensure safety and good fortune on the road.',
    price: 2100,
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'A person performing a pooja for their new car.',
      aiHint: 'car blessing'
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
    </div>
  );
}
