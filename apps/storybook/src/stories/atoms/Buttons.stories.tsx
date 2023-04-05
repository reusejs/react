import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonBase } from '@reusejs/react';
import { CheckCircleIcon } from '@heroicons/react/solid';

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
  buttonBaseClasses: { width: 'w-full' },
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

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  label: 'Email Address',
  buttonSuffix: (
    <svg
      className='ml-1.5 h-2 w-2 text-white'
      fill='currentColor'
      viewBox='0 0 8 8'
    >
      <circle cx={4} cy={4} r={3} />
    </svg>
  ),
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  label: 'Email Address',
  buttonPrefix: (
    <svg
      className='mr-1.5 h-2 w-2 text-white'
      fill='currentColor'
      viewBox='0 0 8 8'
    >
      <circle cx={4} cy={4} r={3} />
    </svg>
  ),
};
