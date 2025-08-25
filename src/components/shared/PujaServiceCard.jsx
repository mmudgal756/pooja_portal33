"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Book } from 'lucide-react';
import BookingForm from './BookingForm';

export default function PujaServiceCard({ title, description, image, price }) {
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
        <p className="text-lg font-bold text-primary">₹{price}</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">
              <Book className="mr-2 h-4 w-4" />
              Book Pandit
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Book a Pandit for {title}</DialogTitle>
            </DialogHeader>
            <BookingForm serviceTitle={title} servicePrice={price} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
