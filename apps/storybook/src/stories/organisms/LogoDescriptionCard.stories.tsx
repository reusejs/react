import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LogoDescriptionCard } from '@reusejs/react';

export default {
  title: 'Organisms/LogoDescriptionCard',
  component: LogoDescriptionCard,
  argTypes: {},
} as ComponentMeta<typeof LogoDescriptionCard>;

const Template: ComponentStory<typeof LogoDescriptionCard> = (args) => (
  <LogoDescriptionCard {...args} />
);

const Title = () => {
  return (
    <div className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
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

export const Default = Template.bind({});
Default.args = {
  // title: <Title />,
  // subTitle: <SubTitle />,
  // textAlign: 'center',
};
