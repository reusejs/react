import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonBase } from '@reusejs/react';

export default {
  title: 'Atoms/Buttons',
  component: ButtonBase,
  argTypes: {},
} as ComponentMeta<typeof ButtonBase>;

const Template: ComponentStory<typeof ButtonBase> = (args) => (
  <ButtonBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Login',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Login',
  buttonClasses: { width: 'w-full' },
};

export const Busy = Template.bind({});
Busy.args = {
  label: 'Login',
  busy: true,
  busyText: 'Processing..',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Login',
  disabled: true,
};
