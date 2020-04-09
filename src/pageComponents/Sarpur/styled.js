import styled from "styled-components"
import { redColor } from "../../layouts/PageContainer/styled"

export const Container = styled.div`
  .title-wrap {
    margin: 2.5rem 0 2.5rem 0;
  }
  .content-wrap {
    box-sizing: border-box;
    padding: 0 2rem 6rem 2rem;
  }
`

const BoxSize = "300px"
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${BoxSize}, 1fr));
  grid-auto-rows: ${BoxSize};
  grid-gap: 25px;
  justify-content: space-evenly;
`
export const YearBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-image: url(${props => props.bgImg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  &&:hover {
    cursor: pointer;
    .slykjan {
      background: rgba(160, 69, 69, 0.6);
    }
  }

  h1 {
    color: white;
    font-size: 2rem;
    z-index: 4;
  }
  .slykjan {
    pointer-events: none;
    background: rgba(160, 69, 69, 0);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: background 0.2s;
    @media (max-width: 900px) {
      background: rgba(160, 69, 69, 0.6);
    }
  }
`
