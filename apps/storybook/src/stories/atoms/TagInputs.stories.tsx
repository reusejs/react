import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagInputBase } from '@reusejs/react';

export default {
  title: 'Molecules/Tag Inputs',
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
  placeholder: 'Enter Tag and Press Enter',
  badgeBaseProps: {
    badgeBaseClasses: {
      borderRadius: 'rounded-md',
      alignment: 'inline-flex items-center mr-2',
      padding: 'px-2.5 py-2.5',
      font: 'text-sm font-light',
    },
  },
};

export const Styled = Template.bind({});
Styled.args = {
  placeholder: 'Enter Tag',
};

export const variant = Template.bind({});
variant.args = {
  placeholder: 'Enter Tag',
  variant: 'dark',
};

export const defaultSelected = Template.bind({});
defaultSelected.args = {
  placeholder: 'Enter Tag',
  badgeBaseProps: {
    badgeBaseClasses: {
      borderRadius: 'rounded-md',
      alignment: 'inline-flex items-center mr-2',
      padding: 'px-2.5 py-2.5',
      font: 'text-sm font-light',
    },
  },
  defaultSelected: ['Tag1', 'Tag2'],
};
