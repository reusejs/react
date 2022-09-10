import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TwoColumnSectionBase } from '@reusejs/react';

export default {
  title: 'Templates/TwoColumnSectionBase',
  component: TwoColumnSectionBase,
  argTypes: {},
} as ComponentMeta<typeof TwoColumnSectionBase>;

const Template: ComponentStory<typeof TwoColumnSectionBase> = (args) => (
  <TwoColumnSectionBase {...args} />
);

const LeftSection = (props: any) => {
  return <h1>LEFT SECTION</h1>;
};

const RightSection = (props: any) => {
  return <h1>RIGHT SECTION</h1>;
};

export const Default = Template.bind({});
Default.args = {
  firstColumnEl: <LeftSection />,
  secondColumnEl: <RightSection />,
};
