import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Template from "./template"
import GuestHouseGrid from "./Gisting/index"

// Gisting / Ferðalagið
const Gisting = ({
  data: {
    markdownRemark: { html, frontmatter, id },
  },
}) => {
  return (
    <>
      <Template
        image={frontmatter.mynd}
        title={frontmatter.title}
        html={html}
        extraComponent={GuestHouseGrid}
        order={frontmatter.order}
      ></Template>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(fileAbsolutePath: { regex: "/gisting-ferðalagið/" }) {
          html
          id
          frontmatter {
            title
            order
            mynd {
              childImageSharp {
                fluid(maxHeight: 1200, quality: 65) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
        guesthouses: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/static/gisting/" } }
        ) {
          nodes {
            frontmatter {
              title
              mynd {
                childImageSharp {
                  fluid(quality: 95, maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              google_maps_url
              stadsetning {
                baer
                heimilisfang
                simi
              }
            }
          }
        }
      }
    `}
    render={data => <Gisting data={data} {...props}></Gisting>}
  ></StaticQuery>
)
