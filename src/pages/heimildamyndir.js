import React from "react"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Template from "../reusableComponents/SarpurTemplate"
import Documentaries from "../pageComponents/Documentaries"
import { graphql } from "gatsby"
import { useSelector } from "react-redux"

const TITLES = {
  is: "Heimildamyndir 2020",
  en: "Documentaries 2020",
}

const Heimildamyndir = ({
  data: { frumsyningar: docs, verk_i_vinnslu: wips },
}) => {
  const icelandic = useSelector(state => state.reducer.icelandic)
  return (
    <>
      <Header mode='red' />
      <Template title={TITLES}>
        <Documentaries
          docs={docs}
          title={icelandic ? "Frumsýningar" : "Premieres"}
        />
        <Documentaries
          docs={wips}
          title={icelandic ? "Verk í vinnslu" : "Work in progress"}
        />
      </Template>
      <Footer />
    </>
  )
}

export const query = graphql`
  {
    frumsyningar: allMarkdownRemark(
      sort: { fields: frontmatter___title }
      filter: { fileAbsolutePath: { regex: "/frumsyning/" } }
    ) {
      nodes {
        html
        frontmatter {
          title
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
  }
`

export default Heimildamyndir
