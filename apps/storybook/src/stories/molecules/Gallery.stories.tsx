import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GalleryBase } from '@reusejs/react';

export default {
  title: 'Organisms/Gallery',
  component: GalleryBase,
  argTypes: {},
} as ComponentMeta<typeof GalleryBase>;

const CONTENT = [
  <img
    key={1}
    src={
      'https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={2}
    src={
      'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={3}
    src={
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={4}
    src={
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={5}
    src={
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={6}
    src={
      'https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={7}
    src={
      'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={8}
    src={
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={9}
    src={
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={10}
    src={
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
];

const CONTENT2 = [
  <div
    key={0}
    className='flex h-full w-full items-center justify-center bg-purple-400 text-sm text-white md:text-xl'
  >
    This is a Div
  </div>,
  <img
    key={2}
    src={
      'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ='
    }
    alt=''
    className='h-full w-full'
  />,
  <div
    key={3}
    className='flex h-full w-full items-center justify-center bg-rose-400 text-sm text-white md:text-xl'
  >
    This is a Div
  </div>,
  <img
    key={4}
    src={
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={5}
    src={
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <div
    key={3}
    className='flex h-full w-full items-center justify-center bg-purple-400 text-sm text-white md:text-xl'
  >
    This is a Div
  </div>,
  <img
    key={7}
    src={
      'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={8}
    src={
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={9}
    src={
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
  <img
    key={10}
    src={
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    }
    alt=''
    className='h-full w-full'
  />,
];

const Template: ComponentStory<typeof GalleryBase> = (args) => (
  <GalleryBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: CONTENT,
  autoPlay: false,
  interval: 2000,
};

export const Small = Template.bind({});
Small.args = {
  children: CONTENT,
  autoPlay: true,
  interval: 2000,
  galleryBaseClasses: {
    height: 'h-[300px]',
    width: 'w-[200px]',
  },
};

export const StyledSlider = Template.bind({});
StyledSlider.args = {
  children: CONTENT,
  autoPlay: true,
  interval: 2000,
  gallerySliderBaseClasses: {
    gap: 'gap-x-10',
    alignment: 'mt-20',
    backgroundColor: 'bg-lime-400',
  },
};

export const Screen = Template.bind({});
Screen.args = {
  children: CONTENT,
  interval: 2000,
  galleryBaseClasses: {
    wrapper: 'w-screen h-screen flex flex-col justify-between',
    height: 'h-[700px]',
    width: 'w-[900px]',
  },
  gallerySliderBaseClasses: {
    gap: 'gap-x-10',
    height: 'h-[200px]',
    alignment: 'mt-20',
    backgroundColor: 'bg-blue-400',
  },
};

export const ArrowsCustom = Template.bind({});
ArrowsCustom.args = {
  children: CONTENT,
  interval: 2000,
  galleryArrowBaseClasses: {
    size: 'w-10 h-10',
    textStyle: 'text-blue-700 text-3xl',
    left: 'left-1',
    right: 'right-1',
  },
};

export const WithDiv = Template.bind({});
WithDiv.args = {
  children: CONTENT2,
  interval: 2000,
  galleryArrowBaseClasses: {
    size: 'w-10 h-10',
    textStyle: 'text-blue-700 text-3xl',
    left: 'left-1',
    right: 'right-1',
  },
};

export const Test = Template.bind({});
Test.args = {
  children: CONTENT2,
  interval: 2000,
  thumbnailArray: [
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
    'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1290938044?b=1&k=20&m=1290938044&s=170667a&w=0&h=BliJ8-BSACYb88MrrNSThr4aMV0Owq2WWM-5hBB4jeQ=',
  ],
};
