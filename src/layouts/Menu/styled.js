import styled from "styled-components"
import { redColor } from "@constants"

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: ${props => props.width};
  transition: 0.2s ease-in-out;
  background: ${redColor};
  z-index: 5;
  padding-top: 1rem;
  overflow: hidden;
`
export const List = styled.div`
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: 2;
  position: absolute;
  overflow: auto;
  display: flex;
  height: 100%;
  margin-left: 2.5rem;
`
export const Sensor = styled.div`
  position: fixed;
  height: 100%;
  width: ${props => props.width};
  top: 0;
  left: 0;
  z-index: 10;
`
