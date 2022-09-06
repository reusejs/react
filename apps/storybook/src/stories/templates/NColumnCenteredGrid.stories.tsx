import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  CenteredGrid,
  IconTitleDescriptionCard,
  CenteredGridBase,
} from '@reusejs/react';

export default {
  title: 'Templates/NColumnCenteredGrid',
  component: CenteredGrid,
  argTypes: {},
} as ComponentMeta<typeof CenteredGrid>;

const Template: ComponentStory<typeof CenteredGrid> = (args) => (
  <CenteredGrid {...args} />
);

const BaseTemplate: ComponentStory<typeof CenteredGridBase> = (args) => (
  <CenteredGridBase {...args} />
);

const SectionTitle = (props) => {
  return (
    <p className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
      {props.title}
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

const SectionContent = [
  <IconTitleDescriptionCard
    title={
      <p className='text-lg font-medium leading-6 text-gray-900'>
        24/7 Chat Support
      </p>
    }
    logo={<Logo />}
    description={
      <p className='mt-2 text-base text-gray-500'>
        Chat support with our friendly customer service agents at your service.
      </p>
    }
    logoWrapperClasses='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600'
  />,
  <IconTitleDescriptionCard
    title={<p className='text-lg font-medium leading-6 text-gray-900'>FAQs</p>}
    logo={<Logo />}
    description={
      <p className='mt-2 text-base text-gray-500'>
        View FAQs for detailed instructions on specific features.
      </p>
    }
    logoWrapperClasses='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600'
  />,
  <IconTitleDescriptionCard
    title={<p className='text-lg font-medium leading-6 text-gray-900'>Blogs</p>}
    logo={<Logo />}
    description={
      <p className='mt-2 text-base text-gray-500'>
        Stay up to date with the latest stories and commentary.
      </p>
    }
    logoWrapperClasses='absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600'
  />,
  // <IconTitleDescriptionCard />,
];

const items = [
  {
    title: '24/7 Chat Support',
    logo: <Logo />,
    description:
      'Chat support with our friendly customer service agents at your service.',
    logoWrapperClasses:
      'absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600',
  },
  {
    title: 'FAQs',
    logo: <Logo />,
    description: 'View FAQs for detailed instructions on specific features.',
    logoWrapperClasses:
      'absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600',
  },
  {
    title: 'Blogs',
    logo: <Logo />,
    description: 'Stay up to date with the latest stories and commentary.',
    logoWrapperClasses:
      'absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600',
  },
];

const ItemRendererComponent = (props?: any) => {
  console.log('props=11223344', props);

  return (
    <>
      {props.items.map((item?: any, index?: number) => {
        return (
          <IconTitleDescriptionCard
            key={index}
            title={
              <p className='text-lg font-medium leading-6 text-gray-900'>
                {item.title}
              </p>
            }
            logo={item.logo}
            description={
              <p className='mt-2 text-base text-gray-500'>{item.description}</p>
            }
            logoWrapperClasses={item.logoWrapperClasses}
          />
        );
      })}
    </>
  );
};

export const Base = BaseTemplate.bind({});
Base.args = {
  items: items,
  itemsRenderer: ItemRendererComponent,
};

export const Default = Template.bind({});
Default.args = {
  sectionHeading: <SectionTitle title='Need help?' />,
  sectionDescription: <SectionDescription />,
  sectionContentData: SectionContent,
  centeredGridBaseClasses: {
    sectionHeadingAlignmentClasses: 'text-right',
  },
};

export const OneItemGrid = Template.bind({});
OneItemGrid.args = {
  sectionHeading: <SectionTitle title='Need help?' />,
  sectionDescription: <SectionDescription />,
  sectionContentData: SectionContent,
  centeredGridBaseClasses: {
    sectionHeadingAlignmentClasses: 'text-right',
  },
};

export const ThreeItemGrid = Template.bind({});
ThreeItemGrid.args = {
  sectionHeading: <SectionTitle title='Need help?' />,
  sectionDescription: <SectionDescription />,
  sectionContentData: SectionContent,
  centeredGridBaseClasses: {
    sectionHeadingAlignmentClasses: 'sm:text-left lg:text-center',
  },
};

export const FourItemGrid = Template.bind({});
FourItemGrid.args = {
  sectionHeading: <SectionTitle title='Need help?' />,
  sectionDescription: <SectionDescription />,
  sectionContentData: SectionContent,
  centeredGridBaseClasses: {
    sectionHeadingAlignmentClasses: 'sm:text-left lg:text-center',
  },
};
