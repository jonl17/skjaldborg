import styled from "styled-components"
import { greenColor } from "@constants"
import { Link } from "gatsby"

export const Box = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgb(16, 16, 16);
  opacity: ${props => props.opacity};
  transition: 0.5s;
`
export const Title = styled.p`
  color: ${greenColor};
  font-size: 1.5rem;
  z-index: 1;
`
export const Details = styled.div`
  position: absolute;
  bottom: 0.5rem;
  text-align: center;
  z-index: 1;
  p {
    color: ${greenColor};
    margin: 0;
    font-size: 0.9rem;
  }
`
export const DirectorsName = styled.p``
export const Duration = styled.p``
export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.5;
  transition: 0.2s;
`
