import React from 'react'
import styled from 'styled-components'

export interface HeroImageProps {
  src: string
  alt: string
  disabled?: boolean
}

const StyledHeroImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: auto;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled }) => {
  return <StyledHeroImage src={src} alt={alt} disabled={disabled} />
}

export default HeroImage
