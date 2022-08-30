import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationPageHeading, ButtonBase } from '@reusejs/react';
import { CheckIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';
// import { TextInputBase } from '@reusejs/react';

export default {
  title: 'Molecules/Navigations/PageHeading',
  component: NavigationPageHeading,
  argTypes: {},
} as ComponentMeta<typeof NavigationPageHeading>;

const HeadingActions = () => {
  return (
    <>
      <ButtonBase type='button' label='Hey' />
      <ButtonBase type='button' label='Bye' />
    </>
  );
};

const Template: ComponentStory<typeof NavigationPageHeading> = (args) => {
  return (
    <>
      <NavigationPageHeading {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  actions: HeadingActions,
  helperText: () => (
    <div className='text-xs text-gray-700 dark:text-gray-200'>Whatever</div>
  ),
  titleText: () => (
    <div className='mt-2 text-xl text-gray-700 dark:text-gray-200'>
      Title of the Module
    </div>
  ),
  seperator: ChevronRightIcon,
  homeIcon: HomeIcon,
  breadcrumbs: [
    {
      title: 'Events',
      href: '/events',
      home: true,
    },
    {
      title: 'Events',
      href: '/events',
      current: false,
    },
    {
      title: 'Create New Event',
      href: '/events',
      current: true,
    },
  ],
};
