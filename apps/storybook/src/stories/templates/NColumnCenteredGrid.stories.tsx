import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  CenteredGridWithHeading,
  IconTitleDescriptionActionCard,
  CenteredGridBase,
} from '@reusejs/react';

export default {
  title: 'Templates/NColumnCenteredGrid',
  component: CenteredGridWithHeading,
  argTypes: {},
} as ComponentMeta<typeof CenteredGridWithHeading>;

const Template: ComponentStory<typeof CenteredGridWithHeading> = (args) => (
  <CenteredGridWithHeading {...args} />
);

const BaseTemplate: ComponentStory<typeof CenteredGridBase> = (args) => (
  <CenteredGridBase {...args} />
);

const SectionTitle = (props?: any) => {
  return (
    <p className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
      {props.title}
    </p>
  );
};

const SectionDescription = (props?: any) => {
  return (
    <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
      {props.description}
    </p>
  );
};

const Logo = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='2'
      stroke='currentColor'
      aria-hidden='true'
      className='h-6 w-6'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
      ></path>
    </svg>
  );
};

const items = [
  {
    title: '24/7 Chat Support',
    icon: <Logo />,
    description:
      'Chat support with our friendly customer service agents at your service.',
    logoWrapperClasses:
      'absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600',
  },
  {
    title: 'FAQs',
    icon: <Logo />,
    description: 'View FAQs for detailed instructions on specific features.',
    logoWrapperClasses:
      'absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600',
  },
  {
    title: 'Blogs',
    icon: <Logo />,
    description: 'Stay up to date with the latest stories and commentary.',
    logoWrapperClasses:
      'absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600',
  },
];

const ItemRendererComponent = (props?: any) => {
  return (
    <>
      {props.items.map((item?: any, index?: number) => {
        return (
          <IconTitleDescriptionActionCard
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        );
      })}
    </>
  );
};

const HeadingSection = (props?: any) => {
  return (
    <div className={props.headingWrapper}>
      <SectionTitle title={props.heading} />

      <SectionDescription description={props.description} />
    </div>
  );
};

export const Base = BaseTemplate.bind({});
Base.args = {
  items: items,
  itemsRenderer: ItemRendererComponent,
};

export const Default = Template.bind({});
Default.args = {
  headingSection: (
    <HeadingSection
      heading='Need help?'
      description='Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
      headingWrapper='text-center'
    />
  ),
  sectionContentData: items,
  itemsRenderer: ItemRendererComponent,
};

export const OneItemGrid = Template.bind({});
OneItemGrid.args = {
  headingSection: (
    <HeadingSection
      heading='Need help?'
      description='Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
      headingWrapper='text-center'
    />
  ),
  sectionContentData: items,
  centeredGridBaseClasses: {
    gridClasses:
      'space-y-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 md:space-y-0',
  },
  itemsRenderer: ItemRendererComponent,
};

export const ThreeItemGrid = Template.bind({});
ThreeItemGrid.args = {
  headingSection: (
    <HeadingSection
      heading='Need help?'
      description='Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
      headingWrapper='text-center'
    />
  ),
  sectionContentData: items,
  centeredGridBaseClasses: {
    gridClasses:
      'space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0',
  },
  itemsRenderer: ItemRendererComponent,
};

export const FourItemGrid = Template.bind({});
FourItemGrid.args = {
  headingSection: (
    <HeadingSection
      heading='Need help?'
      description='Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
      headingWrapper='text-center'
    />
  ),
  sectionContentData: items,
  centeredGridBaseClasses: {
    gridClasses:
      'space-y-10 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10 md:space-y-0',
  },
  itemsRenderer: ItemRendererComponent,
};
