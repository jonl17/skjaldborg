import React from "react"
import Content from "../../../reusableComponents/Content"
import Video from "../../../reusableComponents/Video"
import { InfoContainer } from "../styled"
import Participants from "./Participants"

const Info = ({ html, dates, videoSrc, participants = [], otherCredits = [] }) => {

  return (
    <InfoContainer>
      <div className="lg:pr-24">
        {/* {dates.length > 0 && (
          <div className="mb-5">
            <Dates dates={dates} className='datesWrap' />
          </div>
        )} */}
        <Participants participants={participants} otherCredits={otherCredits} className='participantsWrap' />
      </div>
      <Content html={html} className='textiWrap' />
      {videoSrc && (
        <Video src={videoSrc} className='videoWrap' />
      )}
    </InfoContainer>
  )
}

export default Info
