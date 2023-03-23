import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconList } from '@reusejs/react';
import IconListDocs from '../docs/IconList.docs';
import ListIconExample1 from '../assets/ListIconExample1';

export default {
  title: 'Molecules/IconList',
  component: IconList,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        // component: IconListDocs,
      },
    },
  },
} as ComponentMeta<typeof IconList>;

const Template: ComponentStory<typeof IconList> = (args) => (
  <IconList {...args} />
);

const Elements = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  ];

export const Default = Template.bind({});
Default.args = {
  content: Elements,
};

export const CustomIconExamle = Template.bind({});
CustomIconExamle.args = {
  content: Elements,
  customIcon: <ListIconExample1/>,
  iconListBaseClasses: {
    width: "w-1/2"
  }
};

