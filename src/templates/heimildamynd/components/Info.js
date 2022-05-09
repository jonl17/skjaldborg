import React from 'react'
import Content from '../../../reusableComponents/Content'
import Video from '../../../reusableComponents/Video'
import { InfoContainer } from '../styled'
import Participants from './Participants'
import Dates from './Dates'

const Info = ({
  html,
  dates,
  videoSrc,
  participants = [],
  otherCredits = [],
  showDates = false,
}) => {
  return (
    <InfoContainer>
      <div className='lg:pr-24'>
        {showDates && (
          <div className='mb-5'>
            <Dates dates={dates} className='datesWrap' />
          </div>
        )}
        <Participants
          participants={participants}
          otherCredits={otherCredits}
          className='participantsWrap'
        />
      </div>
      <div>
        <Content html={html} className='textiWrap' />
        {videoSrc && <Video src={videoSrc} className='videoWrap' />}
      </div>
    </InfoContainer>
  )
}

export default Info
