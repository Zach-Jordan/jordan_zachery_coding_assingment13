import React from 'react'
import styled from 'styled-components'

interface TableRowProps {
  children: React.ReactNode
}

const StyledTableRow = styled.tr``

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>
}

export default TableRow
