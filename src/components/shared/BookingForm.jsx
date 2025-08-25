"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function BookingForm({ serviceTitle, servicePrice }) {
  const { toast } = useToast();
  const [date, setDate] = useState();
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !location || !phoneNumber) {
        toast({
            title: "Missing Information",
            description: "Please fill out all fields to book the service.",
            variant: "destructive",
        });
        return;
    }
    toast({
        title: "Booking Confirmed!",
        description: `Your booking for ${serviceTitle} has been confirmed.`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label>Service</Label>
          <p className="text-sm font-medium">{serviceTitle}</p>
        </div>
        <div className="grid gap-2">
          <Label>Pandit Service Charge</Label>
          <p className="text-sm font-medium">₹{servicePrice}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="date">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
         <div className="grid gap-2">
          <Label htmlFor="time">Time</Label>
          <Input 
              id="time" 
              type="time" 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required 
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="location">Location</Label>
        <Input 
            id="location" 
            placeholder="Enter your address"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required 
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input 
            id="phone" 
            type="tel" 
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
        />
      </div>
      <Button type="submit" className="w-full">Confirm Booking</Button>
    </form>
  );
}
