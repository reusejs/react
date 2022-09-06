import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconTitleDescriptionCard } from '@reusejs/react';

export default {
  title: 'Organisms/IconTitleDescriptionCard',
  component: IconTitleDescriptionCard,
  argTypes: {},
} as ComponentMeta<typeof IconTitleDescriptionCard>;

const Template: ComponentStory<typeof IconTitleDescriptionCard> = (args) => (
  <IconTitleDescriptionCard {...args} />
);

const Title = () => {
  return (
    <div className='mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl'>
      Why Choose Us
    </div>
  );
};

const SubTitle = () => (
  <div className='mt-2 text-gray-500'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </div>
);

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

export const Default = Template.bind({});
Default.args = {
  logo: <Logo />,
  title: <Title />,
  description: <SubTitle />,
  logoPosition: 'left',
  logoToTitleGapClass: 'ml-16',
};

export const LogoOnTop = Template.bind({});
LogoOnTop.args = {
  logo: <Logo />,
  title: <Title />,
  description: <SubTitle />,
  logoPosition: 'top-left',
  logoToTitleGapClass: 'mt-2',
};
