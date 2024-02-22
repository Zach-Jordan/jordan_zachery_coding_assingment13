import React from 'react'
import { render } from '@testing-library/react'
import RadioButton from './RadioButton'

test('RadioButton is visible', () => {
  const { getByText } = render(<RadioButton label='Option 1' />)
  const radioButtonElement = getByText(/Radio Button/i)
  expect(radioButtonElement).toBeInTheDocument()
})

test('RadioButton cursor changes when disabled', () => {
  const { container } = render(<RadioButton label='Option 1' disabled />)
  const labelElement = container.querySelector('label')
  expect(labelElement).toHaveStyle('cursor: not-allowed')
})
