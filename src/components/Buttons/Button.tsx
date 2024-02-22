import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  text: string
  disabled?: boolean
  onClick?: () => void
  backgroundColor?: string
}

const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#ccc' : '#007bff')};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

const Button: React.FC<ButtonProps> = ({ text, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default Button
