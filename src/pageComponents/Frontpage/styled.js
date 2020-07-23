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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .nopad {
      padding-bottom: 0;
    }
  }
  .postlistWrap {
    position: absolute;
    height: 65vh;
    top: 22rem;
    @media (max-width: 750px) {
      top: 0;
    }
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .postlist {
      height: auto;
      width: auto;
    }
  }
`

export const SubmitBtnWrap = styled.div`
  @media only screen and (min-width: ${breakpoints.desktop}) {
    position: absolute;
    top: 50vh;
    width: 100%;
  }
`
