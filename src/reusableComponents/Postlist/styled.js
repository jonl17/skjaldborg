import styled, { css } from 'styled-components'

export const Form = styled.form`
  grid-area: right;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
`
const InputStyle = css`
  height: 2.5rem;
  width: 12.5rem;
  margin-bottom: 1rem;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
`
export const Input = styled.input`
  ${InputStyle};
  border: none;
`
export const Button = styled.input`
  ${InputStyle};
  background: transparent;
  border: 1px solid white;
  color: white;
`
