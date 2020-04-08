import styled from "styled-components"

export const Container = styled.div`
  .title-wrap {
    margin: 2.5rem 0 2.5rem 0;
  }
  .content-wrap {
    box-sizing: border-box;
    padding: 0 2rem 6rem 2rem;
  }
`

const BoxSize = "250px"
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${BoxSize}, 1fr));
  grid-auto-rows: ${BoxSize};
  grid-gap: 25px;
  justify-content: space-evenly;
`
export const YearBox = styled.div`
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`
