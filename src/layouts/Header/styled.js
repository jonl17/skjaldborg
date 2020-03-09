import styled from "styled-components"
import theme from "styled-theming"
// import { breakpoints } from "../../constants"

const backgroundColor = theme("mode", {
  main: "transparent",
  staff: "#E5E5E5",
})

export const Wrap = styled.div`
  z-index: 4;
  height: 8.5rem;
  width: 100%;
  background: ${backgroundColor};
  position: absolute;
`

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10rem 30rem;
  grid-gap: 3rem;
  div {
  }
  #box {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`