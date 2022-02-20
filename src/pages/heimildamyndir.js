import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Template from '../reusableComponents/SarpurTemplate'
import Documentaries from '../pageComponents/Documentaries'
import { graphql } from 'gatsby'
import { useSelector } from 'react-redux'

const TITLES = {
  is: 'Heimildamyndir 2020',
  en: 'Documentaries 2020',
}

const Heimildamyndir = ({
  data: { frumsyningar: docs, verk_i_vinnslu: wips, honourGuest },
}) => {
  const icelandic = useSelector((state) => state.reducer.icelandic)
  return (
    <>
      <Template title={TITLES}>
        <Documentaries
          docs={docs}
          title={icelandic ? 'Frumsýningar' : 'Premieres'}
        />
        <Documentaries
          docs={honourGuest}
          title={icelandic ? 'Heiðursgestur' : 'Honour guest'}
        />
        <Documentaries
          docs={wips}
          title={icelandic ? 'Verk í vinnslu' : 'Work in progress'}
        />
      </Template>
    </>
  )
}

export const query = graphql`
  {
    frumsyningar: allMarkdownRemark(
      sort: { fields: frontmatter___title }
      filter: {
        fileAbsolutePath: { regex: "/frumsyning/" }
        frontmatter: { honour_guest: { eq: false } }
      }
    ) {
      nodes {
        html
        frontmatter {
          title
          title_en
          director
          producer
          production_company
          editing
          filming
          composer
          sound_design
          length_in_min
          Trailer
          image {
            childImageSharp {
              fluid(quality: 75, maxHeight: 550) {
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
        }
      }
    }

    verk_i_vinnslu: allMarkdownRemark(
      sort: { fields: frontmatter___title }
      filter: { fileAbsolutePath: { regex: "/verk-i-vinnslu/" } }
    ) {
      nodes {
        html
        frontmatter {
          title
          director
          producer
          length_in_min
          Trailer
          image {
            childImageSharp {
              fluid(quality: 75, maxHeight: 550) {
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
        }
      }
    }
    honourGuest: allMarkdownRemark(
      sort: { fields: frontmatter___title }
      filter: {
        fileAbsolutePath: { regex: "/frumsyning/" }
        frontmatter: { honour_guest: { eq: true } }
      }
    ) {
      nodes {
        html
        frontmatter {
          title
          title_en
          director
          producer
          production_company
          editing
          filming
          composer
          sound_design
          length_in_min
          Trailer
          image {
            childImageSharp {
              fluid(quality: 75, maxHeight: 550) {
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
        }
      }
    }
  }
`

export default Heimildamyndir
