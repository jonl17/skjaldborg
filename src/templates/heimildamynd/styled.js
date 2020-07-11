import styled from "styled-components"

export const Container = styled.div`
  .title-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      text-align: center;
      z-index: 4;
      h1,
      h2 {
        margin: 10px;
      }
      .back-btn-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          padding-left: 1rem;
          margin: 0;
        }
      }
      * {
        color: white;
        text-transform: uppercase;
      }
    }
  }
`
export const CoverImageContainer = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  filter: brightness(0.8);
`
