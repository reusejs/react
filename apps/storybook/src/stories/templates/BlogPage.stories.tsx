import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TwoColumnSectionBase } from '@reusejs/react';

export default {
  title: 'Templates/BlogPage',
  component: TwoColumnSectionBase,
  argTypes: {},
} as ComponentMeta<typeof TwoColumnSectionBase>;

const Template: ComponentStory<typeof TwoColumnSectionBase> = (args) => (
  <TwoColumnSectionBase {...args} />
);

const BlogPage = () => {
  // Measure height of "header"
  // Use that in place of 9.5rem
  return (
    <>
      <header className='sticky top-0 z-50 flex flex-col bg-gray-500 p-2 shadow-md shadow-slate-900/5 transition duration-500'>
        <div className='flex flex-wrap items-center justify-between bg-gray-200 px-4 py-5 sm:px-6 lg:px-8'>
          <div className='mr-6 flex lg:hidden'>Hidden in LG</div>

          <div className='relative flex flex-grow basis-0 items-center'>
            <div className='h-8 w-64 bg-green-300'></div>
          </div>

          <div className='-my-5 mr-6 sm:mr-8 md:mr-0'>
            <div className='h-8 w-64 bg-blue-300'></div>
          </div>

          <div className='relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow'>
            <div className='h-8 w-64 bg-red-300'></div>
          </div>
        </div>
        <div className='h-16 bg-gray-100'></div>
      </header>

      <div className='overflow-hidden bg-yellow-300'>
        <div className='py-16 sm:px-2 lg:relative lg:py-20 lg:px-0'>
          <div className='lg:max-w-8xl mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12'>
            <div className='relative z-10 md:text-center lg:text-left '>
              <div className='relative'>
                <div className='h-8 w-64 bg-red-300'></div>
              </div>
            </div>
            <div className='relative'>
              <div className='relative'>
                <div className='h-8 w-64 bg-blue-300'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-8xl relative mx-auto flex justify-center bg-green-50 sm:px-2 lg:px-8 xl:px-12'>
        <div className='hidden lg:relative lg:block lg:flex-none'>
          <div className='sticky top-[9.5rem] -ml-0.5 h-[calc(100vh-9.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5'>
            <nav
              className='w-64 bg-green-300 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16'
              style={{ height: 1064 }}
            ></nav>
          </div>
        </div>

        <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16'>
          <article
            className='bg-blue-300'
            style={{ height: '3000px' }}
          ></article>
        </div>

        <div className='hidden xl:sticky xl:top-[9.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-9.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6'>
          <nav className='h-96 w-56 bg-red-300'></nav>
        </div>
      </div>
    </>
  );
};

const LeftSection = (props: any) => {
  return <h1>LEFT SECTION</h1>;
};

const RightSection = (props: any) => {
  return <h1>RIGHT SECTION</h1>;
};

export const Default = Template.bind({});
Default.args = {
  firstColumnEl: <LeftSection />,
  secondColumnEl: <RightSection />,
};
