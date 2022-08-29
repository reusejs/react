import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataTableBase, LabelBase } from '@reusejs/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/solid';

export default {
  title: 'Molecules/DataTableBase',
  component: DataTableBase,
  argTypes: {},
} as ComponentMeta<typeof DataTableBase>;

const fetchPackages = async (params: any) => {
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
