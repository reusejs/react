import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccordionBase, LabelBase } from '@reusejs/react';

export default {
  title: 'Molecules/Accordion/Default',
  component: AccordionBase,
  argTypes: {},
} as ComponentMeta<typeof AccordionBase>;

const Template: ComponentStory<typeof AccordionBase> = (args) => (
  <AccordionBase {...args} />
);

const ExpandedText = (props: any) => {
  return <div>{props.text}</div>;
};

export const Default = Template.bind({});
Default.args = {
  labelBaseProps: {
    label: 'Accordion',
  },
  content: ExpandedText,
  contentProps: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
};

export const Variant = Template.bind({});
Variant.args = {
  labelBaseProps: {
    label: 'Accordion',
    variant: 'dark',
  },
  content: ExpandedText,
  contentProps: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  accordionSuffix: <LabelBase label='Suffix Text' />,
  variant: 'dark',
};
