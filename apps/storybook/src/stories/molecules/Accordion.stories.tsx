import { AccordionBase, LabelBase } from '@reusejs/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Plus from '../assets/Plus';
import Minus from '../assets/Minus';

export default {
  title: 'Molecules/Accordion/Default',
  component: AccordionBase,
  argTypes: {},
} as ComponentMeta<typeof AccordionBase>;

const Template: ComponentStory<typeof AccordionBase> = (args) => {
  return <AccordionBase {...args} />;
};

const ExpandedText = (props: { text: React.ReactNode }) => {
  return <div>{props.text}</div>;
};

export const Default = Template.bind({});
Default.args = {
  animationDuration: 0.2,
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

export const Example2 = Template.bind({});
Example2.args = {
  labelBaseProps: {
    label: 'Accordion',
  },
  content: ExpandedText,
  contentProps: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  accordionBaseClasses: {
    wrapper:
      'border-b rounded-md px-3 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 mb-3',
  },
};

const Template2: ComponentStory<typeof AccordionBase> = (args) => {
  const one = <Minus />;
  const two = <Plus />;
  const [opened, setOpened] = useState(false);
  const suffix = opened ? one : two;
  return (
    <AccordionBase
      {...args}
      onClick={(status) => {
        setOpened(status);
      }}
      accordionSuffix={suffix}
    />
  );
};

export const Example3 = Template2.bind({});
Example3.args = {
  labelBaseProps: {
    label: 'Accordion',
  },
  content: ExpandedText,
  contentProps: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  accordionBaseClasses: {
    wrapper:
      'border-b rounded-md px-3 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 mb-3',
  },
};
