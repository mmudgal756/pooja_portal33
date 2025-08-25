"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogIn, LogOut, User, ShoppingCart, Package, Settings } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';
import { useCart } from '@/context/CartContext';
import Cart from '@/components/shared/Cart';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const isLoggedIn = true; // Assume user is logged in to show the menu
  const { cartItems, setIsCartOpen } = useCart();
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary-foreground-dark">Puja Portal</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/products">
                <Package className="mr-2 h-4 w-4" />
                Our Products
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0">{itemCount}</Badge>
            )}
            <span className="sr-only">Open cart</span>
          </Button>
          <Cart />
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin User</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      admin@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/admin">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Admin Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
