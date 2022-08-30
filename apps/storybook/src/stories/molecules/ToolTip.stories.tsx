import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { AccordionBase, LabelBase } from '@reusejs/react';
import { ToolTipBase } from '@reusejs/react';

export default {
  title: 'Atoms/ToolTip',
  component: ToolTipBase,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className='flex w-full items-center justify-center bg-teal-50 py-16'>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => (
  <ToolTipBase {...args}>
    <div className='w-fit bg-red-100 px-4 py-2'>Element with tooltip</div>
  </ToolTipBase>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Hover',
};

export const Variant = Template.bind({});
Variant.args = {
  content: 'Click',
  trigger: "Click",
};
