import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  
  button: {
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
  }
})