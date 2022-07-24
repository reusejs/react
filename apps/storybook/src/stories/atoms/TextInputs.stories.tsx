import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInputBase } from '@reusejs/react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export default {
  title: 'Atoms/Text Inputs/Simple',
  component: TextInputBase,
  argTypes: {},
} as ComponentMeta<typeof TextInputBase>;

const Template: ComponentStory<typeof TextInputBase> = (args) => {
  const [value, setValue] = React.useState<string>('Hi');
  return (
    <TextInputBase
      {...args}
      value={value}
      onChange={(val: string) => setValue(val)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Price',
  htmlFor: 'price',
  name: 'price',
  type: 'text',
  placeholder: '0.00',
};

export const OnBlur = Template.bind({});
OnBlur.args = {
  label: 'Price',
  htmlFor: 'price',
  name: 'price',
  type: 'text',
  placeholder: '0.00',
  onBlur: () => {
    console.log("Called on Blur");
  },
};

export const onFocus = Template.bind({});
onFocus.args = {
  label: 'Price',
  htmlFor: 'price',
  name: 'price',
  type: 'text',
  placeholder: '0.00',
  onFocus: () => {
    console.log("Called on Focus");
  },
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  htmlFor: 'password',
  name: 'password',
  type: 'password',
  placeholder: '0.00',
};

const ErrorText = () => (
  <p className='mt-2 text-sm text-red-500'>This field is required</p>
);

const HelperText = () => (
  <p className='mt-2 text-sm text-gray-500'>We'll only use this for spam.</p>
);

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  label: 'Price',
  htmlFor: 'price',
  name: 'price',
  type: 'text',
  placeholder: '0.00',
  textInputBaseClasses: {
    wrapper: 'relative mt-1',
  },
  error: <ErrorText />,
  textInputBottom: <HelperText />,
  textInputSuffix: (
    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
      <ExclamationCircleIcon
        className='h-5 w-5 text-red-500'
        aria-hidden='true'
      />
    </div>
  ),
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Price',
  htmlFor: 'price',
  name: 'price',
  type: 'text',
  placeholder: '0.00',
  textInputBaseClasses: {
    wrapper: 'relative mt-1',
  },
  textInputBottom: <HelperText />,
};

export const WithSuffixPrefix = Template.bind({});
WithSuffixPrefix.args = {
  label: 'Price',
  htmlFor: 'price',
  name: 'price',
  type: 'text',
  placeholder: '0.00',
  variant: 'suffixPrefix',
  textInputSuffix: (
    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
      <span className='text-gray-500 sm:text-sm' id='price-currency'>
        USD
      </span>
    </div>
  ),
  textInputPrefix: (
    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
      <span className='text-gray-500 sm:text-sm'>$</span>
    </div>
  ),
};