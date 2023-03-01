import Image from 'next/image'
import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'

import logo from '@assets/logo.svg'
import { Container, Header } from '@styles/pages/app'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { CartDialog } from "@/components/Cart";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>

      <button>
        <Handbag size={32} weight="bold" />
      </button>
      <CartDialog />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
