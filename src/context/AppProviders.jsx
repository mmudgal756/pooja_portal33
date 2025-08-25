"use client";

import { CartProvider } from './CartContext';

export function AppProviders({ children }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
