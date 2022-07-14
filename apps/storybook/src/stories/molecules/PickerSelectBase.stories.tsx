import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PickerSelectBase } from '@reusejs/react';
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

const SelectedDataRenderer = (props: any) => {
  const [text, setText] = React.useState<string>('None Selected');

  React.useEffect(() => {
    if (props.selected.length > 0) {
      let tempText = props.selected.map((val: any) => val.label).join('; ');
      setText(tempText);
    } else {
      setText('None Selected');
    }
  }, [props.selected]);

  return (
    <div className='relative block w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:text-white sm:text-sm'>
      {text}
    </div>
  );
};

const CloseComponent = () => {
  return <span className='text-sm font-medium'>Close</span>;
};

const ClearComponent = () => {
  return <span className='text-sm font-medium'>Clear</span>;
};

const SearchRenderer = ({
  query,
  onSearch,
  cancelSearch,
}: {
  query: any;
  onSearch: any;
  cancelSearch: any;
}) => {
  return (
    <div>
      <TextInputBase
        autoComplete='off'
        label=''
        htmlFor=''
        name='country'
        type='text'
        value={query}
        placeholder='Type someting...'
        onChange={(e) => {
          onSearch(e);
        }}
        textInputClasses={{
          wrapper: 'relative mt-0 rounded-md shadow-sm',
        }}
      />

      <span
        className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2'
        onClick={() => {
          cancelSearch();
        }}
      >
        <XIcon className='h-5 w-5 text-gray-400' />
      </span>
    </div>
  );
};

const OptionsRenderer = ({
  value,
  selected,
}: {
  value: any;
  selected: any;
}) => {
  const [found, setFound] = React.useState<boolean>(false);

  React.useEffect(() => {
    let localFound = selected.some(
      (current: any) => current.value === value.value
    );
    setFound(localFound === false ? false : true);
  }, [selected]);

  return (
    <div className='relative flex cursor-pointer flex-row items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700'>
      <span className='flex flex-row items-center'>
        {value.avatar && (
          <img className='mr-2 h-4' src={value.avatar} alt={value.label} />
        )}
        <span className='text-sm text-gray-900 dark:text-gray-200'>
          {value.label}
        </span>
      </span>
      {found === true && (
        <span className='absolute inset-y-0 right-0 flex items-center pr-4'>
          <CheckIcon className='h-5 w-5 text-gray-900 dark:text-white' />
        </span>
      )}
    </div>
  );
};

export default {
  title: 'Molecules/Pickers/Select',
  component: PickerSelectBase,
  argTypes: {},
} as ComponentMeta<typeof PickerSelectBase>;

const Template: ComponentStory<typeof PickerSelectBase> = (args) => (
  <PickerSelectBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Email Address',
  dataSource: (q) => {
    return fetchContinents(q);
  },
  onChange: (v) => {
    console.log(v);
  },
  scrollableClasses: {
    position: 'z-50 block overflow-auto absolute',
    maxHeight: 'max-h-64',
  },
  selectedDataRenderer: SelectedDataRenderer,
  searchRenderer: SearchRenderer,
  optionsRenderer: OptionsRenderer,
  clearComponent: ClearComponent,
  closeComponent: CloseComponent,
};

export const Variant = Template.bind({});
Variant.args = {
  label: 'Email Address',
  htmlFor: 'email',
  variant: 'primary',
};
