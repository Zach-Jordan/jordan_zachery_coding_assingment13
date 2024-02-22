import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export interface LabelProps {
  text: string
  htmlFor: string
  disabled?: boolean
}

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#ccc' : '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled = false }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  )
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

export default Label
