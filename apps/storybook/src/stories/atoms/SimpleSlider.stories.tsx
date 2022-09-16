import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SimpleSliderBase } from '@reusejs/react';

export default {
  title: 'Atoms/SimpleSlider',
  component: SimpleSliderBase,
  argTypes: {},
} as ComponentMeta<typeof SimpleSliderBase>;


const Template: ComponentStory<typeof SimpleSliderBase> = (args) => (
  <div className='py-36'>
    <SimpleSliderBase {...args} />
  </div>
);

const Elements = [
  <div
    key={0}
    className='w-48 h-48 flex items-center justify-center bg-rose-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={1}
    className='w-48 h-48 flex items-center justify-center bg-lime-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={2}
    className='w-48 h-48 flex items-center justify-center bg-purple-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={3}
    className='w-48 h-48 flex items-center justify-center bg-amber-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={4}
    className='w-48 h-48 flex items-center justify-center bg-indigo-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={5}
    className='w-48 h-48 flex items-center justify-center bg-cyan-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={6}
    className='w-48 h-48 flex items-center justify-center bg-green-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={7}
    className='w-48 h-48 flex items-center justify-center bg-orange-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={8}
    className='w-48 h-48 flex items-center justify-center bg-gray-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={9}
    className='w-48 h-48 flex items-center justify-center bg-yellow-200 '
  >
    {'Hello'}
  </div>,
  <div
    key={10}
    className='w-48 h-48 flex items-center justify-center bg-slate-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={11}
    className='w-48 h-48 flex items-center justify-center bg-emerald-500 '
  >
    {'Hello'}
  </div>,
  <div
    key={12}
    className='w-48 h-48 flex items-center justify-center bg-teal-500 '
  >
    {'Hello'}
  </div>,
];

const leftArrow = (props: any) => {
  return (
    <div
      className='absolute -top-10 right-24 flex cursor-pointer items-center justify-center rounded bg-black px-3 py-1 text-red-500 opacity-70'
      onClick={props.slideLeft}
    >
      {'<-Left'}
    </div>
  );
};

const rightArrow = (props: any) => {
  return (
    <div
      className='absolute -top-10 right-2 flex cursor-pointer items-center justify-center rounded bg-black px-3 py-1 text-blue-500 opacity-70'
      onClick={props.slideRight}
    >
      {'Right->'}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: Elements,
  id: 'Slider',
  scrollWidth: 192,
};

export const CustomArrows = Template.bind({});
CustomArrows.args = {
  children: Elements,
  id: 'Slider',
  scrollWidth: 192,
  renderArrowLeft: leftArrow,
  renderArrowRight: rightArrow,
};

export const LargerScrollWidth = Template.bind({});
LargerScrollWidth.args = {
  children: Elements,
  id: 'Slider',
  scrollWidth: 3*192,
  renderArrowLeft: leftArrow,
  renderArrowRight: rightArrow,
};
