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
  color: '#8D8D99',

  position: 'relative'
})

export const CartQuantity = styled('div', {
  position: 'absolute',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: -8,
  right: -8,
  color: 'white',
  background: '$green500',
  width: 24,
  height: 24,
  borderRadius: 999
})


export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  position: 'fixed',
  top: '50%',
  right: '0',
  transform: 'translate(0, -50%)',
  width: '500px',
  maxWidth: '480px',
  height: '100vh',
  padding: 48,
  boxShadow: '-4px 0px 30px 0px #000000CC',
  '&:focus': { outline: 'none' },
  overflow: 'auto',

  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

    header: {
      width: '100%',
    },

    section: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      boxSizing: 'border-box',
      height: '100%',

      article: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }
    }
  },
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
  height: '5.875rem',
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
      color: '$green500',
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
  height: '5.875rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const ProductFooter = styled('footer', {
  button: {
    width: '100%',
    height: '4.3rem',
    borderRadius: 8,
    backgroundColor: '$green500',
    cursor: 'pointer',
    
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    outline: 'none',
    border: 'none',
  
    transition: 'background 200ms',

    '&:hover': {
      background: '$green300'
    }
  },

  'p:nth-child(1)': {
    display: 'flex',
    justifyContent: 'space-between',
    color: '$gray100',
    fontSize: '1rem',

    span: {
      fontSize: '$md'
    },

    marginBottom: 8
  },

  'p:nth-child(2)': {
    display: 'flex',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    color: '$gray100',
    fontSize: '$md',

    span: {
      fontSize: '$xl'
    },

    marginBottom: '3.5rem'
  }
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

export const EmptyCart = styled('div', {
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
})