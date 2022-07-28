import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagInputBase } from '@reusejs/react';

export default {
  title: 'Atoms/Tag Inputs',
  component: TagInputBase,
  argTypes: {},
} as ComponentMeta<typeof TagInputBase>;

const Template: ComponentStory<typeof TagInputBase> = (args) => {
  return (
    <TagInputBase
      {...args}
      onChange={(val: string[]) => {
        console.log('on change in tags', val);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter Tag',
  textInputBaseClasses: {
    wrapper: 'relative mt-0 rounded-md shadow-sm h-8',
    border: 'border-none',
    padding: 'p-0 h-8',
    backgroundColor: 'grow outline-none bg-transparent',
  },
};

export const variant = Template.bind({});
variant.args = {
  placeholder: 'Enter Tag',
  textInputBaseClasses: {
    wrapper: 'relative mt-0 rounded-md shadow-sm h-8',
    border: 'border-none',
    padding: 'p-0 h-8',
    backgroundColor: 'grow outline-none bg-transparent',
  },
  variant: 'dark',
};

export const defaultSelected = Template.bind({});
defaultSelected.args = {
  placeholder: 'Enter Tag',
  textInputBaseClasses: {
    wrapper: 'relative mt-0 rounded-md shadow-sm h-8',
    border: 'border-none',
    padding: 'p-0 h-8',
    backgroundColor: 'grow outline-none bg-transparent',
  },
  defaultSelected: ['Tag1', 'Tag2'],
};
