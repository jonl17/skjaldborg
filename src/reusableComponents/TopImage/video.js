import React from "react"
import { Container, LogoMobileWrap } from "./styled"
import { useSelector } from "react-redux"
import Logo from "../Logo"
import CloudinaryVideo from "./cloudinaryVideo"

export default ({ videoSource, frontpage }) => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Container frontpage={frontpage}>
      <CloudinaryVideo publicId={videoSource}></CloudinaryVideo>
      {platform === "mobile" ? (
        <LogoMobileWrap>
          <Logo></Logo>
        </LogoMobileWrap>
      ) : null}
    </Container>
  )
}
