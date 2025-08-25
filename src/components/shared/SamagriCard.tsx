import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

interface SamagriCardProps {
  title: string;
  description: string;
  price: string;
  image: {
    src: string;
    alt: string;
    aiHint: string;
  };
}

export default function SamagriCard({ title, description, price, image }: SamagriCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="font-headline">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video overflow-hidden rounded-md">
            <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint={image.aiHint}
            />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-lg font-bold text-primary">{price}</p>
        <Button variant="outline">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
