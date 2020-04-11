import styled, { css } from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { redColor, greenTextColor, greenColor } from "@constants"

export const Container = styled(AniLink)`
  text-decoration: none;
  color: inherit;
  position: relative;
  color: ${greenTextColor};
  &&:hover {
    color: ${redColor};
  }
  ${props =>
    props.color === "red" &&
    css`
      color: white;
      &&:hover {
        color: ${greenColor};
      }
    `}
  text-transform: uppercase;
  z-index: 1;
`
export const Ball = styled.span`
  height: 1.7rem;
  width: 1.7rem;
  position: absolute;
  top: -0.7rem;
  right: 3rem;
  background: ${redColor};
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  opacity: 0.5;
  pointer-events: none;
  transform: scale(0);
  ${Container}:hover & {
    transform: scale(1);
  }
`
