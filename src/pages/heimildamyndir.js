import React from "react"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Template from "../reusableComponents/SarpurTemplate"
import Documentaries from "../pageComponents/Documentaries"
import { graphql } from "gatsby"

const TITLES = {
  is: "Heimildamyndir 2020",
  en: "Documentaries 2020",
}

const Heimildamyndir = ({
  data: { frumsyningar: docs, verk_i_vinnslu: wips },
}) => {
  return (
    <>
      <Header mode='red' />
      <Template title={TITLES}>
        <Documentaries docs={docs} />
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
              fluid {
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
              fluid {
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
