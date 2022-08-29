import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataTableBase, LabelBase } from '@reusejs/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/solid';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/solid';

export default {
  title: 'Molecules/DataTableBase',
  component: DataTableBase,
  argTypes: {},
} as ComponentMeta<typeof DataTableBase>;

const fetchPackages = async (params: any) => {
  console.log('filters', params.filters);

  return new Promise(async (resolve, reject) => {
    try {
      let response: any = await fetch(
        `https://api.npms.io/v2/search?q=${params.filters.name}&size=${
          params.per_page
        }&from=${(params.page - 1) * params.per_page}`
      );

      response = await response.json();

      let packages = response?.results?.map((p: any) => {
        p['id'] = p.package['links']['npm'];
        return p;
      });

      response['results'] = packages;

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const Template: ComponentStory<typeof DataTableBase> = (args) => (
  <DataTableBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sortColumn: 0,
  perPage: 5,
  config: {
    filterable: true,
    columns: [
      {
        label: 'Package Name',
        identifier: 'name',
        resolver: (d: any) => {
          return d.package.name;
        },
        sortable: false,
        filterable: {
          type: 'text',
        },
      },
      {
        label: 'Publisher',
        identifier: 'publisher',
        resolver: (d: any) => {
          return d.package.publisher.username;
        },
        sortable: false,
        filterable: {
          type: 'radio',
          options: [
            { label: 'Email', value: 'email' },
            { label: 'SMS', value: 'sms' },
            { label: 'Firebase', value: 'firebase' },
            { label: 'JSON', value: 'json' },
            { label: 'Partial', value: 'partial' },
          ],
          selected: [],
        },
      },
      {
        label: 'Version',
        identifier: 'last_used_human',
        resolver: (d: any) => {
          return d.package.version;
        },
        sortable: false,
      },
      {
        label: '',
        filterable: {
          type: 'clear',
        },
        resolver: (d: any) => {
          return (
            <div className='text-right text-sm font-medium'>
              <ArrowRightIcon
                className='h-4 w-4 font-semibold text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-500'
                aria-hidden='true'
              />
            </div>
          );
        },
      },
    ],
  },
  dataSource: async (params: any) => {
    let response: any = await fetchPackages(params);
    return {
      data: response.results,
      pagination: {
        total: response.total,
      },
    };
  },
};
