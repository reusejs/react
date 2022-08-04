import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropdownMulti, LabelBase } from '@reusejs/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/solid';

export default {
  title: 'Molecules/Dropdowns Multi',
  component: DropdownMulti,
  argTypes: {},
} as ComponentMeta<typeof DropdownMulti>;

const Template: ComponentStory<typeof DropdownMulti> = (args) => (
  <div className='w-64'>
    <DropdownMulti {...args} />
  </div>
);

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const ItemRenderer = (props: any) => {
  let { href, label, active } = props.item;

  return (
    <div
      className={classNames(
        'relative block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700'
      )}
    >
      <div className='flex items-center justify-between'>
        <div>{props.item.label}</div>
      </div>
    </div>
  );
};

const CustomComponent = (props: any) => {
  console.log('ITem', props);

  let { href, label, active } = props.item;

  return (
    <DropdownMulti
      DropdownMultiClasses={{
        menuButton: 'inline-flex w-full',
        wrapper: 'relative w-full',
        transition: {
          enter: 'transition ease-out duration-200',
          enterFrom: 'transform opacity-0 scale-95',
          enterTo: 'transform opacity-100 scale-100',
          leave: 'transition ease-in duration-75',
          leaveFrom: 'transform opacity-100 scale-100',
          leaveTo: 'transform opacity-0 scale-95',
        },
        itemsWrapper:
          'absolute right-0 top-0 w-56 origin-top-left translate-x-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
      }}
      label={InternalLabel}
      itemRenderer={ItemRenderer}
      sections={[
        {
          items: [
            { label: 'Sign Out 1', href: '#', active: false },
            { label: 'Sign Out 2', href: '#', active: false },
          ],
        },
      ]}
    />
  );
};

const InternalLabel = () => {
  return (
    <div
      className={classNames(
        'block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700'
      )}
    >
      <div className='flex items-center justify-between'>
        <div>Multi Level</div>
      </div>
    </div>
  );
};

const Label = () => {
  return (
    <div className='flex w-32 justify-between border p-2'>
      <LabelBase label='Options' />
    </div>
  );
};

const ActiveLabel = () => {
  return <CheckCircleIcon className='mr-1 h-6 w-6 text-green-500' />;
};

export const Default = Template.bind({});
Default.args = {
  label: Label,
  onClick: (item, active) => {
    console.log('clicked', item, active);
  },
  activeLabel: ActiveLabel,
  itemRenderer: ItemRenderer,
  items: [
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
        { label: 'Long Long String Number 4.2', href: '#', active: false },
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
  ],
};

// export const Slow = Template.bind({});
// Slow.args = {
//   htmlFor: 'email',
//   label: Label,
//   variant: 'slow',
// };
