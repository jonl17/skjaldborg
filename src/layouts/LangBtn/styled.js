import styled from "styled-components"
import { breakpoints } from "@constants"

export const Box = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 12.5rem;
  z-index: 8;
  width: 5rem;
  display: flex;
  justify-content: center;
  &&:hover {
    cursor: pointer;
  }
`
export const Text = styled.p`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-family: les;
  color: white;
  @media (min-width: ${breakpoints.desktop}) {
    color: ${props => props.color};
  }
`
export const Lang = styled.span`
  text-decoration: ${props => (props.selected ? "underline" : "none")};
`
