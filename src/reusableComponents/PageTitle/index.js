import styled, { css } from "styled-components"
import { redColor } from "../../layouts/PageContainer/styled"
import { breakpoints } from "../../constants"

export default styled.h1`
  color: ${redColor};
  padding: 2rem 0 2rem 0rem;
  ${props =>
    !props.nopad &&
    css`
      padding: 0 0 0rem 2rem;
    `}
  text-transform: uppercase;
  font-size: 1.5rem;

  @media only screen and (min-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }
`
