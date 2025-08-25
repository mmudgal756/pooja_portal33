import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from 'lucide-react';

export default function PujaServiceCard({ title, description, image }) {
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
      <CardFooter>
        <Button className="w-full" variant="default">
          <Book className="mr-2 h-4 w-4" />
          Book Pandit
        </Button>
      </CardFooter>
    </Card>
  );
}
