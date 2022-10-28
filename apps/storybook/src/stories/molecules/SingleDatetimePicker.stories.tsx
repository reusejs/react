import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateInput } from '@reusejs/react';

export default {
  title: 'Molecules/Datetime/Single',
  component: DateInput,
  argTypes: {},
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => {
  const [dateVal, setDateVal] = useState('2022-09-10');

  return (
    <DateInput
      {...args}
      defaultValue={dateVal}
      onChangeCallback={(val: any) => {
        console.log('val123', val);
        setDateVal(val);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
