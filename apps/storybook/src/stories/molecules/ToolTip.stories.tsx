import { ToolTipBase } from '@reusejs/react';
import { ComponentMeta,ComponentStory } from '@storybook/react';
import React from 'react';

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

export const Click = Template.bind({});
Click.args = {
  content: 'Click',
  trigger: "Click",
};

export const Right = Template.bind({});
Right.args = {
  content: "On Right",
  toolTipBaseStyleProps: {
    positioning: "-right-24",
  }
}

export const Below = Template.bind({});
Below.args = {
  content: "At the Bottom",
  toolTipBaseStyleProps: {
    positioning: "-bottom-10 left-6",
  }
}