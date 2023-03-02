import { styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog';

export const CartButton = styled('button', {
  height: '3rem',
  width: '3rem',
  borderRadius: 6,
  padding: 12,
  background: '$gray800',
  border: 'none',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  cursor: 'pointer',
  color: '#8D8D99'
})

export const Content = styled(Dialog.Content, {
  backgroundColor: 'white',
  position: 'fixed',
  top: '50%',
  right: '0',
  transform: 'translate(0, -50%)',
  width: '500px',
  maxWidth: '450px',
  maxHeight: '100vh',
  height: '100vh',
  padding: 25,
  '&:focus': { outline: 'none' },
})
