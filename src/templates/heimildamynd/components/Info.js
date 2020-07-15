import React from "react"
import { InfoContainer } from "../styled"
import Content from "../../../reusableComponents/Content"
import Video from "../../../reusableComponents/Video"
import Participants from "./Participants"

const Info = ({ html, frontmatter }) => {
  return (
    <InfoContainer>
      <Content html={html} className='textiWrap' />
      <Video src={frontmatter.Trailer} className='videoWrap' />
      <Participants frontmatter={frontmatter} className='participantsWrap' />
    </InfoContainer>
  )
}

export default Info
