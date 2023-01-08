import cn from 'classnames'
import React from 'react'
import styled from 'styled-components'
import { redColor } from '../../../constants'
import { useLang } from '../../../store'

const ParticipantWrap = styled.div`
  padding-bottom: 1rem;
  p {
    margin: 0;
  }
  .title {
    text-transform: uppercase;
    padding-bottom: 5px;
  }
  .name {
    color: ${redColor};
  }
`

const Participant = ({ title, name }) => {
  const { lang } = useLang()
  const { is, en } = title
  if (!name) {
    return null
  }
  return (
    <ParticipantWrap>
      <h6 className='text-primary uppercase'>{lang === 'is' ? is : en}</h6>
      <p className='text-tertiary'>{name}</p>
    </ParticipantWrap>
  )
}

const lib = {
  director: { title: { is: 'Leikstjóri', en: 'Director' } },
  producer: { title: { is: 'Framleiðandi', en: 'Producer' } },
  production_company: {
    title: { is: 'Framleiðslufyrirtæki', en: 'Production company' },
  },
  editing: { title: { is: 'Framleiðslufyrirtæki', en: 'Production company' } },
  composer: { title: { is: 'Tónskáld', en: 'Composer' } },
  filming: { title: { is: 'Kvikmyndataka', en: 'Filming' } },
  sound_desing: { title: { is: 'Hljóðhönnun', en: 'Sound design' } },
}

const Participants = ({ participants, className, otherCredits = [] }) => {
  return (
    <div className={cn(className, 'lg:w-[250px]')}>
      {participants.map((item, key) => (
        <Participant key={key} title={lib[item.key].title} name={item.name} />
      ))}
      {otherCredits.map((item, key) => (
        <Participant
          key={key}
          title={{ is: item.role, en: item.roleEn ?? item.role }}
          name={item.name}
        />
      ))}
    </div>
  )
}

export default Participants
