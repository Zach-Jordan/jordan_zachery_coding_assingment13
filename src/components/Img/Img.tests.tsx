import React from 'react'
import { render } from '@testing-library/react'
import Img from './Img'

test('Img is visible', () => {
  const { getByAltText } = render(<Img src='image.jpg' alt='Test Image' />)
  const imgElement = getByAltText('Test Image')
  expect(imgElement).toBeInTheDocument()
})

test('Img opacity changes when disabled', () => {
  const { getByAltText } = render(<Img src='image.jpg' alt='Test Image' disabled />)
  const imgElement = getByAltText('Test Image')
  expect(imgElement).toHaveStyle('opacity: 0.5')
})
