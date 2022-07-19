import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PickerRadioAnimated, LabelBase, TextInputBase } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const fetchContinents = (q = '') => {
  const options = ['Buying', 'Selling', 'Bidding', "Marketing", "Swiming", "Running", "Dancing"];
  let newOptions = options.map((c) => {
    return {
      value: c.toLowerCase(),
      label: c,
    };
  });

  if (q != '') {
    newOptions = newOptions.filter((c) => {
      if (c.value.search(q.toLocaleLowerCase()) > -1) {
        return c;
      }
    });
  }
  return newOptions;
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
    const localFound = selected.some(
      (current: any) => current.value === value.value
    );
    setFound(localFound === false ? false : true);
  }, [selected]);

  // console.log('selected', selected, "|||", value,"|||", name);

  return (
    <div className='flex items-center'>
      <LabelBase
        htmlFor={value.value}
        label={value.label}
        labelBaseClasses={{
          alignment: `px-4 py-1 w-32  rounded-full cursor-pointer`,
          font: 'text-base font-medium',
          color: `${
            found === true
              ? 'text-amber-600 font-bold transition-all'
              : 'text-white transition-all'
          }`,
        }}
      />
    </div>
  );
};

const fetchContinents1 = (q = '') => {
    const options = ['Buying', 'Selling', 'Bidding', "Marketing"];
    let newOptions = options.map((c) => {
      return {
        value: c.toLowerCase(),
        label: c,
      };
    });
  
    if (q != '') {
      newOptions = newOptions.filter((c) => {
        if (c.value.search(q.toLocaleLowerCase()) > -1) {
          return c;
        }
      });
    }
    return newOptions;
  };

const OptionsRenderer1 = ({
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
      const localFound = selected.some(
        (current: any) => current.value === value.value
      );
      setFound(localFound === false ? false : true);
    }, [selected]);
  
    // console.log('selected', selected, "|||", value,"|||", name);
  
    return (
      <div className='flex items-center'>
        <LabelBase
          htmlFor={value.value}
          label={value.label}
          labelBaseClasses={{
            alignment: `px-4 py-1 w-32  rounded-full cursor-pointer`,
            font: 'text-base font-medium',
            color: `${
              found === true
                ? 'text-green-600 font-bold transition-all'
                : 'text-white transition-all'
            }`,
          }}
        />
      </div>
    );
  };

export default {
  title: 'Molecules/Pickers/Radio Buttons/Animated',
  component: PickerRadioAnimated,
  argTypes: {},
} as ComponentMeta<typeof PickerRadioAnimated>;

const Template: ComponentStory<typeof PickerRadioAnimated> = (args) => {
  const [selected, setSelected] = useState<any>(args.defaultSelected || []);
  return (
    <div className='w-fit'>
      <div className='mb-4 bg-gray-50 p-4'>
        <pre>
          <code>{JSON.stringify(selected)}</code>
        </pre>
      </div>
      <div>
        <PickerRadioAnimated
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
  selectorColor: "bg-blue-700",
  dataSource: (q: any) => {
    return fetchContinents(q);
  },
  optionsRenderer: OptionsRenderer,
  scrollableBaseProps: {
    scrollableBaseClasses: {
      position:
        'sm:flex sm:items-center sm:space-y-0 sm:space-x-1 justify-center',
      maxHeight: 'none',
      border: 'border-0',
      background: 'bg-gray-800 py-2 px-6',
      borderRadius: 'rounded-full',
      width: 'w-none',
    },
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
  selectorColor: "bg-red-400",
  valueKey: 'value',
  dataSource: (q: any) => {
    return fetchContinents1(q);
  },
  optionsRenderer: OptionsRenderer1,
  scrollableBaseProps: {
    scrollableBaseClasses: {
      position:
        'sm:flex sm:items-center sm:space-y-0 sm:space-x-1 justify-center',
      maxHeight: 'none',
      border: 'border-0',
      background: 'bg-red-800 py-2 px-6',
      borderRadius: 'rounded-full',
      width: 'w-none',
    },
  },
  defaultSelected: [{ label: 'Buying', value: 'buying' }],
};
