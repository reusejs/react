import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LazyLoadedImage } from '@reusejs/react';

export default {
  title: 'Molecules/LazyLoadedImage',
  component: LazyLoadedImage,
  argTypes: {},
} as ComponentMeta<typeof LazyLoadedImage>;

const abc: any = [
  'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2889&q=80',
  'https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg',
  'https://images.unsplash.com/photo-1661859330852-8b34bb7a66c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80',
  'https://images.unsplash.com/photo-1661846141704-0691950989e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1661546277863-9086af9e8164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2635&q=80',
  'https://images.unsplash.com/photo-1661100710716-2b6aea854cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
  'https://images.unsplash.com/photo-1661846141704-0691950989e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1661546277863-9086af9e8164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2635&q=80',
];
const Template: ComponentStory<typeof LazyLoadedImage> = (args) => (
  <div className='flex flex-col'>
    {abc.map((item: any, index: any) => {
      return <LazyLoadedImage {...args} src={item} key={index} />;
    })}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 200,
  height: 300,
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
};

const HorizontalLazyLoading: ComponentStory<typeof LazyLoadedImage> = (
  args
) => (
  <div className='gallery horizontal with-overflow'>
    {abc.map((item: any, index: any) => {
      return <LazyLoadedImage {...args} src={item} key={index} />;
    })}
  </div>
);

export const LazyLoadImagesInHorizontalDirection = HorizontalLazyLoading.bind(
  {}
);
LazyLoadImagesInHorizontalDirection.args = {
  width: 200,
  height: 200,
  placeholderSrc:
    'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
  wrapperClassName: 'gallery-img-wrapper',
};

// placeholder as a component is ok, but when image is loading it won't show anything as the placeholder component is replaced by image
// better way is use placeholderSrc, placeholderSrc is added img to background so that even while image is loading placeholder should be visible
