import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return cartCtx;
}
