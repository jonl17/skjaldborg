import styled from "styled-components"
import { greenColor, redColor } from "../../../PageContainer/styled"

export const Button = styled.div`
  text-decoration: none;
  font-size: 3rem;
  color: ${redColor};
  &&:hover {
    color: white;
    cursor: default;
  }
`
export const List = styled.div`
  overflow: hidden;
  height: ${props => props.height};
  padding-top: ${props => props.padTop};
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 7.5rem;
`
export const Item = styled.p`
  font-size: 1rem;
  color: ${redColor};
  margin: 0;
  &&:hover {
    color: white;
  }
`
