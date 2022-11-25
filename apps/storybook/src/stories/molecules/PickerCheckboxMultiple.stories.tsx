import { PickerCheckboxSimple } from '@reusejs/react';
import { ComponentMeta,ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

const fetchContinents = (q = '') => {
  const continents = [
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
  title: 'Molecules/Pickers/Checkbox Multiple',
  component: PickerCheckboxSimple,
  argTypes: {},
} as ComponentMeta<typeof PickerCheckboxSimple>;

const Template: ComponentStory<typeof PickerCheckboxSimple> = (args) => {
  const [selected, setSelected] = useState<any>(args.defaultSelected || []);
  return (
    <div className=''>
      <div className='mb-4 bg-gray-50 p-4'>
        <pre>
          <code>{JSON.stringify(selected)}</code>
        </pre>
      </div>
      <div>
        <PickerCheckboxSimple
          {...args}
          defaultSelected={selected}
          onChange={(v: any) => {
            setSelected(v);
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
  multiple: true,
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
  multiple: true,
  defaultSelected: [
    { label: 'Europe', value: 'europe' },
    { label: 'Asia', value: 'asia' },
  ],
};

export const ColouredLabels = Template.bind({});
ColouredLabels.args = {
  labelBaseProps: {
    label: 'Country',
    labelBaseClasses: {
      color: 'text-red-500 dark:text-yellow-100',
    },
  },
  name: 'price',
  valueKey: 'value',
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  defaultSelected: [
    { label: 'Europe', value: 'europe' },
    { label: 'Asia', value: 'asia' },
  ],
  multiple: true,
  pickerCheckboxSimpleClasses: {
    optionClasses: {
      labelBaseClasses: {
        color: 'text-blue-500',
        alignment: 'ml-4 block ',
      },
    },
  },
};
