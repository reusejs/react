import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SingleDatetimePicker, DateInputExample } from '@reusejs/react';

export default {
  title: 'Molecules/Datetime/Single',
  component: SingleDatetimePicker,
  argTypes: {},
} as ComponentMeta<typeof SingleDatetimePicker>;

const Template: ComponentStory<typeof SingleDatetimePicker> = (args) => (
  <SingleDatetimePicker {...args} />
);

const DateInputTemplate: ComponentStory<typeof DateInputExample> = (args) => (
  <DateInputExample />
);

export const Default = Template.bind({});
Default.args = {};

let dateVal = '2022-09-10';

export const DateInputEl = DateInputTemplate.bind({});
DateInputEl.args = {};
