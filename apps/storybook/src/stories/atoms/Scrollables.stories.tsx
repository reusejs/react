import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ScrollableBase } from '@reusejs/react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const OptionsRenderer = ({ value }: { value: any }) => {
  return (
    <div className='relative flex cursor-pointer flex-row items-center bg-white p-2 hover:bg-gray-200 dark:hover:bg-gray-700'>
      <span className='flex flex-row items-center'>
        <span className='text-sm text-gray-900 dark:text-gray-200'>
          {value.label}
        </span>
      </span>
    </div>
  );
};

export default {
  title: 'Atoms/Scrollables',
  component: ScrollableBase,
  argTypes: {},
} as ComponentMeta<typeof ScrollableBase>;

const Template: ComponentStory<typeof ScrollableBase> = (args) => {
  return (
    <ScrollableBase {...args}>
      <div className='text-5xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </ScrollableBase>
  );
};

export const Default = Template.bind({});
Default.args = {
  scrollableClasses: {
    padding: 'p-4',
  },
};
