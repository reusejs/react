import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconTitleDescriptionActionCard } from '@reusejs/react';

export default {
  title: 'Organisms/IconTitleDescriptionActionCard',
  component: IconTitleDescriptionActionCard,
  argTypes: {},
} as ComponentMeta<typeof IconTitleDescriptionActionCard>;

const Template: ComponentStory<typeof IconTitleDescriptionActionCard> = (
  args
) => <IconTitleDescriptionActionCard {...args} />;

const Logo = () => {
  return (
    <svg
      className='h-6 w-6'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
      />
    </svg>
  );
};

const Actions = () => {
  return (
    <a
      href='#'
      className='inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
    >
      Get started
    </a>
  );
};

export const Default = Template.bind({});
Default.args = {};
Default.args = {
  title: 'Why Choose Us',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const WithIconOnLeft = Template.bind({});
WithIconOnLeft.args = {
  icon: <Logo />,
  title: 'Why Choose Us',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  iconPosition: 'left',
  actions: <Actions />,
};

export const WithIconOnTopLeft = Template.bind({});
WithIconOnTopLeft.args = {
  icon: <Logo />,
  title: 'Why Choose Us',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  iconPosition: 'top-left',
  actions: <Actions />,
};

export const WithIconOnCenter = Template.bind({});
WithIconOnCenter.args = {
  icon: <Logo />,
  title: 'Why Choose Us',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  iconPosition: 'center',
  actions: <Actions />,
  itemTitleDescriptionCardBaseClasses: {
    iconWrapper:
      'flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white mx-auto',
    titleWrapper: 'mt-2 text-center',
    descriptionWrapper: 'mt-2 text-center',
    actionWrapper: 'mt-2 text-center',
  },
};
