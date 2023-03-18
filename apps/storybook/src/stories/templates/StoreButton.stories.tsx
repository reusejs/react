import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreButtonDocs from '../docs/StoreButton.docs';
import { StoreButton } from '@reusejs/react';

export default {
  title: 'Templates/StoreButton',
  component: StoreButton,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: StoreButtonDocs,
      },
    },
  },
} as ComponentMeta<typeof StoreButton>;

const Template: ComponentStory<typeof StoreButton> = (args) => (
  <div className='flex h-40 items-center justify-center'>
    <StoreButton {...args} />
  </div>
);

export const Sample1 = Template.bind({});
Sample1.args = {
  storeName: 'google',
};

export const Sample2 = Template.bind({});
Sample2.args = {
  storeName: 'apple',
};

export const Sample3 = Template.bind({});
Sample3.args = {
  storeName: 'apple',
  responsive: false,
};

const Template2: ComponentStory<typeof StoreButton> = (args) => (
  <div className='flex h-40 items-center justify-center bg-black'>
    <StoreButton {...args} />
  </div>
);

export const Sample4 = Template2.bind({});
Sample4.args = {
  storeName: 'google',
  mode: 'dark',
};

export const Sample5 = Template2.bind({});
Sample5.args = {
  storeName: 'apple',
  mode: 'dark',
};

export const Sample6 = Template2.bind({});
Sample6.args = {
  storeName: 'apple',
  mode: 'dark',
  responsive: false,
};
