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
  backgroundColor: '$gray800',
  position: 'fixed',
  top: '50%',
  right: '0',
  transform: 'translate(0, -50%)',
  width: '500px',
  maxWidth: '480px',
  height: '100%',
  padding: 48,
  boxShadow: '-4px 0px 30px 0px #000000CC',
  '&:focus': { outline: 'none' },

  section: {
    display: 'flex',
    alignItems: 'space-between',
    flexDirection: 'column',
    height: '100%',
    boxSizing: 'border-box'
  }
})

export const CloseButton = styled(Dialog.Close, {
  background: 'transparent',
  border: 'none',
  color: '#8D8D99',
  cursor: 'pointer',
  textAlign: 'end',
  width: '100%',
  marginBottom: '24px',
})

export const ProductContainer = styled('div', {
  height: '5.25rem',
  width: '100%',
  display: 'flex',
  gap: '20px',

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8,
    height: '100%',
    
    button: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'start',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '$green500'
    }
  }
})

export const DialogTitle = styled(Dialog.Title, {
  marginBottom: '32px',
  fontSize: '$lg',
  color: '$gray100',
  fontWeight: 'bold'
})

export const ProductImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  width: '102px',
  height: '5.82rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const ProductFooter = styled('footer', {
})

export const ProductName = styled('p', {
  fontSize: '$md',
  color: '$gray300'
})

export const ProductPrice = styled('p', {
  fontSize: '$md',
  color: '$gray100',
  fontWeight: 'bold'
})