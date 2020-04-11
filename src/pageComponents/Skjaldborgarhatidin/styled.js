import styled from "styled-components"
import { greenColor, breakpoints } from "@constants"

export const Container = styled.div``
export const Wrap = styled.div`
  box-sizing: border-box;
  background: ${greenColor};
  padding: 1rem 0 4rem 0;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    padding: 1rem 5rem 5rem;
  }
`
export const Grid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 0.5fr;
  }
`
