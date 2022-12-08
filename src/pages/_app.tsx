import Image from 'next/image'
import type { AppProps } from 'next/app'

import logoImg from '../assets/logo.svg'
import * as S from '../styles/pages/app';
import { globalStyles } from '../styles/global'

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Image src={logoImg} alt="Logo Ignite Shop" />
      </S.Header>

      <Component {...pageProps} />
    </S.Container>
  )
}
