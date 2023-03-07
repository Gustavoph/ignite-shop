import { Handbag, X } from 'phosphor-react';
import { Fragment, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';


import * as S from './styles';
import Image from 'next/image';
import shirt1 from '@/assets/shirts/1.png'

export function CartModal() {
  const [isVisible, setIsVisible] = useState(false)

  function handleOpenModal() {
    setIsVisible(true)
  }


  function handleCloseModal() {
    setIsVisible(false)
  }

  return (
    <Fragment>
      <Dialog.Root open={isVisible}>
        <Dialog.Trigger asChild>
          <S.CartButton onClick={handleOpenModal}>
            <Handbag size={32} weight="bold" />
          </S.CartButton>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />
          <S.Content>
            <main>
              <header>  
                <S.CloseButton onClick={handleCloseModal}>
                  <X size={24} weight="bold" />
                </S.CloseButton>

                <S.DialogTitle>
                  Sacola de compras
                </S.DialogTitle>
              </header>

              <section>
                <article>
                  <S.ProductContainer>
                    <S.ProductImageContainer>
                      <Image src={shirt1} alt="" width={94} height={94} />
                    </S.ProductImageContainer>

                    <div>
                      <S.ProductName>Camiseta Beyond the Limits</S.ProductName>
                      <S.ProductPrice>R$ 79,90</S.ProductPrice>

                      <button>Remover</button>
                    </div>
                  </S.ProductContainer>

                  <S.ProductContainer>
                    <S.ProductImageContainer>
                      <Image src={shirt1} alt="" width={94} height={94} />
                    </S.ProductImageContainer>

                    <div>
                      <S.ProductName>Camiseta Beyond the Limits</S.ProductName>
                      <S.ProductPrice>R$ 79,90</S.ProductPrice>

                      <button>Remover</button>
                    </div>
                  </S.ProductContainer>
                  

                  <S.ProductContainer>
                    <S.ProductImageContainer>
                      <Image src={shirt1} alt="" width={94} height={94} />
                    </S.ProductImageContainer>

                    <div>
                      <S.ProductName>Camiseta Beyond the Limits</S.ProductName>
                      <S.ProductPrice>R$ 79,90</S.ProductPrice>

                      <button>Remover</button>
                    </div>
                  </S.ProductContainer>

                  <S.ProductContainer>
                    <S.ProductImageContainer>
                      <Image src={shirt1} alt="" width={94} height={94} />
                    </S.ProductImageContainer>

                    <div>
                      <S.ProductName>Camiseta Beyond the Limits</S.ProductName>
                      <S.ProductPrice>R$ 79,90</S.ProductPrice>

                      <button>Remover</button>
                    </div>
                </S.ProductContainer>
                </article>

                <S.ProductFooter>
                  <p>Quantidade <span>3 itens</span></p>
                  <p>Valor total <span>R$270,00</span></p>

                  <button>Finalizar compra</button>
                </S.ProductFooter>
              </section>
            </main>
          </S.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  )
}