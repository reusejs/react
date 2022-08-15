import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CollapsibleAccordion, LabelBase } from '@reusejs/react';

export default {
  title: 'Molecules/Accordion/Collapsible',
  component: CollapsibleAccordion,
  argTypes: {},
} as ComponentMeta<typeof CollapsibleAccordion>;

const Template: ComponentStory<typeof CollapsibleAccordion> = (args) => (
  <CollapsibleAccordion {...args} />
);

const ExpandedText = (props: any) => {
  return <div>{props.text}</div>;
};

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const Default = Template.bind({});
Default.args = {
  accordionList: [
    {
      labelBaseProps: {
        label: 'Accordion 1',
      },
      content: ExpandedText,
      contentProps: {
        text: text,
      },
    },
    {
      labelBaseProps: {
        label: 'Accordion 2',
      },
      content: ExpandedText,
      contentProps: {
        text: text,
      },
    },
    {
      labelBaseProps: {
        label: 'Accordion 3',
      },
      content: ExpandedText,
      contentProps: {
        text: text,
      },
    },
  ],
};

export const Variant = Template.bind({});
Variant.args = {
  accordionList: [
    {
      labelBaseProps: {
        label: 'Accordion 1',
      },
      content: ExpandedText,
      contentProps: {
        text: text,
      },
      variant: 'dark',
    },
    {
      labelBaseProps: {
        label: 'Accordion 2',
      },
      content: ExpandedText,
      contentProps: {
        text: text,
      },
      variant: 'dark',
    },
    {
      labelBaseProps: {
        label: 'Accordion 3',
      },
      content: ExpandedText,
      contentProps: {
        text: text,
      },
      variant: 'dark',
      accordionSuffix: <LabelBase label='Suffix Text' />,
    },
  ],
};
