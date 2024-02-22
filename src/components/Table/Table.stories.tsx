import React from 'react'
import { Story, Meta } from '@storybook/react'
import Table, { TableProps } from './Table'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableCell from './TableCell'
import TableFooter from './TableFooter'

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {},
} as Meta

const Template: Story<TableProps> = (args) => (
  <Table {...args}>
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
  </Table>
)

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
