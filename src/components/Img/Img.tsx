import React from 'react'
import styled from 'styled-components'

export interface ImgProps {
  src: string
  alt: string
  disabled?: boolean
}

const StyledImg = styled.img<{ disabled?: boolean }>`
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`

const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />
}

export default Img
