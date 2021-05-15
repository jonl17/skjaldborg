import styled from "styled-components"
import { greenColor, redColor } from "@constants"

export const Popup = styled.div`
  position: absolute;
  top: 175px;
  width: 100%;

  @media (max-width: 600px) {
    top: 100px;
  }
`

export const InnerPopupWrap = styled.div`
  max-width: 600px;
  margin: auto;
  background: ${greenColor};
  border: 2px solid white;
  padding: 25px;
  text-align: center;
`
