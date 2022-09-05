import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TwoColumnGridExampleOne } from '@reusejs/react';

export default {
  title: 'Templates/TwoColumnGridExampleOne',
  component: TwoColumnGridExampleOne,
  argTypes: {},
} as ComponentMeta<typeof TwoColumnGridExampleOne>;

const Template: ComponentStory<typeof TwoColumnGridExampleOne> = (args) => (
  <TwoColumnGridExampleOne />
);

// let config = [[<PlaceholderComponent label={1} />]];

const config = [['B'], ['C'], ['A', 'B', 'C'], ['D', 'E', 'F']];
// const config = [
//   ['A', 'B', 'C'],
//   ['D', 'E', 'F'],
// ];

export const Default = Template.bind({});
Default.args = {};
