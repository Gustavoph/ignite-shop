import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import * as S from "../styles/pages/success";
import Head from "next/head";

interface SuccessProps {
  customerName: string
  products: {
    name: string,
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra Efeturada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <S.SuccessContainer>
        <h1>Compra efetuada</h1>


        <S.ImageContainer>
          {products.map(product => (
            <S.ImageItem key={product.name}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </S.ImageItem>
          ))}
        </S.ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de <strong>{products.length}</strong> camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </S.SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })


  const customerName = session.customer_details.name
  const products = session.line_items.data.map(product => product.price.product) as Stripe.Product[]
  const productsFormatted = products.map(product => ({
    name: product.name,
    imageUrl: product.images[0]
  }))

  return {
    props: {
      customerName,
      products: productsFormatted
    }
  }
}