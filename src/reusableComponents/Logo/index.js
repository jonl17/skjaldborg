import React from 'react'
import { Container } from './styled'

export default ({ footer, color }) => {
  return (
    <Container footer={footer ? 'true' : 'false'} to='/'>
      bobsy
    </Container>
  )
}
