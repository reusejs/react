import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SidebarBase } from '@reusejs/react';

export default {
  title: 'Organisms/Sidebar',
  component: SidebarBase,
  argTypes: {},
} as ComponentMeta<typeof SidebarBase>;

const Template: ComponentStory<typeof SidebarBase> = (args) => (
  <SidebarBase {...args} />
);

const items = [
  { label: 'Long Long String Number 1', href: '#', current: false },
  {
    label: 'Number 2',
    href: '#',
    current: true,
    children: [
      {
        label: 'Number 2.1',
        href: '#',
        current: true,
      },
      { label: 'Number 2.2', href: '#', current: false },
      { label: 'Number 2.3', href: '#', current: false },
    ],
  },
  { label: 'Number 3', href: '#', current: false },
  {
    label: 'Number 4',
    href: '#',
    current: false,
    children: [
      {
        label: 'Number 4.1',
        href: '#',
        current: false,
      },
    ],
  },
];

export const Default = Template.bind({});
Default.args = {
  navigationItems: items,
  topItem: (
    <img
      className='h-8 w-auto'
      src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=300'
      alt='Workflow'
    />
  ),
  sidebarBaseClasses: {
    backgroundClasses: 'bg-white pt-5 dark:border-blue-800 dark:bg-[#12263f]',
  },
  onClick: (e: any, item: any) => console.log('check here item', item),
};
