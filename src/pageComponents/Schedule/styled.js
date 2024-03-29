import styled, { css } from 'styled-components'
import { redColor, greenColor } from '../../constants'

export const Container = styled.div`
  background: ${greenColor};

  .content-wrap {
    position: relative;
    box-sizing: border-box;
    padding: 10rem 2rem 6rem 2rem;
    @media (max-width: 750px) {
      padding: 5rem 0 2rem 0;
    }

    .vertical-border {
      position: absolute;
      height: 100%;
      width: 125px;
      border-right: 1px solid ${redColor};
      top: 0;
      margin-left: 2rem;
      margin-top: 20rem;
      @media (max-width: 750px) {
        display: none;
      }
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
    display: inline-block;
    @media (max-width: 750px) {
      font-size: 1.2rem;
    }
  }
  .time {
    width: 65px;
  }
  .title {
    width: 85%;
    padding-left: 125px;
    @media (max-width: 750px) {
      padding-left: 25px;
    }
  }
  .nonMovie {
    color: white;
    text-transform: uppercase;
  }
  .green-plus {
    color: white;
  }
  .movieTitleWrap {
    position: relative;
    &:hover {
      cursor: pointer;
    }
    span {
      position: absolute;
      left: -25px;
      color: ${redColor};
      @media (max-width: 750px) {
        left: -15px;
      }
    }
  }
`

export const InformationWrap = styled.div`
  overflow: hidden;

  padding-bottom: 0;
  height: 0;

  ${(props) =>
    props.display &&
    css`
    height: auto;
    padding:-bottom: 2.5rem;
  `}

  .inner-wrap {
    margin: 1.5rem 0 2rem 0;
    padding: 0;
    text-transform: none;
  }
  .btn {
    width: 150px;

    a {
      border-color: ${redColor};
      color: ${redColor};
      &:hover {
        border-color: white;
        color: white;
      }
    }
  }
`

export const ResizeBox = styled.div`
  height: 25px;
  width: 25px;
  display: inline-block;
  position: absolute;
  left: -30px;
  margin: 0;
  padding: 0;

  span {
    width: 100%;
    height: 45%;
    border-bottom: 2px solid ${redColor};
  }
  .first {
    transform: rotate(90deg);
  }
  .hide {
    opacity: 0;
  }
`
