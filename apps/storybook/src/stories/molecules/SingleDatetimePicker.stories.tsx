import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateInput } from '@reusejs/react';

export default {
  title: 'Molecules/Datetime',
  component: DateInput,
  argTypes: {},
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => {
  const [dateVal, setDateVal] = useState(new Date());

  return (
    <DateInput
      {...args}
      defaultValue={dateVal}
      onChangeCallback={(val: any) => {
        // console.log('Date is>>>>', val);
        setDateVal(val);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const FullScreen = Template.bind({});
FullScreen.args = {
  screenRelative: true,
  inputWidthClass: 'w-full',
};

export const WithCustomErrorRenderer = Template.bind({});
WithCustomErrorRenderer.args = {
  errorText: 'Error Detected!!!',
  errorTextRenderer: (text: string) => {
    return <div className='font-extrabold text-red-600'>{text}</div>;
  },
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'Helper Text goes here',
};

export const MinMaxDate = Template.bind({});
MinMaxDate.args = {
  maxDate: new Date('2023-08-31'),
  minDate: new Date('2022-07-1'),
};

export const RedColoured = Template.bind({});
RedColoured.args = {
  dateInputStyleClasses: {
    inputStyles:
      'flex w-full items-center rounded bg-red-400 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-blue-400 dark:bg-gray-900',
  },
  calendarBaseClasses: {
    calenderWrapper:
      'z-50 block w-full overflow-auto rounded-lg bg-red-500 shadow-xl  shadow-gray-200 hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800',
    wrapper: 'rounded-lg bg-red-400 dark:bg-gray-900',
    weekDaysWrapperStyles:
      'mt-3 grid grid-cols-7 bg-red-400 text-xs leading-6 text-gray-500 dark:bg-gray-900 dark:text-gray-300',
    dateButtonsSelectableStyles:
      'bg-red-400 hover:bg-blue-100 dark:bg-gray-900 dark:hover:bg-gray-800',
    dateButtonsUnSelectableStyles: 'bg-red-500 dark:bg-gray-800',
    todayButNotSelectedStyles: 'text-green-300 dark:text-amber-900',
    selectedTextStyles: 'text-white dark:text-gray-900',
    timeSectionSelectedAndTodayClasses: 'bg-red-900 dark:bg-blue-200',
  },
};
