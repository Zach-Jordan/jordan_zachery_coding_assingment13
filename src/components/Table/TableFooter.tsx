import React from 'react';
import styled from 'styled-components';

interface TableFooterProps {
  children: React.ReactNode;
}

const StyledTableFooter = styled.tfoot`

`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};

export default TableFooter;
