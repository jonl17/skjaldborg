import { Link } from 'gatsby'
import React from 'react'
import { useSelector } from 'react-redux'
import { Fade } from 'react-reveal'
import Arrow from '../../../reusableComponents/Arrow'
import { cleanUpTitle } from '../../../utils'
import { Container } from '../styled'

export default function Banner({ title, title_en, director, year }) {
  const icelandic = useSelector((state) => state.reducer.icelandic)

  return (
    <Container>
      <div className='title-container'>
        <div className='max-w-lg'>
          <Fade right distance='15px'>
            <h1 className='text-6xl drop-shadow-lg'>
              {icelandic
                ? cleanUpTitle(title)
                : cleanUpTitle(title_en) ?? cleanUpTitle(title)}
            </h1>
          </Fade>
          <Fade right distance='12.5px' delay={150}>
            <h2 className='text-xl drop-shadow'>{director}</h2>
          </Fade>
          <Fade right distance='10px' delay={250}>
            <Link to={`/sarpur/${year}`}>
              <div className='back-btn-wrap'>
                <Arrow rotation='-180deg' />
                <h3 className='text-lg drop-shadow'>Tilbaka</h3>
              </div>
            </Link>
          </Fade>
        </div>
      </div>
    </Container>
  )
}
