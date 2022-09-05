import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AutoGridSectionBase } from '@reusejs/react';

export default {
  title: 'Organisms/AutoGridSection',
  component: AutoGridSectionBase,
  argTypes: {},
} as ComponentMeta<typeof AutoGridSectionBase>;

const Template: ComponentStory<typeof AutoGridSectionBase> = (args) => (
  <AutoGridSectionBase {...args} />
);

const Elj = () => {
  return <div>Item</div>;
};

const PlaceholderComponent = ({ label }) => {
  return <div>{label}</div>;
};
// let config = [[<PlaceholderComponent label={1} />]];

const config = [['B'], ['C'], ['A', 'B', 'C'], ['D', 'E', 'F']];
// const config = [
//   ['A', 'B', 'C'],
//   ['D', 'E', 'F'],
// ];

export const Default = Template.bind({});
Default.args = {
  gridConfig: config,
  gridEl: Elj,
};
