import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PickerSelectSimple } from '@reusejs/react';
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
  title: 'Molecules/Pickers/Select Multiple',
  component: PickerSelectSimple,
  argTypes: {},
} as ComponentMeta<typeof PickerSelectSimple>;

const Template: ComponentStory<typeof PickerSelectSimple> = (args) => {
  const [selected, setSelected] = React.useState<any>(
    args.defaultSelected || []
  );
  return (
    <div className='flex w-full items-center'>
      <div className='w-1/2'>
        <PickerSelectSimple
          {...args}
          defaultSelected={selected}
          onChange={(v: any) => {
            setSelected(v);
          }}
        />
      </div>
      <div className='ml-4 w-1/2 bg-gray-50 p-4'>
        <pre>
          <code>{JSON.stringify(selected)}</code>
        </pre>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  labelBaseProps: {
    label: 'Country',
  },
  valueKey: 'value',
  multiple: true,
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
};

export const Selected = Template.bind({});
Selected.args = {
  labelBaseProps: {
    label: 'Country',
  },
  valueKey: 'value',
  multiple: true,
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  defaultSelected: [
    { label: 'Europe', value: 'europe' },
    { label: 'Asia', value: 'asia' },
  ],
};
