import styled from "styled-components"
import { redColor, greenColor } from "@constants"

export const Container = styled.div`
  box-sizing: border-box;
  padding: 7.5rem 2rem;
  @media (max-width: 900px) {
    padding: 1rem;
  }
`
export const ContentWrap = styled.div`
  box-sizing: border-box;
  padding: 1rem 4rem;
  @media (max-width: 900px) {
    padding: 1rem;
  }
  .main-box {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    .text-image-wrap {
      max-width: 40rem;
      .text {
        * {
          font-family: les;
          color: ${redColor};
          line-height: 145%;
        }
      }
      .image {
        margin-top: 4rem;
        img {
          width: 100%;
        }
      }
    }
  }
`
export const ParticipantsWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-right: 3rem;
  .item {
    margin: 1rem 0;
    p {
      margin: 0;
      font-family: les;
    }
    .role {
      color: ${greenColor};
      text-transform: uppercase;
      font-family: titlar;
    }
    .name {
      color: ${redColor};
    }
  }
`
