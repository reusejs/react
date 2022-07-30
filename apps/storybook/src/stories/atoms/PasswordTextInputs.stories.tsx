import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PasswordTextInputBase } from '@reusejs/react';

export default {
  title: 'Atoms/Text Inputs/Password',
  component: PasswordTextInputBase,
  argTypes: {},
} as ComponentMeta<typeof PasswordTextInputBase>;

const Template: ComponentStory<typeof PasswordTextInputBase> = (args) => {
  const [value, setValue] = React.useState<string>('');
  return (
    <PasswordTextInputBase
      {...args}
      value={value}
      onChange={(val: string) => setValue(val)}
    />
  );
};

const ShowPassword = (props: any) => {
  return (
    <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
      <span className='text-gray-500 sm:text-sm' id='price-currency'>
        {props.inputType === 'text' ? 'Hide' : 'Show'}
      </span>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  labelBaseProps:{
    label:"Password",
  },
  htmlFor: 'password',
  name: 'password',
  type: 'text',
};

export const ShowHide = Template.bind({});
ShowHide.args = {
  labelBaseProps:{
    label:"Password",
  },
  htmlFor: 'password',
  name: 'password',
  type: 'password',
  showPassword: ShowPassword,
};
