import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider, theme } from '@reusejs/react';
import { LabelBase } from '@reusejs/react';

const newTheme = {
  ...theme,
  variants: {},
};

const variants = {
  primary: {
    labelClasses: {
      color: 'text-cyan-200',
    },
  },
};

newTheme['variants'] = variants;

export default {
  title: 'Atoms/Labels',
  component: LabelBase,
  argTypes: {},
} as ComponentMeta<typeof LabelBase>;

const Template: ComponentStory<typeof LabelBase> = (args) => (
  <ThemeProvider value={newTheme}>
    <LabelBase {...args} />
  </ThemeProvider>
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
