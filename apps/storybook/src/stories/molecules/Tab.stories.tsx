import { ArrowRightIcon } from '@heroicons/react/solid';
import { TabsBase } from '@reusejs/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'Molecules/Tabs',
  component: TabsBase,
  argTypes: {},
} as ComponentMeta<typeof TabsBase>;

const ELEMENTS = [
  {
    title: <div className='flex items-center px-2'>One</div>,
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is first div
      </div>
    ),
    icon: <ArrowRightIcon className='h-4 w-4 font-semibold' />,
  },
  {
    title: 'TWO {This is the second div}',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is second div
      </div>
    ),
  },
  {
    title: 'THREE',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is third div
      </div>
    ),
  },
  {
    title: 'FOUR',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400 '>
        This is Fourth div
      </div>
    ),
  },
  {
    title: 'FIVE',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is fifth div
      </div>
    ),
  },
  {
    title: 'SIX Div is this',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is sixeth div
      </div>
    ),
  },
  {
    title: 'Seven DIV IS THIS ',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is FHGVBCB div
      </div>
    ),
  },
  {
    title: 'EIGHT IS A GOOD NUMBER',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is GHCBV VGHF div
      </div>
    ),
  },
  {
    title: 'NINE',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is JHFGCBVCCHG div
      </div>
    ),
  },
  {
    title: 'TENTH',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is TENTH div
      </div>
    ),
  },
];

const AB_ELEMENTS = [
  {
    title: (
      <div tabIndex={0} className='flex items-center px-2'>
        One <div className='text-sm only:text-red-400'>(430)</div>
      </div>
    ),
    content: (
      <div className='mt-3 flex h-48 w-full items-center justify-center border-2 border-blue-400 bg-blue-200'>
        This is first div
      </div>
    ),
  },
  {
    title: (
      <div className='flex items-center px-2'>
        Two{' '}
        <span tabIndex={0} className='text-sm text-red-400'>
          (170)
        </span>
      </div>
    ),
    content: (
      <div className='mt-3 flex h-28 w-full items-center justify-center bg-red-400'>
        This is SECOND div
      </div>
    ),
  },
  {
    title: (
      <div className='flex items-center px-2'>
        Three <span className='text-sm text-red-400'>(61)</span>
      </div>
    ),
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is THIRD div
      </div>
    ),
  },
];

const ELEMENTS_SECOND = [
  {
    title: <div className='flex items-center px-2'>One</div>,
    content: (
      <div
        key="ONE"
        className='flex h-96 w-full flex-col items-center justify-center overflow-y-scroll border-2 border-t-0 border-blue-400'
        onScroll={() => console.log('One')}
      >
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        This is first div
      </div>
    ),
    icon: <ArrowRightIcon className='h-4 w-4 font-semibold' />,
  },
  {
    title: 'TWO {This is the second div}',
    content: (
      <div
        key="TWO"
        className='flex h-96 w-full flex-col items-center justify-center overflow-y-scroll border-2 border-t-0 border-blue-400'
        // onScroll={() => console.log('TWO')}

      >
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        <div>Check</div>
        This is Second div
      </div>
    ),
  },
  {
    title: 'THREE',
    content: (
      <div className='flex h-96 w-full items-center justify-center border-2 border-t-0 border-blue-400'>
        This is third div
      </div>
    ),
  },
];

const Template: ComponentStory<typeof TabsBase> = (args) => (
  <TabsBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  elements: ELEMENTS,
};

export const Variant = Template.bind({});
Variant.args = {
  elements: ELEMENTS,
  tabsBaseClasses: {
    wrapperClasses: 'pt-2',
    layout: 'flex items-center justify-center',
    height: 'h-full',
    width: 'w-full min-w-fit',
    backgroundColor: 'bg-white text-blue-400',
    padding: 'px-2',
    cursor: 'cursor-pointer',
    borderRadius: 'rounded-t-lg',
    border: 'border-2 border-blue-400',
    activeTabClasses:
      'sticky left-0 right-0 border-b-0 scale-y-125 origin-bottom font-bold',
    inactiveTabClasses: '',
  },
};

export const TabTextColorChange = Template.bind({});
TabTextColorChange.args = {
  elements: ELEMENTS,
  tabsBaseClasses: {
    backgroundColor: 'bg-white text-gray-400',
    activeTabClasses:
      'sticky left-0 right-0 border-b-2 border-blue-500 text-blue-400',
    inactiveTabClasses: '',
  },
};

export const ABVariant = Template.bind({});
ABVariant.args = {
  elements: AB_ELEMENTS,
  tabsBaseClasses: {
    wrapperClasses: 'w-5/12 ',
    backgroundColor: 'bg-white',
    activeTabClasses: 'sticky left-0 right-0 border-b-2 border-blue-500',
    inactiveTabClasses: 'text-gray-500',
  },
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  elements: ELEMENTS_SECOND,
  tabsBaseClasses: {
    backgroundColor: 'bg-white text-gray-400',
    activeTabClasses:
      'sticky left-0 right-0 border-b-2 border-blue-500 text-blue-400',
    inactiveTabClasses: '',
  },
};
