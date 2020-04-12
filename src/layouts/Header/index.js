import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"

import { Container, Wrap } from "./styled"
import Logo from "../../reusableComponents/Logo"
import Text from "./Text"
import { redColor } from "../../constants"

const Header = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  const platform = useSelector(state => state.reducer.platform)
  const pathname = useSelector(state => state.reducer.pathname)
  const [color, setColor] = useState("white")
  useEffect(() => {
    if (pathname.includes("/sarpur") || pathname.includes("/umsokn")) {
      setColor(`${redColor}`)
    } else {
      setColor("white")
    }
  }, [pathname])
  return (
    <Wrap>
      <Container platform={platform}>
        <Logo color={color}></Logo>
        {platform === "desktop" ? (
          <div id="box">
            <Text color={color} meta={siteMetadata} info></Text>
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
