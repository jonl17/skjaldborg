import React from "react"
import styled from "styled-components"
import { redColor, greenColor } from "../../../constants"
import { formatTime, months_arr_is } from "../../../methods"

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

const SingleDate = ({ dagsetning }) => {
  const date = new Date(dagsetning)
  return (
    <DateWrap>
      <h1 className='date'>{`${date.getDate()}. ${
        months_arr_is[date.getMonth()]
      }`}</h1>
      <h1 className='time'>{formatTime(date)}</h1>
    </DateWrap>
  )
}

const Dates = ({ dates }) => {
  return (
    <Container>
      {dates.map((item, index) => (
        <SingleDate key={index} dagsetning={item} />
      ))}
    </Container>
  )
}

export default Dates
