import { Handbag } from 'phosphor-react';
import { Fragment, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';


import * as S from './styles';

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
            sasasasasa
            <Dialog.Title />
            <Dialog.Description />
            <Dialog.Close onClick={handleCloseModal}>
              X
            </Dialog.Close>
          </S.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  )
}