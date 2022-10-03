import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageOverlay } from '@reusejs/react';

export default {
  title: 'Molecules/ImageOverlay',
  component: ImageOverlay,
  argTypes: {},
} as ComponentMeta<typeof ImageOverlay>;

const Template: ComponentStory<typeof ImageOverlay> = (args) => (
  <ImageOverlay {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: 300,
  height: 300,
  src: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
  bottomleft: <div className='bg-red-100 text-xs sm:text-sm'>Bottom Left</div>,
  bottomRight: (
    <div className='flex items-center bg-red-100 text-xs sm:text-sm'>
      Bottom Right
    </div>
  ),
  topLeft: <div className='bg-red-100 text-xs sm:text-sm'>Top Left</div>,
  topRight: (
    <div className='flex items-center justify-center bg-red-100 text-xs sm:text-sm'>
      Top Right
    </div>
  ),
  center: (
    <div className='flex justify-center bg-red-100 text-xs sm:text-sm'>
      Center
    </div>
  ),
};

export const ContentInTopLeft = Template.bind({});
ContentInTopLeft.args = {
  width: 300,
  height: 300,
  src: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
  topLeft: <div className='bg-red-100 text-xs sm:text-sm'>Top Left</div>,
};

export const ContentInTopRight = Template.bind({});
ContentInTopRight.args = {
  width: 300,
  height: 300,
  src: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
  topRight: (
    <div className='flex items-center justify-center bg-red-100 text-xs sm:text-sm'>
      Top Right
    </div>
  ),
};

export const ContentInBottomLeft = Template.bind({});
ContentInBottomLeft.args = {
  width: 300,
  height: 300,
  src: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
  bottomleft: <div className='bg-red-100 text-xs sm:text-sm'>Bottom Left</div>,
};

export const ContentInBottomRight = Template.bind({});
ContentInBottomRight.args = {
  width: 300,
  height: 300,
  src: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
  bottomRight: (
    <div className='flex items-center bg-red-100 text-xs sm:text-sm'>
      Bottom Right
    </div>
  ),
};

export const ContentInMiddle = Template.bind({});
ContentInMiddle.args = {
  width: 300,
  height: 300,
  src: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
  center: (
    <div className='flex justify-center bg-red-100 text-xs sm:text-sm'>
      Center
    </div>
  ),
};

export const ImageWithEffect = Template.bind({});
ImageWithEffect.args = {
  width: 300,
  height: 300,
  src: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
  effectClasses: 'bg-gradient-to-t from-gray-900',
};

export const ContentWithEffect = Template.bind({});
ContentWithEffect.args = {
  width: 300,
  height: 300,
  src: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
  bottomleft: <div className='bg-red-100 text-xs sm:text-sm'>Bottom Left</div>,
  bottomRight: (
    <div className='flex items-center bg-red-100 text-xs sm:text-sm'>
      Bottom Right
    </div>
  ),
  topLeft: <div className='bg-red-100 text-xs sm:text-sm'>Top Left</div>,
  topRight: (
    <div className='flex items-center justify-center bg-red-100 text-xs sm:text-sm'>
      Top Right
    </div>
  ),
  center: (
    <div className='flex justify-center bg-red-100 text-xs sm:text-sm'>
      Center
    </div>
  ),
  effectClasses: 'bg-gradient-to-t from-gray-900',
};
