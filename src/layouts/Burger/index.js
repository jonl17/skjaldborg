import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { triggerMenu } from '../../state/action'
import { useMenu } from '../../store'
import { Container, Line } from './styled'

// open burger menu
const dispatches = (dispatch, trigger) => {
  dispatch(triggerMenu(trigger))
}

const Burger = () => {
  const menu = useSelector((state) => state.reducer.menu)
  const dispatch = useDispatch()

  const { open, toggleMenu } = useMenu()

  console.log(open)

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
