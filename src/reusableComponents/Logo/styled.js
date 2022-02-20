import styled, { keyframes, css } from "styled-components"
import { Link } from "gatsby"
import LogoSVG from "../../../static/assets/svg/logo.svg"

const breath = keyframes`
  0% {
    transform: scale(1)
  }
  25% {
    transform: scale(0.97)
  }
  50% {
    transform: scale(1.02)
  }
  75% {
    transform: scale(0.97)
  }
  100% {
    transform: scale(1)
  }
`
const beamGrow = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0.97)
  }
  100% {
    transform: scale(1)
  }
`

export const Container = styled(Link)`
  height: 100%;
  padding-left: 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  ${props =>
    props.footer === "true" &&
    css`
      position: absolute;
      top: 0;
      height: 12rem;
    `}

  svg {
    height: 100%;
    #ball {
      transform-origin: 10% 50%;
      animation: ${breath} 4s ease-out 0.5s forwards infinite;
    }
    #beam {
      transform-origin: 20% 50%;
      animation: ${beamGrow} 2s ease-out 3s forwards infinite;
    }
  }
`

export const Logo = styled(LogoSVG)`
  height: 100%;
  #ball {
    transform-origin: 10% 50%;
    animation: ${breath} 4s ease-out 0.5s forwards infinite;
  }
  #beam {
    transform-origin: 20% 50%;
    animation: ${beamGrow} 2s ease-out 3s forwards infinite;
  }
`
