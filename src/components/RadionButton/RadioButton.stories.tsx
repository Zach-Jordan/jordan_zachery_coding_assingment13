import React from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio Button',
  disabled: true,
};
