import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  SectionsExampleOne,
  SectionsExampleTwo,
  SectionsExampleThree,
  IconTitleDescriptionCard,
  CenteredGridBase,
} from '@reusejs/react';

export default {
  title: 'Templates/SectionExamples',
  component: SectionsExampleOne,
  argTypes: {},
} as ComponentMeta<typeof SectionsExampleOne>;

const ExampleOneTemplate: ComponentStory<typeof SectionsExampleOne> = (
  args
) => <SectionsExampleOne {...args} />;

const ExampleTwoTemplate: ComponentStory<typeof CenteredGridBase> = (args) => (
  <SectionsExampleTwo {...args} />
);

const ExampleThreeTemplate: ComponentStory<typeof CenteredGridBase> = (
  args
) => <SectionsExampleThree {...args} />;

export const ExampleOne = ExampleOneTemplate.bind({});
ExampleOne.args = {};

export const ExampleTwo = ExampleTwoTemplate.bind({});
ExampleOne.args = {};

export const ExampleThree = ExampleThreeTemplate.bind({});
ExampleThree.args = {};
