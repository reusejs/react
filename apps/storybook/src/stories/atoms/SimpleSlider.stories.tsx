import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SimpleSliderBase } from '@reusejs/react';

export default {
  title: 'Atoms/SimpleSlider',
  component: SimpleSliderBase,
  argTypes: {},
} as ComponentMeta<typeof SimpleSliderBase>;

const Template: ComponentStory<typeof SimpleSliderBase> = (args) => (
  <SimpleSliderBase {...args} />
);

const Elements = [
    <div key={0} className="w-200 h-200 p-36 bg-rose-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={1} className="w-200 h-200 p-36 bg-lime-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={2} className="w-200 h-200 p-36 bg-purple-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={3} className="w-200 h-200 p-36 bg-amber-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={4} className="w-200 h-200 p-36 bg-indigo-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={5} className="w-200 h-200 p-36 bg-cyan-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={6} className="w-200 h-200 p-36 bg-green-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={7} className="w-200 h-200 p-36 bg-orange-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={8} className="w-200 h-200 p-36 bg-gray-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={9} className="w-200 h-200 p-36 bg-yellow-200 flex items-center justify-center">{"Hello"}</div>,
    <div key={10} className="w-200 h-200 p-36 bg-slate-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={11} className="w-200 h-200 p-36 bg-emerald-500 flex items-center justify-center">{"Hello"}</div>,
    <div key={12} className="w-200 h-200 p-36 bg-teal-500 flex items-center justify-center">{"Hello"}</div>,
]


export const Default = Template.bind({});
Default.args = {
  children: Elements,
  id: "Slider",
  scrollWidth: 400, 
};