import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextAreaBase } from '@reusejs/react';

export default {
  title: 'Atoms/Text area',
  component: TextAreaBase,
  argTypes: {},
} as ComponentMeta<typeof TextAreaBase>;

const ErrorText = () => (
  <p className='mt-2 text-sm text-red-500'>This field is required</p>
);

const Template: ComponentStory<typeof TextAreaBase> = (args) => {
  const [value, setValue] = React.useState<string>(args.value ? args.value : "")
  return (
    <TextAreaBase
      {...args}
      value={value}
      onChange={(val: string) => {
        console.log('on change ', val);
        setValue(val);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter here',
  labelBaseProps: {
    label: 'Description',
    htmlFor: 'description',
  },
  name: 'description',
  id: 'description',
};

export const Variant = Template.bind({});
Variant.args = {
  placeholder: 'Enter here',
  labelBaseProps: {
    label: 'Description',
  },
  variant: 'dark',
  rows: 2,
  cols: 30,
  name: 'comment',
  id: 'comment',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  value:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu Why do we use It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  labelBaseProps: {
    label: 'Description',
  },
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  placeholder: 'Enter Address',
  error: <ErrorText />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu Why do we use It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  labelBaseProps: {
    label: 'Description',
  },
};