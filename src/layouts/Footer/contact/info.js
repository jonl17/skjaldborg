import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import SocialMediaIcons from '../../../reusableComponents/SocialMediaIcons'

const InfoWrap = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  width: 100%;
  #sm-wrap {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #contact-wrap {
    p {
      margin: 0;
      text-align: center;
      color: white;
      padding-bottom: 5px;
      font-size: 14px;
    }
  }
`

const Info = ({
  data: {
    site: {
      siteMetadata: { contact },
    },
  },
}) => {
  return (
    <InfoWrap>
      <div id='sm-wrap'>
        <SocialMediaIcons color='white'></SocialMediaIcons>
      </div>
      <div id='contact-wrap'>
        <p style={{ textTransform: 'uppercase' }}>Contact</p>
        <p>{contact.email}</p>
        <p>{contact.tel}</p>
      </div>
    </InfoWrap>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            contact {
              email
              tel
            }
          }
        }
      }
    `}
    render={(data) => <Info data={data} {...props}></Info>}
  ></StaticQuery>
)
