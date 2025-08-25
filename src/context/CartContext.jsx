"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === product.title);
      if (existingItem) {
        return prevItems.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productTitle) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.title !== productTitle));
  };

  const updateQuantity = (productTitle, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productTitle);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.title === productTitle ? { ...item, quantity } : item
        )
      );
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
