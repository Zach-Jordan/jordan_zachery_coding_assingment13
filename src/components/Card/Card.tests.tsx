import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

test('Card is visible', () => {
  const { getByText } = render(<Card>Card content</Card>)
  const cardContentElement = getByText(/Card content/i)
  expect(cardContentElement).toBeInTheDocument()
})

test('Card background color changes when disabled', () => {
  const { container } = render(<Card disabled>Disabled Card content</Card>)
  const cardElement = container.firstChild
  expect(cardElement).toHaveStyle('background-color: #f5f5f5')
})
