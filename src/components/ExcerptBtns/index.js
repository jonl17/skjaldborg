import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container, Box, FillerImage } from "./styled"
import Fadeinsection from "../FadeInSection"

const ExcerptBtns = ({
  data: {
    site: {
      siteMetadata: { dropdownpages },
    },
  },
}) => {
  return (
    <Fadeinsection>
      <Container>
        {dropdownpages.map((page, index) => (
          <Box to={page.slug} key={index}>
            <FillerImage src={page.image}></FillerImage>
            <p>{page.name}</p>
          </Box>
        ))}
      </Container>
    </Fadeinsection>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            dropdownpages {
              name
              slug
              image
            }
          }
        }
      }
    `}
    render={data => <ExcerptBtns data={data} {...props} />}
  ></StaticQuery>
)
