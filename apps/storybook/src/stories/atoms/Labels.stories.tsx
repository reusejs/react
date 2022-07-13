import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LabelBase } from '@reusejs/react';

export default {
  title: 'Atoms/Labels',
  component: LabelBase,
  argTypes: {},
} as ComponentMeta<typeof LabelBase>;

const LightTemplate: ComponentStory<typeof LabelBase> = (args) => (
  <LabelBase {...args} />
);

export const Default = LightTemplate.bind({});
Default.args = {
  label: 'Email Address',
  htmlFor: 'email',
};

export const Variant = LightTemplate.bind({});
Variant.args = {
  label: 'Email Address',
  htmlFor: 'email',
  variant: 'primary',
};
