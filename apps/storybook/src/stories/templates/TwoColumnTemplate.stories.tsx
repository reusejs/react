import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CenteredGrid, LogoDescriptionCard } from '@reusejs/react';

export default {
  title: 'Templates/CenteredGrid',
  component: CenteredGrid,
  argTypes: {},
} as ComponentMeta<typeof CenteredGrid>;

const Template: ComponentStory<typeof CenteredGrid> = (args) => (
  <CenteredGrid {...args} />
);

const SectionTitle = () => {
  return (
    <p className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
      A better way to send money
    </p>
  );
};

const SectionDescription = () => {
  return (
    <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
      Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
      voluptatum cupiditate veritatis in accusamus quisquam.
    </p>
  );
};

const SectionContent = [
  <LogoDescriptionCard />,
  <LogoDescriptionCard />,
  <LogoDescriptionCard />,
  <LogoDescriptionCard />,
];

export const Default = Template.bind({});
Default.args = {
  sectionHeading: <SectionTitle />,
  sectionDescription: <SectionDescription />,
  sectionContentData: SectionContent,
};

export const ThreeItemGrid = Template.bind({});
ThreeItemGrid.args = {
  sectionHeading: <SectionTitle />,
  sectionDescription: <SectionDescription />,
  sectionContentData: SectionContent,
  gridColumnClasses:
    'space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0',
};

export const FourItemGrid = Template.bind({});
FourItemGrid.args = {
  sectionHeading: <SectionTitle />,
  sectionDescription: <SectionDescription />,
  sectionContentData: SectionContent,
  gridColumnClasses:
    'space-y-10 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10 md:space-y-0',
};

export const OneItemGrid = Template.bind({});
OneItemGrid.args = {
  sectionHeading: <SectionTitle />,
  sectionDescription: <SectionDescription />,
  sectionContentData: SectionContent,
  gridColumnClasses:
    'space-y-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 md:space-y-0',
};
