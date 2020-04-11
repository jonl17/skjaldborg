import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"

import { Container, Wrap } from "./styled"
import Logo from "../../reusableComponents/Logo"
import Text from "./Text"

const Header = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  const platform = useSelector(state => state.reducer.platform)
  const pathname = useSelector(state => state.reducer.pathname)
  const [red, setRed] = useState(false)
  useEffect(() => {
    if (pathname.includes("/sarpur")) {
      setRed(true)
    } else {
      setRed(false)
    }
  }, [pathname])
  return (
    <Wrap>
      <Container platform={platform}>
        <Logo red={red}></Logo>
        {platform === "desktop" ? (
          <div id="box">
            <Text red={red} meta={siteMetadata} info></Text>
          </div>
        ) : null}
      </Container>
    </Wrap>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            subtitle
            year
            period
            location
          }
        }
      }
    `}
    render={data => <Header data={data} {...props}></Header>}
  ></StaticQuery>
)
