import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Secondary } from '../atoms/Grid.stories';
import { HorizontalList } from '@reusejs/react';
import HorizontalListDocs from '../docs/HorizontalList.docs';

export default {
  title: 'Molecules/HorizontalList',
  component: HorizontalList,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        // component: HorizontalListDocs,
      },
    },
  },
} as ComponentMeta<typeof HorizontalList>;

const Template: ComponentStory<typeof HorizontalList> = (args) => (
  <HorizontalList {...args} />
);

const Elements = [
  <div
    key={0}
    className='flex h-56 w-96 shrink-0 items-center justify-center bg-rose-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={1}
    className='flex h-48 w-96 shrink-0 items-center justify-center bg-lime-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={2}
    className='flex h-56 w-96 shrink-0 items-center justify-center bg-purple-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={3}
    className='flex h-48 w-96 shrink-0  items-center justify-center bg-amber-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={4}
    className='flex h-56 w-96 shrink-0   items-center justify-center bg-indigo-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={5}
    className='flex h-56 w-96 shrink-0  items-center justify-center bg-cyan-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={6}
    className='flex h-48 w-96 shrink-0  items-center justify-center bg-green-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={7}
    className='flex h-56 w-96 shrink-0  items-center justify-center bg-orange-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={8}
    className='flex h-48 w-96  shrink-0 items-center justify-center bg-gray-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={9}
    className='flex h-56 w-96  shrink-0 items-center justify-center bg-yellow-200 '
  >
    {'Hello'}
  </div>,
  <div
    key={10}
    className='flex h-48 w-96  shrink-0 items-center justify-center bg-slate-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={11}
    className='flex h-48 w-96  shrink-0 items-center justify-center bg-emerald-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={12}
    className='flex h-56 w-96  shrink-0 items-center justify-center bg-teal-500 '
  >
    {'Hello'}
  </div>,
];

export const Default = Template.bind({});
Default.args = {
  content: Elements,
  dividerClasses: {
    size: 'w-[1px] h-40',
  },
};

export const Example1 = Template.bind({});
Example1.args = {
  content: Elements,
  dividerClasses: {
    size: 'w-[1px] h-40',
  },
  customDivider: <div className='w-[2px] h-40 rounded-full mx-4 my-auto bg-red-500'/>
};

