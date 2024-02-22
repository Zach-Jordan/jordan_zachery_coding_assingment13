import React from 'react'
import { Story, Meta } from '@storybook/react'
import Img, { ImgProps } from './Img'

export default {
  title: 'Components/Img',
  component: Img,
} as Meta

const Template: Story<ImgProps> = (args) => <Img {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
}

export const Disabled = Template.bind({})
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  disabled: true,
}
