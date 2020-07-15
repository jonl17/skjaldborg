import React from "react"
import { InfoContainer } from "../styled"
import Content from "../../../reusableComponents/Content"
import Video from "../../../reusableComponents/Video"

const Info = ({ html, frontmatter }) => {
  return (
    <InfoContainer>
      <Content html={html} className='textiWrap' />
      <Video src={frontmatter.Trailer} className='videoWrap' />
    </InfoContainer>
  )
}

export default Info
