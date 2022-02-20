import React, { useState } from 'react'
import { Button, List, Item, Title } from './styled'
import Anchor from '../../../../reusableComponents/Anchor'
import { graphql, StaticQuery } from 'gatsby'
import { useDispatch } from 'react-redux'
import { TRIGGER_MENU } from '../../../../state/action'

const Dropdown = ({
  children,
  data: {
    site: {
      siteMetadata: { dropdownpages },
    },
  },
}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  return (
    <Button>
      <Title onClick={() => setOpen(!open)} className='titlar'>
        <h1>
          {children}
          {open ? '-' : '+'}
        </h1>
      </Title>
      <List height={open ? 6.5 + 'rem' : '0'} padTop={open ? '1.5rem' : 0}>
        {dropdownpages.map((item, index) => (
          <Item
            className='titlar'
            key={index}
            onClick={() => dispatch({ type: TRIGGER_MENU, trigger: 'closed' })}
          >
            <Anchor color='red' item={item}></Anchor>
          </Item>
        ))}
      </List>
    </Button>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            dropdownpages {
              name
              name_en
              slug
            }
          }
        }
      }
    `}
    render={(data) => <Dropdown data={data} {...props}></Dropdown>}
  ></StaticQuery>
)
