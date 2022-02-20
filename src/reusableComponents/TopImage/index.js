import React from 'react'
import { Container, LogoMobileWrap } from './styled'
import Logo from '../Logo'
import { useSelector } from 'react-redux'
import CloudinaryImage from './cloudinaryImage'

const Topimage = ({ publicId, frontpage }) => {
  const platform = useSelector((state) => state.reducer.platform)
  return (
    <Container frontpage={frontpage}>
      <CloudinaryImage publicId={publicId}></CloudinaryImage>
      {platform === 'mobile' ? (
        <LogoMobileWrap>
          <Logo></Logo>
        </LogoMobileWrap>
      ) : null}
    </Container>
  )
}

export default Topimage
