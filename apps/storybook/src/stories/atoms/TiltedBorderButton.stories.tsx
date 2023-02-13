import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TiltedBorderButton } from '@reusejs/react';
import TiltedBorderButtonDocs from '../docs/TiltedBorderButton.docs';

export default {
  title: 'Atoms/TiltedBorderButton',
  component: TiltedBorderButton,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: TiltedBorderButtonDocs,
      },
    },
  },
} as ComponentMeta<typeof TiltedBorderButton>;

const Template: ComponentStory<typeof TiltedBorderButton> = (args) => (
  <div className='w-full flex justify-center'>
    <TiltedBorderButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Sample Button',
};

export const Example = Template.bind({});
Example.args = {
  label: 'Click Here!!',
  buttonBaseClasses: {
    backgroundColor: 'bg-orange-500 hover:bg-orange-700',
    borderRadius: 'rounded-full',
    border: 'border-none border-transparent',
  },
  tiltedBorderButtonBaseClasses: {
    rotation: 'rotate-6',
    scale: 'scale-105',
  },
  buttonPrefix: (
    <svg
      className='mr-1.5 h-2 w-2 text-white'
      fill='currentColor'
      viewBox='0 0 8 8'
    >
      <circle cx={4} cy={4} r={3} />
    </svg>
  ),
  buttonSuffix: ' ⌫',
};

export const Example2 = Template.bind({});
Example2.args = {
  label: 'Click Here!!',
  buttonBaseClasses: {
    backgroundColor: 'bg-orange-500 hover:bg-orange-700',
    borderRadius: 'rounded-full',
    border: 'border-none border-transparent',
  },
  tiltedBorderButtonBaseClasses: {
    rotation: 'rotate-6',
    scale: 'scale-100',
    borderWidth: "border"
  },
};
