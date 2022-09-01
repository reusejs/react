import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SectionHeaderBase } from '@reusejs/react';

export default {
  title: 'Organisms/SectionHeader',
  component: SectionHeaderBase,
  argTypes: {},
} as ComponentMeta<typeof SectionHeaderBase>;

const Template: ComponentStory<typeof SectionHeaderBase> = (args) => (
  <SectionHeaderBase {...args} />
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

const Actions = () => {
  return <div>Action</div>;
};

export const Default = Template.bind({});
Default.args = {
  title: <Title />,
  subTitle: <SubTitle />,
  textAlign: 'center',
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  title: <Title />,
  subTitle: <SubTitle />,
  textAlign: 'left',
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  title: <Title />,
  subTitle: <SubTitle />,
  textAlign: 'right',
};
