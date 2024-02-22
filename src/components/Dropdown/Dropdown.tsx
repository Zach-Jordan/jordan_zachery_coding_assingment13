import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: string[];
  disabled?: boolean;
  onChange?: (selectedOption: string) => void;
}

const StyledSelect = styled.select<{ disabled?: boolean }>`
  background-color: ${props => (props.disabled ? '#ccc' : 'white')};
  color: black;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled, onChange }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    if (onChange) {
      onChange(selectedOption);
    }
  };

  return (
    <StyledSelect disabled={disabled} onChange={handleSelectChange}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
