import React from "react"
import { Container } from "./styled"
import { useStaticQuery, graphql } from "gatsby"
import FadeInSection from "../../techComponents/FadeInSection"
import SponsorsQuery from "./query"
import { useSelector } from "react-redux"
import BigLogo from "./BigLogo"

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
      <h1>{icelandic ? "Styrktaraðilar" : "Sponsors"}</h1>
      <FadeInSection intensity="10">
        <div className="sponsor-grid-top5">
          <SponsorsQuery vip></SponsorsQuery>
        </div>
      </FadeInSection>
      <FadeInSection intensity="10">
        <div className="sponsor-grid-rest">
          <SponsorsQuery></SponsorsQuery>
        </div>
      </FadeInSection>
      <FadeInSection intensity="10">{/* <BigLogo /> */}</FadeInSection>
    </Container>
  )
}

export default Sponsors
