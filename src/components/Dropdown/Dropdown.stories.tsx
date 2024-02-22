import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
};
