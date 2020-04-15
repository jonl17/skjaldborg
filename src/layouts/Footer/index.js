import React from "react"
import { useSelector } from "react-redux"

// components
import Contact from "./contact"
import { Container, Wrap } from "./styled"
import Logo from "../../reusableComponents/Logo"
import Postlist from "../../reusableComponents/Postlist"

const Footer = () => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Wrap>
      <Container>
        {platform === "desktop" ? <Logo color="white" footer></Logo> : null}
        <Contact></Contact>
        <Postlist></Postlist>
      </Container>
    </Wrap>
  )
}

export default Footer
