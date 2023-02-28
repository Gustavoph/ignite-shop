import Stripe from "stripe";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

import { stripe } from "@/lib/stripe";
import * as S from "@/styles/pages/product";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    defaultPriceId: string
    description: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl

    } catch (error) {
      alert('Falha ao redirecionar ao checkout!')
    } finally {
      setIsCreatingCheckoutSession(false)
    }
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

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
            Comprar Agora
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
        price: new Intl.NumberFormat('pr-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(Number(price.unit_amount) / 100)
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}