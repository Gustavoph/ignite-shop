import { Product } from "@/@types/product"

export type CartContextProps = {
  cart: Product[]
  cartTotalPrice: number
  addCart: (product: Product) => void
  removeCart: (id: string) => void
  productAlreadyInCart: (id: string) => boolean
}