import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalConfirm } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';

export default {
  title: 'Molecules/Modals/Confirm',
  component: ModalConfirm,
  argTypes: {},
} as ComponentMeta<typeof ModalConfirm>;

const Template: ComponentStory<typeof ModalConfirm> = (args) => {
  const openModal = async () => {
    let result = await ModalConfirm({
      proceedText: 'Remove Environment',
      heading: 'Remove Environment',
      message: 'Are you sure you want to remove?',
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
