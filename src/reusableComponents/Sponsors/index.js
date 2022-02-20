import React from 'react'
import { Container } from './styled'
import { useStaticQuery, graphql } from 'gatsby'
import FadeInSection from '../../techComponents/FadeInSection'
import SponsorsQuery from './query'
import { useSelector } from 'react-redux'
import BigLogo from './BigLogo'

const Sponsors = () => {
  const icelandic = useSelector((state) => state.reducer.icelandic)

  const results = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/bigLogos/" } }) {
        topfive: nodes {
          frontmatter {
            title
            url
            logo {
              publicURL
            }
          }
        }
      }
    }
  `)

  const bigLogos = results.allMarkdownRemark.topfive

  return (
    <Container>
      <h3 className='text-center text-white'>
        {icelandic ? 'Styrktaraðilar' : 'Sponsors'}
      </h3>
      <div className='sponsor-grid-top5'>
        <SponsorsQuery vip></SponsorsQuery>
      </div>
      <div className='sponsor-grid-rest'>
        <SponsorsQuery></SponsorsQuery>
      </div>
    </Container>
  )
}

export default Sponsors
