import { useState, ReactNode, useMemo } from 'react';
import { CartContext, CartItem } from './CartContext';

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCart(prev => {
      const existing = prev.find(
        i => i.productId === item.productId && i.size === item.size
      );
      if (existing) {
        return prev.map(i =>
          i.productId === item.productId && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  }

  function removeFromCart(productId: number, size: string) {
    setCart(prev => prev.filter(i => !(i.productId === productId && i.size === size)));
  }

  function updateQuantity(productId: number, size: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart(prev =>
      prev.map(i =>
        i.productId === productId && i.size === size
          ? { ...i, quantity }
          : i
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, updateQuantity, clearCart }),
    [cart]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
