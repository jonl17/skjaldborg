import React from "react"
import styled from "styled-components"
import { redColor, greenColor } from "../../../constants"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`
const DateWrap = styled.div`
  box-sizing: border-box;
  padding: 10px 25px;
  border: 1px solid ${redColor};
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 1rem;
  h1 {
    text-transform: uppercase;
    color: ${greenColor};
    margin: 2.5px 0 2.5px 0;
  }
`

const Date = ({ dagsetning }) => {
  return (
    <DateWrap>
      <h1 className='date'>{dagsetning}</h1>
      <h1 className='time'>kl. 15:00</h1>
    </DateWrap>
  )
}

const Dates = ({ dates }) => {
  return (
    <Container>
      {dates.map((item, index) => (
        <Date key={index} dagsetning={item} />
      ))}
    </Container>
  )
}

export default Dates
