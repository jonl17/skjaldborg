import React from 'react'
import { useMenu } from '../../store'
import { Container, Line } from './styled'

const Burger = () => {
  const { open, toggleMenu } = useMenu()

  return !open ? (
    <Container className='border-current' onClick={() => toggleMenu(true)}>
      <Line one></Line>
      <Line two></Line>
      <Line three></Line>
    </Container>
  ) : (
    <Container onClick={() => toggleMenu(false)}>
      <Line one ex></Line>
      <Line three ex></Line>
    </Container>
  )
}

export default Burger
