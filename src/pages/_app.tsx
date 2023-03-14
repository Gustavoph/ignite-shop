import Image from 'next/image'
import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'

import logo from '@assets/logo.svg'
import { Container, Header } from '@styles/pages/app'
import Link from 'next/link'

import { CartModal } from "@/components/Cart";
import { CartProvider } from '@/hooks/cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>

      <Header>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <CartModal />
      </Header>

      <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
