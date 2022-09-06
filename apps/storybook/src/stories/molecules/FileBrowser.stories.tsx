import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileBrowser } from '@reusejs/react';

export default {
  title: 'Molecules/FileBrowser/Default',
  component: FileBrowser,
  argTypes: {},
} as ComponentMeta<typeof FileBrowser>;

const Template: ComponentStory<typeof FileBrowser> = (args) => {
  return (
    <>
      <FileBrowser {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 'h-4 w-4',
  onView: (file) => {
    console.log('onView', file);
  },
  onDelete: (file) => {
    console.log('onDelete', file);
  },
  onEdit: (file) => {
    console.log('onEdit', file);
  },
  files: [
    {
      title: 'Screenshot 2022-08-24 at 11.35.05 AM.png',
      mime: 'image',
      source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
      title: 'IMG_4985.HEIC',
      mime: 'image',
      source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
      title: 'IMG_4985.HEIC',
      mime: 'image',
      source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
  ],
};
