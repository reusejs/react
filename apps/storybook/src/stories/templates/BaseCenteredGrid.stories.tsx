import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CenteredGridBase } from '@reusejs/react';

export default {
  title: 'Templates/CenteredGridBase',
  component: CenteredGridBase,
  argTypes: {},
} as ComponentMeta<typeof CenteredGridBase>;

const Template: ComponentStory<typeof CenteredGridBase> = (args) => (
  <CenteredGridBase />
);

// let config = [[<PlaceholderComponent label={1} />]];

const config = [['B'], ['C'], ['A', 'B', 'C'], ['D', 'E', 'F']];
// const config = [
//   ['A', 'B', 'C'],
//   ['D', 'E', 'F'],
// ];

export const Default = Template.bind({});
Default.args = {};
