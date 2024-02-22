import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  content: string;
  disabled?: boolean;
}

const StyledText = styled.p<{ disabled?: boolean }>`
  color: ${props => (props.disabled ? '#ccc' : 'black')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};
`;

const Text: React.FC<TextProps> = ({ content, disabled }) => {
  return <StyledText disabled={disabled}>{content}</StyledText>;
};

export default Text;
