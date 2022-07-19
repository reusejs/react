import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DividerBase } from '@reusejs/react';
import { BsPlusLg } from "react-icons/bs";

export default {
  title: 'Atoms/Divider',
  component: DividerBase,
  argTypes: {},
} as ComponentMeta<typeof DividerBase>;

const Template: ComponentStory<typeof DividerBase> = (args) => (
  <DividerBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'OR',
};

export const OnLeft = Template.bind({});
OnLeft.args = {
  labelBaseProps: {
    label:"Title",
    labelBaseClasses: {
      font:"font-bold",
      color:"text-cyan-700",
      alignment: "mr-2"
    }
  },
  dividerBaseClasses: {
    labelAlign:"left"
  }
};

export const OnRight = Template.bind({});
OnRight.args = {
  label: 'OR',
  dividerBaseClasses: {
    labelAlign:"right"
  }
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: <BsPlusLg size={15} color="blue"/>,
};


