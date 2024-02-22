import React from 'react'
import { render } from '@testing-library/react'
import Label from './Label'

test('renders label text', () => {
  const { getByText } = render(<Label text='Test Label' htmlFor='testId' />)
  const labelElement = getByText(/Test Label/i)
  expect(labelElement).toBeInTheDocument()
})

test('renders disabled label with correct color', () => {
  const { getByText } = render(<Label text='Disabled Label' htmlFor='disabledId' disabled />)
  const labelElement = getByText(/Disabled Label/i)
  expect(labelElement).toHaveStyle('color: #ccc')
})
