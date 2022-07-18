import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalConfirm } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';

const Content = () => {
  return (
    <div>
      <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
        <CheckIcon className='h-6 w-6 text-green-600' aria-hidden='true' />
      </div>
      <div className='mt-3 text-center sm:mt-5'>
        <div className='text-lg font-medium leading-6 text-gray-900'>
          {'Remove Environment'}
        </div>
        <div className='mt-2'>
          <p className='text-sm text-gray-500'>
            Are you sure you want to remove?
          </p>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Molecules/Modals/Confirm',
  component: ModalConfirm,
  argTypes: {},
} as ComponentMeta<typeof ModalConfirm>;

const Template: ComponentStory<typeof ModalConfirm> = (args) => {
  const openModal = async () => {
    let result = await ModalConfirm({
      heading: 'Remove Environment',
      description: 'Are you sure you want to remove?',
      yesText: 'Go Ahead',
      content: Content,
      yesButtonClasses: {
        backgroundColor: 'bg-green-600 shadow-sm hover:bg-green-700',
      },
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
