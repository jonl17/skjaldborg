import styled from "styled-components"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  .btnWrap {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
  }
`

export const SubmitBtnWrap = styled.div`
  @media only screen and (min-width: ${breakpoints.desktop}) {
    position: absolute;
    top: 50vh;
    width: 100%;
  }
`
