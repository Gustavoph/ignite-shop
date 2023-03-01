import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '@/styles';


export function CartDialog() {
  return (
    <Dialog.Root>
      <DialogButton>
        Dialog
      </DialogButton>

      <Dialog.Portal>
        <Dialog.Overlay />
        <DialogContent>
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
};

export const DialogButton = styled(Dialog.Trigger, {

})

export const DialogContent = styled(Dialog.Content, {
  background: '$gray800',
  bottom: 0,
  right: 0,
  width: 480,
  height: '100vh',
  minWidth: '300px',
  padding: '30px',
  borderRadius: '4px',
})