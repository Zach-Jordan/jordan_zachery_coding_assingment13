import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Example Label',
  htmlFor: 'exampleId',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  htmlFor: 'disabledId',
  disabled: true,
};
