import Stripe from "stripe";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

import { stripe } from "@/lib/stripe";
import * as S from "@/styles/pages/product";
import { useRouter } from "next/router";
import Head from "next/head";
import { useCart } from "@/hooks/cart";
import { Product as ProductType } from "@/@types/product";

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const { addCart, productAlreadyInCart } = useCart()

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <S.ProductContainer>
        <S.ImageContainer>
          <Image src={product?.imageUrl} width={520} height={480} alt=""/>
        </S.ImageContainer>
        
        <S.ProductDetails>
          <h1>{product?.name}</h1>
          <span>{product?.price}</span>

          <p>{product?.description}</p>

          <button onClick={() => addCart(product)} disabled={productAlreadyInCart(product.id)}>
            {productAlreadyInCart(product.id) ? 'Produto já adicionado ao carrinho' : 'Comprar Agora'}
          </button>
        </S.ProductDetails>
      </S.ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_Mwz4QWpzXXQRTI' } },
      { params: { id: 'prod_Mwz2PyW0oqAsHj' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<ProductProps, { id: string }> = async ({ params }) => {
  const productId = params?.id
  
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        defaultPriceId: price.id,
        priceNumber: price.unit_amount,
        price: new Intl.NumberFormat('pr-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(Number(price.unit_amount) / 100)
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}