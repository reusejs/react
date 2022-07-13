import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LabelBase } from '@reusejs/react';

export default {
  title: 'Atoms/Labels/Light',
  component: LabelBase,
  argTypes: {},
} as ComponentMeta<typeof LabelBase>;

const Template: ComponentStory<typeof LabelBase> = (args) => (
  <LabelBase {...args} />
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
