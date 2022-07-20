import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalBase } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';

const Content = React.forwardRef((props: any, ref) => {
  console.log('base props', props);
  return (
    <div ref={ref}>
      <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
        <button
          type='button'
          className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          onClick={() => props.onAction('no')}
        >
          <span className='sr-only'>Close</span>
          <XIcon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
      <div className='sm:flex sm:items-start'>
        <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
          <div className='text-lg font-medium leading-6 text-gray-900'>
            Write whatever
          </div>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>Anything</p>
          </div>
        </div>
      </div>
      <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
          onClick={() => props.onAction('yes')}
        >
          Yes
        </button>
      </div>
    </div>
  );
});

export default {
  title: 'Molecules/Modals/Base',
  component: ModalBase,
  argTypes: {},
} as ComponentMeta<typeof ModalBase>;

const Template: ComponentStory<typeof ModalBase> = (args) => {
  const openModal = async () => {
    let result = await ModalBase({
      content: Content,
    });
    console.log('Result', result);
  };

  return (
    <div className='flex min-h-screen w-full items-center justify-center '>
      <button
        className='bg-blue-600 p-2 text-white hover:bg-gray-700'
        onClick={() => {
          openModal();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
