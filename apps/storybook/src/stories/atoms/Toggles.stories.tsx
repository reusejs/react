import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleBase } from '@reusejs/react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export default {
  title: 'Atoms/Toggles',
  component: ToggleBase,
  argTypes: {},
} as ComponentMeta<typeof ToggleBase>;

const Template: ComponentStory<typeof ToggleBase> = (args) => {
  const [value, setValue] = React.useState<boolean>(args.defaultValue || false);
  return (
    <>
      {JSON.stringify(value)}
      <ToggleBase {...args} onChange={() => setValue(!value)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  labelBaseProps: {
    label: 'Verified?',
  },
};

export const TurnedOn = Template.bind({});
TurnedOn.args = {
  defaultValue: true,
  labelBaseProps: {
    label: 'Verified?',
  },
};
