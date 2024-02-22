import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

test('Button is visible', () => {
  const { getByText } = render(<Button text='Click me' />)
  const buttonElement = getByText(/Click me/i)
  expect(buttonElement).toBeInTheDocument()
})

test('Button background color changes when disabled', () => {
  const { getByText } = render(<Button text='Disabled Button' disabled />)
  const buttonElement = getByText(/Disabled Button/i)
  expect(buttonElement).toHaveStyle('background-color: #ccc')
})
