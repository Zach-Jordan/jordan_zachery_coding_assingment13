import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: {
      control: 'text',
    },
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me',
  backgroundColor: '#007bff',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  backgroundColor: '#007bff',
  disabled: true,
};