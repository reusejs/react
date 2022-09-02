import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckboxBase } from '@reusejs/react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export default {
  title: 'Atoms/Checkbox',
  component: CheckboxBase,
  argTypes: {},
} as ComponentMeta<typeof CheckboxBase>;

const Template: ComponentStory<typeof CheckboxBase> = (args) => {
  const [value, setValue] = React.useState<boolean>(args.value || false);
  return (
    <>
      {JSON.stringify(value)}
      <CheckboxBase {...args} value={value} onChange={() => setValue(!value)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  // label: 'Price',
  labelBaseProps: {
    label: 'Price',
  },
  htmlFor: 'price',
  name: 'price',
  type: 'text',
};

export const Selected = Template.bind({});
Selected.args = {
  // label: 'Price',
  labelBaseProps: {
    label: 'Price',
  },
  htmlFor: 'price',
  name: 'price',
  type: 'text',
  value: true,
};

const ErrorText = () => (
  <p className='mt-2 text-sm text-red-500'>This field is required</p>
);

const HelperText = () => (
  <p className='mt-2 text-sm text-gray-500'>We'll only use this for spam.</p>
);

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  // label: 'Price',
  labelBaseProps: {
    label: 'Price',
    htmlFor: 'price',
  },
  name: 'price',
  type: 'text',
  placeholder: '0.00',
  CheckboxBaseClasses: {
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
  // label: 'Price',
  labelBaseProps: {
    label: 'Price',
  },
  name: 'price',
  type: 'text',
  placeholder: '0.00',
  CheckboxBaseClasses: {
    wrapper: 'relative mt-1',
  },
  textInputBottom: <HelperText />,
};
