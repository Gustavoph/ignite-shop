import Stripe from "stripe";
import Image from "next/image";
import {  GetStaticProps } from "next";
import { useKeenSlider } from 'keen-slider/react'


import { stripe } from "@/lib/stripe";
import 'keen-slider/keen-slider.min.css'
import { HomeContainer, Product } from "@/styles/pages/home";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({products}: HomeProps ) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
   <HomeContainer ref={sliderRef} className="keen-slider">
    {products.map(product => (
        <Product 
          prefetch={false}
          key={product.id} 
          className="keen-slider__slide"  
          href={`/product/${product.id}`} 
        >
          <Image src={product.imageUrl} width={520} height={520} alt="" />

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
    ))}
   </HomeContainer>
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
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(Number(price.unit_amount) / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}
