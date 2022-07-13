import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BadgeBase } from '@reusejs/react';

export default {
  title: 'Atoms/Badges',
  component: BadgeBase,
  argTypes: {},
} as ComponentMeta<typeof BadgeBase>;

const Template: ComponentStory<typeof BadgeBase> = (args) => (
  <BadgeBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Email Address',
};

export const Variant = Template.bind({});
Variant.args = {
  label: 'Email Address',
  variant: 'primary',
};

export const WithProps = Template.bind({});
WithProps.args = {
  label: 'Email Address',
  badgeClasses: {
    padding: 'px-3 py-0.5',
    backgroundColor: 'bg-green-100',
    textColor: 'text-green-800',
    font: 'text-sm font-medium',
    borderRadius: 'rounded-md',
  },
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  label: 'Email Address',
  badgeSuffix: (
    <svg
      className='ml-1.5 h-2 w-2 text-indigo-400'
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
  badgePrefix: (
    <svg
      className='mr-1.5 h-2 w-2 text-indigo-400'
      fill='currentColor'
      viewBox='0 0 8 8'
    >
      <circle cx={4} cy={4} r={3} />
    </svg>
  ),
};
