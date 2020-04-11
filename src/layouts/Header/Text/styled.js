import styled, { css } from "styled-components"
import { redColor } from "@constants"

export const Container = styled.div`
  max-width: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 0;
    font-size: 1.6rem;
    color: white;
    ${props =>
      props.color === "red" &&
      css`
        color: ${redColor};
      `}
  }
  p {
    font-family: les;
    margin: 0;
    color: white;
    font-size: 0.9rem;
    ${props =>
      props.color === "red" &&
      css`
        color: ${redColor};
      `}
  }
`
