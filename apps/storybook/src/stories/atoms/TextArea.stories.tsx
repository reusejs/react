import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextAreaBase } from '@reusejs/react';

export default {
  title: 'Atoms/Text area',
  component: TextAreaBase,
  argTypes: {},
} as ComponentMeta<typeof TextAreaBase>;

const Template: ComponentStory<typeof TextAreaBase> = (args) => {
  return (
    <TextAreaBase
      {...args}
      onChange={(val: string) => {
        console.log('on change ', val);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter here',
};

export const variant = Template.bind({});
variant.args = {
  placeholder: 'Enter here',
  variant: 'dark',
  rows: 2,
  cols: 30,
  name: 'comment',
  id: 'comment',
};

export const defaultvalue = Template.bind({});
defaultvalue.args = {
  defaultValue:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu Why do we use It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
};

export const withLabel = Template.bind({});
withLabel.args = {
  placeholder: 'Enter Address',
  label: 'Enter Address',
  error: <div className='text-red-800'>Please enter address </div>,
};
