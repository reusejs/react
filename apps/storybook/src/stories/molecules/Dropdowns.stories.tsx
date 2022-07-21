import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropdownBase } from '@reusejs/react';

export default {
  title: 'Molecules/Dropdowns',
  component: DropdownBase,
  argTypes: {},
} as ComponentMeta<typeof DropdownBase>;

const Template: ComponentStory<typeof DropdownBase> = (args) => (
  <DropdownBase {...args} />
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
