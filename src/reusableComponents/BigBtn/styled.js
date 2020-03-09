import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { redColor, greenColor } from "../../layouts/PageContainer/styled"

export const Text = styled.p`
  height: 3rem;
  max-width: 20rem;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 auto;
  text-transform: uppercase;
  color: ${redColor};
  padding: 2rem 0 2rem 0;
  position: relative;
`
const BTNstyle = css`
  color: inherit;
  text-decoration: none;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 2px solid ${redColor};
  &&:hover {
    color: ${redColor};
  }
  position: relative;
  transition: 0.2s ease-in-out;
`
export const Anchor = styled(Link)`
  ${BTNstyle};
`
export const Button = styled.button`
  ${BTNstyle};
  background: transparent;
  height: 4rem;
  max-width: 15rem;
  margin: 0 auto;
  color: ${redColor};
  text-transform: uppercase;
  font-size: 1.5rem;
`
export const Fill = styled.span`
  left: 0;
  top: 0;
  background: ${greenColor};
  width: 0%;
  height: 100%;
  position: absolute;
  z-index: 0;
  ${Anchor}:hover & {
    width: 100%;
  }
  ${Button}:hover & {
    width: 100%;
  }
  transition: 0.2s ease-in-out;
`