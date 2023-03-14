import { Product } from "@/@types/product";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartContextProps } from "./types";

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({children}: PropsWithChildren) {
  const [cart, setCart] = useState<Product[]>([])

  const cartTotalPrice = cart.reduce((acc, product) => {
    return acc + product.priceNumber;
  }, 0);

  function productAlreadyInCart(id: string) {
    return cart.some(product => product.id === id)
  }

  function addCart(product: Product) {
    const productExits = cart.find(item => item.id === product.id)
    if (!productExits) setCart(state => [...state, product])
  }

  function removeCart(id: string) {
    const cartWithoutProduct = cart.filter(product => product.id !== id)
    setCart(cartWithoutProduct)
  }

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, cartTotalPrice, productAlreadyInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)