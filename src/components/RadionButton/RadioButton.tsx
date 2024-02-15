import React from 'react';
import styled from 'styled-components';

export interface RadioButtonProps {
  label: string;
  disabled?: boolean;
}

const Container = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, disabled }) => {
  return (
    <Container disabled={disabled}>
      <RadioInput type="radio" disabled={disabled} />
      {label}
    </Container>
  );
};

export default RadioButton;
