import styled, { css } from "styled-components"
import { Link } from "gatsby"
import ArrowSvg from "../../../../static/assets/svg/arrow.svg"
import { greenTextColor, redColor } from "@constants"

export const Box = styled.div`
  text-align: center;
  max-width: 25rem;
  margin: 0 auto;
  padding-top: 7.5rem;
  #info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Title = styled.h1`
  color: ${greenTextColor};
  text-transform: uppercase;
  padding-bottom: 4rem;
`
export const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-top: 4rem;
  svg {
    transform: rotate(180deg);
    &&:hover {
      cursor: pointer;
    }
  }
`
export const HomeText = styled.h2`
  color: ${redColor};
`
export const Arrow = styled(ArrowSvg)`
  transform: rotate(180deg);
  &&:hover {
    cursor: pointer;
  }
  ${props =>
    props.hideonstate === "hide" &&
    css`
      display: none;
    `}
`
