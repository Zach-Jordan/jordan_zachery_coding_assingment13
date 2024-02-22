import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledCard = styled.div<{ disabled?: boolean }>`
  background-color: ${props => (props.disabled ? '#f5f5f5' : 'white')};
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Card: React.FC<CardProps> = ({ children, disabled }) => {
  return <StyledCard disabled={disabled}>{children}</StyledCard>;
};

export default Card;
