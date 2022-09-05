// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { SliderBase } from '@reusejs/react';

// export default {
//   title: 'Molecules/Slider',
//   component: SliderBase,
//   argTypes: {},
//   // id: "Slider",
//   // decorators: [
//   //   (Story) => (
//   //     <div className='flex w-full items-center justify-center bg-teal-50 py-16'>
//   //       <Story />
//   //     </div>
//   //   ),
//   // ],
// } as ComponentMeta<typeof SliderBase>;

// const CONTENT = [
//   <div
//     key={0}
//     className='flex h-full w-full items-center justify-center bg-purple-400 text-3xl text-white'
//   >
//     This is a Div
//   </div>,
//   <img
//     key={1}
//     src={
//       'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//     }
//     alt=''
//     className='h-full w-full'
//   />,
//   <img
//     key={2}
//     src={
//       'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
//     }
//     alt=''
//     className='h-full w-full'
//   />,
//   <div
//     key={3}
//     className='flex h-full w-full items-center justify-center bg-rose-400 text-3xl text-white'
//   >
//     This is a Div
//   </div>,
//   <img
//     key={4}
//     src={
//       'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
//     }
//     alt=''
//     className='h-full w-full'
//   />,
//   <div
//     key={5}
//     className='flex h-full w-full items-center justify-center bg-lime-400 text-3xl text-white'
//   >
//     This is a Div
//   </div>,
// ];

// const CONTENTDARK = [
//   <div
//     key={0}
//     className='flex h-full w-full items-center justify-center bg-purple-900 text-3xl text-white'
//   >
//     This is a Div
//   </div>,
//   <img
//     key={1}
//     src={
//       'https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
//     }
//     alt=''
//     className='h-full w-full'
//   />,
//   <div
//     key={3}
//     className='flex h-full w-full items-center justify-center bg-rose-900 text-3xl text-white'
//   >
//     This is a Div
//   </div>,
//   <div
//     key={5}
//     className='flex h-full w-full items-center justify-center bg-lime-900 text-3xl text-white'
//   >
//     This is a Div
//   </div>,
//   <img
//     key={2}
//     src={
//       'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
//     }
//     alt=''
//     className='h-full w-full'
//   />,
// ];

// const leftArrow = (props: any) => {
//   return (
//     <div
//       className='absolute top-1/2 left-2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded bg-black px-3 py-1 text-red-500 opacity-70'
//       onClick={props.handlePrev}
//     >
//       {'<-Left'}
//     </div>
//   );
// };

// const rightArrow = (props: any) => {
//   console.log('Props are right arrow are>>', props);
//   return (
//     <div
//       className='absolute top-1/2 right-2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded bg-black px-3 py-1 text-blue-500 opacity-70'
//       onClick={props.handleNext}
//     >
//       {'Right->'}
//     </div>
//   );
// };

// const Template: ComponentStory<typeof SliderBase> = (args) => (
//   <SliderBase {...args} />
// );

// export const Default = Template.bind({});
// Default.args = {
//   children: CONTENT,
//   autoPlay: false,
//   interval: 6000,
// };

// export const Dark = Template.bind({});
// Dark.args = {
//   children: CONTENTDARK,
//   autoPlay: false,
//   interval: 6000,
//   dotColors: 'dark',
// };

// export const ColoredDots = Template.bind({});
// ColoredDots.args = {
//   children: CONTENT,
//   autoPlay: false,
//   interval: 6000,
//   dotColors: { active: 'bg-red-600', inactive: 'bg-blue-400' },
// };

// export const CustomArrows = Template.bind({});
// CustomArrows.args = {
//   children: CONTENT,
//   autoPlay: false,
//   renderArrowLeft: leftArrow,
//   renderArrowRight: rightArrow,
// };

// export const NoArrows = Template.bind({});
// NoArrows.args = {
//   children: CONTENT,
//   hideArrows: true,
// };

// export const NoDots = Template.bind({});
// NoDots.args = {
//   children: CONTENT,
//   hideDots: true,
//   autoPlay: false,
// };
// // export const Test = Template.bind({});
// // Test.args = {
// //   children: CONTENT,
// //   autoPlay: false,
// //   baseArrowClasses: {
// //     left: 'left-10',
// //     right: 'right-10',
// //   },
// // };
