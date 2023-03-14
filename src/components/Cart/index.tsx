import { Handbag, X } from 'phosphor-react';
import { Fragment, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';


import * as S from './styles';
import Image from 'next/image';
import { useCart } from '@/hooks/cart';
import { formatPrice } from '@/utils/format';
import axios from 'axios';
import { Spinner } from '../Spinner';

export function CartModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cart, cartTotalPrice, removeCart } = useCart()

  function handleOpenModal() {
    setIsVisible(true)
  }


  function handleCloseModal() {
    setIsVisible(false)
  }

    async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: cart
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl

    } catch (error) {
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Fragment>
      <Dialog.Root open={isVisible}>
        <Dialog.Trigger asChild>
          <S.CartButton onClick={handleOpenModal}>
            <Handbag size={32} weight="bold" />
            {cart.length > 0 && (
              <S.CartQuantity>
                {cart.length}
              </S.CartQuantity>
            )}
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

              {cart.length ? (   
                <section>
                  <article>
                    {cart.map(product => (
                      <S.ProductContainer key={product.id}>
                        <S.ProductImageContainer>
                          <Image src={product.imageUrl} alt="" width={94} height={94} />
                        </S.ProductImageContainer>

                        <div>
                          <S.ProductName>{product.name}</S.ProductName>
                          <S.ProductPrice>{product.price}</S.ProductPrice>

                          <button onClick={() => removeCart(product.id)}>
                            Remover
                          </button>
                        </div>
                      </S.ProductContainer>
                    ))}
                  </article>

                  <S.ProductFooter>
                    <p>Quantidade <span>{cart.length} itens</span></p>
                    <p>Valor total <span>{formatPrice.format(cartTotalPrice / 100)}</span></p>

                    <button onClick={handleBuyProduct}>
                      {isCreatingCheckoutSession && <Spinner/> }
                      {!isCreatingCheckoutSession && 'Finalizar compra' }
                    </button>
                  </S.ProductFooter>
                </section>
              ) : (
                <S.EmptyCart>
                  <p>Você não possui produto no carrinho</p>
                </S.EmptyCart>
              )}
            </main>
          </S.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  )
}