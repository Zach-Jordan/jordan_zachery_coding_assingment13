import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'This is disabled Text',
  disabled: true,
};
