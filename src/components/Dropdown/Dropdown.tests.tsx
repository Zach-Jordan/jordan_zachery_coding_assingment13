import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';

test('Dropdown is visible', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const { getByText } = render(<Dropdown options={options} />);
  const dropdownElement = getByText(/Option 1/i);
  expect(dropdownElement).toBeInTheDocument();
});

test('Dropdown options are selectable', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const { getByLabelText, getByText } = render(<Dropdown options={options} />);
  const dropdownElement = getByLabelText('Dropdown');
  userEvent.selectOptions(dropdownElement, options[1]);
  expect(getByText(/Option 2/i)).toBeInTheDocument();
});

test('Dropdown background color changes when disabled', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const { getByLabelText } = render(<Dropdown options={options} disabled />);
  const dropdownElement = getByLabelText('Dropdown');
  expect(dropdownElement).toHaveStyle('background-color: #ccc');
});
