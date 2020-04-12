import styled from "styled-components"

export const Container = styled.div`
  max-width: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 0;
    font-size: 1.6rem;
    color: ${props => props.color};
  }
  p {
    font-family: les;
    margin: 0;
    color: white;
    font-size: 0.9rem;
    color: ${props => props.color};
  }
`
