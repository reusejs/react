import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PickerRadioBase, LabelBase, TextInputBase } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const fetchContinents = (q = '') => {
  let continents = ['Buying', 'Selling', 'Dying'];
  let newContinents = continents.map((c) => {
    return {
      value: c.toLowerCase(),
      label: c,
    };
  });

  if (q != '') {
    newContinents = newContinents.filter((c) => {
      if (c.value.search(q.toLocaleLowerCase()) > -1) {
        return c;
      }
    });
  }
  return newContinents;
};

const OptionsRenderer = ({
  value,
  selected,
  name,
  ...props
}: {
  value: any;
  name: any;
  selected: any;
}) => {
  const [found, setFound] = React.useState<boolean>(false);

  React.useEffect(() => {
    let localFound = selected.some(
      (current: any) => current.value === value.value
    );
    setFound(localFound === false ? false : true);
  }, [selected]);

  //   console.log('selected', selected, value);

  return (
    <div className='flex items-center'>
      <TextInputBase
        label=''
        htmlFor=''
        id={value.value}
        name={name}
        type='radio'
        checked={found === true}
        onChange={() => {}}
        textInputClasses={{
          wrapper: 'hidden',
        }}
      />
      <LabelBase
        htmlFor={value.value}
        label={value.label}
        labelClasses={{
          alignment: `px-4 py-1 rounded-full cursor-pointer`,
          font: 'text-base font-medium',
          color: `${
            found === true
              ? 'text-cyan-200 bg-gray-700 font-bold border border-gray-800'
              : 'text-white'
          }`,
        }}
      />
    </div>
  );
};

export default {
  title: 'Molecules/Pickers/Radio Buttons/Rounded',
  component: PickerRadioBase,
  argTypes: {},
} as ComponentMeta<typeof PickerRadioBase>;

const Template: ComponentStory<typeof PickerRadioBase> = (args) => {
  const [selected, setSelected] = useState<any>(args.defaultSelected || []);
  return (
    <div className='w-1/2'>
      <div className='mb-4 bg-gray-50 p-4'>
        <pre>
          <code>{JSON.stringify(selected)}</code>
        </pre>
      </div>
      <div>
        <PickerRadioBase
          {...args}
          defaultSelected={selected}
          onChange={(v: any) => {
            setSelected([v]);
          }}
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'price',
  name: 'price',
  valueKey: 'value',
  multiple: false,
  disabled: false,
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  optionsRenderer: OptionsRenderer,
  scrollableClasses: {
    position:
      'sm:flex sm:items-center sm:space-y-0 sm:space-x-1 justify-center',
    maxHeight: 'none',
    border: 'border-0',
    background: 'bg-gray-800 py-2 px-6',
    borderRadius: 'rounded-full',
    width: 'w-none',
  },
};

export const Selected = Template.bind({});
Selected.args = {
  htmlFor: 'price',
  name: 'price',
  valueKey: 'value',
  multiple: false,
  disabled: false,
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  optionsRenderer: OptionsRenderer,
  scrollableClasses: {
    position:
      'sm:flex sm:items-center sm:space-y-0 sm:space-x-1 justify-center',
    maxHeight: 'none',
    border: 'border-0',
    background: 'bg-red-800 py-2 px-6',
    borderRadius: 'rounded-full',
    width: 'w-none',
  },
  defaultSelected: [{ label: 'Buying', value: 'buying' }],
};
