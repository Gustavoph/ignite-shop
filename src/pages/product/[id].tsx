import Stripe from "stripe";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

import { stripe } from "@/lib/stripe";
import * as S from "@/styles/pages/product";
import { useRouter } from "next/router";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <Image src={product?.imageUrl} width={520} height={480} alt=""/>
      </S.ImageContainer>
      
      <S.ProductDetails>
        <h1>{product?.name}</h1>
        <span>{product?.price}</span>

        <p>{product?.description}</p>

        <button>Comprar Agora</button>
      </S.ProductDetails>
    </S.ProductContainer>
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
        price: new Intl.NumberFormat('pr-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(Number(price.unit_amount) / 100)
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}