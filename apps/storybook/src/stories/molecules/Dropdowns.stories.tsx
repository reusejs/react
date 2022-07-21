import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropdownBase, LabelBase } from '@reusejs/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/solid';

export default {
  title: 'Molecules/Dropdowns',
  component: DropdownBase,
  argTypes: {},
} as ComponentMeta<typeof DropdownBase>;

const Template: ComponentStory<typeof DropdownBase> = (args) => (
  <DropdownBase {...args} />
);

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const ItemRenderer = (props: any) => {
  console.log('ITem', props);

  let { href, label, active } = props.item;

  return (
    <a
      href={props.item.href}
      className={classNames(
        props.item.active
          ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white'
          : '',
        'block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700'
      )}
    >
      <div className='flex items-center justify-between'>
        <div>{props.item.label}</div>
        {active && <ActiveLabel />}
      </div>
    </a>
  );
};

const CustomComponent = (props: any) => {
  console.log('ITem', props);

  let { href, label, active } = props.item;

  return (
    <DropdownBase
      dropdownBaseClasses={{
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
    <div className='flex justify-between'>
      <LabelBase label='Options' />
      <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
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
  sections: [
    {
      label: 'Manage Account',
      items: [
        { label: 'Your Profile', href: '#', active: false },
        { label: 'Settings', href: '#', active: false, comp: CustomComponent },
      ],
    },
    {
      label: 'Team Switcher',
      items: [
        { label: 'Beta', href: '#', active: false },
        { label: 'Betalectic', href: '#', active: true },
      ],
    },
    {
      items: [{ label: 'Sign Out', href: '#', active: false }],
    },
  ],
};

// export const Slow = Template.bind({});
// Slow.args = {
//   htmlFor: 'email',
//   label: Label,
//   variant: 'slow',
// };
