import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { greenColor, redColor } from "../../../constants"

const ParticipantWrap = styled.div`
  padding-bottom: 1rem;
  p {
    margin: 0;
  }
  .title {
    text-transform: uppercase;
    color: ${greenColor};
    padding-bottom: 5px;
  }
  .name {
    color: ${redColor};
  }
`

const Participant = ({ title, name }) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  const { is, en } = title
  if (!name) {
    return null
  }
  return (
    <ParticipantWrap>
      <p className='title'>{icelandic ? is : en}</p>
      <p className='name'>{name}</p>
    </ParticipantWrap>
  )
}

const Participants = ({ frontmatter, className }) => {
  return (
    <div className={className}>
      <Participant
        title={{ is: "Leikstjóri", en: "Director" }}
        name={frontmatter.director}
      />
      <Participant
        title={{ is: "Framleiðandi", en: "Producer" }}
        name={frontmatter.producer}
      />
      <Participant
        title={{ is: "Framleiðslufyrirtæki", en: "Production company" }}
        name={frontmatter.production_company}
      />
      <Participant
        title={{ is: "Klipping", en: "Editing" }}
        name={frontmatter.editing}
      />
      <Participant
        title={{ is: "Tónskáld", en: "Composer" }}
        name={frontmatter.composer}
      />
      <Participant
        title={{ is: "Kvikmyndataka", en: "Filming" }}
        name={frontmatter.filming}
      />
      <Participant
        title={{ is: "Hljóðhönnun", en: "Sound design" }}
        name={frontmatter.sound_design}
      />
    </div>
  )
}

export default Participants
