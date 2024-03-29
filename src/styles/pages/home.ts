import Link from "next/link";
import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem',
  width: '100%',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656
})

export const Product = styled('div', {
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'center',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },


  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    div: {
      display: 'flex',
      alignItems: 'start',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 5
    },

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
  

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    },

    button: {
      height: '3rem',
      width: '3rem',
      borderRadius: 6,
      padding: 12,
      background: '$green500',
      border: 'none',
      zIndex: 99,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      cursor: 'pointer',
      color: '$gray100',

      '&:disabled': {
        cursor: 'not-allowed',
        filter: 'brightness(0.7)'
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})

