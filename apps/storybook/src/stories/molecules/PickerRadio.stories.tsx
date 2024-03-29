import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PickerRadioSimple } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { TextInputBase } from '@reusejs/react';

const fetchContinents = (q = '') => {
  let continents = [
    'Africa',
    'Antarctica',
    'Asia',
    'Oceania',
    'Europe',
    'North America',
    'South America',
  ];
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

export default {
  title: 'Molecules/Pickers/Radio',
  component: PickerRadioSimple,
  argTypes: {},
} as ComponentMeta<typeof PickerRadioSimple>;

const Template: ComponentStory<typeof PickerRadioSimple> = (args) => {
  const [selected, setSelected] = useState<any>(args.defaultSelected || []);
  return (
    <div className=''>
      <div className='mb-4 bg-gray-50 p-4'>
        <pre>
          <code>{JSON.stringify(selected)}</code>
        </pre>
      </div>
      <div>
        <PickerRadioSimple
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
  labelBaseProps: {
    label: 'Country',
    labelBaseClasses: {
      color: 'text-yellow-800 dark:text-yellow-100',
    },
  },
  name: 'price',
  valueKey: 'value',
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  name: 'price',
  valueKey: 'value',
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
};

export const Selected = Template.bind({});
Selected.args = {
  labelBaseProps: {
    label: 'Country',
    labelBaseClasses: {
      color: 'text-yellow-800 dark:text-yellow-100',
    },
  },
  name: 'price',
  valueKey: 'value',
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  defaultSelected: [{ label: 'Asia', value: 'asia' }],
};

export const Inline = Template.bind({});
Inline.args = {
  labelBaseProps: {
    label: 'Country',
    labelBaseClasses: {
      color: 'text-yellow-800 dark:text-yellow-100',
    },
  },
  name: 'price',
  valueKey: 'value',
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  scrollableBaseProps: {
    scrollableBaseClasses: {
      position:
        'z-50 block space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10',
      maxHeight: '',
      border: 'border-0',
      background: 'bg-white',
      borderRadius: '',
    },
  },
  //Properties to customize radio button refer to theme.radioBoxStyleClasses to override any exiting styling
  radioBoxStyleClasses: {
    focus: 'checked:bg-blue-500',
  },
  radioOptionLabelClasses: {
    color: 'text-blue-800 dark:text-yellow-100',
    alignment: 'ml-3 block',
  },
  defaultSelected: [{ label: 'Asia', value: 'asia' }],
};
