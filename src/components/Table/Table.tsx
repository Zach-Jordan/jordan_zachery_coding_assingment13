import React from 'react';
import styled from 'styled-components';

export interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};
`;

const Table: React.FC<TableProps> = ({ children, disabled }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};

export default Table;
