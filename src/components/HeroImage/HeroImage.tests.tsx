import React from 'react'
import { render } from '@testing-library/react'
import HeroImage from './HeroImage'

test('HeroImage is visible', () => {
  const { getByAltText } = render(<HeroImage src='image.jpg' alt='Test Hero Image' />)
  const heroImageElement = getByAltText('Test Hero Image')
  expect(heroImageElement).toBeInTheDocument()
})

test('HeroImage opacity changes when disabled', () => {
  const { getByAltText } = render(<HeroImage src='image.jpg' alt='Test Hero Image' disabled />)
  const heroImageElement = getByAltText('Test Hero Image')
  expect(heroImageElement).toHaveStyle('opacity: 0.5')
})
