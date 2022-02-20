import React, { useEffect, useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { useSelector } from 'react-redux'

import { Container, Wrap } from './styled'
import Logo from '../../reusableComponents/Logo'
import Text from './Text'
import { redColor } from '../../constants'

const Header = ({
  data: {
    site: { siteMetadata },
  },
  mode,
}) => {
  const platform = useSelector((state) => state.reducer.platform)
  const pathname = useSelector((state) => state.reducer.pathname)
  const [color, setColor] = useState('white')
  useEffect(() => {
    if (mode === 'red') {
      setColor(`${redColor}`)
    } else {
      setColor('white')
    }
  }, [pathname, mode])
  return (
    <Wrap className='header'>
      <Container platform={platform}>
        <Logo color={color}></Logo>
        {platform === 'desktop' ? (
          <div id='box'>
            <Text color={color} meta={siteMetadata} info></Text>
          </div>
        ) : null}
      </Container>
    </Wrap>
  )
}

export default (props) => (
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
    render={(data) => <Header data={data} {...props}></Header>}
  ></StaticQuery>
)
