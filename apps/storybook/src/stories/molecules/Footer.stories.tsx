import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterBase } from '@reusejs/react';

export default {
  title: 'Molecules/Footer',
  component: FooterBase,
  argTypes: {},
} as ComponentMeta<typeof FooterBase>;

const Template: ComponentStory<typeof FooterBase> = (args) => (
  <FooterBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  leftContent: (
    <div className='w-auto text-xs'>
      © 2020 Workflow, Inc. All rights reserved.
    </div>
  ),
  rightContent: <div className='w-auto text-xs'> Example</div>,
  footerBaseCalsses: {
    backgroundColor: 'bg-green-100',
    padding: 'py-6 px-4',
  },
};
