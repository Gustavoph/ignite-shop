import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

import shirt1 from '../assets/shirts/shirt-1.png'
import shirt2 from '../assets/shirts/shirt-2.png'
import shirt3 from '../assets/shirts/shirt-3.png'
import shirt4 from '../assets/shirts/shirt-4.png'

import * as S from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      <S.Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt=""/>

        <S.Footer>
          <strong>Camiseta X</strong>  
          <span>R$ 79,90</span>
        </S.Footer>        
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt=""/>

        <S.Footer>
          <strong>Camiseta X</strong>  
          <span>R$ 79,90</span>
        </S.Footer>        
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt=""/>

        <S.Footer>
          <strong>Camiseta X</strong>  
          <span>R$ 79,90</span>
        </S.Footer>        
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={shirt4} width={520} height={480} alt=""/>

        <S.Footer>
          <strong>Camiseta X</strong>  
          <span>R$ 79,90</span>
        </S.Footer>        
      </S.Product>
    </S.HomeContainer>
  )
}
