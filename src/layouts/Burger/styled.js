import styled, { css } from "styled-components"
import { redColor } from "@constants"

export const Container = styled.div`
  height: 30px;
  width: 32px;
  position: fixed;
  top: 2rem;
  right: 3.5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  z-index: 6;
  &&:hover {
    cursor: pointer;
  }
`
export const Line = styled.span`
  height: 4px;
  width: 100%;
  border-bottom: 0.2rem solid ${redColor};
  transition: 0.2s ease-in-out;
  ${props =>
    props.ex &&
    css`
      border-color: white;
      ${props =>
        props.one &&
        css`
          transform: translateY(7px) rotate(-135deg);
        `}
      ${props =>
        props.three &&
        css`
          transform: translateY(-12px) rotate(-45deg);
        `}
    `}
`
