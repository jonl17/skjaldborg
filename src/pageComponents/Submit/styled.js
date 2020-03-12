import styled, { css } from "styled-components"
import { redColor } from "../../layouts/PageContainer/styled"
import { breakpoints } from "../../constants"

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 50%;
  position: relative;
  margin: 5rem 0;
  @media only screen and (min-width: ${breakpoints.desktop}) {
    margin: 0 auto;
  }

  max-height: 50%;

  .login-options-wrap {
    display: grid;
    grid-gap: 1.5rem;
    text-align: center;
  }

  /** mobile */
  width: 100%;
  max-width: 100%;
  padding: 1rem;

  /** tablets */
  @media only screen and (min-width: 600px) {
    max-width: 85%;
    padding: 5rem;
  }

  /** desktop */
  @media only screen and (min-width: 850px) {
    max-width: 65%;
    padding: 5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  .form-label {
    font-size: 1.5rem;
    margin-left: -3rem;
  }
  textarea {
    padding: 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: les;
  }
  .submit-btn {
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  legend {
    margin: 1rem 0 1rem 0rem;
    @media only screen and (min-width: ${breakpoints.desktop}) {
      margin-left: -3rem;
    }
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`
export const InputBox = styled.input`
  font-family: les;
  padding: 1rem;
  font-size: 1rem;
  margin: 1em 0 1rem;
  ${props =>
    props.email &&
    css`
      color: ${props => props.color};
    `}
`

export const PageTitle = styled.h1`
  color: ${redColor};
`
export const FormTitle = styled.p`
  margin-left: -4rem;
  font-size: 1.5rem;
`
export const Warning = styled.p`
  color: ${redColor};
  margin: 0;
  margin-top: -0.5rem;
  font-size: 0.8rem;
`
export const FileBTN = styled.label`
  padding: 1rem;
  border: 1px solid ${redColor};
  color: ${redColor};
  width: auto;
  margin: 0 auto;
  margin-bottom: 1rem;
  &&:hover {
    cursor: pointer;
  }
  ${props =>
    props.status === "ok" &&
    css`
      background: green;
      color: white;
    `}
`

export const Hint = styled.p`
  color: gray;
  font-family: les;
  font-size: 0.9rem;
`
