import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PickerRadioBase, LabelBase, TextInputBase } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const fetchContinents = (q = '') => {
  let continents = ['Buying', 'Selling'];
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
        textInputBaseClasses={{
          wrapper: 'hidden',
        }}
      />
      <LabelBase
        htmlFor={value.value}
        label={value.label}
        labelBaseClasses={{
          alignment: `cursor-pointer w-full text-center py-2`,
          font: 'text-base font-medium',
          color: `${
            found === true
              ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold'
              : 'text-white bg-gray-800'
          }`,
        }}
      />
    </div>
  );
};

export default {
  title: 'Molecules/Pickers/Radio Buttons/Squared',
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
  name: 'price',
  valueKey: 'value',
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  optionsRenderer: OptionsRenderer,
  scrollableBaseProps: {
    scrollableBaseClasses: {
      position: 'grid grid-cols-2 gap-0',
      maxHeight: 'none',
      border: 'border-0',
      background: 'bg-transparent',
      borderRadius: '',
      width: 'w-none',
    },
  },
};

export const Selected = Template.bind({});
Selected.args = {
  name: 'price',
  valueKey: 'value',
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  optionsRenderer: OptionsRenderer,
  scrollableBaseProps: {
    scrollableBaseClasses: {
      position: 'grid grid-cols-2 gap-0',
      maxHeight: 'none',
      border: 'border-2 border-blue-400',
      background: 'bg-transparent',
      borderRadius: 'rounded-none',
      width: 'w-none',
    },
  },
  defaultSelected: [{ label: 'Buying', value: 'buying' }],
};
