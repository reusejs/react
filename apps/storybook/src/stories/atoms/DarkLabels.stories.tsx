import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LabelBase } from '@reusejs/react';

export default {
  title: 'Atoms/Labels/Dark',
  component: LabelBase,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof LabelBase>;

const Template: ComponentStory<typeof LabelBase> = (args) => (
  <div className='dark'>
    <LabelBase {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Email Address',
  htmlFor: 'email',
};

export const Variant = Template.bind({});
Variant.args = {
  label: 'Email Address',
  htmlFor: 'email',
  variant: 'primary',
};
