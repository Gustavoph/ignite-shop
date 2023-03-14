import Stripe from "stripe";
import Image from "next/image";
import Link from 'next/link'
import {  GetStaticProps } from "next";
import { useKeenSlider } from 'keen-slider/react'


import { stripe } from "@/lib/stripe";
import 'keen-slider/keen-slider.min.css'
import * as S from "@/styles/pages/home";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { useCart } from "@/hooks/cart";
import { MouseEvent } from "react";
import { formatPrice } from "@/utils/format";
import { Product } from "@/@types/product";

interface HomeProps {
  products: Product[]
}

export default function Home({products}: HomeProps ) {
  const { addCart, productAlreadyInCart } = useCart()
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  function handleAddCart(event: MouseEvent<HTMLButtonElement>, product: Product) {
    event.preventDefault()
    addCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <S.HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link key={product.id} prefetch={false} href={`/product/${product.id}`}>
            <S.Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={520} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                {productAlreadyInCart(product.id)}
                <button 
                  disabled={productAlreadyInCart(product.id)} 
                  onClick={(event) => handleAddCart(event, product)}
                >
                  <Handbag size={32} weight="bold" />
                </button>
              </footer>
            </S.Product>
          </Link>
        ))}
      </S.HomeContainer>
    </>
  
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  })

  
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      priceNumber: price.unit_amount,
      defaultPriceId: price.id,
      price: formatPrice.format(Number(price.unit_amount) / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}
