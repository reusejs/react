import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PickerSelectSimple } from '@reusejs/react';
// import { CheckIcon, XIcon } from '@heroicons/react/solid';
// import { TextInputBase } from '@reusejs/react';

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
  title: 'Molecules/Pickers/Select Single',
  component: PickerSelectSimple,
  argTypes: {},
} as ComponentMeta<typeof PickerSelectSimple>;

const Template: ComponentStory<typeof PickerSelectSimple> = (args) => {
  const [selected, setSelected] = useState<any>(args.defaultSelected || []);
  return (
    <div className='flex w-full items-center'>
      <div className='w-1/2'>
        <PickerSelectSimple
          {...args}
          defaultSelected={selected}
          onChange={(v: any) => {
            setSelected([v]);
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
  defaultString: 'Some text is here',
  labelBaseProps: {
    label: 'Country',
    labelBaseClasses: {
      color: 'text-yellow-800 dark:text-yellow-100',
    },
  },
  valueKey: 'value',
  multiple: false,
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
};

export const Variant = Template.bind({});
Variant.args = {
  defaultString: 'List of codes',
  variant: 'dark',
  enableSearch: true,
  labelBaseProps: {
    label: 'Country',
    labelBaseClasses: {
      color: 'text-yellow-800 dark:text-yellow-100',
    },
  },
  valueKey: 'value',
  multiple: false,
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
};

export const EnableClearAndClose = Template.bind({});
EnableClearAndClose.args = {
  labelBaseProps: {
    label: 'Country',
  },
  valueKey: 'value',
  multiple: false,
  enableClear: true,
  enableClose: true,
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
};

export const DisableSearch = Template.bind({});
DisableSearch.args = {
  labelBaseProps: {
    label: 'Country',
    labelBaseClasses: {
      color: 'text-yellow-800 dark:text-yellow-100',
    },
  },
  valueKey: 'value',
  multiple: false,
  enableSearch: false,
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
  multiple: false,
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  enableClear: true,
  enableClose: true,
  defaultSelected: [{ label: 'Asia', value: 'asia' }],
};

export const Taller = Template.bind({});
Taller.args = {
  labelBaseProps: {
    label: 'Country',
  },
  valueKey: 'value',
  multiple: false,
  scrollableBaseProps: {
    scrollableBaseClasses: {
      position: 'z-50 block overflow-auto absolute',
      maxHeight: 'max-h-64',
    },
  },
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
};
