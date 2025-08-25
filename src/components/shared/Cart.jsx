"use client";

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2 } from 'lucide-react';

export default function Cart() {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        {cartItems.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
                <div className="space-y-4">
                {cartItems.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-md overflow-hidden relative">
                        <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={item.image.aiHint}
                        />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">₹{item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-2 mt-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.title, item.quantity - 1)}
                        >
                            -
                        </Button>
                        <Input
                            type="number"
                            className="h-6 w-12 text-center"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.title, parseInt(e.target.value, 10))}
                            min="1"
                        />
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.title, item.quantity + 1)}
                        >
                            +
                        </Button>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.title)}>
                        <Trash2 className="h-4 w-4" />
                    </Button>
                    </div>
                ))}
                </div>
            </ScrollArea>
            <SheetFooter>
                <div className="w-full space-y-4">
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <Button className="w-full">Checkout</Button>
                </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
