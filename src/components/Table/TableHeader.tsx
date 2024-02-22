import React from 'react'
import styled from 'styled-components'

interface TableHeaderProps {
  children: React.ReactNode
}

const StyledTableHeader = styled.th`
  border-bottom: 1px solid #ccc;
  padding: 8px;
`

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>
}

export default TableHeader
