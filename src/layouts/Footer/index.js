import React from 'react'
import { useSelector } from 'react-redux'

// components
import Contact from './contact'
import { Container, Wrap } from './styled'
import Logo from '../../reusableComponents/Logo'
import Postlist from '../../reusableComponents/Postlist'

const Footer = () => {
  const platform = useSelector((state) => state.reducer.platform)
  return (
    <footer className='h-96 w-full bg-black text-secondary'>
      <Container className='relative'>
        {platform === 'desktop' ? <Logo color='white' footer></Logo> : null}
        <Contact></Contact>
        <Postlist></Postlist>
      </Container>
    </footer>
  )
}

export default Footer
