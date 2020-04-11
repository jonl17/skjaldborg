import styled from "styled-components"
import { redColor } from "@constants"

export const Box = styled.div`
  @import url("https://css.gg/check-o.css");
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1.5rem;
  position: relative;
  #check {
    position: absolute;
    color: green;
    left: -2.5rem;
    top: 4.2rem;
  }
  select,
  p,
  button {
    font-family: les;
    font-size: 1rem;
  }
  select {
    background: transparent;
    box-sizing: border-box;
    padding: 0.5rem;
  }
  button {
    background: transparent;
    border: ${redColor} 1px solid;
    margin: 0 auto 0 0;
    box-sizing: border-box;
    padding: 0.6rem;
    color: ${redColor};
    &&:hover {
      cursor: pointer;
    }
  }
`
