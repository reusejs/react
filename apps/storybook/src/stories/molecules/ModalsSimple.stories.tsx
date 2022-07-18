import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalClosable } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';

const ModalContent = React.forwardRef((props, ref) => {
  return (
    <div
      className='inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle'
      ref={ref}
    >
      <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
        <button
          type='button'
          className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          onClick={() => props.resolveModal(false)}
        >
          <span className='sr-only'>Close</span>
          <XIcon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
      <div className='sm:flex sm:items-start'>
        <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
          <Dialog.Title
            as='h3'
            className='text-lg font-medium leading-6 text-gray-900'
          >
            {props.config.title}
          </Dialog.Title>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>{props.config.description}</p>
          </div>
        </div>
      </div>
      <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
          onClick={() => props.resolveModal(true)}
        >
          Yes
        </button>
      </div>
    </div>
  );
});

export default {
  title: 'Molecules/Modals/Closable',
  component: ModalClosable,
  argTypes: {},
} as ComponentMeta<typeof ModalClosable>;

const Template: ComponentStory<typeof ModalClosable> = (args) => {
  const openModal = async () => {
    let result = await ModalClosable({
      title: 'Simple Modal',
      description: 'Are we good?',
      modalContent: ModalContent,
    });
    console.log('Result', result);
  };

  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-gray-50'>
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
