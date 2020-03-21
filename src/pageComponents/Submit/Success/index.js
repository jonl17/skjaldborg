import React from "react"
import SocialMediaIcons from "../../../reusableComponents/SocialMediaIcons"
import { useSelector } from "react-redux"

import { Box, Title, Anchor, HomeText, Arrow } from "./styled"
import Footer from "../../../layouts/Footer"

const Success = () => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <>
      <Box>
        <Title>
          {icelandic ? "Innsending tókst!" : "Submission was successful!"}
        </Title>
        <div id="info-box">
          <SocialMediaIcons color="black"></SocialMediaIcons>
          <Anchor to="/">
            <HomeText className="titlar">
              {icelandic ? "Á forsíðu" : "To frontpage"}
            </HomeText>
            <Arrow></Arrow>
          </Anchor>
        </div>
      </Box>
      <Footer></Footer>
    </>
  )
}

export default Success
