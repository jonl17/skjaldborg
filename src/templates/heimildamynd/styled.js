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

export const InfoContainer = styled.div`
  position: relative;
  background: white;
  z-index: 4;
  padding: 4rem 2.5rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "dagskra texti"
    "hlutverk stikla";
  grid-gap: 1rem;
  .textiWrap {
    grid-area: texti;
    padding: 0;
  }
  .videoWrap {
    grid-area: stikla;
  }
`
