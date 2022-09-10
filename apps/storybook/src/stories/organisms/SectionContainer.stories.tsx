import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SectionContainerBase } from '@reusejs/react';

export default {
  title: 'Organisms/SectionContainer',
  component: SectionContainerBase,
  argTypes: {},
} as ComponentMeta<typeof SectionContainerBase>;

const Template: ComponentStory<typeof SectionContainerBase> = (args) => (
  <SectionContainerBase {...args}>
    <div>Hello World</div>
  </SectionContainerBase>
);

export const Default = Template.bind({});
Default.args = {};
Default.args = {
  sectionContainerBaseClasses: {
    outerContainerStyles: 'py-10 bg-yellow-500',
    innerContainerStyles: 'max-w-7xl mx-auto bg-green-500',
  },
};
