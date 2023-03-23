import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CentralizedSliderBase } from '@reusejs/react';
import { Secondary } from '../atoms/Grid.stories';
import '../../../../../packages/react/swiper.css';

export default {
  title: 'Molecules/CentralizedSlider',
  component: CentralizedSliderBase,
  argTypes: {},
} as ComponentMeta<typeof CentralizedSliderBase>;

const Template: ComponentStory<typeof CentralizedSliderBase> = (args) => (
  <CentralizedSliderBase {...args} />
);

const Elements = [
  <div
    key={0}
    className='flex h-56 w-96 items-center justify-center bg-rose-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={1}
    className='flex h-48 w-96 items-center justify-center bg-lime-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={2}
    className='flex h-56 w-96 items-center justify-center bg-purple-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={3}
    className='flex h-48 w-96 items-center justify-center bg-amber-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={4}
    className='flex h-56 w-96 items-center justify-center bg-indigo-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={5}
    className='flex h-56 w-96 items-center justify-center bg-cyan-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={6}
    className='flex h-48 w-96 items-center justify-center bg-green-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={7}
    className='flex h-56 w-96 items-center justify-center bg-orange-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={8}
    className='flex h-48 w-96 items-center justify-center bg-gray-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={9}
    className='flex h-56 w-96 items-center justify-center bg-yellow-200 '
  >
    {'Hello'}
  </div>,
  <div
    key={10}
    className='flex h-48 w-96 items-center justify-center bg-slate-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={11}
    className='flex h-48 w-96 items-center justify-center bg-emerald-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={12}
    className='flex h-56 w-96 items-center justify-center bg-teal-500 '
  >
    {'Hello'}
  </div>,
];

const ArrowLeft = (props: any) => {
  return (
    <div
      className='absolute top-1/2 left-1 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white bg-red-600 text-xl text-white opacity-70 hover:bg-blue-500 hover:opacity-100'
      onClick={() => {
        props.swiperRef.current.slidePrev();
      }}
    >
      {'<<'}
    </div>
  );
};
const ArrowRight = (props: any) => {
  return (
    <div
      className='absolute top-1/2 right-1 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white bg-red-600 text-xl text-white opacity-70 hover:bg-blue-500 hover:opacity-100'
      onClick={() => {
        props.swiperRef.current.slideNext();
      }}
    >
      {'>>'}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: Elements,
  gap: 20,
  slidesPerView: 3,
  pagination: true,
};

export const Variant = Template.bind({});
Variant.args = {
  children: Elements,
  gap: 20,
  slidesPerView: 1,
  autoPlay: 2000,
};

export const CustomArrows = Template.bind({});
CustomArrows.args = {
  children: Elements,
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  autoPlay: 2000,
  renderArrowLeft: ArrowLeft,
  renderArrowRight: ArrowRight,
};
