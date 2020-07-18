import styled from "styled-components"
import { redColor, greenColor } from "../../constants"

export const Container = styled.div`
  .content-wrap {
    box-sizing: border-box;
    padding: 10rem 2rem 6rem 2rem;
    @media (max-width: 750px) {
      padding: 5rem 0 2rem 0;
    }
  }
`

export const DayContainer = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  color: ${redColor};
  p {
    margin: 0;
  }
  .nameOfTheDay {
    text-transform: uppercase;
  }
  .date {
    font-weight: bold;
    border-bottom: 1px solid ${redColor};
    padding-bottom: 1rem;
  }
`
export const ItemContainer = styled.div`
  display: flex;
  h2 {
    text-transform: uppercase;
    color: ${redColor};
    margin-bottom: 0;
    margin-top: 0;
    padding: 1rem 0;
    @media (max-width: 750px) {
      font-size: 1rem;
    }
  }
  .time {
    width: 15%;
    @media (max-width: 750px) {
      width: 100px;
    }
    padding-right: 25px;
    border-right: 1px solid ${redColor};
  }
  .title {
    width: 85%;
    padding-left: 125px;
    @media (max-width: 750px) {
      padding-left: 25px;
    }
  }
  .nonMovie {
    color: ${greenColor};
    text-transform: none;
    font-family: les;
  }
  .green-plus {
    color: ${greenColor};
  }
  .movieTitleWrap {
    position: relative;
    span {
      position: absolute;
      left: -25px;
      @media (max-width: 750px) {
        left: -15px;
      }
    }
  }
`
