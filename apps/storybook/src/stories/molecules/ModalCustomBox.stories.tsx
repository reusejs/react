import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalBase } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';

const Content = React.forwardRef((props: any, ref) => {
  console.log('base props', props);
  return (
    <div className=' h-[500px] w-[900px] '>
      <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
        <button
          type='button'
          className='rounded-md bg-blue-500 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2'
          onClick={() => props.onAction('no')}
        >
          <span className='sr-only'>Close</span>
          <XIcon className='h-6 w-6 rounded-sm' aria-hidden='true' />
        </button>
      </div>
      <div className='sm:flex sm:items-start'>
        <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
          <div className='text-lg font-bold leading-6 text-white'>
            Write whatever
          </div>
          <div className='mt-2'>
            <p className='text-sm text-white'>Anything</p>
          </div>
        </div>
      </div>
      <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-green-400 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
          onClick={() => props.onAction('yes')}
        >
          Yes
        </button>
      </div>
      <div className='p-2'>{props.description}</div>
    </div>
  );
});

export default {
  title: 'Molecules/Modals/Custom',
  component: ModalBase,
  argTypes: {},
} as ComponentMeta<typeof ModalBase>;

const Template: ComponentStory<typeof ModalBase> = (args) => {
  const openModal = async () => {
    let result = await ModalBase({
      content: Content,
      contentProps: {
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu Why do we use It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      backgroundColor: 'bg-blue-700',
      backgroundOpacity: 'opacity-25',
      modalBaseClasses: {
        background: 'bg-[#242645]',
        border: 'border-white rounded-lg',
        font: 'text-white',
        small: ' ',
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
