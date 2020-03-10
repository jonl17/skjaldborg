import React from "react"
import { Container } from "./styled"
import { StaticQuery, graphql } from "gatsby"
import FadeInSection from "../../techComponents/FadeInSection"
import SponsorsQuery from "./query"

const Sponsors = () => {
  return (
    <Container>
      <h1>Styrktaraðilar</h1>
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
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/styrktaradilar_top5/" } }
        ) {
          topfive: nodes {
            frontmatter {
              title
              sponsor_url
              logo {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data => <Sponsors data={data} {...props}></Sponsors>}
  ></StaticQuery>
)
