import styled, { keyframes } from 'styled-components'

const appear = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 150px;
  }
`

export const Popup = styled.div`
  position: fixed;
  height: 125px;
  width: 150px;
  top: 50%;
  left: 0;
  z-index: 100;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  animation: ${appear} 1s forwards;
`
export const Text = styled.p`
  text-transform: uppercase;
`
export const Consent = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 1rem;
`
