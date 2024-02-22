import React from 'react'
import { render } from '@testing-library/react'
import Text from './Text'

test('Text is visible', () => {
  const { getByText } = render(<Text content='Hello World' />)
  const textElement = getByText(/Hello World/i)
  expect(textElement).toBeInTheDocument()
})

test('Text color changes when disabled', () => {
  const { getByText } = render(<Text content='Disabled Text' disabled />)
  const textElement = getByText(/Disabled Text/i)
  expect(textElement).toHaveStyle('color: #ccc')
})
