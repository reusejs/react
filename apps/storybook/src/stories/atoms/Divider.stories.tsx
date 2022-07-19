import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DividerBase } from '@reusejs/react';

export default {
  title: 'Atoms/Divider',
  component: DividerBase,
  argTypes: {},
} as ComponentMeta<typeof DividerBase>;

const Template: ComponentStory<typeof DividerBase> = (args) => (
  <DividerBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'OR',
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'OR',
  showAsPrefix: true,
};

export const Suffix = Template.bind({});
Suffix.args = {
  label: 'OR',
  showAsSuffix: true,
};


