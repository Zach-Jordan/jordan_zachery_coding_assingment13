import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>Card content</p>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: <p>Disabled Card content</p>,
  disabled: true,
};
