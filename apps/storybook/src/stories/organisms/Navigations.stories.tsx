import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationBase, DropdownMulti, DropdownBase } from '@reusejs/react';

export default {
  title: 'Organisms/Navigations',
  component: NavigationBase,
  argTypes: {},
} as ComponentMeta<typeof NavigationBase>;

const Template: ComponentStory<typeof NavigationBase> = (args) => (
  <NavigationBase {...args} />
);

const Left = () => (
  <a href='#'>
    <span className='sr-only'>Workflow</span>
    <img
      className='h-8 w-auto'
      src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
      alt=''
    />
  </a>
);

const Middle = () => (
  <div className='hidden md:flex'>
    <div className='hidden h-full justify-center space-x-8 md:flex'>
      <div className='flex'>
        <div className='relative flex'>
          <DropdownMulti
            dropdownMultiClasses={{
              containerClasses:
                'absolute left-0 mt-5 w-40 origin-top-left border dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  rounded-md',
            }}
            label={() => (
              <span className='relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800'>
                Women
              </span>
            )}
            items={[
              { label: 'Long Long String Number 1', href: '#', active: false },
              { label: 'Number 2', href: '#', active: true },
              { label: 'Number 3', href: '#', active: false },
              {
                label: 'Number 4',
                href: '#',
                active: false,
                children: [
                  {
                    label: 'Number 4.1',
                    href: '#',
                    active: false,
                  },
                  {
                    label: 'Long Long String Number 4.2',
                    href: '#',
                    active: false,
                  },
                  { label: 'Number 4.3', href: '#', active: false },
                  {
                    label: 'Long Long String Number 4.4',
                    href: '#',
                    active: false,
                    children: [
                      { label: 'Number 4.1.1', href: '#', active: false },
                      { label: 'Number 4.1.2', href: '#', active: false },
                    ],
                  },
                  { label: 'Number 4.5', href: '#', active: false },
                  {
                    label: 'Number 4.6',
                    href: '#',
                    active: false,
                    children: [
                      {
                        label: 'Long Long String Number 4.6.1',
                        href: '#',
                        active: false,
                      },
                      { label: 'Number 4.6.2', href: '#', active: false },
                    ],
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
      <div className='flex'>
        <div className='relative flex'>
          {/* Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" */}

          <DropdownBase
            dropdownBaseClasses={{
              menuButton:
                'relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800',
              itemsWrapper:
                'absolute left-0 mt-5 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            }}
            label={() => <span>Men</span>}
            sections={[
              {
                label: 'Team Switcher',
                items: [
                  { label: 'Beta', href: '#', active: false },
                  { label: 'Betalectic', href: '#', active: true },
                ],
              },
              {
                label: 'Team Switcher',
                items: [
                  { label: 'Beta', href: '#', active: false },
                  { label: 'Betalectic', href: '#', active: true },
                ],
              },
            ]}
          />
        </div>
      </div>
      <a
        href='#'
        className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
      >
        Company
      </a>
      <a
        href='#'
        className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
      >
        Stores
      </a>
    </div>
  </div>
);

const Bars3Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-5 w-5'
  >
    <path
      fillRule='evenodd'
      d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z'
      clipRule='evenodd'
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-5 w-5'
  >
    <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
  </svg>
);

const Right = (props: any) => (
  <>
    <div className='hidden items-center md:flex'>
      <div className='flex space-x-8'>
        <div className='hidden lg:flex'>
          <a href='#' className='-m-2 p-2 text-gray-400 hover:text-gray-500'>
            <span className='sr-only'>Search</span>
            {/* Heroicon name: outline/search */}
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </a>
        </div>
        <div className='flex'>
          <a href='#' className='-m-2 p-2 text-gray-400 hover:text-gray-500'>
            <span className='sr-only'>Account</span>
            {/* Heroicon name: outline/user */}
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </a>
        </div>
      </div>
      <span className='mx-4 h-6 w-px bg-gray-200 lg:mx-6' aria-hidden='true' />
      <div className='flow-root'>
        <a href='#' className='group -m-2 flex items-center p-2'>
          {/* Heroicon name: outline/shopping-cart */}
          <svg
            className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
            0
          </span>
          <span className='sr-only'>items in cart, view bag</span>
        </a>
      </div>
    </div>
    <div className='md:hidden'>
      <span className='sr-only'>Open main menu</span>
      <button
        type='button'
        onClick={() => {
          props.toggleSidebar();
        }}
      >
        {props.sidebar === true && <CloseIcon />}
        {props.sidebar === false && <Bars3Icon />}
      </button>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  left: Left,
  middle: Middle,
  right: Right,
  leftArrangement: 'bg-red-50',
  middleArrangement: 'bg-green-50 flex-1 justify-center',
  rightArrangement: 'bg-blue-50',
};

export const MiddleLeft = Template.bind({});
MiddleLeft.args = {
  left: Left,
  middle: Middle,
  right: Right,
  leftArrangement: 'bg-red-50',
  middleArrangement: 'bg-green-50 ml-8',
  rightArrangement: 'bg-blue-50 flex-1 justify-end',
};

export const MiddleRight = Template.bind({});
MiddleRight.args = {
  left: Left,
  middle: Middle,
  right: Right,
  leftArrangement: 'bg-red-50',
  middleArrangement: 'bg-green-50 ml-8 flex-1 justify-end',
  rightArrangement: 'bg-blue-50',
};

export const NoRightMiddleRight = Template.bind({});
NoRightMiddleRight.args = {
  left: Left,
  middle: Middle,
  leftArrangement: 'bg-red-50',
  middleArrangement: 'bg-green-50 ml-8 flex-1 justify-end',
  rightArrangement: 'bg-blue-50',
};

export const NoRightMiddleLeft = Template.bind({});
NoRightMiddleLeft.args = {
  left: Left,
  middle: Middle,
  leftArrangement: 'bg-red-50',
  middleArrangement: 'bg-green-50 ml-8 flex-1',
  rightArrangement: 'bg-blue-50',
};

export const OnlyRight = Template.bind({});
OnlyRight.args = {
  right: Right,
  leftArrangement: 'bg-red-50',
  middleArrangement: 'bg-green-50 ml-8 flex-1',
  rightArrangement: 'bg-blue-50 flex-1 justify-end',
};

export const LeftAndRight = Template.bind({});
LeftAndRight.args = {
  left: Left,
  right: Right,
  leftArrangement: 'bg-red-50',
  middleArrangement: 'bg-green-50 ml-8 flex-1',
  rightArrangement: 'bg-blue-50 flex-1 justify-end',
};

export const Thin = Template.bind({});
Thin.args = {
  left: () => (
    <form className='hidden lg:block lg:flex-1'>
      <div className='flex'>
        <label htmlFor='desktop-currency' className='sr-only'>
          Currency
        </label>
        <div className='group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white'>
          <select
            id='desktop-currency'
            name='currency'
            className='flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100'
          >
            <option>CAD</option>
            <option>USD</option>
            <option>AUD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
          {/* <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center'>
            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
              className='h-5 w-5 text-gray-300'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M6 8l4 4 4-4'
              />
            </svg>
          </div> */}
        </div>
      </div>
    </form>
  ),
  middle: () => (
    <p className='text-center text-sm font-medium text-white'>
      Get free delivery on orders over $100
    </p>
  ),
  right: () => (
    <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
      <a
        href='#'
        className='text-sm font-medium text-white hover:text-gray-100'
      >
        Create an account
      </a>
      <span className='h-6 w-px bg-gray-600' aria-hidden='true' />
      <a
        href='#'
        className='text-sm font-medium text-white hover:text-gray-100'
      >
        Sign in
      </a>
    </div>
  ),
  backgroundClasses: 'bg-gray-900',
  heightClasses: 'flex h-10 items-center justify-between',
  leftArrangement: 'none',
  middleArrangement: 'flex-1 justify-center',
  rightArrangement: 'none',
};

export const ThinRight = Template.bind({});
ThinRight.args = {
  right: () => (
    <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
      <a
        href='#'
        className='text-sm font-medium text-white hover:text-gray-100'
      >
        Create an account
      </a>
      <span className='h-6 w-px bg-gray-600' aria-hidden='true' />
      <a
        href='#'
        className='text-sm font-medium text-white hover:text-gray-100'
      >
        Sign in
      </a>
    </div>
  ),
  backgroundClasses: 'bg-gray-900',
  heightClasses: 'flex h-10 items-center justify-between',
  leftArrangement: 'none',
  middleArrangement: 'flex-1 justify-center',
  rightArrangement: 'flex-1 justify-end',
};
