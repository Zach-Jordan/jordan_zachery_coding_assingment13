import React from 'react'
import { render } from '@testing-library/react'
import Table from './Table'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableCell from './TableCell'
import TableFooter from './TableFooter'

test('Table is visible', () => {
  const { getByText } = render(
    <Table>
      <thead>
        <TableRow>
          <TableHeader>H1</TableHeader>
          <TableHeader>H2</TableHeader>
          <TableHeader>H3</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>R1, C1</TableCell>
          <TableCell>R1, C2</TableCell>
          <TableCell>R1, C3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>R2, C1</TableCell>
          <TableCell>R2, C2</TableCell>
          <TableCell>R2, C3</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>F1</TableCell>
          <TableCell>F2</TableCell>
          <TableCell>F3</TableCell>
        </TableRow>
      </TableFooter>
    </Table>,
  )
  const headerElement = getByText(/Header 1/i)
  const row1Element = getByText(/Row 1, Cell 1/i)
  const row2Element = getByText(/Row 2, Cell 1/i)
  const footerElement = getByText(/Footer 1/i)
  expect(headerElement).toBeInTheDocument()
  expect(row1Element).toBeInTheDocument()
  expect(row2Element).toBeInTheDocument()
  expect(footerElement).toBeInTheDocument()
})
